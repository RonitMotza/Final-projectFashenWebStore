using Project_Gmar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class RatingController : ApiController
    {
        ApplicationDbContext m_db = new ApplicationDbContext();

        public IEnumerable<Rating> GetAllRating()
        {
            return m_db.Rating;
        }

        /*public IHttpActionResult GetOneItem(long id)
        {
            Items Items = m_db.Items.Find(id);
            if (Items == null)
            {
                return NotFound();
            }
            return Ok(Items);
        }*/

        [HttpPost]
        public IHttpActionResult CreateNewRating(Rating Rating)
        {
            if (Rating == null)
            {
                return BadRequest();
            }
            m_db.Rating.Add(Rating);
            m_db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = Rating.Id }, Rating);
        }

        [HttpPut]
        public IHttpActionResult UpdateItem(long id, Rating Rating)
        {
            if (Rating == null)
            { return BadRequest(); }
          
            Rating Ratings = m_db.Rating.Find(Rating.Id);
            if (Ratings == null)
            { return NotFound(); }
            Ratings.CustomerId = Rating.CustomerId;
            Ratings.ItemId = Ratings.ItemId;
        

            m_db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public IHttpActionResult DeleteRatings(long id)
        {
            Rating Ratings = m_db.Rating.Find(id);
            if (Ratings == null)
            {
                return NotFound();
            }
            m_db.Rating.Remove(Ratings);
            m_db.SaveChanges();
            return Ok(Ratings);
        }

    }
}
