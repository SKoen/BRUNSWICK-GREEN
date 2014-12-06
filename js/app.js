$(function(){
	'use strict';

	function successCallback(data) {
		$("#container").html(TEMPLATES.MAIN);
	};

	function errorCallback(data, err) {
		var n = noty({
			text        : 'The following error occured:<br />- ' + err.message,
            type        : 'error',
            dismissQueue: true,
            closeWith   : ['click', 'backdrop'],
            modal       : true,
            layout      : 'center',
            theme       : 'defaultTheme'
        });
	};

	$(document).on('click', '#register', function(e){
		// TODO: Implement this
		e.preventDefault();

		var username = $("#username").val();
		var password = $("#password").val();
		var password2 = $("#password2").val();
		var email = $("#email").val();

		var user = new userPersistor(successCallback, errorCallback);
		user.register(username, password, password2, email);
	});

	$(document).on('click', '#login', function(e) {
		e.preventDefault();

		var username = $("#username").val();
		var password = $("#password").val();

		var user = new userPersistor(successCallback, errorCallback);
		user.login(username, password);
	});

	$("#section-forms").on('click', '#register-switch', function(e) {
		e.preventDefault();
		$("#section-forms").html(TEMPLATES.REGISTER);
	});

	$("#section-forms").on('click', '#login-switch', function(e) {
		e.preventDefault();
		$("#section-forms").html(TEMPLATES.LOGIN);
	});
});