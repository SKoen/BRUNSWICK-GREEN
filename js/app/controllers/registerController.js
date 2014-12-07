$(function () {
    $(document).on('click', '#registerController #btn-register', function (e) {
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
}());