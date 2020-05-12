using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Ebrahim.Blog.Common.GuardToolkit;
using Ebrahim.Blog.DomainClasses.Identity;
using Ebrahim.Blog.ViewModels.Identity.JWT;
using Ebrahim.Blog.ViewModels.Settings;
using Ebrahim.Blog.ViewModels.Settings.Details;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Ebrahim.Blog.Services.Identity
{
    public interface ITokenFactoryService
    {
        Task<JwtTokensData> CreateJwtTokensAsync(User user);
        string GetRefreshTokenSerial(string refreshTokenValue);
    }
    
    public class TokenFactoryService : ITokenFactoryService
    {
        private readonly ISecurityService _securityService;
        private readonly IOptionsSnapshot<SiteSettings> _siteSettings;
        private readonly IRolesService _rolesService;
        private readonly ILogger<TokenFactoryService> _logger;
        
        public TokenFactoryService(ISecurityService securityService, IRolesService rolesService, IOptionsSnapshot<SiteSettings> siteSettings, ILogger<TokenFactoryService> logger)
        {
            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));

            _rolesService = rolesService;
            _rolesService.CheckArgumentIsNull(nameof(_rolesService));

            _siteSettings = siteSettings;
            _siteSettings.CheckArgumentIsNull(nameof(_siteSettings));

            _logger = logger;
            _logger.CheckArgumentIsNull(nameof(_logger));
        }

        public async Task<JwtTokensData> CreateJwtTokensAsync(User user)
        {
            var (accessToken, claims) = await createAccessTokenAsync(user);
            var (refreshTokenValue, refreshTokenSerial) = createRefreshToken();
            return new JwtTokensData
            {
                AccessToken = accessToken,
                RefreshToken = refreshTokenValue,
                RefreshTokenSerial = refreshTokenSerial,
                Claims = claims
            };
        }

        private (string RefreshTokenValue, string RefreshTokenSerial) createRefreshToken()
        {
            var refreshTokenSerial = _securityService.CreateCryptographicallySecureGuid().ToString().Replace("-", "");

            var claims = new List<Claim>
            {
                // Unique Id for all Jwt tokes
                new Claim(JwtRegisteredClaimNames.Jti, _securityService.CreateCryptographicallySecureGuid().ToString(), ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // Issuer
                new Claim(JwtRegisteredClaimNames.Iss, _siteSettings.Value.BearerTokens.Issuer, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // Issued at
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64, _siteSettings.Value.BearerTokens.Issuer),
                // for invalidation
                new Claim(ClaimTypes.SerialNumber, refreshTokenSerial, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_siteSettings.Value.BearerTokens.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var now = DateTime.UtcNow;
            var token = new JwtSecurityToken(
                issuer: _siteSettings.Value.BearerTokens.Issuer,
                audience: _siteSettings.Value.BearerTokens.Audience,
                claims: claims,
                notBefore: now,
                expires: now.AddMinutes(_siteSettings.Value.BearerTokens.RefreshTokenExpirationMinutes),
                signingCredentials: creds);
            var refreshTokenValue = new JwtSecurityTokenHandler().WriteToken(token);
            return (refreshTokenValue, refreshTokenSerial);
        }

        public string GetRefreshTokenSerial(string refreshTokenValue)
        {
            if (string.IsNullOrWhiteSpace(refreshTokenValue))
            {
                return null;
            }

            ClaimsPrincipal decodedRefreshTokenPrincipal = null;
            try
            {
                decodedRefreshTokenPrincipal = new JwtSecurityTokenHandler().ValidateToken(
                    refreshTokenValue,
                    new TokenValidationParameters
                    {
                        RequireExpirationTime = true,
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_siteSettings.Value.BearerTokens.Key)),
                        ValidateIssuerSigningKey = true, // verify signature to avoid tampering
                        ValidateLifetime = true, // validate the expiration
                        ClockSkew = TimeSpan.Zero // tolerance for the expiration date
                    },
                    out _
                );
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Failed to validate refreshTokenValue: `{refreshTokenValue}`.");
            }

            return decodedRefreshTokenPrincipal?.Claims?.FirstOrDefault(c => c.Type == ClaimTypes.SerialNumber)?.Value;
        }

        private async Task<(string AccessToken, IEnumerable<Claim> Claims)> createAccessTokenAsync(User user)
        {
            var claims = new List<Claim>
            {
                // Unique Id for all Jwt tokes
                new Claim(JwtRegisteredClaimNames.Jti, _securityService.CreateCryptographicallySecureGuid().ToString(), ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // Issuer
                new Claim(JwtRegisteredClaimNames.Iss, _siteSettings.Value.BearerTokens.Issuer, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // Issued at
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64, _siteSettings.Value.BearerTokens.Issuer),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString(), ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                new Claim(ClaimTypes.Name, user.Username, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                new Claim("DisplayName", user.DisplayName, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // to invalidate the cookie
                new Claim(ClaimTypes.SerialNumber, user.SerialNumber, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer),
                // custom data
                new Claim(ClaimTypes.UserData, user.Id.ToString(), ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer)
            };

            // add roles
            var roles = await _rolesService.FindUserRolesAsync(user.Id);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role.Name, ClaimValueTypes.String, _siteSettings.Value.BearerTokens.Issuer));
            }

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_siteSettings.Value.BearerTokens.Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var now = DateTime.UtcNow;
            var token = new JwtSecurityToken(
                issuer: _siteSettings.Value.BearerTokens.Issuer,
                audience: _siteSettings.Value.BearerTokens.Audience,
                claims: claims,
                notBefore: now,
                expires: now.AddMinutes(_siteSettings.Value.BearerTokens.AccessTokenExpirationMinutes),
                signingCredentials: creds);
            return (new JwtSecurityTokenHandler().WriteToken(token), claims);
        }
    }
}
