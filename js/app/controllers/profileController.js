$(function () {
    $(document).on('click', '.profile', function(e){
        e.preventDefault();

        $("#container").html(TEMPLATES.PROFILE);
    });

    var showError = function(err) {
        var msg = new notify();
        msg.error(err.message);
    }

    var showSuccess = function() {
        var msg = new notify();
        msg.success('saving user data.');
    }

    var updateUser = function() {
        var newEmail = $("#profile-controller #email").val();
        var newPass = $("#profile-controller #pass").val();

        if(!newEmail && !newPass) {
            showError(new Error('Please, fill some data'));
            return ;
        }

        var user = new userPersistor();
        var currUser = user.getUser();

        if(newEmail) {
            currUser.setEmail(newEmail);
        }

        if(newPass) {
            currUser.setPassword(newPass);
        }

        currUser.save(null, function(obj) {
            showSuccess();
        }, function(error) {
            showError(error);
        });
    };

    $(document).on('click', '#saveProfileChanges', updateUser);
}());