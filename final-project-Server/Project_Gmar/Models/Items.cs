using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_Gmar.Models
{
    public class Items
    {
        public long Id { get; set; }//primary key
        public string ItemName { get; set; }
        public string ItemImage { get; set; }
        public string Category { get; set; }
        public long Price { get; set; }
    
        public long Like { get; set; }

    }
}