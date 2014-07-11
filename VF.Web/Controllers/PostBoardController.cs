using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using VF.Business.Models;
using VF.Business.Services;
using VF.Web.Models.Requests;
using VF.Web.Models.Responses;

namespace VF.Web.Controllers
{
    public class PostBoardController : BaseController
    {
        //
        // GET: /PostBoard/

        [HttpPost]
        public JsonResult GetAllPosts()
        {
            var stdMsg = new string[]{
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui id elit sagittis semper. Integer quis diam vitae libero convallis vestibulum et at nisl. Sed nec enim blandit urna ultrices malesuada. Aliquam quis tellus ligula. Sed sed sem ut arcu gravida mollis nec ac tortor. Vestibulum accumsan, lacus quis blandit feugiat, odio tortor imperdiet nisi, ut facilisis diam elit ut nunc. Sed bibendum augue non nulla consequat suscipit. Nulla tellus odio, ultrices aliquet eros nec, placerat venenatis mauris. Aenean pellentesque, nulla et laoreet convallis, urna turpis malesuada nisl, ac venenatis libero nunc et nulla.\r\nAliquam tortor magna, vestibulum sed enim at, interdum ultricies massa. Suspendisse potenti. Nulla vulputate, purus sit amet auctor scelerisque, tellus magna tempor neque, a mollis augue dolor sed quam. In hac habitasse platea dictumst. Nulla blandit, risus at dapibus aliquam, lectus sapien iaculis lorem, sit amet ultricies purus nulla a urna. Curabitur tempus nisi sed sapien elementum hendrerit. Duis cursus, urna non auctor varius, mauris ipsum mattis risus, sed tincidunt sem sapien tincidunt risus. Quisque purus velit, dapibus in convallis eu, aliquet nec lorem. Aliquam tincidunt risus vel erat faucibus placerat. Nunc sit amet tortor dui. Proin turpis mi, vehicula et ornare at, lacinia ut dolor. Quisque volutpat pellentesque ligula quis eleifend.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui id elit sagittis semper. Integer quis diam vitae libero convallis vestibulum et at nisl. Sed nec enim blandit urna ultrices malesuada. Aliquam quis tellus ligula. Sed sed sem ut arcu gravida mollis nec ac tortor. Vestibulum accumsan, lacus quis blandit feugiat, odio tortor imperdiet nisi, ut facilisis diam elit ut nunc. Sed bibendum augue non nulla consequat suscipit. Nulla tellus odio, ultrices aliquet eros nec, placerat venenatis mauris. Aenean pellentesque, nulla et laoreet convallis, urna turpis malesuada nisl, ac venenatis libero nunc et nulla."
            };

            var postBoardService = new PostBoardService();
            ReadAllMessagesResponse posts = new ReadAllMessagesResponse
            {
                PostItems = (List<MessageData>)postBoardService.ReadAll()
            };
            return Json(posts);
        }

        [HttpPost]
        public JsonResult CreateMessage(CreateMessageRequest request)
        {
            var response = new CreateMessageResponse();
            var messageData = new MessageData
            {
                Sender = request.Sender,
                Title = request.Title,
                Body = request.Body
            };

            var postBoardService = new PostBoardService();
            var newMessage = postBoardService.Create(messageData);

            return Json(response);
        }
    }
}
