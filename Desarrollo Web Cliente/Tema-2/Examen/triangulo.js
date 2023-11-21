//Pedimos la longitud de todos los lados de los triangulos
var t1l1 = prompt("TRIANGULO 1 LADO 1 - Introduce la longitud:");
var t1l2 = prompt("TRIANGULO 1 LADO 2 - Introduce la longitud:");
var t1l3 = prompt("TRIANGULO 1 LADO 3 - Introduce la longitud:");
var t2l1 = prompt("TRIANGULO 2 LADO 1 - Introduce la longitud:");
var t2l2 = prompt("TRIANGULO 2 LADO 2 - Introduce la longitud:");
var t2l3 = prompt("TRIANGULO 2 LADO 3 - Introduce la longitud:");
var t3l1 = prompt("TRIANGULO 3 LADO 1 - Introduce la longitud:");
var t3l2 = prompt("TRIANGULO 3 LADO 2 - Introduce la longitud:");
var t3l3 = prompt("TRIANGULO 3 LADO 3 - Introduce la longitud:");
var t4l1 = prompt("TRIANGULO 4 LADO 1 - Introduce la longitud:");
var t4l2 = prompt("TRIANGULO 4 LADO 2 - Introduce la longitud:");
var t4l3 = prompt("TRIANGULO 4 LADO 3 - Introduce la longitud:");

//Creamos las variables contadores
var equilatero = 0;
var isosceles = 0;
var escaleno = 0;

function trianguloClasificacion() {

    //EJECUTAMOS LA COMPROBACIÓN DE CADA TRIANGULO
    document.getElementById('tipoT1').innerHTML = clasificarLados(t1l1, t1l2, t1l3);
    document.getElementById('tipoT2').innerHTML = clasificarLados(t2l1, t2l2, t2l3);
    document.getElementById('tipoT3').innerHTML = clasificarLados(t3l1, t3l2, t3l3);
    document.getElementById('tipoT4').innerHTML = clasificarLados(t4l1, t4l2, t4l3);

    //COMPROBAMOS CUAL ES EL TRIANGULO MENOS REPETIDO
    if (equilatero > isosceles) {
        if (isosceles < escaleno) {
            document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ISOSCELES";
        } else {
            document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ESCALENO";
        }
    } else {
        if (equilatero < escaleno) {
            document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es EQUILATERO";
        } else {
            document.getElementById('resultadoTriangulo').innerHTML = "El menos repetido es ESCALENO";
        }
    }

    document.getElementById('total').innerHTML = "Hay " + equilatero + " triangulos equilateros<br>Hay " + isosceles + " triangulos isosceles<br>Hay " + escaleno + " triangulos escalenos";
}

//Comprueba cada posibilidad de combinacion de los lados para clasificarlos
function clasificarLados(lado1, lado2, lado3) {

    if (lado1 == lado2 || lado1 == lado3) {
        if (lado3 == lado2 && lado3 == lado1) {
            //Incrementamos contador y devolvemos valor
            equilatero++;
            return "Equilatero";
        } else {
            //Incrementamos contador y devolvemos valor
            isosceles++;
            return "Isosceles";
        }
    } else {
        if (lado2 == lado3) {
            //Incrementamos contador y devolvemos valor
            isosceles++;
            return "Isosceles";
        } else {
            //Incrementamos contador y devolvemos valor
            escaleno++;
            return "Escaleno";
        }
    }

}

