var TEMPLATES = TEMPLATES || {};

TEMPLATES.MYALBUMS = '<div id="my-albums-controller"> \
                        <div class="row conf-header"> \
                            <a href="#"> \
                                <div class="col-sm-2 text-center"> \
                                    <img src="css/images/penguin-logo.png" /> \
                                </div> \
                                <div class="col-sm-10 text-center header-text"> \
                                    WELCOME TO MY ALBUMS \
                                </div> \
                            </a> \
                        </div> \
                         \
                        <div class="row conf-main"> \
                            <div class="col-sm-3 conf-menu text-center"> \
                                <a href="#"> \
                                    <img src="css/images/profile.png" class="img-responsive img-circle profile-image" /> \
                                </a> \
                                <ul> \
                                    <li><a href="#"><span id="username"></span> PROFILE</a></li> \
                                    <li><a href="#" id="load-main"><span></span> MAIN</a></li> \
                                </ul> \
                            </div> \
                            <div class="col-sm-9"> \
                                <div id="user-albums"></div> \
                                <div class="add-album">\
                                    <input type="text" placeholder="album title">\
                                    <br/>\
                                    <a href="#" id="btn-add-album">Add album</a>\
                                </div>\
                            </div> \
                        </div> \
                         \
                        <!--footer--> \
                        <div class="row conf-footer text-center"> \
                            <div class="col-sm-4"> \
                                <a href="#"> \
                                    CONTACTS \
                                </a> \
                            </div> \
                            <div class="col-sm-4"> \
                                <a href="#"> \
                                    SERVICES \
                                </a> \
                            </div> \
                            <div class="col-sm-4"> \
                                <a href="https://softuni.bg/" target="_blank"> \
                                    SOFTUNI.BG \
                                </a> \
                            </div> \
                        </div> \
                    </div>';