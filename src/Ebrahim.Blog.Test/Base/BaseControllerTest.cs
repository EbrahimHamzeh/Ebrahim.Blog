using System;
using Ebrahim.Blog.IocConfig;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Ebrahim.Blog.Test.Base
{
    public class BaseControllerTest
    {
        protected readonly IServiceProvider _serviceProvider;

        public BaseControllerTest()
        {
            var services = new ServiceCollection();
            services.AddOptions();
            services.AddLogging(cfg => cfg.AddConsole().AddDebug());
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: false, reloadOnChange: true).Build();
            services.Configure<SiteSettings>(options => configuration.Bind(options));
            services.AddSingleton<IConfigurationRoot>(provider => configuration);
            services.AddMyServices(); // Ebrahim.Blog.Services
            _serviceProvider = services.BuildServiceProvider();
            var identityDbInitialize = _serviceProvider.GetRequiredService<IDbInitializer>();
            identityDbInitialize.Initialize();
            identityDbInitialize.SeedData();
        }

    }
}
