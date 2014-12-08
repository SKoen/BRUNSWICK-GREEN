$(function () {

    'use strict'
    var user = new userPersistor();
    var data = user.getUser();
    if (data) {
            notify.success("Hello " + data.attributes.username + "!");
            $("#user-bar").html(TEMPLATES.USERBAR);
            $("#user-bar #user-bar-username").html(data.attributes.username);
            $("#container").html(TEMPLATES.MAIN);
    } else {
        $("#login-register-template").html(TEMPLATES.LOGIN);
    }

    // Used in a lot of places
    $(document).on('click', '.logout', function(){
        var userSession = new userPersistor();
        userSession.logout();

        location.reload();
    });
}());