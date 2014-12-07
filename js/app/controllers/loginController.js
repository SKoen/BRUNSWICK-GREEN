$(function () {
    var user = new userPersistor();

    $(document).on('click', '#login-controller  #login', function (e) {
        var username = $("#username").val();
        var password = $("#password").val();
        user.login(username, password, authSuccess, authError);
    });

    console.log();

    function authSuccess(data) {
        notify.success("Hello " + data.attributes.username + "!");
        $("#user-bar").html(TEMPLATES.USERBAR);
        $("#user-bar #user-bar-username").html(data.attributes.username);
        $("#container").html(TEMPLATES.MAIN);
    };

    function authError(err) {
        notify.error(err)
    };
    $(document).on('click', '#user-bar #logout', function(e){
        e.preventDefault();
        
        user.logout();
        $("#container").html(TEMPLATES.LOGIN);
        $("#user-bar").html('');
        location.reload();
    })
    $(document).on('click', '#login-controller #register-switch', function (e) {
        $("#login-register-template").html(TEMPLATES.REGISTER);
        return false;
    });
}());