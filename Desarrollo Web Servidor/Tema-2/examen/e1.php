<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Ejercicio 1</title>
</head>

<body>
    <h1>Ejercicio 1</h1>

    <?php
    $cad1 = "Hola9";
    $cad2 = "Hola10";
    $modo = 4;

    switch ($modo) {
        case 1:
            // Modo 1: Comparación de cadenas
            $resultado = strnatcmp($cad1, $cad2);
            if ($resultado == -1) {
                echo "$cad1 es menor que $cad2";
            } elseif ($resultado == 1) {
                echo "$cad1 es mayor que $cad2";
            } else {
                echo "Son iguales";
            }
            break;
        case 2:
            // Modo 2: Comparación de cadenas insensible a mayúsculas y minúsculas
            $resultado = strnatcasecmp($cad1, $cad2);
            if ($resultado == -1) {
                echo "$cad1 es menor que $cad2";
            } elseif ($resultado == 1) {
                echo "$cad1 es mayor que $cad2";
            } else {
                echo "Son iguales";
            }
            break;
        case 3:
            // Modo 3: Comparación natural
            $resultado = strnatcmp($cad1, $cad2);
            if ($resultado < 0) {
                echo "$cad1 es menor que $cad2";
            } elseif ($resultado > 0) {
                echo "$cad1 es mayor que $cad2";
            } else {
                echo "Son iguales";
            }
            break;
        case 4:
            // Modo 4: Comparación de los primeros n caracteres
            $n = 4; //Cambia aqui N
            $subcad1 = substr($cad1, 0, $n);
            $subcad2 = substr($cad2, 0, $n);

            $resultado = strcmp($subcad1, $subcad2);
            if ($resultado < 0) {
                echo "$cad1 es menor que $cad2";
            } elseif ($resultado > 0) {
                echo "$cad1 es mayor que $cad2";
            } else {
                echo "$cad1 es igual que $cad2";
            }
            break;

        default:
            echo "Introduce una opción válida";
            break;
    }
    ?>
</body>

</html>
