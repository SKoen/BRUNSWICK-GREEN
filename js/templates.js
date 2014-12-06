var TEMPLATES = {
    LOGIN : function() {
        return '<div class="col-md-9 col-sm-12 text-center main-column"> \
        		<section id="login-section"> \
	                <h1>PENGUIN GALLERY</h1> \
	                <a href="#" id="login"> \
	                    <div class="round-logo"> \
	                        <img src="css/images/penguin.png" class="img-responsive" /> \
	                        LOGIN \
	                    </div> \
	                </a> \
	                <div> \
	                    <input type="text" placeholder="Username ..." id="username" /> \
	                </div> \
	                <div> \
	                    <input type="password" placeholder="******" id="password" /> \
	                </div> \
	                <div class="main-options"> \
	                    <a href="#"> \
	                        <div id="register-switch">JOIN US</div> \
	                    </a> \
	                    <a href="#"> \
	                        <div class="try-it">TRY IT FOR FREE!</div> \
	                    </a> \
	                </div> \
	            </div> \
            </section>';
    },
    REGISTER : function() {
        return '<div class="col-md-9 col-sm-12 text-center main-column"> \
                <section id="register-section"> \
                    <h1>PENGUIN GALLERY</h1> \
                    <a href="#" id="register"> \
                        <div class="round-logo"> \
                            <img src="css/images/penguin.png" class="img-responsive" /> \
                            Register \
                        </div> \
                    </a> \
                    <div> \
                        <input type="text" placeholder="Username ..." id="username" /> \
                    </div> \
                    <div> \
                        <input type="text" placeholder="Email ..." id="email" /> \
                    </div> \
                    <div> \
                        <input type="password" placeholder="******" id="password" /> \
                    </div> \
                    <div> \
                        <input type="password" placeholder="******" id="password2" /> \
                    </div> \
                    <div class="main-options"> \
                        <a href="#"> \
                            <div id="login-switch">LOGIN</div> \
                        </a> \
                        <a href="#"> \
                            <div class="try-it">TRY IT FOR FREE!</div> \
                        </a> \
                    </div> \
                </section> \
            </div>';
    },
    MAIN: function() {
    	return '<div class="main-top"> \
	            <div class="row"> \
	                <a href="#"> \
	                    <div class="col-sm-4 main-link-albums"> \
	                        ALBUMS \
	                        <img src="css/images/penguins/01.png" /> \
	                    </div> \
	                </a> \
	                <a href="#"> \
	                    <div class="col-sm-offset-4 col-sm-4 main-link-albums text-right"> \
	                        PROFILE \
	                        <img src="css/images/penguins/02.png" /> \
	                    </div> \
	                </a> \
	            </div> \
	            <div class="row"> \
	                <a href="#"> \
	                    <div class="col-sm-4 col-sm-offset-4 main-link-top3"> \
	                        TOP 3<img src="css/images/penguins/03.png" /> \
	                    </div> \
	                </a> \
	            </div> \
	        </div> \
	        <div class="row main-bottom"> \
	            <a href="#"> \
	                <div class="col-sm-4 main-link-categories"> \
	                    <img src="css/images/penguins/04.png" /> \
	                    CATEGORIES \
	                </div> \
	            </a> \
	            <div class="col-xs-12 text-center"> \
	                <a href="#"> \
	                    <div class="main-enter-link"> \
	                        ENTER IN PENGUIN WORLD \
	                    </div> \
	                </a> \
	            </div> \
	        </div> \
	    </div>';
	}
};