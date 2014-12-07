$(function () {
    $(document).on('click', '#register-controller #register', function (e) {
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();
        var password2 = $("#password2").val();
        var email = $("#email").val();

        var user = new userPersistor(successCallback, errorCallback);
        user.register(username, password, password2, email);
    });

    $(document).on('click', '#register-controller #login-switch', function (e) {
        $("#login-register-template").html(TEMPLATES.LOGIN);
        return false;
    });

    function successCallback(data) {
        notify.success("Registration completed!");
        $("#container").html(TEMPLATES.MAIN);
    };

    function errorCallback(err) {
        notify.error(err)
    };

}());