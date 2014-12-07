$(function () {
    $(document).on('click', '#container #load-main', function (e) {
        e.preventDefault();
        $('#main-controller').html(TEMPLATES.MAIN);
    });

}());