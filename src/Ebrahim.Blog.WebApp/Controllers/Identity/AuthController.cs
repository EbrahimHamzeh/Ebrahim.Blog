using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.DataLayer.Context;
using Ebrahim.Blog.DomainClasses.Identity;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;
using Ebrahim.Blog.ViewModels.Identity.JWT;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Ebrahim.Blog.WebApp.Controllers.Identity
{
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

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        public async Task<ActionResult<JwtTokensData>> Login([FromBody] User loginUser)
        {
            if (loginUser == null)
                return BadRequest("user is not set.");

            var user = await _usersService.FindUserAsync(loginUser.Username, loginUser.Password);
            if(user == null || !user.IsActive)
                return Unauthorized();

            var result = await _tokenFactoryService.CreateJwtTokensAsync(user);
            await _tokenStoreService.AddUserTokenAsync(user, result.RefreshTokenSerial, result.AccessToken, null);
            await _uow.SaveChangesAsync();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);

            return Ok(result);
        }
    }
}
