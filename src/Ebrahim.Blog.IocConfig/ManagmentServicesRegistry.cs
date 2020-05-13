using System;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Ebrahim.Blog.DataLayer;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.IocConfig.Extensions;

namespace Ebrahim.Blog.IocConfig
{
    public static class ManagmentServicesRegistry
    {
        public static void AddMyServices(this IServiceCollection services)
        {
            var siteSettings = GetSiteSettings(services);
            services.AddGlobalServices(siteSettings);
            services.AddConfiguredMsSqlDbContext(siteSettings);
            services.AddIdentityServices();
            services.AddIdentityOptions(siteSettings);
            services.AddCustomeHostedService(); // background process and scheduler
            services.AddSecurityServices();
            services.AddFilterMVC();
            services.AddSwaggerServices();
        }

        public static SiteSettings GetSiteSettings(this IServiceCollection services)
        {
            var provider = services.BuildServiceProvider();
            var siteSettingsOptions = provider.GetRequiredService<IOptionsSnapshot<SiteSettings>>();
            var siteSettings = siteSettingsOptions.Value;
            if (siteSettings == null) throw new ArgumentNullException(nameof(siteSettings));
            return siteSettings;
        }

        // TODO: جاش یه جای دیگه بهتره اما مشکل circle refrence
        public static void InitializeDb(this IServiceProvider serviceProvider)
        {
            var scopeFactory = serviceProvider.GetRequiredService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var identityDbInitialize = scope.ServiceProvider.GetRequiredService<IDbInitializer>();
                identityDbInitialize.Initialize();
                identityDbInitialize.SeedData();
            }
        }
    }
}
