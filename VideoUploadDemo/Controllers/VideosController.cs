using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using VideoUploadDemo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VideoUploadDemo.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        // GET: api/<VideosController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<VideosController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<VideosController>
        [HttpPost]
        public void Post([FromBody] Video video)
        {
            string path = "./ClientApp/src/uploads/videos.json";
            string videoJson = JsonSerializer.Serialize<Video>(video);

            using (StreamWriter sw = new StreamWriter(path, true))
            {
                sw.WriteLine(videoJson);
            }
            

        }

        // PUT api/<VideosController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<VideosController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
