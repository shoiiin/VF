using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VF.Web.Models.Requests
{
    public class CreateMessageRequest: RequestBase
    {
        public string Sender { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public CreateMessageRequest()
        {
            Sender = "Annonymous";
        }
    }
}