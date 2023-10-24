<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
</head>
<body>
    <h1>11 - Convertir una Cadena en un Array de Caracteres</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena de texto:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Convertir a Array">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena = $_POST['cadena'];
        $array_caracteres = str_split($cadena);

        echo "Array de Caracteres: ";
        foreach ($array_caracteres as $caracter) {
            echo "$caracter ";
        }
    }
    ?>
</body>

</html>