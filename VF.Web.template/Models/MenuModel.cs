using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VF.Web.Models
{
    public class MenuModel
    {
        public List<MenuItemModel> MenuItems;
        public MenuModel()
        {
            MenuItems = new List<MenuItemModel>();
        }


    }
}