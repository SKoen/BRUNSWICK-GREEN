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
    $(document).on('click', '#main-controller #penguin-world', function (e) {
        e.preventDefault();
        console.log("penguin world");
        $('#main-controller').html(TEMPLATES.PENGUINWORLD);
    });

    $(document).on('click', '#main-controller #myProfile', function (e) {
        e.preventDefault();
        console.log("myProfile");
        $('#main-controller').html(TEMPLATES.MYPROFILE);
    });

}());