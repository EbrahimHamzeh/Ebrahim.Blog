using System;
using System.IO;
using System.Text;
using System.Text.Json;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.Common.MVCCoreToolkit;
using Ebrahim.Blog.DomainClasses.Logger;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Primitives;

namespace Ebrahim.Blog.Services.Logger
{
    public class DbLogger : ILogger
    {
        private readonly string _loggerName;
        private readonly IServiceProvider _serviceProvider;
        private readonly DbLoggerProvider _loggerProvider;
        private readonly IOptions<SiteSettings> _siteSettings;
        private readonly LogLevel _minLevel;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public DbLogger(
            DbLoggerProvider loggerProvider,
            IServiceProvider serviceProvider,
            string loggerName,
            IOptions<SiteSettings> siteSettings,
            IHttpContextAccessor httpContextAccessor)
        {
            _loggerName = loggerName;

            _siteSettings = siteSettings;
            _siteSettings.CheckArgumentIsNull(nameof(_siteSettings));

            _minLevel = _siteSettings.Value.Logging.LogLevel.Default;

            _loggerProvider = loggerProvider;
            _loggerProvider.CheckArgumentIsNull(nameof(_loggerProvider));

            _serviceProvider = serviceProvider;
            _serviceProvider.CheckArgumentIsNull(nameof(_serviceProvider));

            _httpContextAccessor = httpContextAccessor;
            _httpContextAccessor.CheckArgumentIsNull(nameof(_httpContextAccessor));
        }

        public IDisposable BeginScope<TState>(TState state)
        {
            return new NoopDisposable();
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return logLevel >= _minLevel;
        }

        public void Log<TState>(
            LogLevel logLevel,
            EventId eventId,
            TState state,
            Exception exception,
            Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }

            if (formatter == null)
            {
                throw new ArgumentNullException(nameof(formatter));
            }

            var message = formatter(state, exception);
            var headerBuilder = string.Empty;
            if (exception != null)
            {
                message = $"{message}{Environment.NewLine}{exception}";
            }

            if (string.IsNullOrEmpty(message))
            {
                return;
            }

            var httpContext = _httpContextAccessor?.HttpContext;
            string body = string.Empty, ip = string.Empty, url = string.Empty;
            if (httpContext != null)
            {
                headerBuilder = httpContext?.Request?.Headers.GetHeaderString();
                body = httpContext.Request.GetBodyString();
                url = httpContext?.Request?.FullAdress();
            }

            var logItem = new LogItem
            {
                Url = url,
                EventId = eventId.Id,
                LogLevel = logLevel.ToString(),
                Logger = _loggerName,
                Message = message,
                RequestHeader = headerBuilder?.ToString(),
                RequestMethod = httpContext?.Request?.Method,
                RequestBody = body,
                CreatedByIp = _httpContextAccessor?.HttpContext?.Connection?.RemoteIpAddress?.ToString(),
                CreatedByBrowserName = _httpContextAccessor?.HttpContext?.Request?.Headers["User-Agent"].ToString(),
                // CreatedByUserId TODO: هنوز کاری برای کاربران نکردیم
            };
            setStateJson(state, logItem);
            _loggerProvider.AddLogItem(logItem);
        }

        private static void setStateJson<TState>(TState state, LogItem logItem)
        {
            try
            {
                logItem.StateJson = JsonSerializer.Serialize(state,
                    new JsonSerializerOptions
                    {
                        IgnoreNullValues = true,
                        WriteIndented = true
                    });
            }
            catch
            {
                // don't throw exceptions from logger
            }
        }

        private class NoopDisposable : IDisposable
        {
            public void Dispose()
            {
            }
        }
    }
}
