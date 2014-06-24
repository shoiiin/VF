using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VF.Web.Models
{
    public class MenuItemModel
    {
        public List<string> ClassNames { get; set; }
        public string Label { get; set; }

        public MenuItemModel()
        {
            ClassNames = new List<string>();
        }
    }
}