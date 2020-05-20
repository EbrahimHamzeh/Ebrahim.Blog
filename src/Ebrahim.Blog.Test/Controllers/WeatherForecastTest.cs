using Ebrahim.Blog.WebApp.Controllers;
using Xunit;
using Moq;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using Ebrahim.Blog.WebApp;
using Microsoft.AspNetCore.Mvc;

namespace Ebrahim.Blog.Test
{
    public class WeatherForecastTest
    {
        private readonly Mock<ILogger<WeatherForecastController>> _mockRepoLogger;
        private readonly WeatherForecastController _controller;
        public WeatherForecastTest()
        {
            _mockRepoLogger = new Mock<ILogger<WeatherForecastController>>();
            _controller = new WeatherForecastController(_mockRepoLogger.Object);
        }
        [Fact]
        public void get_all_Weather_Forecast_as_Json()
        {
            // arrange

            // act
            var respons = _controller.Get();

            // assert
            var result = Assert.IsType<OkObjectResult>(respons.Result); // کد ۲۰۰ چک میکنیم
            var model = Assert.IsType<IEnumerable<WeatherForecast>>(result.Value);
            // Assert.NotEmpty(model.Date);
        }
    }
}
