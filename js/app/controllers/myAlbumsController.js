$(function () {
    var user = new userPersistor();
    var myAlbums = new albumPersistor();
    $(document).on('click', '#my-albums-controller  #btn-add-album', function (e) {
        var albumTitle = $("#my-albums-controller #txt-album-title").val();
        $("#my-albums-controller #txt-album-title").val('');
        var currentUser = user.getUser();

        myAlbums.createAlbum(albumTitle, currentUser, successCreate);

        function successCreate(data) {
            var selector = "#my-albums-controller #user-albums";
            myAlbums.getAlbums(currentUser, selector, successRetrieve);
            notify.success("Album Created!");
        };

        function successRetrieve(results) {
        }

    });
}());