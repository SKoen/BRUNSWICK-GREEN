$(function () {
    $(document).on('click', '#register-controller #register', function (e) {
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();
        var password2 = $("#password2").val();
        var email = $("#email").val();

        var user = new userPersistor();
        user.register(username, password, password2, email, registerSuccessCallback, registerErrorCallback);
    });

    $(document).on('click', '#register-controller #login-switch', function (e) {
        $("#login-register-template").html(TEMPLATES.LOGIN);
        return false;
    });

    function registerSuccessCallback(data) {
        notify.success("Registration completed!");
        $("#container").html(TEMPLATES.MAIN);
    };

    function registerErrorCallback(err) {
        notify.error(err);
    };

}());