
function Dialog() {
    var $dialog = $('<div></div>')
		.html('')
		.dialog({
		    autoOpen: false,
		    title: 'Dialog',
		    modal: true,
		    dialogClass: 'popupWindow',
		    width: 'auto'
		});

    this.OpenModal = openModal;
    this.Close = close;

    function openModal(htmlData, dialogOptions) {
        dialogOptions = dialogOptions || {};
        for (var option in dialogOptions) {
            $dialog.dialog('option', option, dialogOptions[option]);
        }
        $dialog.html(htmlData);
        $dialog.dialog('open');
    }

    function close() {
        $dialog.dialog('close');
    }
}

