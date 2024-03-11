var window1, window2, window3;
var usuario, contrasena, repitaContrasena;
var nlista1;
var nlista2 = [];
var listaPar = [];
var user = {
    username: "",
    password: "",
    intentos: 2,
    crearUsuario: function (usuario, contrasena, repitaContrasena) {
        if (contrasena == repitaContrasena) {
            if (usuario.length == 5 && usuario == usuario.toUpperCase()) {
                if (contrasena.length == 3) {
                    //asigna a username el usuario pero antes pasandolo a String
                    this.username = usuario;
                    this.password = contrasena;
                    alert("Usuario y contraseña creados correctamente");
                } else {
                    alert("La contraseña debe tener 3 cifras");
                    this.intentos = this.intentos - 1;
                    mostrarIntentos();
                }
            } else {
                alert("El usuario debe tener 5 caracteres en mayuscula");
                this.intentos = this.intentos - 1;
                mostrarIntentos();
            }
        } else {
            alert("Usuario o contraseña incorrectos");
            this.intentos = this.intentos - 1;
            mostrarIntentos();
        }
    },
    deletePassword: function () {
        this.password = "000";
        alert("Contraseña borrada");
    },
    mostrarDatos: function () {
        window2.document.write("<p>Usuario y Contraseña</p>");
        window2.document.write("<p>Usuario: " + this.username + "</p>");
        window2.document.write("<p>Contraseña: " + this.password + "</p>");
        window2.document.write("<p>No aparece porque da error al sacar el valor del usuario y contraseña</p>");
    }
}

function openWindow1() {
    window1 = window.open("ventana1.html", "Ventana1", "width=300,height=300,top=0,left=0");
    window1.document.body.style.backgroundColor = "lightgreen";

}

function openWindow2() {
    window2 = window.open("", "", "width=300, height=300, left=1920, top=0");
    
    user.mostrarDatos();
    
    window2.document.write("<button onclick='deletePassword()'>Borrar Contraseña</button>");
    //Cuando hago click en el boton, se ejecuta la funcion deletePassword
    window2.addEventListener("click", deletePassword);
    window2.document.body.style.backgroundColor = "lightblue";
}

function closeWindow1() {
    window1.close();
}

function closeWindow2() {
    window2.close();
}

//Numero a escoger de una lista1 entre 5 y 10 y
function mostrarLista1() {
    nlista1 = document.getElementById("lista1").value;
    mostrarLista2();
}

//Rellena el array con numeros entre 2024 y 2050
function mostrarLista2() {
    for (let i = 0; i < nlista1; i++) {
        nlista2.push(Math.floor(Math.random() * (2050 - 2024)) + 2024);
    }
    //muestra el array en el id de p del html
    document.getElementById("lista2").innerHTML = nlista2;
}

//Funcion para crear un usuario
function crearUsuario() {
    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    repitaContrasena = document.getElementById("repitaContrasena").value;
    user.crearUsuario(usuario, contrasena, repitaContrasena);
}

//Borra la contraseña e inicializa la cuenta atrás para mostrar los numeros pares del array
function deletePassword() {
    user.deletePassword();
    cuentaAtras();
}

function mostrarIntentos() {
    if (user.intentos > 0) {
        alert("Te quedan " + user.intentos + " intentos");
    } else {
        alert("Contraseña por defecto: 000");
    }
    user.intentos--;
}

//Funcion para mostrar la contraseña
function mostrarContrasena() {
    alert(user.password);
}

//Lista2 que añade al nuevo array solo los numeros pares
function crearListaPar() {
    for (let i = 0; i < nlista2.length; i++) {
        if (nlista2[i] % 2 === 0) {
            listaPar.push(nlista2[i]);
        }
    }
}

//Cuenta atras de 5 segundos que muestra todo
function cuentaAtras() {
    var segundos = 5;
    var interval = setInterval(function () {
        window2.document.body.innerHTML = "<p>" + segundos + "</p>";
        segundos--;

        if (segundos < 0) {
            clearInterval(interval);
            //muestra el array de numeros pares en la ventana2
            crearListaPar();
            window2.document.body.innerHTML = "<p>El array con numeros pares es " + listaPar + "</p>";
        }
    }, 1000);
}
