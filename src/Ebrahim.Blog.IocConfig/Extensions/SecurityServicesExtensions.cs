using System;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.Services.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class SecurityServicesExtensions
    {
        public static IServiceCollection AddSecurityServices(this IServiceCollection services)
        {
            services.AddScoped<IAntiForgeryCookieService, AntiForgeryCookieService>();
            services.AddAntiforgery(x => x.HeaderName = "X-XSRF-TOKEN");
            
            return services;
        }
    }
}
