<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>
</head>

<body>
    <h1>Ejercicio 8 - Manipulación de Cadenas</h1>
    <?php
    $frase = "Esta cadena tiene muchas letras";

    // La posición de la primera ocurrencia de la letra 'a'
    $posicion_a = strpos($frase, 'a');

    // La posición de la primera ocurrencia de la letra 'm'
    $posicion_m = strpos($frase, 'm');

    // La posición de la primera ocurrencia de la palabra "tiene"
    $posicion_tiene = strpos($frase, 'tiene');

    // La primera ocurrencia desde el final de la letra 'a'
    $posicion_a_final = strrpos($frase, 'a');

    // La frase desde la aparición de la palabra "cadena" hasta el final
    $posicion_cadena = strpos($frase, 'cadena');
    $frase_desde_cadena = substr($frase, $posicion_cadena);

    // La cadena desde el carácter 12 hasta el final
    $substring_12 = substr($frase, 12);

    // La cadena devolviendo 6 caracteres desde el carácter 18
    $substring_18_6 = substr($frase, 18, 6);

    // La cadena devolviendo los 6 últimos caracteres
    $last_6 = substr($frase, -6);

    // La cadena desde la posición 26, contando desde atrás, 6 caracteres
    $substring_atras_6 = substr($frase, -26, 6);

    // La cadena empezando en el carácter 4 y terminando en el 7 desde atrás
    $substring_4a7 = substr($frase, 4, -7);

    // Mostrar los resultados
    echo "<h2>Resultados:</h2>";
    echo "La primera ocurrencia de 'a' es $posicion_a<br>";
    echo "La primera ocurrencia de 'm' es $posicion_m<br>";
    echo "La primera ocurrencia de 'tiene' es $posicion_tiene<br>";
    echo "La primera ocurrencia desde el final de 'a' es $posicion_a_final<br>";
    echo "La frase desde la aparición de la palabra 'cadena' hasta el final es: $frase_desde_cadena<br>";

    echo "<h2>Partes de la cadena:</h2>";
    echo substr($frase, $posicion_tiene); // Desde 'tiene' hasta el final
    echo "<br>";
    echo substr($frase, $posicion_m, 6); // Desde 'm' hasta 'muchas'
    echo "<br>";
    echo substr($frase, -6); // Últimos 6 caracteres
    echo "<br>";
    echo substr($frase, $posicion_cadena); // Desde 'cadena' hasta el final
    echo "<br>";
    echo substr($frase, $posicion_cadena, $posicion_tiene - $posicion_cadena); // Desde 'cadena' hasta 'tiene'
    ?>
</body>

</html>