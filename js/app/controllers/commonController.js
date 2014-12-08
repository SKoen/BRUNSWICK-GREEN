$(function () {
    $(document).on('click', '#container .load-main', function (e) {
        e.preventDefault();
        $('#container').html(TEMPLATES.MAIN);
    });
}());