using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using VF.Business.Models;

namespace VF.Web.Controllers
{
    public class PostBoardController : Controller
    {
        //
        // GET: /PostBoard/

        public JsonResult GetAllPosts()
        {
            var stdMsg = new string[]{
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui id elit sagittis semper. Integer quis diam vitae libero convallis vestibulum et at nisl. Sed nec enim blandit urna ultrices malesuada. Aliquam quis tellus ligula. Sed sed sem ut arcu gravida mollis nec ac tortor. Vestibulum accumsan, lacus quis blandit feugiat, odio tortor imperdiet nisi, ut facilisis diam elit ut nunc. Sed bibendum augue non nulla consequat suscipit. Nulla tellus odio, ultrices aliquet eros nec, placerat venenatis mauris. Aenean pellentesque, nulla et laoreet convallis, urna turpis malesuada nisl, ac venenatis libero nunc et nulla.\r\nAliquam tortor magna, vestibulum sed enim at, interdum ultricies massa. Suspendisse potenti. Nulla vulputate, purus sit amet auctor scelerisque, tellus magna tempor neque, a mollis augue dolor sed quam. In hac habitasse platea dictumst. Nulla blandit, risus at dapibus aliquam, lectus sapien iaculis lorem, sit amet ultricies purus nulla a urna. Curabitur tempus nisi sed sapien elementum hendrerit. Duis cursus, urna non auctor varius, mauris ipsum mattis risus, sed tincidunt sem sapien tincidunt risus. Quisque purus velit, dapibus in convallis eu, aliquet nec lorem. Aliquam tincidunt risus vel erat faucibus placerat. Nunc sit amet tortor dui. Proin turpis mi, vehicula et ornare at, lacinia ut dolor. Quisque volutpat pellentesque ligula quis eleifend.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in dui id elit sagittis semper. Integer quis diam vitae libero convallis vestibulum et at nisl. Sed nec enim blandit urna ultrices malesuada. Aliquam quis tellus ligula. Sed sed sem ut arcu gravida mollis nec ac tortor. Vestibulum accumsan, lacus quis blandit feugiat, odio tortor imperdiet nisi, ut facilisis diam elit ut nunc. Sed bibendum augue non nulla consequat suscipit. Nulla tellus odio, ultrices aliquet eros nec, placerat venenatis mauris. Aenean pellentesque, nulla et laoreet convallis, urna turpis malesuada nisl, ac venenatis libero nunc et nulla."
            };

            var posts = new Posts();
            for(var crtMsg = 0; crtMsg < 7; crtMsg++){
                posts.PostItems.Add(new MessageData{
                    Message = stdMsg[crtMsg % 2],
                    Title = String.Format("Message heading {0}", crtMsg)
                });
            }
            return Json(posts);
        }

    }
}
