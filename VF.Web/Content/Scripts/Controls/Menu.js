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
            Controller: 'Main',
            Action: 'GetPostMessageForm'
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
                case 'POST':
                    var ajaxProxy = VF.Environment.GetAJAXAdapter();
                    var url = VF.Environment.RootURL + MenuAction.Post.Controller + "/" + MenuAction.Post.Action;
                    ajaxProxy.setAJAXReturnFormat('html');
                    ajaxProxy.call(url, postAction_Callback);
                    break;
            }
        });
    }

    function homeAction_Callback(htmlData) {
        $(Selector.PageContent).html(htmlData);
    }

    function postAction_Callback(htmlData) {
        var modalWindow = VF.Environment.GetModalWindow();
        modalWindow.OpenModal(htmlData, {
            dialogClass: 'postMessagePopup',
            title: 'Varsa-ti fierea !',
            resizable: false
            });
    }
}