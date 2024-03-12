<?php
session_start();

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    if (empty($usuario) || empty($contrasena)) {
        $error = "Debes introducir un nombre de usuario y una contraseña";
    } else {
        // Conexión a la base de datos
        $conexion = new mysqli("localhost", "dwes", "abc123", "soundwave");

        // Verificar la conexión
        if ($conexion->connect_error) {
            die("Error de conexión: " . $conexion->connect_error);
        }

        // Consulta SQL para verificar las credenciales
        $sql = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' AND contrasena='$contrasena'";

        // Ejecutar la consulta
        $resultado = $conexion->query($sql);

        if ($resultado->num_rows == 1) {
            // Autenticación exitosa, establecer variables de sesión y redirigir
            $fila = $resultado->fetch_assoc();
            $_SESSION['usuario'] = $fila['nombre_usuario'];
            $_SESSION['perfil'] = $fila['perfil'];
        
            if ($_SESSION['perfil'] == 'administrador') {
                header("Location: administracion.php");
            } elseif ($_SESSION['perfil'] == 'usuario') {
                header("Location: escuchar.php");  
            }
            exit();
        } else {
            // Credenciales incorrectas
            $error = "Usuario o contraseña incorrectos";
        }

        // Cerrar la conexión
        $conexion->close();
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - SoundWave</title>
    <link rel="stylesheet" href="css/light.css">
</head>

<body>
    <h2>Login</h2>

    <?php if (isset($error)) { ?>
        <p style="color: red;">
            <?php echo $error; ?>
        </p>
    <?php } ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" required><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br>

        <input type="submit" value="Iniciar sesión">
    </form>
    </center>
</body>

</html>