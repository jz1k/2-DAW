<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>

<body>
    <h1>7 - Repetir caracteres de una frase</h1>

    <?php
    if (isset($_POST['frase'])) {
        $frase = $_POST['frase'];

        $fraseRepetida = '';

        for ($i = 0; $i < strlen($frase); $i++) {
            $caracter = $frase[$i];
            $fraseRepetida .= $caracter . $caracter;
        }

        echo "<p>Frase original: $frase</p>";
        echo "<p>Frase repetida: $fraseRepetida</p>";
    }
    ?>

    <form action="" method="post">
        <label for="frase">Ingrese una frase:</label>
        <input type="text" name="frase" required>

        <input type="submit" value="Repetir caracteres">
    </form>
</body>

</html>
