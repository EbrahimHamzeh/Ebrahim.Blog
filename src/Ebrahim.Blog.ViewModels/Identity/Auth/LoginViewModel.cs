using System;
using System.ComponentModel.DataAnnotations;

namespace Ebrahim.Blog.ViewModels.Identity.Auth
{
    /// <summary>
    /// مدل دریافت اطلاعات وورد کاربر
    /// </summary>
    public class LoginViewModel
    {
        /// <summary>
        /// نام کاربری
        /// </summary>
        [Required]
        []
        public string Username { get; set; }
        
        /// <summary>
        /// رمز عبور کاربر
        /// </summary>
        [Required]
        public string Password { get; set; }
    }
}
