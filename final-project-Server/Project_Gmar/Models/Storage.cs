using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_Gmar.Models
{
    public class Storage
    {

        public long Id { get; set; }//primary key
        public string ItemName { get; set; } //foren key
        public long StorageItem { get; set; }
        public string Category { get; set; }
     
    }
}