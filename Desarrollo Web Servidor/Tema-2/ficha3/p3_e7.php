<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>
<body>
    <h1>7 - Rellenar una Cadena con '#'</h1>
    <form method="post">
        <label for="cadena">Ingresa una cadena de texto:</label>
        <input type="text" name="cadena" id="cadena">
        <input type="submit" value="Rellenar Cadena">
    </form>
    <?php
    if (isset($_POST['cadena'])) {
        $cadena = $_POST['cadena'];
        $cadena_rellena_inicio = str_pad($cadena, 20, '#', STR_PAD_LEFT);
        $cadena_rellena_final = str_pad($cadena, 20, '#', STR_PAD_RIGHT);
        $cadena_rellena_ambos = str_pad($cadena, 20, '#', STR_PAD_BOTH);

        echo "Relleno al principio: $cadena_rellena_inicio<br>";
        echo "Relleno al final: $cadena_rellena_final<br>";
        echo "Relleno en ambos lugares: $cadena_rellena_ambos";
    }
    ?>
</body>
</html>