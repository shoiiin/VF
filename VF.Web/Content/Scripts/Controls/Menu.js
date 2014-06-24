function Menu() {
    this.Init = init;

    var Selector = {
        Control: '.mainMenu',
        MenuItem: '.mainMenu .menuItem'
    };

    function init() {
        $(document).delegate(Selector.MenuItem, VF.Click, function(event){
            var menuItem = $(this);
            var menuItemData = menuItem.data('vf');
            alert(menuItemData.Action);
        });
    }
}