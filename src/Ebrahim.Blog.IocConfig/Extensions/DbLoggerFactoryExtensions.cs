using System;
using Ebrahim.Blog.Services.Logger;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class DbLoggerFactoryExtensions
    {
        public static ILoggingBuilder AddDbLogger(this ILoggingBuilder builder)
        {
            builder.Services.AddSingleton<ILoggerProvider, DbLoggerProvider>();
            builder.Services.AddScoped<IRequestProfilerService, RequestProfilerService>();
            return builder;
        }
    }
}
