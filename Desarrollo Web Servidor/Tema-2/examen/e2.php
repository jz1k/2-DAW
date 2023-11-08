<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 de examen</title>
</head>

<body>

    <h1>Ejercicio 2</h1>

    <?php

    /*  1 - Decimal
        2- Hexadecimal minusculas
        3- Hexadecimal mayuscula
        4- octal
        5- exponencial
        6- binario*/

    $numero = 12;
    $formato = 1;

    switch ($formato) {
        case 1:
            $numeroFormateado = sprintf("%.0f", $numero);
            $nombreFormato="decimal";
            break;
        case 2:
            $numeroFormateado = sprintf("%x", $numero);
            $nombreFormato="hexadecimal";
            break;
        case 3:
            $numeroFormateado = sprintf("%X", $numero);
            $nombreFormato="Hexadecimal";
            break;
        case 4:
            $numeroFormateado = sprintf("%o", $numero);
            $nombreFormato="octal";
            break;
        case 5:
            $numeroFormateado = sprintf("%e", $numero);
            $nombreFormato="notacion exponencial";
            break;
        case 6:
            $numeroFormateado = sprintf("%b", $numero);
            $nombreFormato="binario";
            break;
        default:
            echo "Formato incorrecto!!!";
            break;
    }

    if (preg_match('/[123456]/', $formato)) {
        echo "El valor pasado es $numeroFormateado en $nombreFormato";
    } 
    


    ?>
</body>

</html>