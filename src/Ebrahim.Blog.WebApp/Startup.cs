using System.Text.Json;
using DNTCommon.Web.Core;
using Ebrahim.Blog.Common;
using Ebrahim.Blog.IocConfig;
using Ebrahim.Blog.IocConfig.Extensions;
using Ebrahim.Blog.ViewModels.Settings;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;

namespace Ebrahim.Blog.WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<SiteSettings>(options => Configuration.Bind(options));

            services.Configure<KestrelServerOptions>(options => { options.AllowSynchronousIO = true; });// // If using Kestrel:
            services.Configure<IISServerOptions>(options => { options.AllowSynchronousIO = true; }); // If using IIS:

            services.AddCommonServices(); // Ebrahim.Blog.Common
            services.AddMyServices(); // Ebrahim.Blog.Services

            services.AddMvc(options => options.UseYeKeModelBinder());
            services.AddDNTCommonWeb();

            // services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(appBuilder =>
                {
                    appBuilder.Use(async (context, next) =>
                    {
                        var error = context.Features[typeof(IExceptionHandlerFeature)] as IExceptionHandlerFeature;
                        if (error != null && error.Error is SecurityTokenExpiredException)
                        {
                            context.Response.StatusCode = 401;
                            context.Response.ContentType = "application/json";
                            await context.Response.WriteAsync(JsonSerializer.Serialize(new
                            {
                                State = 401,
                                Msg = "token expired"
                            }));
                        }
                        else if (error != null && error.Error != null)
                        {
                            context.Response.StatusCode = 500;
                            context.Response.ContentType = "application/json";
                            await context.Response.WriteAsync(JsonSerializer.Serialize(new
                            {
                                State = 500,
                                Msg = error.Error.Message
                            }));
                        }
                        else
                        {
                            await next();
                        }
                    });
                });
            }

            app.UseCustomeMiddleware();

            app.UseHttpsRedirection();

            app.UseStatusCodePages();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();

            app.UseCors("CorsPolicy");

            app.UseAuthorization();

            app.UseSwagger();

            app.UseSwaggerUI(setupAction =>
            {
                setupAction.SwaggerEndpoint(
                    "/swagger/LibraryOpenAPISpecification/swagger.json",
                    "Library API");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            // catch-all handler for HTML5 client routes - serve index.html
            app.Run(async context =>
            {
                context.Response.ContentType = "text/html";
                await context.Response.SendFileAsync(System.IO.Path.Combine(env.WebRootPath, "index.html"));
            });
        }
    }
}
