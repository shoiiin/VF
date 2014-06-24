using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VF.Business.Models
{
    public class Posts
    {
        public List<MessageData> PostItems { get; set; }

        public Posts()
        {
            PostItems = new List<MessageData>();
        }
    }
}
