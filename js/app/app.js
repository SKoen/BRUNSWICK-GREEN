$(function () {
    'use strict';

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
}());