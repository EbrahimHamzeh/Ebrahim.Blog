using System;
using System.ComponentModel.DataAnnotations;
using FluentValidation;

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
        public string Username { get; set; }
        
        /// <summary>
        /// رمز عبور کاربر
        /// </summary>
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }

    public class LoginViewModelValidator : AbstractValidator<LoginViewModel>
    {
        public LoginViewModelValidator()
        {
            RuleFor(login => login.Username).NotNull().WithMessage("نام کاربری الزامی می‌باشد.");
            RuleFor(login => login.Username).NotEmpty().WithMessage("نام کاربری الزامی می‌باشد.");
            RuleFor(login => login.Username).Matches("^[a-zA-Z_]*$").WithMessage("لطفا تنها از خروف انگلیسی استفاده کنید.");

            RuleFor(login => login.Password).NotNull().WithMessage("رمزعبور الزامی می‌باشد.");
            RuleFor(login => login.Password).NotEmpty().WithMessage("رمزعبور الزامی می‌باشد.");
        }
    }
}
