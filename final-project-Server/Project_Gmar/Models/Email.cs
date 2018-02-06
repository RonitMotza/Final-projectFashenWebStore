using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace Project_Gmar.Models
{
    public class Email
    {
        public string From { get; set; }
        //public  MailAddress From { get; set; }
        //public string EmailCust { get; set; }
        //public string Name { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        
    }





}
    