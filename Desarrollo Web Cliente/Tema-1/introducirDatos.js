function pedirNumero() {
    var intentos=0;
    var valido=false;
    do {
        var nota=prompt("Ingresa la nota entre 0 y 10");
        if (nota>10||nota<0) {
            valido=false;
            intentos++;
        }else{
            alert(nota+" está entre 0 y 10");
            break;
        }
        if (intentos==3) {
            alert("Has superado el numero maximo de intentos");
        }
    } while (intentos<3);

    
}