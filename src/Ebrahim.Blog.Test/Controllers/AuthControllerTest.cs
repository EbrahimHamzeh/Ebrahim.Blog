using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using Ebrahim.Blog.WebApp.Controllers.Identity;
using Ebrahim.Blog.DataLayer.Context;
using DNTCommon.Web.Core;
using Ebrahim.Blog.DomainClasses.Identity;
using System.Linq;
using Ebrahim.Blog.Test.Base;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;
using System.Threading.Tasks;
using Xunit;
using Ebrahim.Blog.ViewModels.Identity.Auth;
using FluentAssertions;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Http;

namespace Ebrahim.Blog.Test
{
    public class AuthControllerTest : BaseControllerTest
    {
        private readonly AuthController _controller;

        private readonly IUsersService _usersService;
        private readonly ITokenStoreService _tokenStoreService;
        private readonly IUnitOfWork _uow;
        private readonly IAntiForgeryCookieService _antiforgery;
        private readonly ITokenFactoryService _tokenFactoryService;

        private readonly ILogger<AuthController> _logger;

        private readonly LoginViewModel _rightUser = new LoginViewModel { Username = "Ebrahim", Password = "1234" };

        public AuthControllerTest() : base()
        {
            _usersService = base._serviceProvider.GetRequiredService<IUsersService>();
            _tokenStoreService = base._serviceProvider.GetRequiredService<ITokenStoreService>();
            _tokenFactoryService = base._serviceProvider.GetRequiredService<ITokenFactoryService>();
            _uow = base._serviceProvider.GetRequiredService<IUnitOfWork>();

            var httpContextAccessor = new HttpContextAccessor();
            httpContextAccessor.HttpContext = new DefaultHttpContext();
            _antiforgery = new AntiForgeryCookieService(httpContextAccessor, base._serviceProvider.GetRequiredService<IAntiforgery>(), base._serviceProvider.GetRequiredService<IOptions<AntiforgeryOptions>>()); // base._serviceProvider.GetRequiredService<IAntiForgeryCookieService>();

            _logger = base._serviceProvider.GetRequiredService<ILogger<AuthController>>();

            _controller = new AuthController(_usersService, _tokenStoreService, _tokenFactoryService, _uow, _antiforgery, _logger);
        }

        [Fact]
        public void Admin_User_Check_Exist_In_DB()
        {
            _serviceProvider.RunScopedService<IUnitOfWork>(context =>
           {
               var users = context.Set<User>();
               Assert.True(users.Any(x => x.Username == "Ebrahim"));
           });
        }

        /// <summary>
        /// اطلاعات اشتباه می فرستم و باید بگه 401
        /// </summary>
        [Fact]
        public async Task Check_Wrong_Info_In_Controller()
        {
            var response = await _controller.LoginAsync(new LoginViewModel { Username = "ebrahim", Password = "@ebrahim" });
            Assert.IsType<UnauthorizedResult>(response.Result);
        }

        /// <summary>
        /// تست با مقادیر خالی
        /// </summary>
        [Fact]
        public async Task Check_Empty_Info_In_Controller()
        {
            var response = await _controller.LoginAsync(new LoginViewModel { Username = "", Password = "" });
            Assert.IsType<BadRequestObjectResult>(response.Result);
        }

        /// <summary>
        /// تست با مقادیر نال
        /// </summary>
        [Fact]
        public async Task Check_Null_Info_In_Controller()
        {
            var response = await _controller.LoginAsync(new ViewModels.Identity.Auth.LoginViewModel());
            Assert.IsType<BadRequestObjectResult>(response.Result);
        }

        /// <summary>
        /// یک لاگین واقعی با اطلاعات درست
        /// </summary>
        [Fact]
        public async Task Login_In_Service()
        {
            var user = await _usersService.FindUserAsync(_rightUser.Username, _rightUser.Password);
            Assert.NotNull(user);
            Assert.True(user.IsActive);
            var result = await _tokenFactoryService.CreateJwtTokensAsync(user);
            await _tokenStoreService.AddUserTokenAsync(user, result.RefreshTokenSerial, result.AccessToken, null);
            await _uow.SaveChangesAsync();

            Assert.NotNull(result);
            result.AccessToken.Should().NotBeEmpty();
            result.Claims.Should().NotBeEmpty();
            result.RefreshToken.Should().NotBeEmpty();
            result.RefreshTokenSerial.Should().NotBeEmpty();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);
            
        }
    }
}
