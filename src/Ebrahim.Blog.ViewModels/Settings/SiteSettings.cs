using System;
using Ebrahim.Blog.ViewModels.Settings.Details;

namespace Ebrahim.Blog.ViewModels.Settings
{
    public class SiteSettings
    {
        public BearerTokensOptions BearerTokens { get; set; }
        public string ConnectionString { get; set; }
        public ApiSettings ApiSettings { get; set; }
        public Logging Logging { get; set; }
        public bool IsMonitorAllRequestAndResponse { get; set; }
        public string HostUrl { get; set; }        
    }
}
