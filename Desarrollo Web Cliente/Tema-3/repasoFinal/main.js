var window1, window2, window3;
var usuario, contrasena, repitaContrasena;

var user = {
    username: "",
    password: "",
};

var lista2 = [];


function openWindow1() {
    window1 = window.open("ventana1.html", "Ventana1", "width=300,height=300,top=0,left=0");
    window1.document.body.style.backgroundColor = "lightgreen";

}

function openWindow2() {
    window2 = window.open("", "", "width=300, height=300, left=1920, top=0");
    window2.document.body.style.backgroundColor = "lightblue";
    
    window2.document.write("<p>Usuario: " + user.username + "</p>");
    window2.document.write("<p>Contraseña: " + user.password + "</p>");
    window2.document.write("<button onclick='deletePassword()'>Borrar Contraseña</button>");
    
}

function openWindow3() {
    window3 = window.open("", "", "width=300,height=300,bottom=0");
    window3.document.body.style.backgroundColor = "pink";
    rellenarArray(document.getElementById("lista2").value);
    cuentaAtras();
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
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    repitaContrasena = document.getElementById("repitaContrasena").value;


    if (usuario.length !== 5 || !/^[a-z]+$/.test(usuario)) {
        document.getElementById("mensaje").innerHTML = "El usuario debe tener 5 caracteres en minúscula.";
    } else if (contrasena !== repitaContrasena) {
        document.getElementById("mensaje").innerHTML = "Las contraseñas no coinciden.";
    } else {
        // Asignar los valores a user.username y user.password
        user.username = usuario;
        user.password = contrasena;
        document.getElementById("mensaje").innerHTML = "Usuario creado con éxito.";
        console.log("Usuario: " + user.username);
        console.log("Contraseña: " + user.password);
    }
}

// Ventana2
function deletePassword() {
    user.password = "";

    window2.document.write("<p>Contraseña borrada correctamente. Debes de introducirla de nuevo.</p>");

    setTimeout(function () {
        window2.close();
    }, 5000);
}

function consoleLog() {
    console.log("Usuario: " + user.username);
    console.log("Contraseña: " + user.password);
}

function cuentaAtras() {
    var segundos = document.getElementById("lista1").value;
    var interval = setInterval(function () {
        window3.document.body.innerHTML = "<p>" + segundos + "</p>";
        segundos--;

        if (segundos < 0) {
            clearInterval(interval);
            window3.document.body.innerHTML = "<p>El array con numeros pares es "+lista2+"</p>";
            //window3.close();
        }
    }, 1000);
}

function rellenarArray(max) {
    for (let i = 0; i < max ; i++) {
        let numeroRandom = Math.floor(Math.random() * 100) + 1;
        if (numeroRandom % 2 === 0) {
            lista2.push(numeroRandom);
        }
        
    }
    return lista2;
}