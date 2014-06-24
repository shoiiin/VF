function PostBoard() {
    this.Init = init;
    this.GetAllPosts = getAllPosts;

    var Selector = {
        Control: '.postBoard',
        PostItTemplate: '.postItTemplate .postIt',
        PostIt: '.postIt',
        Title: '.postHeader .title',
        Contents: '.postContents',
        Close:'.postItHeader .close'
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
            var control = $(this).closest(Selector.Control);
            $(this).css({ 'z-index': zIndex++ });
        });
        $(document).delegate(Selector.Close, VF.Click, function (event) {
            var postIt = $(this).closest(Selector.PostIt);
            postIt.remove();
        });
    }

    function getAllPosts() {
        var ajaxProxy = VF.Environment.GetAJAXAdapter();
        var url = Constants.Controller + "/" + Constants.Action.GetAllPosts;
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
        postItClone.find(Selector.Contents).text(postData.Message);
        var randomUI = getRandomUI(control, { height: Constants.PostItHeight, width: Constants.PostItWidth});
        postItClone.css({
            'top': randomUI.top + 'px',
            'left': randomUI.left + 'px'
        });
        postItClone.addClass(randomUI.bgClass);
        control.append(postItClone);
    }

    function getRandomUI(control, postItSize) {
        var postItClass = ['bgCol1', 'bgCol2', 'bgCol3', 'bgCol4'];
        var height = control.outerHeight();
        var width = control.outerWidth();

        var postItPos = {
            top: Math.floor(Math.random() * 1000) % (height - postItSize.height),
            left: Math.floor(Math.random() * 1000) % (width - postItSize.width),
            bgClass: postItClass[Math.floor(Math.random() * 10) % 4]
        };
        return postItPos;
    }
}