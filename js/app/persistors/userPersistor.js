var userPersistor = (function () {
    'use strict';

    var appKey = 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx',
		JSAPIKey = '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v';

    var _self = function userPersistor(successCallback, errorCallback) {
        if (!successCallback || !errorCallback) {
            throw new Error('Please provide the callback functions that will handle the results');
        }

        this._successCallback = successCallback;
        this._errorCallback = errorCallback;

        Parse.initialize(appKey, JSAPIKey);
    }

    _self.prototype.login = function (user, pass) {
        // TODO: Implement validation
        // validateInput();

        var successCallback = this._successCallback;
        var errorCallback = this._errorCallback;

        Parse.User.logIn(user, pass, {
            success: function (user) { successCallback(user); },
            error: function (user, err) { errorCallback(err.message); }
        })
    };

    _self.prototype.register = function (user, pass, pass2, email) {
        var successCallback = this._successCallback;
        var errorCallback = this._errorCallback;

        if (pass != pass2) {
            // return Parse.Promise.error(new Parse.Error(Parse.Error.OTHER_CAUSE, "The 2 passwords differ."));
        }
        var query = new Parse.Query(Parse.Role);
        query.equalTo("name", "registeredUser");
        return query.find({
            success: function (Role) {
                var role = Role[0];

                var newUser = new Parse.User();
                newUser.set("username", user);
                newUser.set("password", pass);
                newUser.set("email", email);
                newUser.set("role", role);
                newUser.signUp(null, {
                    success: function (currUser) {
                        successCallback();
                    },
                    error: function (newUser, err) {
                        errorCallback(err.message);
                    }
                });
            }
        });
    };

    _self.prototype.addToDefaultRole = function () {
        var query = new Parse.Query(Parse.Role);

        query.equalTo("name", "registeredUser");

        var r = query.find({
            success: function (Role) {
                notify.success(Role);

                // Role.getUsers().add(user);
                // role.saveInBackground().then(function(){
                // 	successCallback(user);
                // });
            },
            error: function (user, err) {
                notify.error(err.message);
            }
        });
    }

    _self.prototype.logout = function () {
        // TODO: Implement this

        Parse.User.logOut();
    };

    _self.prototype.getUser = function () {
        return Parse.User.current();
    };

    _self.prototype.isLoggedIn = function () {

    };

    return _self;
})();