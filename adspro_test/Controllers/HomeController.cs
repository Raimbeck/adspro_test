using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace adspro_test.Controllers
{
    [Authorize(Roles = "Admin, Customer")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var id = User.Identity.GetUserId();
            ViewBag.Id = id;

            return View();
        }
    }
}