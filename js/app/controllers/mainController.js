$(function () {
    var user = new userPersistor();
    var myAlbums = new albumPersistor();

    $(document).on('click', '#main-controller #load-albums', function (e) {
        e.preventDefault();

        var currentUser = user.getUser();

        $('#main-controller').html(TEMPLATES.MYALBUMS);
        var selector = "#my-albums-controller #user-albums";
        myAlbums.getAlbums(currentUser, selector, null);
    });

}());