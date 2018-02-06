using Project_Gmar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class StorageController : ApiController
    {
        ApplicationDbContext m_db = new ApplicationDbContext();

        public IEnumerable<Storage> GetAllStorage()
        {
            return m_db.Storage;
        }

        public IHttpActionResult GetOneStorageItem(long id)
        {
            Storage Stor = m_db.Storage.Find(id);
            if (Stor == null)
            {
                return NotFound();
            }

            return Ok(Stor);
        }

        [HttpPost]
        public IHttpActionResult CreateNewStorage(Storage Stor)
        {

            Storage stor = m_db.Storage.FirstOrDefault(stoe => stoe.ItemName == Stor.ItemName);

            if (Stor == null)
            {
                return BadRequest();
              
            }
            if (Stor.ItemName == stor.ItemName)
            {
                return BadRequest();
            }
            if (stor != null)
            {
                return Ok(stor.Id);
            }
           
            m_db.Storage.Add(Stor);
            m_db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = Stor.Id }, Stor);
        }

        [HttpPut]
        public IHttpActionResult UpdateStorage(long id, Storage Stor)
        {
            if (Stor == null)
            {
                return BadRequest();
            }


            Storage Storage = m_db.Storage.Find(Stor.Id);
            if (Storage == null) { return NotFound(); }
            Storage.ItemName = Stor.ItemName;
            Storage.StorageItem = Stor.StorageItem;
            Storage.Category = Stor.Category;


            m_db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public IHttpActionResult DeleteStorage(long id)
        {
            Storage Stor = m_db.Storage.Find(id);
            if (Stor == null)
            {
                return NotFound();
            }
            m_db.Storage.Remove(Stor);
            m_db.SaveChanges();
            return Ok(Stor);
        }








    }
}
