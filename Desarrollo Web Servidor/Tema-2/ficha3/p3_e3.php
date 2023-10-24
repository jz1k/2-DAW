<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>

    <body>
    <h1>3 - Comprobar si una Cadena Contiene Vocales</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena de texto:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Comprobar Vocales">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena = $_POST['cadena'];
        if (preg_match('/[aeiouAEIOU]/', $cadena)) {
            echo "La cadena contiene al menos una vocal.";
        } else {
            echo "La cadena no contiene vocales.";
        }
    }
    ?>
</body>

</html>