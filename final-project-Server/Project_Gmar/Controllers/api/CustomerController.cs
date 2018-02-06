using Project_Gmar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project_Gmar.Controllers.api
{
    public class CustomerController : ApiController
    {
        ApplicationDbContext m_db = new ApplicationDbContext();
        public IEnumerable<Customers> GetAllCusts()
        {
            return m_db.Customers;
        }
        public IHttpActionResult GetOneCust(long id)
        {
            Customers Cust = m_db.Customers.Find(id);
            if (Cust == null)
            {
                return NotFound();
            } 
           
            return Ok(Cust);
        }

        [HttpPost]
        public IHttpActionResult CreateNewCust(Customers Cust)
        {

            Customers cust = m_db.Customers.FirstOrDefault(cus => cus.Email == Cust.Email);
            
            if (Cust == null)
            {
                return BadRequest();
            }
            if (cust != null)
            {
                return Ok(cust.Id);
            }
            m_db.Customers.Add(Cust);
            m_db.SaveChanges();
            return CreatedAtRoute("DefaultApi", new { id = Cust.Id }, Cust);
        }

        [HttpPut]
        public IHttpActionResult UpdateCust(long id, Customers Cust)
        {
            if (Cust == null) 
            {
                return BadRequest();
            }

           
            Customers Customer = m_db.Customers.Find(Cust.Id);
            if (Customer == null) { return NotFound(); }
            Customer.Email = Cust.Email;
            //Customer.Name = Cust.Name;
            //Customer.Address = Cust.Address;
            //Customer.Date = Cust.Date;
          
            //Customer.LastName = Cust.LastName;
            
            m_db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpDelete]
        public IHttpActionResult DeleteCust(long id)
        {
            Customers Cust = m_db.Customers.Find(id);
            if (Cust == null)
            {
                return NotFound();
            }
            m_db.Customers.Remove(Cust);
            m_db.SaveChanges();
            return Ok(Cust);
        }



    }
}
