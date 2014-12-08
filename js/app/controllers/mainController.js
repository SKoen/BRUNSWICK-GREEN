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
    $(document).on('click', '#penguin-world', function (e) {
        e.preventDefault();       
        $('#container').html(TEMPLATES.AlBUMS_VIEW);

    });

    $(document).on('click', '#main-controller .add-album.my-album', function (e) {
        e.preventDefault();
        var albumName = $(this).find('>:first-child').text();              
        $('#main-controller').html(TEMPLATES.UPLOADPHOTO);
        $('h1').text(albumName);
        $('h1').attr('data-album-id', $(this).attr('data-album-id'));
       
    });

    $(document).on("change", '#main-controller #input-file', function (e) {
        var files = e.target.files || e.dataTransfer.files;
        file = files[0];      
    });

    $(document).on('click', '#main-controller #upload-photo', function (e) {
        e.preventDefault();
		var albumTitle = $(this).parent().parent().find('h1').text();
		var albumId = $(this).parent().parent().find('h1').attr('data-album-id');
		var userId = Parse.User.current().id; 
        var photoTitle = $(this).parent().find('>:first-child').val();      
            var serverUrl = 'https://api.parse.com/1/files/' + file.name;              
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
                                alert("Photo created successfully!");
                                //TODO: Trying to make the relation between the album and photo
                            //     //updateStatusBar("status", "Starting query 3 of 4");

                            //     Parse.initialize('jz77c8IPJpyGwYB2G3owJKVVlhgDiwhksSWkaXOx', '5W6fpNbwpXn0opJWg2GbEkbD2Azo0J2ISRTIyJ2v');
                            //     var alb = Parse.Object.extend("Album");
                            //     var album_query = new Parse.Query(alb);
                            //     album_query.equalTo("objectId", albumId);
                            //     album_query.find({
                            //     success: function(alb) 
                            //     {
                            //         var pht = Parse.Object.extend("Photo");                                    
                            //         var photo_query = new Parse.Query(pht);
                            //         photo_query.equalTo("objectId", pht.objectId);
                            //         var relation = alb[0].relation({"photos" : {"__type":"Relation","className":"Photo", "objectId" : pht.objectId}});
                            //         photo_query.find({
                            //         success: function(singlePhotoQuery) 
                            //         {
                            //             relation.add(singlePhotoQuery[0]);
                            //             alb[0].save();                                       
                            //         }, // end success for P_query2
                            //         error: function(error4) 
                            //         {
                            //             var obj = jQuery.parseJSON(error2);
                            //             alert("Error: " + error4.code + " " + error4.message);
                            //         }
                            //     }); 
                            }, 
                            error: function(error) 
                            {
                                var obj = jQuery.parseJSON(error);
                                var notify = new notify();
                                notify.error(error.message);
                             }
                        }); 
                    }
                    }, 
                    error: function(error) 
                    {
                        var obj = jQuery.parseJSON(error);                   
                        var notify = new notify();
                        notify.error(error.message);
                    }
                }); 
}); 
}());