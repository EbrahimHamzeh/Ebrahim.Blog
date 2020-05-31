using System;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class GlobalServicesExtensions
    {
        public static IServiceCollection AddGlobalServices(this IServiceCollection services, SiteSettings siteSettings)
        {
            services.AddHttpContextAccessor(); // services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IDbInitializer, DbInitializer>();
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .WithOrigins(siteSettings.HostUrl) //Note:  The URL must be specified without a trailing slash (/).
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .SetIsOriginAllowed((host) => true)
                        .AllowCredentials());
            });
            // Add log services
            return services;
        }
    }
}
