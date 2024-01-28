<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados del Ejercicio 2</title>
</head>
<body>
    <h1>Resultados del Formulario</h1>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "<p>TEXT</p>";
        $cadena_buscar = isset($_POST['cadena_buscar']) ? $_POST['cadena_buscar'] : '';
        echo "Introduzca la cadena a buscar: $cadena_buscar<br><hr>";

        echo "<p>RADIO</p>";
        $sexo = isset($_POST['sexo']) ? $_POST['sexo'] : '';
        echo "Sexo: $sexo<br><hr>";

        echo "<p>CHECKBOX</p>";
        $extras = isset($_POST['extras']) ? $_POST['extras'] : [];
        echo "Extras: " . implode(", ", $extras) . "<br><hr>";

        echo "<p>File</p>";
        echo "Nota: Lo veremos en el ejercicio 4.<br><hr>";

        echo "<p>HIDDEN</p>";
        $oculto = isset($_POST['oculto']) ? $_POST['oculto'] : '';
        echo "Valor Oculto: $oculto<br><hr>";

        echo "<p>PASSWORD</p>";
        $contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : '';
        echo "Contraseña: $contrasena<br><hr>";

        echo "<p>ELEMENTO SELECT</p>";
        $color = isset($_POST['color']) ? $_POST['color'] : '';
        echo "Color: $color<br><hr>";

        echo "<p>SELECT MÚLTIPLE</p>";
        $idiomas = isset($_POST['idiomas']) ? $_POST['idiomas'] : [];
        echo "Idiomas: " . implode(", ", $idiomas) . "<br><hr>";

        echo "<p>ELEMNTO TEXTAREA</p>";
        $comentario = isset($_POST['comentario']) ? $_POST['comentario'] : '';
        echo "Comentario: $comentario<br><hr>";
    }
    ?>

    <br><br>
    <a href="ejercicio2.php">Volver al formulario</a>
</body>
</html>
