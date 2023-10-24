<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <h1>4 - Comparación de Cadenas</h1>
    <form method="post">
        <label for="cadena1">Ingresa la primera cadena:</label>
        <input type="text" name="cadena1" id="cadena1"><br>
        <label for="cadena2">Ingresa la segunda cadena:</label>
        <input type="text" name="cadena2" id="cadena2"><br>
        <input type="submit" value="Comparar Cadenas">
    </form>
    <?php
    if (isset($_POST['cadena1']) && isset($_POST['cadena2'])) {
        $cadena1 = $_POST['cadena1'];
        $cadena2 = $_POST['cadena2'];

        $comparacion_total = strcmp($cadena1, $cadena2);
        $comparacion_5_caracteres = strncmp($cadena1, $cadena2, 5);
        $comparacion_natural = strnatcmp($cadena1, $cadena2);

        echo "Comparación Total: $comparacion_total<br>";
        echo "Comparación de 5 Caracteres: $comparacion_5_caracteres<br>";
        echo "Comparación Natural: $comparacion_natural";
    }
    ?>
</body>
</html>