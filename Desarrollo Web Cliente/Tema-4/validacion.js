// Función para convertir a mayúsculas
function convertirAMayusculas(elemento) {
    elemento.value = elemento.value.toUpperCase();
}

// Función para validar los campos NOMBRE y APELLIDOS
function validarNombreYApellidos() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var erroresContainer = document.getElementById("errores");

    if (nombre === "" || apellidos === "") {
        erroresContainer.innerHTML = "Error en el nombre o apellidos: Ambos campos son obligatorios.";
        if (nombre === "") {
            document.getElementById("nombre").focus();
        } else {
            document.getElementById("apellidos").focus();
        }
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar la edad
function validarEdad(elemento) {
    var edad = elemento.value;
    var erroresContainer = document.getElementById("errores");

    if (isNaN(edad) || edad < 0 || edad > 105) {
        erroresContainer.innerHTML = "Error en la edad: Debe ser un número entre 0 y 105.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar el NIF
function validarNIF(elemento) {
    var nif = elemento.value;
    var erroresContainer = document.getElementById("errores");
    // Expresión regular para validar el NIF: 8 números, un guión y una letra.
    var regexNIF = /^\d{8}-[a-zA-Z]$/;

    if (!regexNIF.test(nif)) {
        erroresContainer.innerHTML = "Error en el NIF: Debe tener 8 números, un guión y una letra.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar el email
function validarEmail(elemento) {
    var email = elemento.value;
    var erroresContainer = document.getElementById("errores");
    // Expresión regular para validar el formato del email.
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        erroresContainer.innerHTML = "Error en el E-mail: Formato de correo electrónico incorrecto.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar la provincia
function validarProvincia(elemento) {
    var provincia = elemento.value;
    var erroresContainer = document.getElementById("errores");

    if (provincia === "0") {
        erroresContainer.innerHTML = "Error en la provincia: Debe seleccionar una provincia.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar la fecha
function validarFecha(elemento) {
    var fecha = elemento.value;
    var erroresContainer = document.getElementById("errores");
    // Expresión regular para validar la fecha en formato dd/mm/aaaa o dd-mm-aaaa.
    var regexFecha = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/;

    if (!regexFecha.test(fecha)) {
        erroresContainer.innerHTML = "Error en la fecha: Formato de fecha incorrecto.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar el teléfono
function validarTelefono(elemento) {
    var telefono = elemento.value;
    var erroresContainer = document.getElementById("errores");
    // Expresión regular para validar el teléfono: 9 dígitos obligatorios.
    var regexTelefono = /^\d{9}$/;

    if (!regexTelefono.test(telefono)) {
        erroresContainer.innerHTML = "Error en el teléfono: Debe tener 9 dígitos.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para validar la hora
function validarHora(elemento) {
    var hora = elemento.value;
    var erroresContainer = document.getElementById("errores");
    // Expresión regular para validar la hora en formato hh:mm.
    var regexHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!regexHora.test(hora)) {
        erroresContainer.innerHTML = "Error en la hora: Formato de hora incorrecto.";
        elemento.focus();
    } else {
        erroresContainer.innerHTML = "";
    }
}

// Función para confirmar el envío
function confirmarEnvio() {
    var confirmacion = confirm("¿Desea enviar el formulario?");
    if (!confirmacion) {
        return false;
    }
    return true;
}
