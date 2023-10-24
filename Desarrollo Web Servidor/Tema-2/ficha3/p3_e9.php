<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>
<body>
    <h1>9 - Escapar y Desescapar Vocales (Excepto 'a')</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena de texto:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Escapar y Desescapar">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena_original = $_POST['cadena'];
        $cadena_escape = str_replace(['e', 'i', 'o', 'u'], ['@', '#', '$', '&'], $cadena_original);
        $cadena_desescape = str_replace(['@', '#', '$', '&'], ['e', 'i', 'o', 'u'], $cadena_escape);

        echo "Cadena Escapada: $cadena_escape<br>";
        echo "Cadena Desescapada: $cadena_desescape";
    }
    ?>
</body>

</html>