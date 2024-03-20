var base_url = "http://localhost/facebook/";

function SaveData() {
    var email = $("#email").val();
    var password = $("#password").val();

    var user = {
        email: email,
        password: password
    }

    console.log(user);
    sendData(user);
}

function sendData(user) {
    $.ajax({
        url: base_url + "php/data_user.php",
        dataType: "json",
        type: "post",
        data: user,
        success: function (datos, estado, jhrx) {
            console.log(datos);
        },
        error: function (jhrx, estado, errorA) {
            alert('Contraseña/Usuario incorrectos');
        }
    });
}
// How to do a register with JavaScript, Html and Php ?