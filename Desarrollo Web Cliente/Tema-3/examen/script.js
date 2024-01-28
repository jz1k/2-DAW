var ventana;
var ventana1;
var ventana2;
var ventana3;
var opcion1;
var opcion2;
var vector = new Array();
var vectorAleatorio = new Array();
var vectorImpar = new Array();
var suma = 0;


//Creamos el array con los numeros random
opcion1 = document.getElementById("seleccion").value;
opcion2 = document.getElementById("seleccion1").value;

for (var i = 0; i < opcion1; i++) {
    vector[i] = i + 1;
}

for (var i = 0; i < opcion2; i++) {
    vectorAleatorio[i] = Math.round(Math.random() * (opcion1 - 1) + 1);
}


function abrirVentana1() {
    window.open("ventana1.html", "ventana1", "width=300, height=300, top=0, left=0, background-color: green");
}


function abrirVentana2() {
    ventana2 = window.open("", "Ventana2", "top=0, right=0, width=300,height=300, background-color");
    var contador = 0;

    ventana2.document.write("Valores aleatorios: <br><br>");
    for (var i = 0; i < vectorAleatorio.length; i++) {
        ventana2.document.write(vectorAleatorio[i] + "\t");
    }
    ventana2.document.bgColor = "lightblue";
}


function abrirVentana3() {
    ventana3 = window.open("", "Ventana3", "top=0, right=0, width=300,height=300, background-color");
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
    ventana3.document.bgColor = "lightgreen";
}