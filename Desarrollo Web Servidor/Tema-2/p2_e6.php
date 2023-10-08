<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>

<body>
    <h1>6 - Mostrar número en binario y octal</h1>

    <?php
    if (isset($_POST['numero'])) {
        $numero = $_POST['numero'];
        
        printf("Número en binario: %b<br>", $numero);
        printf("Número en octal: %o<br>", $numero);
    }
    ?>

    <form action="" method="post">
        <label for="numero">Ingrese un número:</label>
        <input type="number" name="numero" required>

        <input type="submit" value="Mostrar en binario y octal">
    </form>
</body>

</html>
