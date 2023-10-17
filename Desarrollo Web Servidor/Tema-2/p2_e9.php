<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>

<body>
    <h1>Ejercicio 9 - Manipulación de Cadenas 9</h1>
    <?php
    $frase = "Bienvenidos al la aventura de aprender PHP en 30 horas";

    // Mostrar la parte central de la frase
    $frase_central = substr($frase, 11, -9);
    echo "<p>Parte central de la frase: $frase_central</p>";

    // Averiguar la posición de la palabra "PHP"
    $posicion_php = strpos($frase, "PHP");
    echo "<p>Posición de 'PHP' en la frase: $posicion_php</p>";

    // Reemplazar la palabra "aventura" por la cadena "<'b>misión</b>"
    $frase_modificada = str_replace("aventura", "<b>misión</b>", $frase);
    echo "<p>Frase modificada: $frase_modificada</p>";
    ?>
</body>

</html>
