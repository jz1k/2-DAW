// Ejercicio 4: Uso del operador typeof
function ejercicio4() {
    var numero = 42;
    var texto = "Hola, mundo";
    var booleano = true;
    var arreglo = [1, 2, 3];
    var funcion = function() { return "Hola desde la función"; }

    console.log(typeof numero);  // Devuelve "number"
    console.log(typeof texto);    // Devuelve "string"
    console.log(typeof booleano); // Devuelve "boolean"
    console.log(typeof arreglo);  // Devuelve "object"
    console.log(typeof funcion);  // Devuelve "function"
}

// Ejercicio 5: Sobrescribir variables y funciones globales
function ejercicio5() {
    // Declaración de una variable global
    var variableGlobal = "Soy una variable global";

    // Función global
    function funcionGlobal() {
        return "Soy una función global";
    }

    document.write("<p>Variable global original: " + variableGlobal + "</p>");
    document.write("<p>Resultado de la función global original: " + funcionGlobal() + "</p>");

    // Sobrescribir la variable global
    variableGlobal = "Variable global sobrescrita";

    // Sobrescribir la función global
    function funcionGlobal() {
        return "Función global sobrescrita";
    }

    document.write("<p>Variable global sobrescrita: " + variableGlobal + "</p>");
    document.write("<p>Resultado de la función global sobrescrita: " + funcionGlobal() + "</p>");
}

// Ejercicio 6: Manejo de eventos onmouseover, onmouseout y onblur
function ejercicio6() {
    // Las funciones para los eventos onmouseover y onmouseout se definen en el HTML.
    // Véase el código en el HTML original.

    // Función para el evento onblur
    function validarCampo() {
        var campo = document.getElementById("miCampo");
        if (campo.value === "") {
            alert("El campo no puede estar vacío. Por favor, ingrese un valor.");
            campo.focus(); // Devolvemos el foco al campo para que el usuario lo complete.
        }
    }
}

// Ejercicio 7: Conversión de cadenas a números
function ejercicio7() {
    var numero1 = Number("-99");
    var numero2 = Number("don");

    document.write("Número 1: " + numero1 + "<br>"); // Muestra -99
    document.write("Número 2: " + numero2 + "<br>"); // Muestra NaN
}

// Ejercicio 8: Extracción de mes y año de una fecha
function ejercicio8() {
    var fecha = new Date(2023, 5, 26); // Año 2023, mes 5 (junio, los meses comienzan desde 0), día 26
    var mes = fecha.getMonth() + 1; // Se suma 1 para obtener el mes en formato estándar
    var año = fecha.getFullYear();

    document.write("Fecha: " + fecha.toDateString() + "<br>");
    document.write("Mes: " + mes + "<br>");
    document.write("Año: " + año + "<br>");
}

// Ejercicio 9: Mostrar contenido de un array
function ejercicio9() {
    var milista = ['panadero', 456, 10, 1, 211];

    document.write("<ul>");
    for (var i = 0; i < milista.length; i++) {
        document.write("<li>" + milista[i] + "</li>");
    }
    document.write("</ul>");
}
