using System;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.Common.BackgroundService
{
    public static class HostedServicesExtensions
    {
        public static IServiceCollection AddBackgroundHostedService(this IServiceCollection services)
        {
            services.AddSingleton<IBackgroundTaskQueue, BackgroundTaskQueue>();
            services.AddHostedService<QueuedHostedService>();
            return services;
        }
    }
}
