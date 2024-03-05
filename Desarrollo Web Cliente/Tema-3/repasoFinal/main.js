var window1, window2, window3;
var user = {};

function openWindow1() {
    window1 = window.open("ventana1.html", "Ventana1", "width=300,height=300,top=0,left=0");
    window1.document.body.style.backgroundColor = "lightgreen";
}

function openWindow2() {
    window2 = window.open("", "", "width=300,height=300,top=0,right=0");
    window2.document.body.style.backgroundColor = "lightblue";

    if (user.username && user.password) {
        window2.document.write('Usuario: ' + user.username + '<br>Contraseña: ' + user.password + '<br>');
        window2.document.write('<button type="button" onclick="deletePassword(); setTimeout(closeWindow2, 5000);" id="borrarContrasena">Borrar Contraseña</button>');
    } else {
        window2.document.write('Por favor, crea un usuario primero.');
    }
}

function openWindow3() {
    window3 = window.open("", "", "width=300,height=300,bottom=0");
    window3.document.body.style.backgroundColor = "pink";

}

function closeWindow1() {
    window1.close();
}

function closeWindow2() {
    window2.close();
}

function closeWindow3() {
    window3.close();
}



// Ventana1
function crearUsuario() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var repitaContrasena = document.getElementById("repitaContrasena").value;

    if (usuario.length !== 5 || !/^[a-z]+$/.test(usuario)) {
        document.getElementById("mensaje").innerHTML = "El usuario debe tener 5 caracteres en minúscula.";
    } else if (contrasena !== repitaContrasena) {
        document.getElementById("mensaje").innerHTML = "Las contraseñas no coinciden.";
    } else {
        // Asignar los valores a user.username y user.password
        user.username = usuario;
        user.password = contrasena;
        document.getElementById("mensaje").innerHTML = "Usuario creado con éxito.";
    }
}

// Ventana2
function deletePassword() {
    user.password = "";
    document.getElementById("userData").innerHTML = "Usuario: " + user.username + "<br>Contraseña: " + user.password;
}