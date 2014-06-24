using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.ExceptionHandling;
using VF.Web.Constants;
using System.Security;
using Microsoft.Practices.EnterpriseLibrary.Logging;
using System.ServiceModel;
using Microsoft.Practices.EnterpriseLibrary.Caching;

namespace VF.Web.Controllers
{
    public class MainController : BaseController
    {
        //
        // GET: /Main/

        private ICacheManager cacheManager = CacheFactory.GetCacheManager("DataCache");

        [HttpGet]
        public ActionResult Index()
        {
            //TODO: place your code here and customize the view
            return View();
        }

        public ActionResult NewPage1(string operation)
        {
            //TODO: template function for testing the normal controller action. 
            // Remove it from your controller
            if (operation == "ERROR")
                throw (new Exception("Internal generic error - Exception"));
            return View();
        }

        [HttpPost]
        public ActionResult AJAX_HTML(string operation)
        {
            LogEntry logData = new LogEntry();
            logData.Categories = new List<string>();
            logData.Categories.Add("Action");
            logData.Message = "Invoke method: AJAX_HTML";
            logData.Severity = System.Diagnostics.TraceEventType.Information;

            Logger.Write(logData);
            //TODO: template function for AJAX_HTML controller action
            // Remove it from your controller
            if (operation == "ERROR")
                throw (new SecurityException("Internal security error - SecurityException"));
            return PartialView();
        }

        [HttpPost]
        public JsonResult AJAX_JSON(string operation)
        {
            //TODO: template function for AJAX_JSON controller action
            // Remove it from your controller
            if (operation == "ERROR")
                throw (new ApplicationException("Internal application error - ApplicationException"));
            return Json(new
            {
                Success = true,
                Data = new
                {
                    Message = "AJAX - JSON result"
                }
            });
        }


        [HttpPost]
        public ActionResult ClearCache()
        {
            cacheManager.Flush();
            return PartialView();
        }
    }
}
