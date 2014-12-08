$(function () {
    $.ajax({
        method: "GET",
        headers: {
            "X-Parse-Application-Id": PARSE_APP_ID,
            "X-Parse-REST-API-Key": PARSE_REST_API_KEY
        },
        url: 'https://api.parse.com/1/classes/Album?userId="CAjHrhtk38"' // TODO: make the "userId" dynamic
    }).success(function (data) {
        for (var q in data.results) {
           
           $('<div/>', {
               onclick: function () { window.location = 'photo.html' },
                text: 'Go to this Album!'
            }).appendTo('#albums');
        }
    }).error(function () {
        alert('Cannot load questions.');
    });
});