$(function () {
    'use strict'

    $("#login-register-template").html(TEMPLATES.LOGIN);

    $(document).on('click', '.logout', function(){
        var userSession = new userPersistor();
        userSession.logout();

        location.reload();
    });
}());