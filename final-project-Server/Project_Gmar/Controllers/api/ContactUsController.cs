using Project_Gmar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Helpers;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class ContactUsController : ApiController
    {

        //public IHttpActionResult CreateNewEmail(Email email)
        //{
        //    sendEmailViaWebApi(email);
        //    return Ok();//}

        [HttpPost]
        public IHttpActionResult CreateNewEmail(Email email)
        {
            //Email emaile = new Email();

            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls;

            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

            mail.From = new MailAddress(email.From);
            //mail.From = email.From;
            mail.To.Add("ronit93motza@gmail.com");
            mail.Subject = email.Subject;
            mail.Body = email.Body;
      
            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("ronit93motza@gmail.com", "Ronitmotza7583879");
            SmtpServer.EnableSsl = true;

            SmtpServer.Send(mail);

            return Ok();

        }


    }


}
