using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Ebrahim.Blog.Common.MVCCoreToolkit
{
    public static class HttpContextExtensions
    {
        // تبدیل مختوای یک درخواست به یک رشته.
        public static string GetBodyString(this HttpRequest httpContext)
        {
            var body = "";
            if (httpContext.ContentLength == null || !(httpContext.ContentLength > 0) ||
                !httpContext.Body.CanSeek) return body;
            httpContext.EnableBuffering();
            httpContext.Body.Seek(0, SeekOrigin.Begin);
            using (var reader = new StreamReader(httpContext.Body, Encoding.UTF8, true, 1024, true))
            {
                body = reader.ReadToEnd();
            }
            httpContext.Body.Position = 0;
            return body;
        }

        public static string GetResponseBodyString(this HttpResponse response)
        {
            response.Body.Seek(0, SeekOrigin.Begin);
            string text = new StreamReader(response.Body).ReadToEnd();
            response.Body.Seek(0, SeekOrigin.Begin);
            return text;
        }
        
        // تبدیل هدر درخواست به یک رشته
        public static string GetHeaderString(this IHeaderDictionary headers)
        {
            var headerBuilder = new StringBuilder();
            foreach (var header in headers)
            {
                var headerValues = string.Join(",", value: header.Value);
                headerBuilder.Append(header.Key).Append(": ").AppendLine(headerValues);
            }
            return headerBuilder.ToString();
        }
        
        // آدرس کامل یک درخواست
        public static string FullAdress(this HttpRequest request)
        {
            return $"{request?.Scheme}://{request?.Host}{request?.Path.Value}{request?.QueryString.Value}";
        }
    }
}
