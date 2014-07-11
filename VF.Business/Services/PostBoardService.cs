using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VF.Business.Models;
using VF.Business.Data;

namespace VF.Business.Services
{
    /// <summary>
    /// Handler the post board CRUD operations: create, read, update, delete
    /// </summary>
    public class PostBoardService
    {
        private VFDataContainer vfDbContext = new VFDataContainer();
        public PostBoardService()
        {

        }
        public MessageData Create(MessageData message)
        {
            var retVal = new MessageData();
            Message newMessage = new Message
            {
                Title = message.Title,
                Body = message.Body,
                SenderId = 1
            };

            vfDbContext.Messages.Add(newMessage);
            vfDbContext.SaveChanges();
            retVal.ID = String.Format("{0}", newMessage.Id);
            return retVal;
        }

        public IList<MessageData> ReadAll()
        {
            IList<MessageData> retVal = vfDbContext.Messages.Select(m => new MessageData
            {
                Title = m.Title,
                Body = m.Body,
                Sender = m.User.Name,
                SentDate = m.SentDate
            }).ToList();
            return retVal;
        }
    }
}
