function restarEnteros() {
    var num1 = 5;
    var num2 = 4;
    var num3 = num1 - num2;

    document.writeln("<p>" + num1 + " - " + num2 + " = " + num3 + "</p>");
}

function dividir() {
    var dividendo = prompt("Ingrese el dividendo:");
    var divisor = prompt("Ingrese el divisor:");
    dividendo = parseFloat(dividendo);
    divisor = parseFloat(divisor);

    if (!isNaN(dividendo) && !isNaN(divisor)) {
        if (divisor !== 0) {
            var resultado = dividendo / divisor;
            alert("El resultado de la división es: " + resultado);
        } else {
            alert("No se puede dividir por cero (0).");
        }
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

function diasVividos() {
    var nombre = prompt("Por favor, ingrese su nombre:");
    var edad = prompt("Ingrese su edad:");

    // Convertir la edad a número 
    edad = parseInt(edad);

    if (!isNaN(edad)) {
        var diasVividos = edad * 365;
        alert(nombre + ", has vivido " + diasVividos + " días hasta el momento.");
    } else {
        alert("Por favor, ingrese una edad válida.");
    }
}

function dobleTripleCuadruple() {
    var num1 = prompt("Ingresa un numero");
    var doble = num1 * 2;
    var triple = num1 * 3;
    var cuadruple = num1 * 4;
    if (!isNaN(num1)) {
        alert("Has introducido el numero " + num1 + "\nEl doble es " + doble + "\nEl triple es " + triple + "\nEl cuadruple es " + cuadruple);
    } else {
        alert("Por favor, ingresa un numero");
    }
}

function longitud() {
    var radio = prompt("Ingrese el radio del círculo:");

    // Convertir la entrada del usuario a un número
    radio = parseFloat(radio);

    if (!isNaN(radio) && radio > 0) {
        // Calcular la longitud de la circunferencia
        var circunferencia = 2 * Math.PI * radio;

        // Calcular el área del círculo
        var area = Math.PI * Math.pow(radio, 2);

        // Mostrar los resultados en un párrafo al final de la página
        document.writeln("<p>Longitud de la circunferencia: " + circunferencia.toFixed(2) + "</p>");
        document.writeln("<p>Área del círculo: " + area.toFixed(2) + "</p>");
    } else {
        alert("Por favor, ingrese un valor de radio válido (mayor que cero).");
    }
}

function calcularContadores() {
    var numero = prompt("Por favor, ingrese un número:");

    // Convertir la entrada del usuario a un número
    numero = parseFloat(numero);

    if (!isNaN(numero)) {
        var contador1 = numero + 5;
        var contador2 = numero + 21;
        var contador3 = numero - 4;

        // Construir el texto con los resultados
        var resultadosTexto =
            "Número introducido: " + numero + "\n" +
            "Contador 1 (suma 5): " + contador1 + "\n" +
            "Contador 2 (suma 21): " + contador2 + "\n" +
            "Contador 3 (resta 4): " + contador3;

        // Mostrar los resultados en un cuadro de alerta
        alert(resultadosTexto);
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function convertirNumeroEntero() {
    var numero = prompt("Por favor, ingrese un número entero:");

    // Convertir la entrada a un número entero
    numero = parseInt(numero);

    if (!isNaN(numero)) {
        // Convertir a base 16 (hexadecimal)
        var base16 = numero.toString(16).toUpperCase();

        // Convertir a base 5 (quíntuple)
        var base5 = numero.toString(5);

        // Mostrar los resultados en una alerta
        document.writeln("En base 16: " + base16 + "<br>En base 5: " + base5);
    } else {
        alert("Por favor, ingrese un número entero válido.");
    }
}

function baseOcho() {
    var numeroOctal = prompt("Por favor, ingrese un número en base 8:");

    // Convertir de base 8 a base 10 (decimal)
    var base10 = parseInt(numeroOctal, 8);

    // Convertir de base 10 (decimal) a base 2 (binario)
    var base2 = base10.toString(2);

    // Mostrar los resultados en una alerta
    alert("En base 10 (decimal): " + base10 + "\nEn base 2 (binario): " + base2);
}

function numEnBase() {
    var numero = prompt("Por favor, ingrese un número entero:");
        var base = prompt("Ingrese la base a la que desea convertir el número:");

        // Convertir las entradas a números enteros
        numero = parseInt(numero);
        base = parseInt(base);

        // Verificar si las entradas son números válidos y si la base está en el rango [2, 36]
        if (!isNaN(numero) && !isNaN(base) && base >= 2 && base <= 36) {
            var numeroConvertido = numero.toString(base);

            // Mostrar el resultado en una alerta
            document.writeln("El número en la base seleccionada: " + numeroConvertido);
        } else {
            alert("Por favor, ingrese un número entero válido y una base válida");
        }
}

