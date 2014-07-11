using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VF.Business.Models
{
    public class MessageData
    {
        public string ID { get; set; }
        public string Sender { get; set; }
        public string Body { get; set; }
        public string Title { get; set; }
        public DateTime SentDate { get; set; }
    }
}
