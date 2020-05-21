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
using System.Threading.Tasks;
using Ebrahim.Blog.ViewModels.Identity.Auth;

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

        /// <summary>
        /// اطلاعات اشتباه می فرستم و باید بگه 401
        /// </summary>
        /// <returns></returns>
        [Fact]
        public async Task check_wrong_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "ebrahim", Password = "@ebrahim" });
            Assert.IsType<UnauthorizedResult>(response.Result);
        }

        /// <summary>
        /// تست با مقادیر خالی
        /// </summary>
        /// <returns></returns>
        [Fact]
        public async Task check_empty_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "", Password = "" });
            Assert.IsType<UnauthorizedResult>(response.Result);
        }

        /// <summary>
        /// تست با مقادیر نال
        /// </summary>
        /// <returns></returns>
        [Fact]
        public async Task check_null_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel());
            Assert.IsType<UnauthorizedResult>(response.Result);
        }

        [Fact]
        public async Task TestName()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "ebrahim", Password = "1234" });
            var result = Assert.IsType<OkObjectResult>(response.Result);
            var model = Assert.IsType<ClientToken>(result.Value);
            Assert.NotEmpty(model.AccessToken);
            Assert.NotEmpty(model.RefreshToken);
        }
    }
}
