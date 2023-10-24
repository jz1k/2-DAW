<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10</title>
</head>
<body>
    <h1>10 - Escapar Caracteres Especiales en una Frase</h1>
    <form method="post">
        <label for="frase">Ingresa una frase con caracteres especiales:</label>
        <input type="text" name="frase" id="frase">
        <input type="submit" value="Escapar y Desescapar">
    </form>
    <?php
    if (isset($_POST['frase'])) {
        $frase_original = $_POST['frase'];
        $frase_escape = htmlspecialchars($frase_original);
        $frase_desescape = htmlspecialchars_decode($frase_escape);

        echo "Frase Escapada: $frase_escape<br>";
        echo "Frase Desescapada: $frase_desescape";
    }
    ?>
</body>

</html>