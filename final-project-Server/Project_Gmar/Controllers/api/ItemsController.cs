using Project_Gmar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class ItemsController : ApiController
    {

        ApplicationDbContext m_db = new ApplicationDbContext();
        public IEnumerable<Items> GetAllItems()
        {

            return m_db.Items;
        }
        public IHttpActionResult GetOneItem(long id)
        {
            Items Items = m_db.Items.Find(id);
            if (Items == null)
            {
                return NotFound();
            }
            return Ok(Items);
        }

        [HttpPost]
        public IHttpActionResult CreateNewItems(Items Item)
        {

          if (Item == null)
         {
               return BadRequest();
            }
           m_db.Items.Add(Item);
          m_db.SaveChanges();
          return CreatedAtRoute("DefaultApi", new { id = Item.Id }, Item);
        }
    
    [HttpPut]
    public IHttpActionResult UpdateItem(long id, Items Item)
    {
        if (Item == null)
        { return BadRequest(); }
            Item.Id = id;
        Items Items = m_db.Items.Find(Item.Id);
        if (Items == null)
        { return NotFound(); }
        Items.ItemImage = Item.ItemImage;
        Items.ItemName = Item.ItemName;
        Items.Price = Item.Price;
       
            Items.Like = Item.Like;
        m_db.SaveChanges();
        return StatusCode(HttpStatusCode.NoContent);
    }

    [HttpDelete]
    public IHttpActionResult DeleteItem(long id)
    {
        Items Item = m_db.Items.Find(id);
        if (Item == null)
        {
            return NotFound();
        }
        m_db.Items.Remove(Item);
        m_db.SaveChanges();
        return Ok(Item);
    }
}
}
