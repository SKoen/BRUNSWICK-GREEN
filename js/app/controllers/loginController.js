$(function () {

    $(document).on('click', '#login-controller  #login', function (e) {
        var username = $("#username").val();
        var password = $("#password").val();

        var user = new userPersistor(successCallback, errorCallback);
        user.login(username, password);
    });


    function successCallback(data) {
        $("#container").html(TEMPLATES.MAIN);
    };

    function errorCallback(err) {
        notify.error(err)
    };

    $(document).on('click', '#login-controller #register-switch', function (e) {
        $("#login-register-template").html(TEMPLATES.REGISTER);
        return false;
    });
}());