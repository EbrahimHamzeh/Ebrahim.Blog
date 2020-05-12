using System;
using Ebrahim.Blog.Common.BackgroundService;
using Ebrahim.Blog.IocConfig.Middleware;
using Ebrahim.Blog.Services.Logger;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class HostedServicesExtensions
    {
        public static IServiceCollection AddCustomeHostedService(this IServiceCollection services)
        {
            return services;
        }
    }
}
