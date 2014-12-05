function proceedLogin(){
    var username = $("#user").val();
    var password = $("#pass").val();
    requested.login(username, password, loginSuccessful, loginError)

    function loginSuccessful(){
        alert('Successful');
    }

    function loginError(){
        alert('Invalid password or username')
    }
}