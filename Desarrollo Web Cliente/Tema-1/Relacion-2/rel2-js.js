// Función para calcular el perímetro de un cuadrado
function calcularPerimetroCuadrado() {
    // Pide al usuario que ingrese el valor del lado del cuadrado
    var lado = parseInt(prompt("Ingrese el lado del cuadrado:"));

    // Verifica si el valor ingresado es un número válido
    if (!isNaN(lado)) {
        // Calcula el perímetro multiplicando el valor del lado por 4
        var perimetro = lado * 4;
        // Muestra una alerta con el perímetro calculado
        alert("El perímetro del cuadrado es: " + perimetro);
    } else {
        // Muestra una alerta si el valor ingresado no es válido
        alert("Por favor, ingrese un valor válido para el lado del cuadrado.");
    }
}

// Función para calcular la suma de los dos primeros números y el producto de los dos últimos
function calcularSumaYProducto() {
    // Pide al usuario que ingrese cuatro números
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    var numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    var numero4 = parseFloat(prompt("Ingrese el cuarto número:"));

    // Verifica si los valores ingresados son números válidos
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) && !isNaN(numero4)) {
        // Calcula la suma de los dos primeros números
        var suma = numero1 + numero2;
        // Calcula el producto de los dos últimos números
        var producto = numero3 * numero4;
        // Muestra una alerta con la suma y el producto calculados
        alert("La suma de los dos primeros números es: " + suma);
        alert("El producto del tercer y cuarto número es: " + producto);
    } else {
        // Muestra una alerta si alguno de los valores ingresados no es válido
        alert("Por favor, ingrese números válidos.");
    }
}

// Función para calcular la suma y el producto de cuatro valores numéricos
function calcularSumaYProducto4() {
    // Pide al usuario que ingrese cuatro valores
    var valor1 = parseFloat(prompt("Ingrese el primer valor:"));
    var valor2 = parseFloat(prompt("Ingrese el segundo valor:"));
    var valor3 = parseFloat(prompt("Ingrese el tercer valor:"));
    var valor4 = parseFloat(prompt("Ingrese el cuarto valor:"));

    // Verifica si los valores ingresados son números válidos
    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3) && !isNaN(valor4)) {
        // Calcula la suma de los cuatro valores
        var suma = valor1 + valor2 + valor3 + valor4;
        // Calcula el producto de los cuatro valores
        var producto = valor1 * valor2 * valor3 * valor4;
        // Muestra una alerta con la suma y el producto calculados
        alert("La suma de los cuatro valores es: " + suma);
        alert("El producto de los cuatro valores es: " + producto);
    } else {
        // Muestra una alerta si alguno de los valores ingresados no es válido
        alert("Por favor, ingrese valores válidos.");
    }
}

// Función para calcular el monto total a abonar por un artículo
function calcularMontoArticulo() {
    // Pide al usuario que ingrese el precio del artículo
    var precio = parseInt(prompt("Ingrese el precio del artículo:"));
    // Pide al usuario que ingrese la cantidad de artículos que lleva el cliente
    var cantidad = parseInt(prompt("Ingrese la cantidad que lleva el cliente:"));

    // Verifica si los valores ingresados son números enteros válidos
    if (!isNaN(precio) && !isNaN(cantidad)) {
        // Calcula el monto total multiplicando el precio por la cantidad
        var total = precio * cantidad;
        // Muestra una alerta con el monto total a abonar
        alert("El cliente debe abonar: " + total);
    } else {
        // Muestra una alerta si alguno de los valores ingresados no es un número entero válido
        alert("Por favor, ingrese valores enteros válidos.");
    }
}

// Función para verificar si un alumno ha sido promocionado
function verificarPromocion() {
    // Pide al usuario que ingrese las tres notas del alumno
    var nota1 = parseInt(prompt("Ingrese la primera nota:"));
    var nota2 = parseInt(prompt("Ingrese la segunda nota:"));
    var nota3 = parseInt(prompt("Ingrese la tercera nota:"));

    // Verifica si las notas ingresadas son números enteros válidos
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        // Calcula la suma y el promedio de las tres notas
        var suma = nota1 + nota2 + nota3;
        var promedio = suma / 3;

        // Si el promedio es mayor o igual a 7, muestra una alerta indicando que el alumno ha sido promocionado
        if (promedio >= 7) {
            alert("Promocionado");
        } else {
            // Si el promedio es menor a 7, muestra una alerta indicando que el alumno no ha sido promocionado
            alert("No promocionado");
        }
    } else {
        // Muestra una alerta si alguna de las notas ingresadas no es un número entero válido
        alert("Por favor, ingrese notas válidas.");
    }
}

// Función para comparar dos claves ingresadas por el usuario
function compararClaves() {
    // Pide al usuario que ingrese la primera clave
    var clave1 = prompt("Ingrese la primera clave:");
    // Pide al usuario que ingrese la segunda clave
    var clave2 = prompt("Ingrese la segunda clave:");

    // Compara las dos claves ingresadas y muestra una alerta indicando si son iguales o diferentes
    if (clave1 === clave2) {
        alert("Las claves son iguales.");
    } else {
        alert("Las claves son diferentes.");
    }
}

// Función para calcular operaciones (suma, diferencia, producto y división) entre dos números
function calcularOperaciones() {
    // Pide al usuario que ingrese el primer número
    var numero1 = parseFloat(prompt("Ingrese el primer número:"));
    // Pide al usuario que ingrese el segundo número
    var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verifica si los números ingresados son válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Si el primer número es mayor al segundo, calcula la suma y diferencia
        if (numero1 > numero2) {
            var suma = numero1 + numero2;
            var diferencia = numero1 - numero2;
            // Muestra una alerta con la suma y diferencia calculadas
            alert("Suma: " + suma + "\nDiferencia: " + diferencia);
        } else {
            // Si el primer número no es mayor al segundo, calcula el producto y división
            var producto = numero1 * numero2;
            var division = numero1 / numero2;
            // Muestra una alerta con el producto y división calculados
            alert("Producto: " + producto + "\nDivisión: " + division);
        }
    } else {
        // Muestra una alerta si alguno de los números ingresados no es válido
        alert("Por favor, ingrese números válidos.");
    }
}

// Función para clasificar a un alumno como "regular" o "reprobado"
function clasificarAlumno() {
    // Pide al usuario que ingrese las tres notas del alumno
    var nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    var nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    var nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

    // Verifica si las notas ingresadas son números válidos
    if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        // Calcula el promedio de las tres notas
        var promedio = (nota1 + nota2 + nota3) / 3;

        // Si el promedio es mayor o igual a 4, muestra una alerta indicando que el alumno es "regular"
        if (promedio >= 4) {
            alert("Regular");
        } else {
            // Si el promedio es menor a 4, muestra una alerta indicando que el alumno está "reprobado"
            alert("Reprobado");
        }
    } else {
        // Muestra una alerta si alguna de las notas ingresadas no es válida
        alert("Por favor, ingrese notas válidas.");
    }
}

// Función para determinar si un número tiene uno o dos dígitos
function determinarDigitos() {
    // Pide al usuario que ingrese un número positivo de uno o dos dígitos (1..99)
    var numero = parseInt(prompt("Ingrese un número positivo de uno o dos dígitos (1..99):"));

    // Verifica si el número ingresado es válido y si tiene uno o dos dígitos
    if (!isNaN(numero) && numero >= 1 && numero <= 99) {
        // Determina si el número tiene un dígito o dos dígitos y muestra un mensaje correspondiente
        var mensaje = (numero >= 10) ? "Tiene dos dígitos" : "Tiene un dígito";
        alert(mensaje);
    } else {
        // Muestra una alerta si el número ingresado no es válido
        alert("Por favor, ingrese un número válido de uno o dos dígitos.");
    }
}
