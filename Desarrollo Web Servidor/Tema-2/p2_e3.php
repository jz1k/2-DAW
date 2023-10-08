<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>

<body>
    <h1>3 - Validar usuario</h1>

    <?php
    // Función para validar el nombre de usuario
    function validarNombreUsuario($nombreUsuario) {
        // Verificar la longitud permitida (entre 3 y 20 caracteres)
        $longitud = strlen($nombreUsuario);
        if ($longitud < 3 || $longitud > 20) {
            return false;
        }

        // Verificar que solo contiene caracteres válidos (letras, números, guión alto, guión bajo)
        if (!preg_match('/^[a-zA-Z0-9-_]+$/', $nombreUsuario)) {
            return false;
        }

        return true;
    }

    // Inicializa una variable para almacenar el mensaje de validación
    $mensajeValidacion = '';

    // Comprobar si se ha enviado el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreUsuario = $_POST['nombre_usuario'];
        if (validarNombreUsuario($nombreUsuario)) {
            $mensajeValidacion = "El nombre de usuario '$nombreUsuario' es válido.";
        } else {
            $mensajeValidacion = "El nombre de usuario '$nombreUsuario' no es válido.";
        }
    }
    ?>

    <!-- Mostrar el mensaje de validación -->
    <p><?php echo $mensajeValidacion; ?></p>

    <form action="" method="post">
        <label for="nombre_usuario">Nombre de Usuario</label>
        <input type="text" name="nombre_usuario" required>

        <input type="submit" value="Validar Nombre de Usuario">
    </form>
</body>

</html>
