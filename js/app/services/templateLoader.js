var templateLoader = (function () {
    'use strict'

    var templates = "file:///C:/Users/marti_000/Documents/Visual Studio 2013/Projects/BRUNSWICK-GREEN/templates/"

    var loadLoginRegister = function (target) {
        $(target).load("../../../templates/registerLogin/_login.html");
    }

    var loadLogin = function (target) {
        ajaxRequester.get("../../../templates/registerLogin/_login.html",
            function (data) {
                if (target) {
                    $(target).html(data);
                }
                return data;
            },
            error)
    }

    var loadRegister = function (target) {
        ajaxRequester.get("../../../templates/register.html",
            function (data) {
                if (target) {
                    $(target).html(data);
                }
                return data;
            },
            error)
    }

    var applyData = function(template, data){
        var rendered = Mustache.render(data, templateData);
        return rendered;
    }

    function error(message) {
        console.log("Error" + message);
    }

    return {
        loadLogin: loadLogin,
        loadRegister: loadRegister,
        applyData: applyData,
        loadLoginRegister: loadLoginRegister
    }
})();
