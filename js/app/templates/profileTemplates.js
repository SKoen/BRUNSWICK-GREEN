var TEMPLATES = TEMPLATES || {};

TEMPLATES.PROFILE = '<div id="profile-controller"> \
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
                                <a href="#"><img src="css/images/profile.png" class="img-responsive img-circle profile-image" /></a> \
                                <ul><li><a href="#" class="load-main">Main</a></li></ul> \
                            </div> \
                            <div class="col-sm-9"> \
                                <h1 class="header-text">Change your settings here</h1>\
                                <div class="row"><label class="col-sm-2" for="email">New Email:</label><input class="col-sm-7" type="email" name="email" id="email" /></div>\
                                <div class="row"><label class="col-sm-2" for="pass">New Pass:</label><input class="col-sm-7" type="password" name="pass" id="pass" /></div>\
                                <div class="row"><button class="btn btn-success" id="saveProfileChanges">Save Changes</button></div>\
                            </div> \
                        </div> \
                        <!--footer--> \
                        <div class="row conf-footer text-center"> \
                            <div class="col-sm-4"><a href="#">CONTACTS</a></div> \
                            <div class="col-sm-4"><a href="#">SERVICES</a></div> \
                            <div class="col-sm-4"><a href="https://softuni.bg/" target="_blank">SOFTUNI.BG</a></div> \
                        </div> \
                    </div>';