namespace Ebrahim.Blog.ViewModels.Settings.Details
{
    public class Loglevel
    {
        public Microsoft.Extensions.Logging.LogLevel Default { get; set; }
        public Microsoft.Extensions.Logging.LogLevel System { get; set; }
        public Microsoft.Extensions.Logging.LogLevel Microsoft { get; set; }
    }
}
