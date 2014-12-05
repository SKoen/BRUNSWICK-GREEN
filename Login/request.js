var requested = (function(){
    var headers =
    {
        "X-Parse-Application-Id": "jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx",
        "X-Parse-REST-API-Key": "05MEPKi8CWp4wp3dpTwDPWFz0zBwUGBdCrmYUkaz"
    };

    function loginFunction(username, password, success, error){
        jQuery.ajax({
            method: "GET",
            headers: headers,
            url: "https://api.parse.com/1/login",
            data: {username: username, password: password},
            success: success,
            error: error
        });
    }

    return {
        login: loginFunction
    }

})();
