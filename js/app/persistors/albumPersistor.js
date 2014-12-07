var albumPersistor = (function () {
    'use strict';

    var appKey = 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx',
		JSAPIKey = '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v';

    var _self = function userPersistor() {
        Parse.initialize(appKey, JSAPIKey);
    }

    _self.prototype.getUserAlbums = function (success, error) {
        Parse.User.logIn(user, pass, {
            success: function (user) { success(user); },
            error: function (user, err) { error(err.message); }
        });
    };

    _self.prototype.createAlbum = function (albumTitle, currentUser, success, error) {
        var Album = Parse.Object.extend("Album");
        var album = new Album();
        album.set("likeCount", 0);
        album.set("userId", currentUser);
        album.set("albumName", albumTitle);

        album.save(null,
            {
                success: function (data) { succes(data) },
                error: function (err) { console.log(err._allPreviousSaves[0]); }
            });
    };
    
    return _self;
})();