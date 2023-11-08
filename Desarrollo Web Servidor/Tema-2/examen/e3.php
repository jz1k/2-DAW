<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>

<body>
    <h1>Ejercicio 3</h1>

    <?php

    $mail = "correodeprueba@iesmurgi.com";
    $valido = strpos($mail, '.');
    $valido2 = strpos($mail, '@');

    if ($valido !== false && $valido2 !== false) {
        $dominio = substr($mail, strpos($mail, '@')+1);
        $nombre = substr($mail, 0, strpos($mail, '@'));
        echo "Nombre: $nombre <br>";
        echo "Dominio: $dominio";

    } else {
        echo "El correo es invalido";
    }

    ?>

</body>

</html>