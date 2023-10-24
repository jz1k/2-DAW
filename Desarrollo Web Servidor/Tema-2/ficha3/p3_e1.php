<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <h1>1 - Última Palabra de una Frase</h1>
    <form method="post">
        <label for="frase">Ingresa una frase:</label>
        <input type="text" name="frase" id="frase">
        <input type="submit" value="Obtener Última Palabra">
    </form>
    <?php
    if (isset($_POST['frase'])) {
        $frase = $_POST['frase'];
        $palabras = explode(" ", strtolower($frase));
        $ultima_palabra = end($palabras);
        echo "Última palabra: $ultima_palabra";
    }
    ?>
</body>
</html>