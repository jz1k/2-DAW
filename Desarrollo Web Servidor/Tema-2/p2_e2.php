<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>
    <h1>2 - Comprobar email</h1>
    <?php
    $mail = strtolower($_POST['correo']);
    $nombre = false;
    $dominio=false;
    $valido=strpos($mail,'.');
    
    if ($valido!== false) {
        $dominio=strstr($mail,"@");
        $nombre= substr($mail,0, strpos($mail,'@'));
        echo "<p>Nombre: '{$nombre}'</p>";
        echo "<p>Dominio: '{$dominio}'</p>";
        
    } else {
        echo "<p>El correo es invalido</p>";
    }
    ?>

    <form action="" method="post">
        <label for="correo">Correo</label>
        <input type="email" name="correo">

        <input type="submit" value="Comprobar e-mail">
    </form>

    
</body>

</html>