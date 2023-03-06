using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class Invoice
    {

        public int InvoiceId { get; set; }
        public string CustomerName { get; set; }
        public DateTime TransactionDate { get; set; }

        public string Products { get; set; }

        public int Discount { get; set; }

        public int Quantity { get; set; }

        public int Total { get; set; }


    }
}
