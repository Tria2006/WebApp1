using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class TestController : Controller
    {
        [HttpGet]
        public int GetNumber()
        {
            return 9;
        }

        [HttpPost]

        public Response TestNumber(Tesat2 wasd)
        {
            var result = new Response();
            if (wasd.Str1 == "123")
            {
                result.Code = 1;
                result.Message = "ЙЙЯЯЯЯЯЯЗЬЬЬ!!!!";
            }
            else
            {
                result.Code = 0;
                result.Message = "Чувак, это похороны";
            }
            return result;
        }
    }

    public class Response
    {
        public int Code { get; set; }
        public string Message { get; set; }
    }

    public class Tesat2
    {
        [JsonProperty("number1")]
        public int Num1 { get; set; }

        public string Str1 { get; set; }   

    }
}
