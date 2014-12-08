$(function () {
    var user = new userPersistor();
    var myAlbums = new albumPersistor();
    var file = null;

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

    $(document).on('click', '#main-controller .add-album', function (e) {
        e.preventDefault();
        console.log("add-album");
        var albumName = $(this).find('>:first-child').text();              
        $('#main-controller').html(TEMPLATES.UPLOADPHOTO);
        $('h1').text(albumName);
        $('h1').attr('data-album-id', $(this).attr('data-album-id'));
        console.log(albumName);
       
    });

    $(document).on("change", '#main-controller #input-file', function (e) {
        var files = e.target.files || e.dataTransfer.files;
        file = files[0];
        //console.log(file);
    });



    $(document).on('click', '#main-controller #upload-photo', function (e) {
        e.preventDefault();
		var albumTitle = $(this).parent().parent().find('h1').text();
		var albumId = $(this).parent().parent().find('h1').attr('data-album-id');
		var userId = Parse.User.current().id; 
        var photoTitle = $(this).parent().find('>:first-child').val();

        //var file;
        var fileURL;
        var strFileName;
        // $('#main-controller #input-file').bind("change", function(e) 
        //     {
        //         var files = e.target.files || e.dataTransfer.files;
        //         file = files[0];
        //         //console.log(file);
        //     });

        // $('#uploadbutton').click(function() 
        //     {
            var serverUrl = 'https://api.parse.com/1/files/' + file.name;
                //updateStatusBar("status", "starting query 1 of 4 - file upload - this may take 5-10 seconds");
                $.ajax({
                    type: "POST",
                    beforeSend: function(request) {
                    request.setRequestHeader("X-Parse-Application-Id", 'jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx');
                    request.setRequestHeader("X-Parse-REST-API-Key", '05MEPKi8CWp4wp3dpTwDPWFz0zBwUGBdCrmYUkaz');
                    request.setRequestHeader("Content-Type", file.type);
                },
                url: serverUrl,
                data: file,
                processData: false,
                contentType: false,
                success: function(data) {
                //updateStatusBar("status", "Completed file upload, starting query 2 of 4");
                if(data) 
                {
                    var fileName = "" + data.name;
                    fileURL = data.url;
                    strFileName = data.name;
                    serverUrl = 'https://api.parse.com/1/classes/Photo';
                    $.ajax(
                        {
                            type: "POST",
                            beforeSend: function(request) 
                            {
                                request.setRequestHeader("X-Parse-Application-Id", "jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx");
                                request.setRequestHeader("X-Parse-REST-API-Key", '05MEPKi8CWp4wp3dpTwDPWFz0zBwUGBdCrmYUkaz');
                                request.setRequestHeader("Content-Type", "application/json");
                            },
                            url: serverUrl,
                            data: '{ "userId" : {"__type": "Pointer",  "className": "_User", "objectId": '+"\""+userId+"\""+'}, "albumId" : {"__type": "Pointer",  "className": "Album", "objectId": '+"\""+albumId+"\""+'}, "imageFile" : { "name" : '+"\""+fileName+"\""+', "__type" : "File"}}',
                            processData: false,

                            success: function(data2) 
                            {
                                //updateStatusBar("status", "Starting query 3 of 4");

                                Parse.initialize('jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx', '05MEPKi8CWp4wp3dpTwDPWFz0zBwUGBdCrmYUkaz');
                                var Photo = Parse.Object.extend("Photo");
                                var P_query = new Parse.Query(Photo);
                                P_query.equalTo("objectId", "RandomIDforImageAlreadyLoadedGoesHere");
                                P_query.first({
                                success: function(P_object) 
                                {
                                    //updateStatusBar("status", "query 4 of 4");
                                    var objImage = P_object.get("YourImageColumnName");
                                    P_query = new Parse.Query(Photo);
                                    P_query.equalTo("objectId", strPhotoID);
                                    P_query.first({
                                    success: function(P_object2) 
                                    {
                                        objImage.url = data.url;
                                        objImage.name = data.name;
                                        P_object2.set(strPhotoImageDest, objImage);
                                        P_object2.save();
                                        //updateStatusBar("status", "upload completed");
                                    }, // end success for P_query2
                                    error: function(error4) 
                                    {
                                        var obj = jQuery.parseJSON(error2);
                                        alert("Error: " + error4.code + " " + error4.message);
                                    }
                                }); // end p_query2
                            }, // end success for P_query
                            error: function(error4) 
                            {
                                var obj = jQuery.parseJSON(error2);
                                alert("Error: " + error4.code + " " + error4.message);
                             }
                        }); // end p_query
                    }, // end success for ajax 2
                    error: function(error2) 
                    {
                        var obj = jQuery.parseJSON(error2);
                        alert("Error: " + error2.code + " " + error2.message);
                    }
                }); // end ajax 2
            } else {
                            alert("Data IS NULL");
                        }               
        }, // end success for ajax
        error: function(data) 
        {
            var obj = jQuery.parseJSON(data);
            alert(obj.error);
        }
    }); // end ajax
}); // end  $('#uploadbutton').click(function() 






        // $('#main-controller').html(TEMPLATES.UPLOADPHOTO);
        // $("h1").text(albumName);
        // console.log(albumName);
       
    // });

}());