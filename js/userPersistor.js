var userPersistor = (function(){
    'use strict';

    var successCallback,
    	errorCallback;

	var appKey = 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx',
		JSAPIKey = '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v';

    var _self = function userPersistor(successCallback, errorCallback) {
    	if(!successCallback || !errorCallback) {
    		throw new Error('Please provide the callback functions that will handle the results');
    	}

    	successCallback = successCallback;
    	errorCallback = errorCallback;

    	Parse.initialize(appKey, JSAPIKey);
    }

	_self.prototype.login = function(user, pass) {
		Parse.User.logIn(user, pass, { successCallback, errorCallback });
	}

	_self.prototype.register = function(user, pass, email) {
		var user = new Parse.User();
		user.set("username", user);
		user.set("password", pass);
		user.set("email", email);

		user.signUp(null, { successCallback, errorCallback });
	}

	_self.prototype.logout = function() {
		// TODO: Implement this

		Parse.User.logOut();
	}

	return _self;
})();