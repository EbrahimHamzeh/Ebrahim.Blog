using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class FilterMVCExtensions
    {
        public static IServiceCollection AddFilterMVC(this IServiceCollection services)
        {
            services.AddMvc(options => { options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute()); });
            return services;
        }
    }
}
