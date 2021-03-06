using System;
using System.IO;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class SwaggerServicesExtensions
    {
        public static IServiceCollection AddSwaggerServices(this IServiceCollection services)
        {
            services.AddSwaggerGen(setupAction =>
            {
                setupAction.SwaggerDoc(
                   name: "LibraryOpenAPISpecification",
                   info: new Microsoft.OpenApi.Models.OpenApiInfo()
                   {
                       Title = "Library API Ebrahim.Blog",
                       Version = "1",
                       Description = "آمورش نحوه‌ی دسترسی به وب‌سرویس‌ها",
                       Contact = new Microsoft.OpenApi.Models.OpenApiContact()
                       {
                           Email = "pranc14@gmail.com",
                           Name = "Ebrahim",
                       },
                       License = new Microsoft.OpenApi.Models.OpenApiLicense()
                       {
                           Name = "MIT License",
                           Url = new Uri("https://opensource.org/licenses/MIT")
                       }
                   });

                var xmlFiles = Directory.GetFiles(AppContext.BaseDirectory, "*.xml", SearchOption.TopDirectoryOnly).ToList();
                xmlFiles.ForEach(xmlFile => setupAction.IncludeXmlComments(xmlFile));
            });
            return services;
        }
    }
}
