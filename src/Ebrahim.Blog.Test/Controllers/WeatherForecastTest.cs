using Ebrahim.Blog.WebApp.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Ebrahim.Blog.WebApp;
using Microsoft.AspNetCore.Mvc;
using Ebrahim.Blog.WebApp.Controllers.Identity;
using Ebrahim.Blog.IocConfig;
using System;
using Ebrahim.Blog.DataLayer.Context;
using DNTCommon.Web.Core;
using Ebrahim.Blog.DomainClasses.Identity;
using System.Linq;
using Ebrahim.Blog.ViewModels.Settings;
using Ebrahim.Blog.Services;
using Ebrahim.Blog.Test.Base;
using Ebrahim.Blog.Services.Identity;
using Ebrahim.Blog.Services.Security;
using System.Threading.Tasks;
using Ebrahim.Blog.ViewModels.Identity.Auth;

namespace Ebrahim.Blog.Test
{
    [TestClass]
    public class WeatherForecastTest
    {
        private readonly Mock<ILogger<WeatherForecastController>> _mockRepoLogger;
        private readonly WeatherForecastController _controller;
        public WeatherForecastTest()
        {
            _mockRepoLogger = new Mock<ILogger<WeatherForecastController>>();
            _controller = new WeatherForecastController(_mockRepoLogger.Object);
        }
        [TestMethod]
        public void get_all_Weather_Forecast_as_Json()
        {
            // arrange

            // act
            var respons = _controller.Get();

            // assert
            // var result = Assert.IsType<OkObjectResult>(respons.Result); // کد ۲۰۰ چک میکنیم
            // var model = Assert.IsType<IEnumerable<WeatherForecast>>(result.Value);
            // Assert.NotEmpty(model.Date);
        }
    }
}
