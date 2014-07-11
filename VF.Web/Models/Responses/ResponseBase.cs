using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VF.Web.Models.Responses
{
    public class ResponseBase
    {
        public bool Success { get; set; }

        public ResponseBase()
        {
            Success = true;
        }
    }
}