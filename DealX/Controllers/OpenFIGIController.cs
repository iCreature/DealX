using DealX.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;

namespace DealX.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenFIGIController : ControllerBase
    {

        static HttpClient theClient = new HttpClient();
        string theURL="https://api.openfigi.com/v3/filter/";
        // store the request

        // get information from OpenFIGI
        [HttpGet("getInformation")]
        public async Task<IActionResult> get()
        {

            var response = await theClient.PostAsJsonAsync(theURL, "{'exchCode' : 'SA'}");
            response.EnsureSuccessStatusCode();
            return Ok(response.Headers.Location);
        }

        // post -> to search information from OpenFIGI
        [HttpPost("searchInformation")] 
        public IActionResult search([FromBody] UserRequest pRequest)
        {
            return Ok();
        }

        /*
         *https://api.openfigi.com/v3/filter/
         *{
            "exchCode": "SA"
            }
         */
    }
}
