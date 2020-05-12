using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Ebrahim.Blog.ViewModels.Identity.Auth
{
    public class TokenViewModel
    {
        [JsonPropertyName("refreshToken")]
        [Required]
        public string RefreshToken { get; set; }
    }
}
