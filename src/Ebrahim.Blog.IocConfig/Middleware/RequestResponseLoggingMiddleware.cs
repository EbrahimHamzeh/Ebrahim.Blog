using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.Services.Logger;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.DependencyInjection;
using Ebrahim.Blog.DomainClasses.Logger;
using Ebrahim.Blog.Common.BackgroundService;
using System.Threading;
using Microsoft.Extensions.Logging;
using Ebrahim.Blog.Common.MVCCoreToolkit;

namespace Ebrahim.Blog.IocConfig.Middleware
{
    public class RequestResponseLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IOptions<SiteSettings> _siteSettings;
        private readonly IBackgroundTaskQueue _backgroundTaskQueue;
        private readonly ILogger<RequestResponseLoggingMiddleware> _logger;
        private const string RequestSignature = "request-signature";

        public RequestResponseLoggingMiddleware(RequestDelegate next, IOptions<SiteSettings> siteSettings, IBackgroundTaskQueue backgroundTaskQueue, ILogger<RequestResponseLoggingMiddleware> logger)
        {
            _next = next;
            _next.CheckArgumentIsNull(nameof(_next));

            _siteSettings = siteSettings;
            _siteSettings.CheckArgumentIsNull(nameof(_siteSettings));

            _backgroundTaskQueue = backgroundTaskQueue;
            _backgroundTaskQueue.CheckArgumentIsNull(nameof(_backgroundTaskQueue));

            _logger = logger;
            _logger.CheckArgumentIsNull(nameof(_logger));
        }

        public async Task Invoke(HttpContext context)
        {
            if (_siteSettings.Value.IsMonitorAllRequestAndResponse)
            {
                Guid requestSignatureGuid = Guid.NewGuid();
                context?.Request?.Headers?.Add(RequestSignature, requestSignatureGuid.ToString());
                var requestDate = DateTimeOffset.Now;
                var originalBodyStream = context?.Response?.Body;
                var requestHeaderBuilder = context?.Request?.Headers.GetHeaderString();
                using (var responseBody = new MemoryStream())
                {
                    context.Response.Body = responseBody;
                    await _next(context);
                    context?.Response?.Headers?.Add(RequestSignature, requestSignatureGuid.ToString());
                    var responseHeaderBuilder = context?.Response?.Headers.GetHeaderString();
                    var formatResponseBody = context?.Response.GetResponseBodyString();
                    var address = context?.Request?.FullAdress();;
                    var method = context?.Request?.Method;
                    var statusCode = context?.Response?.StatusCode;
                    var ip = context?.Connection?.RemoteIpAddress?.ToString();
                    var browserName = context?.Request?.Headers["User-Agent"].ToString();
                    var formatRequestBody = context?.Request.GetBodyString();
                    // run in background
                    _backgroundTaskQueue.QueueBackgroundWorkItem(async (CancellationToken cancellationToken, IServiceProvider serviceProvider) =>
                    {
                        _logger.LogInformation($"httpRequest Profiler run in background in {DateTime.Now}");
                        var requestProfiler = serviceProvider.GetRequiredService<IRequestProfilerService>();
                        await requestProfiler.AddAsync(new RequestProfiler
                        {
                            Address = address,
                            RequestBody = formatRequestBody,
                            RequestDate = requestDate,
                            ResponseDate = DateTimeOffset.Now,
                            ResponseBody = formatResponseBody,
                            Guid = requestSignatureGuid,
                            RequestHeader = requestHeaderBuilder.ToString(),
                            RequestMethod = method,
                            ResponseHeader = responseHeaderBuilder.ToString(),
                            ResponsStatus = statusCode ?? 0,
                            CreatedByIp = ip,
                            CreatedByBrowserName = browserName,
                            CreatedByUserId = null // TODO: add Aurhentication
                        });
                    });

                    await responseBody.CopyToAsync(originalBodyStream);
                }
            }
            else
            {
                await _next(context);
            }

        }
    }
}
