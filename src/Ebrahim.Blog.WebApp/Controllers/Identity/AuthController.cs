using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.DataLayer.Context;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;
using Ebrahim.Blog.ViewModels.Identity.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ebrahim.Blog.WebApp.Controllers.Identity
{
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    [EnableCors("CorsPolicy")]
    public class AuthController : ControllerBase
    {
        private readonly IUsersService _usersService;
        private readonly ITokenStoreService _tokenStoreService;
        private readonly IUnitOfWork _uow;
        private readonly IAntiForgeryCookieService _antiforgery;
        private readonly ITokenFactoryService _tokenFactoryService;

        public AuthController(IUsersService usersService, ITokenStoreService tokenStoreService, ITokenFactoryService tokenFactoryService, IUnitOfWork uow, IAntiForgeryCookieService antiforgery)
        {
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(usersService));

            _tokenStoreService = tokenStoreService;
            _tokenStoreService.CheckArgumentIsNull(nameof(tokenStoreService));

            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _antiforgery = antiforgery;
            _antiforgery.CheckArgumentIsNull(nameof(antiforgery));

            _tokenFactoryService = tokenFactoryService;
            _tokenFactoryService.CheckArgumentIsNull(nameof(tokenFactoryService));
        }

        /// <summary>
        /// اعتبار سنجی کاربر در ابتدا
        /// </summary>
        /// <param name="loginUser">دو مقدار نام کاربری و رمز عبور را به صورت json وارد نمایید</param>
        /// <returns>توکن و refresh token برگشت داده میشود.</returns>
        /// <response code="200">توکن بازگشت</response>
        /// <response code="401">اگر کاربر وجود نداشته باشد و یا اینکه کاربر غیرفعال باشد.!-- همچنین اگر نام کاربری و رمز عبور اشتباه باشه</response>
        /// <response code="400">اگر پارامتر‌های ارسالی نامعتبر باشد.</response>
        /// <remarks>
        /// Sample request (this request updates the author's first name) \
        /// PATCH /authors/id \
        /// [ \
        ///     { \
        ///       "op": "replace", \
        ///       "path": "/firstname", \
        ///       "value": "new first name" \
        ///       } \
        /// ] \
        /// </remarks>
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesDefaultResponseType]
        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        [Consumes("application/json")]
        public async Task<ActionResult<ClientToken>> LoginAsync([FromBody] LoginViewModel loginUser)
        {
            if (loginUser == null || !ModelState.IsValid)
                return BadRequest("user is not set.");

            var user = await _usersService.FindUserAsync(loginUser.Username, loginUser.Password);
            if (user == null || !user.IsActive)
                return Unauthorized();

            var result = await _tokenFactoryService.CreateJwtTokensAsync(user);
            await _tokenStoreService.AddUserTokenAsync(user, result.RefreshTokenSerial, result.AccessToken, null);
            await _uow.SaveChangesAsync();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);

            return Ok(new ClientToken { AccessToken = result.AccessToken, RefreshToken = result.RefreshToken });
        }

        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenViewModel model)
        {
            var refreshTokenValue = model.RefreshToken;
            if (string.IsNullOrWhiteSpace(refreshTokenValue))
            {
                return BadRequest("refreshToken is not set.");
            }

            var token = await _tokenStoreService.FindTokenAsync(refreshTokenValue);
            if (token == null)
            {
                return Unauthorized();
            }

            var result = await _tokenFactoryService.CreateJwtTokensAsync(token.User);
            await _tokenStoreService.AddUserTokenAsync(token.User, result.RefreshTokenSerial, result.AccessToken, _tokenFactoryService.GetRefreshTokenSerial(refreshTokenValue));
            await _uow.SaveChangesAsync();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);

            return Ok(new { access_token = result.AccessToken, refresh_token = result.RefreshToken });
        }

        [AllowAnonymous]
        [HttpGet("[action]")]
        public async Task<bool> Logout(string refreshToken)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userIdValue = claimsIdentity.FindFirst(ClaimTypes.UserData)?.Value;

            // The Jwt implementation does not support "revoke OAuth token" (logout) by design.
            // Delete the user's tokens from the database (revoke its bearer token)
            await _tokenStoreService.RevokeUserBearerTokensAsync(userIdValue, refreshToken);
            await _uow.SaveChangesAsync();

            _antiforgery.DeleteAntiForgeryCookies();

            return true;
        }

        [HttpGet("[action]"), HttpPost("[action]")]
        public bool IsAuthenticated()
        {
            return User.Identity.IsAuthenticated;
        }

        [HttpGet("[action]"), HttpPost("[action]")]
        public IActionResult GetUserInfo()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            return Ok(JsonSerializer.Serialize(new { Username = claimsIdentity.Name }));
        }
    }
}
