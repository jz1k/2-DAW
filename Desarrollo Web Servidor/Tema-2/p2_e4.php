<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>

<body>
    <h1>4 - Dos primeras palabras</h1>

    <?php
    if (isset($_POST['frase'])) {
        $frase = $_POST['frase'];
        $primerEspacio = strpos($frase, ' ');

        if ($primerEspacio !== false) {
            $primeraPalabra = substr($frase, 0, $primerEspacio);
            $segundoEspacio = strpos($frase, ' ', $primerEspacio + 1);

            if ($segundoEspacio !== false) {
                $segundaPalabra = substr($frase, $primerEspacio + 1, $segundoEspacio - $primerEspacio - 1);
            } else {
                $segundaPalabra = substr($frase, $primerEspacio + 1);
            }

            echo "<p>Las dos primeras palabras de la frase son: '$primeraPalabra' y '$segundaPalabra'</p>";
        } else {
            echo "<p>No se encontraron dos palabras en la frase.</p>";
        }
    }
    ?>

    <form action="" method="post">
        <label for="frase">Ingrese una frase:</label>
        <input type="text" name="frase" required>

        <input type="submit" value="Mostrar dos primeras palabras">
    </form>
</body>

</html>
