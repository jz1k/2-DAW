// Creamos las variables contadores
var equilatero = 0;
var isosceles = 0;
var escaleno = 0;

// Creamos un bucle para pedir las longitudes de los lados de cada triángulo
for (var i = 1; i <= 4; i++) {
    var lado1 = prompt("TRIÁNGULO " + i + " LADO 1 - Introduce la longitud:");
    var lado2 = prompt("TRIÁNGULO " + i + " LADO 2 - Introduce la longitud:");
    var lado3 = prompt("TRIÁNGULO " + i + " LADO 3 - Introduce la longitud:");

    // Ejecutamos la comprobación de cada triángulo
    document.getElementById('tipoT' + i).innerHTML = clasificarLados(lado1, lado2, lado3);
}

// Comprobamos cuál es el triángulo menos repetido
if (equilatero > isosceles) {
    if (isosceles < escaleno) {
        document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ISÓSCELES";
    } else {
        document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ESCALENO";
    }
} else {
    if (equilatero < escaleno) {
        document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es EQUILÁTERO";
    } else {
        document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ESCALENO";
    }
}

// Mostramos estadísticas sobre la cantidad de cada tipo de triángulo
document.getElementById('total').innerHTML = "Hay " + equilatero + " triángulos equiláteros<br>Hay " + isosceles + " triángulos isósceles<br>Hay " + escaleno + " triángulos escalenos";
