using Ebrahim.Blog.WebApp.Controllers;
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Ebrahim.Blog.WebApp;
using Microsoft.AspNetCore.Mvc;
using Ebrahim.Blog.WebApp.Controllers.Identity;
using Microsoft.Extensions.DependencyInjection;
using Ebrahim.Blog.IocConfig;
using System;
using Ebrahim.Blog.DataLayer.Context;
using DNTCommon.Web.Core;
using Ebrahim.Blog.DomainClasses.Identity;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.Extensions.Configuration;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.Test.Base;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;

namespace Ebrahim.Blog.Test
{
    public class AuthControllerTest : BaseControllerTest
    {
        private readonly AuthController _controller;

        public AuthControllerTest() : base()
        {
            var userService = base._serviceProvider.GetRequiredService<IUsersService>();
            var tokenStoreService = base._serviceProvider.GetRequiredService<ITokenStoreService>();
            var tokenFactoryService = base._serviceProvider.GetRequiredService<ITokenFactoryService>();
            var unitOfWork = base._serviceProvider.GetRequiredService<IUnitOfWork>();
            var antiForgeryCookieService = base._serviceProvider.GetRequiredService<IAntiForgeryCookieService>();

            _controller = new AuthController(userService, tokenStoreService, tokenFactoryService, unitOfWork, antiForgeryCookieService);
        }

        [Fact]
        public void Test_UserAdmin_Exists()
        {
            _serviceProvider.RunScopedService<IUnitOfWork>(context =>
           {
                var users = context.Set<User>();
                var temp = users.Any(x => x.Username == "Admin");
                Assert.True(users.Any(x => x.Username == "Ebrahim"));
            });
        }
    }
}
