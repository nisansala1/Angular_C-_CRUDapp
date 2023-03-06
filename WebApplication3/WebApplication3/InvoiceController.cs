using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebApplication3.Models;

namespace WebApplication3
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public InvoiceController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select InvoiceId, CustomerName, TransactionDate,Products,Discount,Quantity,Total from dbo.Invoices";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InvoiceAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Invoice objInvoice)
        {
            string query = @"Insert into dbo.Invoices values
                ('" + objInvoice.CustomerName + "','" + objInvoice.TransactionDate + "'," +
                "'" + objInvoice.Products + "','" + objInvoice.Discount + "','" + objInvoice.Quantity + "'," +
                "'" + objInvoice.Total + "')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InvoiceAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Invoice objInvoice)
        {
            string query = @"Update dbo.Invoices set
                CustomerName = '" + objInvoice.CustomerName + @"',Products = '" + objInvoice.Products + @"',Quantity = '" + objInvoice.Quantity + @"',Total = '" + objInvoice.Total + @"',Discount = '" + objInvoice.Discount + @"',
                TransactionDate='" + objInvoice.TransactionDate + "' where InvoiceId = " + objInvoice.InvoiceId;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InvoiceAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Invoices where InvoiceId = " + id;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("InvoiceAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

    }
}
