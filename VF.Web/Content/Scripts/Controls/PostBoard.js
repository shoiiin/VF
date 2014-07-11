function PostBoard() {
    this.Init = init;
    this.GetAllPosts = getAllPosts;

    var Selector = {
        Control: '.postBoard',
        PostItTemplate: '.postItTemplate .postIt',
        PostIt: '.postIt',
        Title: '.postHeader .title',
        Contents: '.postContents',
        Close: '.close'
    };

    var Constants = {
        Controller: 'PostBoard',
        Action: {
            GetAllPosts: 'GetAllPosts'
        },
        PostItHeight: 422,
        PostItWidth:322
    };

    var zIndex = 1;

    function init() {
        $(document).delegate(Selector.PostIt, VF.Click, function (event) {
            var closeBtn = $(event.target).closest('.close');
            if (closeBtn.length > 0) {
                var postIt = $(this).closest(Selector.PostIt);
                postIt.remove();
            } else {
                var control = $(this).closest(Selector.Control);
                $(this).css({ 'z-index': zIndex++ });
            }
        });
    }

    function getAllPosts() {
        var ajaxProxy = VF.Environment.GetAJAXAdapter();
        var url = VF.Environment.RootURL + Constants.Controller + "/" + Constants.Action.GetAllPosts;
        ajaxProxy.setAJAXReturnFormat('json');
        ajaxProxy.call(url, getAllPosts_Callback);
    }

    function getAllPosts_Callback(jsonData) {
        var control = $(Selector.Control);
        var postItTemplate = control.find(Selector.PostItTemplate);
        $(jsonData.PostItems).each(function (crtPost, postData) {
            renderPostIt(control, postItTemplate, postData);
        });
    }

    function renderPostIt(control, postItTemplate, postData) {
        var postItClone = postItTemplate.clone();
        postItClone.find(Selector.Title).text(postData.Title);
        postItClone.find(Selector.Contents).text(postData.Body);
        var randomUI = getRandomUI(control, { height: Constants.PostItHeight, width: Constants.PostItWidth});
        postItClone.css({
            'top': randomUI.top + 'px',
            'left': randomUI.left + 'px'
        });
        postItClone.addClass(randomUI.postItClass);
        control.append(postItClone);
    }

    function getRandomUI(control, postItSize) {
        var postItClass = ['postItCol1', 'postItCol2', 'postItCol3', 'postItCol4'];
        var height = control.outerHeight();
        var width = control.outerWidth();

        var postItPos = {
            top: Math.floor(Math.random() * 1000) % (height - postItSize.height),
            left: Math.floor(Math.random() * 1000) % (width - postItSize.width),
            postItClass: postItClass[Math.floor(Math.random() * 10) % 4]
        };
        return postItPos;
    }
}