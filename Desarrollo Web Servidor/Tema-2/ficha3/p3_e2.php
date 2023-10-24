<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <h1>2 - Dividir Correo Electrónico en Usuario y Dominio</h1>
    <form method="post">
        <label for="email">Ingresa una dirección de correo electrónico:</label>
        <input type="text" name="email" id="email">
        <input type="submit" value="Dividir Correo">
    </form>
    <?php
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        list($usuario, $dominio) = explode('@', strtolower($email));
        echo "Usuario: $usuario<br>";
        echo "Dominio: $dominio";
    }
    ?>
</body>
</html>