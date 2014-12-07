$(function () {

    $(document).on('click', '#login-controller  #login', function (e) {
        var username = $("#username").val();
        var password = $("#password").val();

        var user = new userPersistor();
        user.login(username, password, authSuccess, authError);
    });


    function authSuccess(data) {
        var userData = {
            id: data.id,
            sessionToken: data._sessionToken,
            username: data.attributes.username,
            email: data.attributes.email
        };
        userSession.setCurrentUser(userData);
        notify.success("Hello " + userData.username + "!");
        $("#user-bar").html(TEMPLATES.USERBAR);
        $("#user-bar #user-bar-username").html(userData.username);
        $("#container").html(TEMPLATES.MAIN);
    };

    function authError(err) {
        notify.error(err)
    };
    $(document).on('click', '#user-bar #logout', function(e){
        e.preventDefault();
        $("#container").html(TEMPLATES.LOGIN);
        $("#user-bar").html('');
        userSession.setCurrentUser({});
        location.reload();
    })
    $(document).on('click', '#login-controller #register-switch', function (e) {
        $("#login-register-template").html(TEMPLATES.REGISTER);
        return false;
    });
}());