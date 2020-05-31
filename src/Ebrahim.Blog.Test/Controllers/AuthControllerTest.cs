using Ebrahim.Blog.WebApp.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Ebrahim.Blog.WebApp;
using Microsoft.AspNetCore.Mvc;
using Ebrahim.Blog.WebApp.Controllers.Identity;
using Ebrahim.Blog.IocConfig;
using System;
using Ebrahim.Blog.DataLayer.Context;
using DNTCommon.Web.Core;
using Ebrahim.Blog.DomainClasses.Identity;
using System.Linq;
using Ebrahim.Blog.ViewModels.Settings;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.Test.Base;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;
using System.Threading.Tasks;
using Ebrahim.Blog.ViewModels.Identity.Auth;

namespace Ebrahim.Blog.Test
{
    [TestClass]
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

        [TestMethod]
        public void Test_UserAdmin_Exists()
        {
            _serviceProvider.RunScopedService<IUnitOfWork>(context =>
           {
               var users = context.Set<User>();
               var temp = users.Any(x => x.Username == "Admin");
               Assert.IsTrue(users.Any(x => x.Username == "Ebrahim"));
           });
        }

        /// <summary>
        /// اطلاعات اشتباه می فرستم و باید بگه 401
        /// </summary>
        /// <returns></returns>
        [TestMethod]
        public async Task check_wrong_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "ebrahim", Password = "@ebrahim" });
            Assert.IsInstanceOfType(response.Result, typeof(UnauthorizedResult));
        }

        /// <summary>
        /// تست با مقادیر خالی
        /// </summary>
        /// <returns></returns>
        [TestMethod]
        public async Task check_empty_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "", Password = "" });
            Assert.IsInstanceOfType(response.Result, typeof(UnauthorizedResult));
        }

        /// <summary>
        /// تست با مقادیر نال
        /// </summary>
        /// <returns></returns>
        [TestMethod]
        public async Task check_null_info()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel());
            Assert.IsInstanceOfType(response.Result, typeof(UnauthorizedResult));
        }

        [TestMethod]
        public async Task TestName()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel { Username = "ebrahim", Password = "1234" });
            // var result = Assert.IsType<OkObjectResult>(response.Result);
            // var model = Assert.IsType<ClientToken>(result.Value);
            // Assert.NotEmpty(model.AccessToken);
            // Assert.NotEmpty(model.RefreshToken);
        }
    }
}
