

using System;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.DataLayer.Context;
using Ebrahim.Blog.DomainClasses.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Ebrahim.Blog.ViewModels.Settings;
using Ebrahim.Blog.ViewModels.Type.Identity;
using System.Linq;

namespace Ebrahim.Blog.Services
{   
    public interface IDbInitializer
    {
        void Initialize();
        void SeedData();
    }

    public class DbInitializer : IDbInitializer
    {   
        private readonly IOptionsSnapshot<SiteSettings> _adminUserSeedOptions;
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly ISecurityService _securityService;
        
        public DbInitializer(IServiceScopeFactory scopeFactory, IOptionsSnapshot<SiteSettings> adminUserSeedOptions, ISecurityService securityService)
        {
            _scopeFactory = scopeFactory;
            _scopeFactory.CheckArgumentIsNull(nameof(_scopeFactory));

            _adminUserSeedOptions = adminUserSeedOptions;
            _adminUserSeedOptions.CheckArgumentIsNull(nameof(_adminUserSeedOptions));

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
        }

        public void Initialize()
        {
            using (var serviceScope = _scopeFactory.CreateScope())
            {
                using (var context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    context.Database.EnsureCreated();
                    //context.Database.Migrate();
                }
            }
        }

        public void SeedData()
        {
            using (var serviceScope = _scopeFactory.CreateScope())
            {
                // How to add initial data to the DB directly
                using (var context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    // Add default roles
                    var adminRole = new Role { Name = CustomRoles.Admin };
                    var userRole = new Role { Name = CustomRoles.User };
                    if (!context.Roles.Any())
                    {
                        context.Add(adminRole);
                        context.Add(userRole);
                        context.SaveChanges();
                    }

                    // Add Admin user
                    if (!context.Users.Any())
                    {
                        var adminUser = new User
                        {
                            Username = "Ebrahim",
                            DisplayName = "آفا ابراهیم",
                            IsActive = true,
                            LastLoggedIn = null,
                            Password = _securityService.GetSha256Hash("1234"),
                            SerialNumber = Guid.NewGuid().ToString("N")
                        };
                        context.Add(adminUser);
                        context.SaveChanges();

                        context.Add(new UserRole { Role = adminRole, User = adminUser });
                        context.Add(new UserRole { Role = userRole, User = adminUser });
                        context.SaveChanges();
                    }
                }
            }
        }
    }
}
