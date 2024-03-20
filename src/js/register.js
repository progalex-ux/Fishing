var base_url = "http://localhost/facebook/";

function SaveData() {
    var email = $("#mail").val();
    var password = $("#password").val();

    var user = {
        email: email,
        password: password
    }

  
    sendData(user);
}

function sendData(user) {
    $.ajax({
        url: base_url + "src/php/data_user.php",
        dataType: "json",
        type: "post",
        data: user,
        success: function (data, estado, jhrx) {
            
        },
        error: function (jhrx, estado, errorA) {
           
        }
    });
}