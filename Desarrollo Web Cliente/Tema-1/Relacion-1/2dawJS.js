function restarEnteros() {
    var num1 = 5;
    var num2 = 4;
    var num3 = num1 - num2;

    // Mostrar el resultado de la resta en un párrafo
    document.writeln("<p>" + num1 + " - " + num2 + " = " + num3 + "</p>");
}

function dividir() {
    // Solicitar al usuario el dividendo y el divisor
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
    // Solicitar al usuario su nombre y edad
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
    // Solicitar al usuario un número
    var num1 = prompt("Ingresa un numero");
    var doble = num1 * 2;
    var triple = num1 * 3;
    var cuadruple = num1 * 4;
    if (!isNaN(num1)) {
        // Mostrar el número y sus múltiplos en un cuadro de alerta
        alert("Has introducido el numero " + num1 + "\nEl doble es " + doble + "\nEl triple es " + triple + "\nEl cuadruple es " + cuadruple);
    } else {
        alert("Por favor, ingresa un numero");
    }
}

function longitud() {
    // Solicitar al usuario el radio del círculo
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

function areaTriangulo() {
        var a, b;
        // Solicitar al usuario la base y la altura del triángulo
        a = prompt("Escribe la base:");
        b = prompt("Escribe la altura:");

        // Convertir las entradas a números utilizando parseFloat
        a = parseFloat(a);
        b = parseFloat(b);

        // Verificar si las entradas son números válidos
        if (!isNaN(a) && !isNaN(b)) {
            var area = (a * b) / 2;
            alert("Área = " + area);
        } else {
            alert("Por favor, ingrese valores numéricos válidos para la base y la altura.");
        }
}

function calcularContadores() {
    // Solicitar al usuario un número
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
    // Solicitar al usuario un número entero
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
    // Solicitar al usuario un número en base 8 (octal)
    var numeroOctal = prompt("Por favor, ingrese un número en base 8:");

    // Convertir de base 8 a base 10 (decimal)
    var base10 = parseInt(numeroOctal, 8);

    // Convertir de base 10 (decimal) a base 2 (binario)
    var base2 = base10.toString(2);

    // Mostrar los resultados en una alerta
    alert("En base 10 (decimal): " + base10 + "\nEn base 2 (binario): " + base2);
}

function numEnBase() {
    // Solicitar al usuario un número entero y la base a la que se desea convertir
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

function multiplicacion() {
    var repetir;

    do {
        // Solicitar al usuario dos números positivos y menores de 57
        var numero1 = parseInt(prompt("Escribe el primer número (positivo y menor de 57):"));
        var numero2 = parseInt(prompt("Escribe el segundo número (positivo y menor de 57):"));

        if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0 || numero1 >= 57 || numero2 >= 57) {
            alert("Números no válidos. Deben ser positivos y menores de 57.");
        } else {
            var producto = numero1 * numero2;
            alert("El producto es: " + producto);
        }

        // Preguntar al usuario si desea repetir
        repetir = prompt("¿Quieres volver a empezar? (s/n):").toLowerCase() === 's';
    } while (repetir);
}

function contadorNumeros() {
    var contador = 0;
    var numero = 0;

    while (!isNaN(numero)) {
        // Solicitar al usuario un número
        numero = parseInt(prompt("Escribe un número (9999 para terminar):"));

        if (numero === 9999) {
            break; // Salir del bucle si se ingresa 9999
        }

        contador++;
    }

    alert("Número de números introducidos (excluyendo el 9999): " + contador);
}

function contadorNumeros2() {
    var contador = 0;
    var suma = 0;
    var numero = 0;

    while (!isNaN(numero)) {
        // Solicitar al usuario un número
        numero = parseInt(prompt("Escribe un número (9999 para terminar):"));

        if (numero === 9999) {
            break; // Salir del bucle si se ingresa 9999
        }

        contador++;
        suma += numero;
    }

    alert("Número de números introducidos (excluyendo el 9999): " + contador);
    alert("Suma de los números introducidos (excluyendo el 9999): " + suma);
}

function contadorNumeros3() {
    var contador = 0;
    var suma = 0;
    var producto = 1;
    var numero = 0;

    while (!isNaN(numero)) {
        // Solicitar al usuario un número
        numero = parseInt(prompt("Escribe un número (9999 para terminar):"));

        if (numero === 9999) {
            break; // Salir del bucle si se ingresa 9999
        }

        contador++;
        suma += numero;
        producto *= numero;
    }

    alert("Número de números introducidos (excluyendo el 9999): " + contador);
    alert("Suma de los números introducidos (excluyendo el 9999): " + suma);
    alert("Producto de los números introducidos (excluyendo el 9999): " + producto);
}

function multiploYSuma() {
    var suma = 0;

    for (var i = 1; i < 1000; i++) {
        if (i % 23 === 0) {
            document.write(i + "<br>");
            suma += i;
        }
    }

    document.write("<br>Suma de todos los múltiplos de 23 inferiores a 1000: " + suma);
}
