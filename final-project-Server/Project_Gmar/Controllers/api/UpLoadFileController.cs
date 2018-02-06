using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class UpLoadFileController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage CreateNewItems()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                  //  var filePath = HttpContext.Current.Server.MapPath(רק אם יש נתיב וירטואלי); 
                    postedFile.SaveAs("C:\\Angular2_CLI\\FinalsProject\\src\\assets\\" + postedFile.FileName);
                }

            }
            return response;


        }

    }
}
