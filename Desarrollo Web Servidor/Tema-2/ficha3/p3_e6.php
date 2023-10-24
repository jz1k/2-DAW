<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
    <h1>6 - Eliminar Espacios y Puntos Antes y Después</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena de texto:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Eliminar Espacios y Puntos">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena = $_POST['cadena'];
        $cadena_limpia = trim($cadena, ' .');
        echo "Cadena sin espacios ni puntos antes y después: $cadena_limpia";
    }
    ?>
</body>
</html>