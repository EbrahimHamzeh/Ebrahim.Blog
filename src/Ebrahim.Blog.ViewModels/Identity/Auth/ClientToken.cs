using System;

namespace Ebrahim.Blog.ViewModels.Identity.Auth
{
    /// <summary>
    /// کلاینت توکن
    /// </summary>
    public class ClientToken
    {
        /// <summary>
        /// توکن اصلی برای اعتبارسنجی
        /// </summary>
        /// <value></value>
        public string AccessToken { get; set; }

        /// <summary>
        /// نوکن برای تمدید توکن اصلی
        /// </summary>
        /// <value></value>
        public string RefreshToken { get; set; }
    }
}
