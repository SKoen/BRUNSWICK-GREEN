var albumPersistor = (function () {
    'use strict';

    var appKey = 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx',
		JSAPIKey = '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v';

    var _self = function userPersistor() {
        Parse.initialize(appKey, JSAPIKey);
    }

    _self.prototype.getAlbums = function (currentUser, selector, success) {
        var Album = Parse.Object.extend("Album");
        var query = new Parse.Query(Album);
        query.equalTo("userId", currentUser);
        query.find({
            success: function (results) {
                var result = [];
                var albums = $(selector);
                albums.html('');

                for (var i = 0; i < results.length; i++) {
                    var object = results[i];
                    result.push({
                        id: object.id,
                        name: object.get('albumName'),
                        likes: object.get('likeCount')
                    });

                    var newElement = $("<a data-album-id='" + object.id + "' class='add-album load-album' href='#'></a>");
                    newElement.append("<div class='album-title'>" + object.get('albumName') + "</div>");
                    newElement.append("<div class='album-likes'>Likes: " + object.get('likeCount') + "</div>");

                    albums.append(newElement)
                }
            },
            error: function (error) {
                notify.error(erro.message);
            }
        });
    };

    _self.prototype.createAlbum = function (albumTitle, currentUser, success) {
        if (!albumTitle) {
            notify.error("Album title filed is required!");
            return false;
        }
        if (!currentUser) {
            notify.error("You must be logged in!");
            return false;
        }
        var Album = Parse.Object.extend("Album");
        var album = new Album();
        album.set("likeCount", 0);
        album.set("userId", currentUser);
        album.set("albumName", albumTitle);
        album.save(null,
            {
                success: function (data) { success(data) },
                error: function (user, err) { notify.error(erro.message);}
            });
    };
    
    return _self;
})();