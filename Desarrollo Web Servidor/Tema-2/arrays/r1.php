<!DOCTYPE html>
<html>

<head>
    <title>Práctica 1: Arrays en PHP</title>
</head>

<body>

    <?php

    // 1. Crea un array $dias con los días de la semana y muestra todas sus parejas índices/valores mediante un bucle foreach y for.
    $dias = array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");

    echo "<h1>1. Días de la semana:</h1>\n";
    echo "<p>Usando foreach:</p>";
    foreach ($dias as $indice => $valor) {
        echo "Índice: $indice, Valor: $valor<br>";
    }

    echo "<p>Usando for:</p>";
    for ($i = 0; $i < count($dias); $i++) {
        echo "Índice: $i, Valor: " . $dias[$i] . "<br>";
    }

    // 2. Crea un array con una lista de 5 alumnos de la clase. Muestra primero la lista de los 3 primeros alumnos del array y luego los dos últimos de la lista usando las funciones array_slice y array_splice.
    $alumnos = array("Alumno1", "Alumno2", "Alumno3", "Alumno4", "Alumno5");

    echo "<h1>2. Lista de alumnos:</h1>\n";
    echo "<p>Primeros 3 alumnos:</p>";
    print_r(array_slice($alumnos, 0, 3));

    echo "<p>Últimos 2 alumnos:</p>";
    print_r(array_splice($alumnos, 3));

    // 3. Crea un array de dos dimensiones, de manera que en una dimensión contenga el tipo de colores (fuerte o suave) y en la otra 3 colores de cada tipo. Muestra una tabla como la siguiente recorriendo el array:
// Colores fuertes: Rojo:FF0000 Verde:00FF00 Azul: 0000FF
// Colores suaves: Rosa:FE9ABC Amarillo:FDF189 Malva:BC8F8F
    $colores = array(
        "fuertes" => array("Rojo" => "FF0000", "Verde" => "00FF00", "Azul" => "0000FF"),
        "suaves" => array("Rosa" => "FE9ABC", "Amarillo" => "FDF189", "Malva" => "BC8F8F")
    );

    echo "<h1>3. Colores:</h1>\n";
    foreach ($colores as $tipo => $colores_tipo) {
        echo "<p>Colores $tipo: ";
        foreach ($colores_tipo as $color => $codigo) {
            echo "$color: $codigo ";
        }
        echo "</p>";
    }

    // 4. Dado el array anterior comprueba si en él se encuentra el color “FF88CC” y el color “FF0000” usando la función in_array.
    $color1 = "FF88CC";
    $color2 = "FF0000";

    echo "<h1>4. Comprobación de colores:</h1>\n";
    echo "<p>¿$color1 está en el array? " . (in_array($color1, $colores["fuertes"]) ? "Sí" : "No") . "</p>";
    echo "<p>¿$color2 está en el array? " . (in_array($color2, $colores["fuertes"]) ? "Sí" : "No") . "</p>";

    // 5. Crea un array llamado pila y muéstralo ordenado por asort, arsort, ksort, sort, rsort.
    $pila = array("cinco" => 5, "uno" => 1, "cuatro" => 4, "dos" => 2, "tres" => 3);

    echo "<h1>5. Pila ordenada:</h1>\n";
    echo "<p>Orden ascendente por valores (asort):</p>";
    asort($pila);
    print_r($pila);

    echo "<p>Orden descendente por valores (arsort):</p>";
    arsort($pila);
    print_r($pila);

    echo "<p>Orden ascendente por claves (ksort):</p>";
    ksort($pila);
    print_r($pila);

    echo "<p>Orden ascendente por valores (sort):</p>";
    sort($pila);
    print_r($pila);

    echo "<p>Orden descendente por valores (rsort):</p>";
    rsort($pila);
    print_r($pila);

    // 6. Crea un array con los países de la Unión Europea y sus capitales. Muestra por cada uno de ellos la frase: “La capital de <<país>> es <<capital>>”. Luego ordena la lista por el nombre del país y luego por el nombre de la capital.
    $paises_capitales = array(
        "España" => "Madrid",
        "Francia" => "París",
        "Alemania" => "Berlín",
        "Italia" => "Roma",
        "Portugal" => "Lisboa",
    );

    echo "<h1>6. Países y capitales:</h1>\n";
    foreach ($paises_capitales as $pais => $capital) {
        echo "<p>La capital de $pais es $capital.</p>";
    }

    echo "<p>Orden ascendente por nombre del país:</p>";
    ksort($paises_capitales);
    foreach ($paises_capitales as $pais => $capital) {
        echo "<p>La capital de $pais es $capital.</p>";
    }

    echo "<p>Orden ascendente por nombre de la capital:</p>";
    asort($paises_capitales);
    foreach ($paises_capitales as $pais => $capital) {
        echo "<p>La capital de $pais es $capital.</p>";
    }

    // 7. Obtén el número de valores iguales al valor 2 contenidos en un array de 10 valores generados aleatoriamente con valores de 1 a 10.
    $valores_aleatorios = array();
    for ($i = 0; $i < 10; $i++) {
        $valores_aleatorios[] = rand(1, 10);
    }

    echo "<h1>7. Número de valores iguales a 2:</h1>\n";
    $num_valores_2 = array_count_values($valores_aleatorios)[2];
    echo "<p>Número de valores iguales a 2: $num_valores_2</p>";

    ?>

</body>

</html>