$(function () {
    var user = new userPersistor();
    var myAlbums = new albumPersistor();
    $(document).on('click', '#my-albums-controller  #btn-add-album', function (e) {
        var albumTitle = $("#my-albums-controller #txt-album-title").val();
        var currentUser = user.getUser();

        myAlbums.createAlbum(albumTitle, currentUser, success, error);

        function success(data) {
            notify.success("Album Created!");
            console.log(data);
        };

        function error(error) {
            notify.error(error);
        }
    });
}());