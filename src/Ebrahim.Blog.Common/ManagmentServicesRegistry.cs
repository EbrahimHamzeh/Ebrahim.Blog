using System;
using Ebrahim.Blog.Common.BackgroundService;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.Common
{
    public static class ManagmentServicesRegistry
    {
        public static void AddCommonServices(this IServiceCollection services)
        {
            services.AddBackgroundHostedService();
        }
    }
}
