using System;
using Ebrahim.Blog.IocConfig.Middleware;
using Microsoft.AspNetCore.Builder;

namespace Ebrahim.Blog.IocConfig.Extensions
{
    public static class MiddlewaresExtensions
    {
        public static IApplicationBuilder UseCustomeMiddleware(this IApplicationBuilder app)
    {
        app.UseMiddleware<RequestResponseLoggingMiddleware>();
        return app;
    }
    }
}
