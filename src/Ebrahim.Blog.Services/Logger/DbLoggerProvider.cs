using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Ebrahim.Blog.DataLayer.Context;
using Ebrahim.Blog.DomainClasses.Logger;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Ebrahim.Blog.Services.Logger
{
    public class DbLoggerProvider : ILoggerProvider
    {
        private readonly TimeSpan _interval = TimeSpan.FromSeconds(2);
        private readonly IServiceProvider _serviceProvider;
        private readonly IList<LogItem> _currentBatch = new List<LogItem>();
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly BlockingCollection<LogItem> _messageQueue = new BlockingCollection<LogItem>(new ConcurrentQueue<LogItem>());

        private readonly Task _outputTask;
        private readonly CancellationTokenSource _cancellationTokenSource = new CancellationTokenSource();
        private readonly IOptions<SiteSettings> _siteSettings;

        public DbLoggerProvider(IOptions<SiteSettings> siteSettings, IServiceProvider serviceProvider, IHttpContextAccessor httpContextAccessor)
        {
            _serviceProvider = serviceProvider ?? throw new ArgumentNullException(nameof(_serviceProvider));
            _siteSettings = siteSettings ?? throw new ArgumentNullException(nameof(_siteSettings));
            _httpContextAccessor = httpContextAccessor ?? throw new ArgumentNullException(nameof(_httpContextAccessor));
            _outputTask = Task.Run(processLogQueue);
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new DbLogger(this, _serviceProvider, categoryName, _siteSettings, _httpContextAccessor);
        }

        public void Dispose()
        {
            stop();
            _messageQueue.Dispose();
            _cancellationTokenSource.Dispose();
        }

        internal void AddLogItem(LogItem logItem)
        {
            if (!_messageQueue.IsAddingCompleted)
            {
                _messageQueue.Add(logItem, _cancellationTokenSource.Token);
            }
        }

        private async Task processLogQueue()
        {
            while (!_cancellationTokenSource.IsCancellationRequested)
            {
                while (_messageQueue.TryTake(out var message))
                {
                    try
                    {
                        _currentBatch.Add(message);
                    }
                    catch
                    {
                        //cancellation token canceled or CompleteAdding called
                    }
                }

                await saveLogItemsAsync(_currentBatch, _cancellationTokenSource.Token);
                _currentBatch.Clear();

                await Task.Delay(_interval, _cancellationTokenSource.Token);
            }
        }

        private async Task saveLogItemsAsync(IList<LogItem> appLogItems, CancellationToken cancellationToken)
        {
            try
            {
                if (!appLogItems.Any())
                {
                    return;
                }

                // We need a separate context for the logger to call its SaveChanges several times,
                // without using the current request's context and changing its internal state.
                using (var scope = _serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    using (var context = scope.ServiceProvider.GetRequiredService<IUnitOfWork>())
                    {
                        await context.Set<LogItem>().AddRangeAsync(appLogItems, cancellationToken);
                        await context.SaveChangesAsync(cancellationToken);
                    }
                }
            }
            catch
            {
                // don't throw exceptions from logger
            }
        }

        private void stop()
        {
            _cancellationTokenSource.Cancel();
            _messageQueue.CompleteAdding();

            try
            {
                _outputTask.Wait(_interval);
            }
            catch (TaskCanceledException)
            {
            }
            catch (AggregateException ex) when (ex.InnerExceptions.Count == 1 &&
                                                ex.InnerExceptions[0] is TaskCanceledException)
            {
            }
        }
    }
}
