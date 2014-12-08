var userPersistor = (function () {
    'use strict';

    var appKey = 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx',
		JSAPIKey = '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v';

    var _self = function userPersistor() {
        Parse.initialize(appKey, JSAPIKey);
    }

    _self.prototype.login = function (user, pass, success, error) {
        Parse.User.logIn(user, pass, {
            success: function (user) { success(user); },
            error: function (user, err) { error(err); }
        });
    };

    _self.prototype.register = function (user, pass, pass2, email, success, error) {
        if (pass != pass2) {
            notify.error("Confirm password is not same as password");
            return ;
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
                        success();
                    },
                    error: function (newUser, err) {
                        error(err.message);
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
                // 	success(user);
                // });
            },
            error: function (user, err) {
                notify.error(err.message);
            }
        });
    }

    _self.prototype.logout = function () {
        Parse.User.logOut();
    };

    _self.prototype.getUser = function () {
        return Parse.User.current();
    };

    _self.prototype.isLoggedIn = function () {
        // TODO:
    };

    return _self;
})();