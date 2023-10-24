<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 12</title>
</head>
<body>
    <h1>12 - Comprobar si una Cadena Contiene una Dirección IP Válida</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Comprobar IP">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena = $_POST['cadena'];
        if (filter_var($cadena, FILTER_VALIDATE_IP)) {
            echo "La cadena es una dirección IP válida.";
        } else {
            echo "La cadena no es una dirección IP válida.";
        }
    }
    ?>
</body>

</html>