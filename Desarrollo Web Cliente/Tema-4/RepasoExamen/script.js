// Variables para almacenar contraseña y reloj
var contraseñaNueva = "muydificil";
var reloj;

// Asigna un valor al cronómetro
function asignarValorCronometro(valor) {
    document.getElementById("cronometro").textContent = valor;
}

// Inicia el proceso de cuenta atrás
function iniciarCuentaAtras() {
    var numero = parseInt(document.getElementById("numero").value);
    if (numero < 1 || numero > 100) {
        mostrarAlerta("El número debe estar entre 1 y 100, ambos incluidos");
        document.getElementById("numero").focus();
    } else {
        reloj = setInterval(procesarCuentaAtras, 1000);
        ocultarAlerta();
    }
}

// Procesa la cuenta atrás y realiza acciones cuando llega a cero
function procesarCuentaAtras() {
    var nro = parseInt(document.getElementById('cronometro').textContent);
    nro--;
    document.getElementById('cronometro').textContent = nro;
    if (nro === 0) {
        detenerCronometro();
    }
}

// Detiene el cronómetro
function detenerCronometro() {
    clearInterval(reloj);
    realizarCambio();
}

// Realiza acciones cuando se necesita un cambio
function realizarCambio() {
    document.getElementById("formulario").setAttribute("hidden", "hidden");
    document.getElementById("resultado").textContent = "Tiempo para cambiar la contraseña expirado";

    var botonSalir = document.createElement("button");
    botonSalir.textContent = "Salir";
    botonSalir.setAttribute("onclick", "salir()");
    document.getElementById("resultado").appendChild(botonSalir);
    botonSalir.setAttribute("id", "botonSalir");
    botonSalir.setAttribute("class", "botonEnviar");
}

// Comprueba datos al enviar el formulario
function comprobarDatos() {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    if (usuario === "admin" && clave === contraseñaNueva) {
        document.getElementById("formulario").removeAttribute("hidden");
        document.getElementById("formularioOriginal").removeChild(document.getElementById("botonEnviar"));
        asignarValorCronometro(30);
        iniciarCuentaAtras();
    }
}

// Cambia la contraseña
function cambiarContraseña() {
    contraseñaNueva = document.getElementById("nuevaContraseña").value;
    detenerCronometro();
}

// Realiza acciones al salir
function salir() {
    // Restaurar el formulario original y ocultar el resultado
    document.getElementById("formulario").setAttribute("hidden", "hidden");
    document.getElementById("resultado").textContent = "";

    // Restaurar el botón de enviar
    var botonEnviar = document.createElement("input");
    botonEnviar.setAttribute("type", "submit");
    botonEnviar.setAttribute("name", "enviar");
    botonEnviar.setAttribute("onclick", "comprobarDatos()");
    botonEnviar.setAttribute("id", "botonEnviar");
    botonEnviar.setAttribute("value", "Enviar formulario");
    document.getElementById("formularioOriginal").appendChild(botonEnviar);

    // Limpiar campos
    ["clave", "usuario", "nombre", "apellidos", "codigoVerificacion"].forEach(function(campo) {
        document.getElementById(campo).value = "";
    });

    // Limpiar errores
    document.getElementById("errores").textContent = "";
}

// Funciones de validación:

// Valida que el nombre contenga solo letras
function validarNombre() {
    var expresion = /^[a-zA-Z]+$/;
    var nombre = document.getElementById("nombre").value;
    if (!expresion.test(nombre)) {
        document.getElementById("nombre").focus();
        mostrarError("Recuerda no dejar vacío ningún campo ni introducir números");
    } else {
        document.getElementById("nombre").blur();
        ocultarError();
    }
}

// Valida que los apellidos contengan solo letras
function validarApellidos() {
    var expresion = /^[a-zA-Z]+$/;
    var apellidos = document.getElementById("apellidos").value;
    if (!expresion.test(apellidos)) {
        document.getElementById("apellidos").focus();
        mostrarError("Recuerda no dejar vacío ningún campo ni introducir números");
    } else {
        document.getElementById("apellidos").blur();
        ocultarError();
    }
}

// Valida que el código contenga solo números
function validarCodigo() {
    var expresion = /^[0-9]+$/;
    var codigoVerificacion = document.getElementById("codigoVerificacion").value;
    if (!expresion.test(codigoVerificacion)) {
        document.getElementById("codigoVerificacion").focus();
        mostrarError("Recuerda no dejar vacío ningún campo, solo se permiten caracteres numéricos");
    } else {
        document.getElementById("codigoVerificacion").blur();
        ocultarError();
    }
}

// Valida que el usuario contenga solo letras
function validarUsuario() {
    var expresion = /^[a-zA-Z]+$/;
    var usuario = document.getElementById("usuario").value;
    if (!expresion.test(usuario)) {
        document.getElementById("usuario").focus();
        mostrarError("Recuerda no dejar vacío ningún campo ni introducir números");
    } else {
        document.getElementById("usuario").blur();
        ocultarError();
    }
}

// Funciones de manejo de alertas y errores

function mostrarAlerta(mensaje) {
    document.getElementById("alertas").textContent = mensaje;
}

function ocultarAlerta() {
    document.getElementById("alertas").textContent = "";
}

function mostrarError(mensaje) {
    document.getElementById("errores").textContent = mensaje;
}

function ocultarError() {
    document.getElementById("errores").textContent = "";
}