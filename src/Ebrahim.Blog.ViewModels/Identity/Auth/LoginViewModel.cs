using System;
using System.ComponentModel.DataAnnotations;

namespace Ebrahim.Blog.ViewModels.Identity.Auth
{
    public class LoginViewModel
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        public string Password { get; set; }
    }
}
