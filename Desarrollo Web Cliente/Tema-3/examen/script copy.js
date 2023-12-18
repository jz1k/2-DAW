var ventana1;
var ventana2;
var ventana3;
var ventana4;
var opcion1;
var opcion2;
var vector = [];
var vectorAleatorio = [];
var vectorImpar = [];

function generarArrays() {
    opcion1 = document.getElementById("seleccion").value;
    opcion2 = document.getElementById("seleccion1").value;

    for (var i = 0; i < opcion1; i++) {
        vector[i] = i + 1;
    }

    for (var i = 0; i < opcion2; i++) {
        vectorAleatorio[i] = Math.round(Math.random() * (opcion1 - 1) + 1);
    }
}

function abrirVentana1() {
    ventana1 = window.open("ventana1.html", "ventana1", "width=300, height=300, top=0, left=0, background-color: lightgreen");
}

function cerrarVentana1() {
    ventana1.close();
}

function abrirVentana2() {
    ventana2 = window.open("ventana2.html", "Ventana2", "top=0, right=0, width=300,height=300, background-color: lightblue");
    generarArrays();

    ventana2.document.write("Valores aleatorios: <br><br>");
    for (var i = 0; i < vectorAleatorio.length; i++) {
        ventana2.document.write(vectorAleatorio[i] + "\t");
    }
}

function cerrarVentana2() {
    ventana2.close();
}

function abrirVentana3() {
    ventana3 = window.open("ventana3.html", "Ventana3", "top=0, right=0, width=300,height=300, background-color: lightcoral");
    generarArrays();
    var contador = 0;
    for (var i = 0; i < vectorAleatorio.length; i++) {
        if (vectorAleatorio[i] % 2 != 0) {
            vectorImpar[contador] = vectorAleatorio[i];
            contador++;
        }
    }

    vectorImpar.sort(function (a, b) {
        return a - b
    });

    ventana3.document.write("Numeros impares ordenados de menor a mayor<br><br>");
    for (var i = 0; i < vectorImpar.length; i++) {
        ventana3.document.write(vectorImpar[i] + "\t");
    }
}

function cerrarVentana3() {
    ventana3.close();
}

function abrirVentana4() {
    ventana4 = window.open("ventana4.html", "Ventana4", "bottom=0, left=0, width=300,height=300, background-color: lightsalmon");
}

function cerrarVentana4() {
    ventana4.close();
}
