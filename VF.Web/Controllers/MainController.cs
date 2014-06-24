using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.ExceptionHandling;
using System.Security;


namespace VF.Web.Controllers
{
    public class MainController : BaseController
    {
        //
        // GET: /Main/

        [HttpGet]
        public ActionResult Index()
        {
            //TODO: place your code here and customize the view
            return View();
        }

        public ActionResult GetPostBoard()
        {
            return View();
        }
    }
}
