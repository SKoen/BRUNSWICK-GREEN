$(function () {
<<<<<<< HEAD
    'use strict'

    $("#login-register-template").html(TEMPLATES.LOGIN);

    $(document).on('click', '.logout', function(){
        var userSession = new userPersistor();
        userSession.logout();

        location.reload();
    });
=======
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
>>>>>>> 2267e7d2213568f773b1112890d7606e39dcbe3b
}());