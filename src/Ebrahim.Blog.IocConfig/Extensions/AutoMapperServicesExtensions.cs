using System.Reflection;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class AutoMapperServicesExtensions
    {
        public static IServiceCollection AddAutoMapperServices(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(AutoMapperServicesExtensions).GetTypeInfo().Assembly);
            
            return services;
        }
    }
}
