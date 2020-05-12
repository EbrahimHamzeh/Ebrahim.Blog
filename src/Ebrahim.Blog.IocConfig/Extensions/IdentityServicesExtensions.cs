using System;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.Services.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class IdentityServicesExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services)
        {
            services.AddSingleton<ISecurityService, SecurityService>();
            services.AddScoped<IUsersService, UsersService>();
            services.AddScoped<IRolesService, RolesService>();
            services.AddScoped<ITokenStoreService, TokenStoreService>();
            services.AddScoped<ITokenValidatorService, TokenValidatorService>();
            services.AddScoped<ITokenFactoryService, TokenFactoryService>();
            return services;
        }
    }
}
