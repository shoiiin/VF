using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VF.Business.Models;

namespace VF.Web.Models.Responses
{
    public class ReadAllMessagesResponse: ResponseBase
    {
        public IList<MessageData> PostItems { get; set; } 
        public ReadAllMessagesResponse()
        {
        }
    }
}