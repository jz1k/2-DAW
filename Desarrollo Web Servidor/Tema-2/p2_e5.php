<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>

<body>
    <h1>5 - Contar letras 'a'</h1>
    <!-- Solo he hecho lo que no necesita array ya que aun no lo hemos dado -->


    <?php
    if (isset($_POST['frase'])) {
        $frase = $_POST['frase'];

        $conteo = substr_count(strtolower($frase), 'a');

        echo "<p>El número de letras 'a' en la frase es: $conteo</p>";
    }
    ?>

    <form action="" method="post">
        <label for="frase">Ingrese una frase:</label>
        <input type="text" name="frase" required>

        <input type="submit" value="Contar letras 'a'">
    </form>
</body>

</html>
