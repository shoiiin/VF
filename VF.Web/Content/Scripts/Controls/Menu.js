function Menu() {
    this.Init = init;

    var Selector = {
        Control: '.mainMenu',
        MenuItem: '.mainMenu .menuItem',
        PageContent: '.pageContent'
    };

    var MenuAction = {
        Home: {
            Controller: 'Main',
            Action: 'GetPostBoard'
        },
        Post: {
            Controller: '',
            Action: ''
        },
        About: {
            Controller: '',
            Action: ''
        }
    };

    function init() {
        $(document).delegate(Selector.MenuItem, VF.Click, function(event){
            var menuItem = $(this);
            var menuItemData = menuItem.data('vf');
            switch (menuItemData.Action) {
                case 'HOME':
                    var ajaxProxy = VF.Environment.GetAJAXAdapter();
                    var url = VF.Environment.RootURL + MenuAction.Home.Controller + "/" + MenuAction.Home.Action;
                    ajaxProxy.setAJAXReturnFormat('html');
                    ajaxProxy.call(url, homeAction_Callback);
                    break;
            }
        });
    }

    function homeAction_Callback(htmlData) {
        $(Selector.PageContent).html(htmlData);
    }
}