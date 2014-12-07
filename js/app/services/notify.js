var notify = (function () {
    function notify(type, message) {
        noty({
            text: message,
            type: type,
            dismissQueue: true,
            closeWith: ['click', 'backdrop'],
            modal: true,
            layout: 'center',
            theme: 'defaultTheme'
        });
    }
    return {
        error: function (message) {
            notify('error', 'The following error occured:<span class=noty-message>' + message + '</span>');
        },
        success: function (message) {
            notify('success', 'Success:<span class=noty-message>' + message + '</span>');
        }
    }
}());
