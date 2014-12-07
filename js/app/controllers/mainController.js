$(function () {
    $(document).on('click', '#main-controller #load-albums', function (e) {
        e.preventDefault();
        console.log("load-albums");
        $('#main-controller').html(TEMPLATES.MYALBUMS);
    });

}());