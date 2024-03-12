<?php
session_start();

// Verificar si el usuario tiene una sesión activa y es administrador
if (!isset($_SESSION['usuario']) || $_SESSION['perfil'] !== 'administrador') {
    header("Location: login.php");
    exit();
}

//CONTROLA EL COLOR FAVORITO
include 'cookie.php';
$tema = getTemaCookie();

// Verifica si se ha enviado un formulario para cambiar el tema
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['tema'])) {
    $tema = $_POST['tema'];

    // Asegúrate de que el tema sea 'light' o 'dark'
    if ($tema === 'light' || $tema === 'dark') {
        setTemaCookie($tema);
    }
}

// COnecta a la base de datos
$conexion = mysqli_connect("localhost", "dwes", "abc123", "soundwave");
if (!$conexion) {
    throw new Exception("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Procesar el formulario para dar de baja un usuario
// Tambien controla las acciones de eliminar las canciones
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['accion'])) {
        $accion = $_POST['accion'];

        // Acción para dar de baja un usuario
        if ($accion == 'baja' && isset($_POST['usuario'])) {
            $usuario = $_POST['usuario'];

            if (isset($_POST['confirmacion']) && $_POST['confirmacion'] == 'true') {
                darDeBajaUsuario($usuario);
            } elseif (isset($_POST['confirmacion']) && $_POST['confirmacion'] == 'false') {
                // Redirigir a la página principal si la confirmación es falsa (cancelar)
                header("Location: administracion.php");
                exit();
            } elseif ($_POST['accion'] == 'baja') {
                // Mostrar formulario de confirmación
                mostrarFormularioConfirmacion($usuario);
            }
        }

        // Acción para eliminar una canción, es decir, que pasa cuando se eliminan
        if ($accion == 'eliminar_cancion' && isset($_POST['id_cancion'])) {
            $idCancion = $_POST['id_cancion'];
            eliminarCancion($idCancion);
            header("Location: administracion.php");
            exit();
        }
    }
}

// Procesar el formulario para añadir nuevos usuarios
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['agregar'])) {
    $nuevoUsuario = $_POST['nuevo_usuario'];
    $nuevaContrasena = $_POST['nueva_contrasena'];
    $tipoUsuario = $_POST['tipo_usuario'];

    // Validar y procesar los datos del formulario
    try {
        if (!empty($nuevoUsuario) && !empty($nuevaContrasena) && !empty($tipoUsuario)) {
            // Verificar si el usuario ya existe
            if (!existeUsuario($nuevoUsuario)) {
                darDeAltaUsuario($nuevoUsuario, $nuevaContrasena, $tipoUsuario);
            } else {
                throw new Exception("El usuario '$nuevoUsuario' ya existe. Por favor, elige otro nombre de usuario.");
            }
        } else {
            throw new Exception("Por favor, complete todos los campos del formulario.");
        }

        // Redirigir a una nueva página después de procesar el formulario
        header("Location: administracion.php");
        exit();
    } catch (Exception $e) {
        $errorAgregarUsuario = $e->getMessage();
    }
}

// Procesar el formulario para añadir nuevos archivos
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['agregar_archivo'])) {
    $nombre_archivo = basename($_FILES["archivo"]["name"]);
    $genero = $_POST['genero'];

    // Validar y procesar los datos del formulario
    try {
        if (!empty($nombre_archivo) && !empty($genero)) {
            // Verificar si el archivo ya existe
            if (!existeArchivo($nombre_archivo)) {
                // Mover el archivo a la carpeta de destino
                $ruta_destino = "archivos/";
                $ruta_final = $ruta_destino . $nombre_archivo;
                if (!move_uploaded_file($_FILES["archivo"]["tmp_name"], $ruta_final)) {
                    throw new Exception("Error al mover el archivo.");
                }

                // Almacenar información en la base de datos
                darDeAltaArchivo($nombre_archivo, $genero, $ruta_final);
            } else {
                throw new Exception("El archivo '$nombre_archivo' ya existe. Por favor, elige otro nombre de archivo.");
            }
        } else {
            throw new Exception("Por favor, complete todos los campos del formulario.");
        }

        // Redirigir a una nueva página después de procesar el formulario
        header("Location: administracion.php");
        exit();
    } catch (Exception $e) {
        $errorAgregarArchivo = $e->getMessage();
    }
}

// Verifica si un archivo ya existe en la base de datos
function existeArchivo($nombre_archivo)
{
    global $conexion;

    $stmt = $conexion->prepare("SELECT nombre_archivo FROM archivos WHERE nombre_archivo = ?");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("s", $nombre_archivo);
    $stmt->execute();
    $stmt->store_result();

    $existe = $stmt->num_rows > 0;

    $stmt->close();

    return $existe;
}

// Añade los nuevos archivos a la base de datos con el formulario
function darDeAltaArchivo($nombre_archivo, $genero, $ruta_archivo)
{
    global $conexion;

    $stmt = $conexion->prepare("INSERT INTO archivos (nombre_archivo, genero, ruta_archivo) VALUES (?, ?, ?)");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("sss", $nombre_archivo, $genero, $ruta_archivo);
    $stmt->execute();

    if ($stmt->affected_rows <= 0) {
        throw new Exception("Error al agregar el archivo");
    }

    $stmt->close();
}

// Función para eliminar una canción
function eliminarCancion($idCancion)
{
    global $conexion;

    try {
        // Iniciar una transacción
        mysqli_begin_transaction($conexion);

        // Obtener la ruta del archivo antes de eliminarlo de la base de datos
        $stmt = $conexion->prepare("SELECT ruta_archivo FROM archivos WHERE id = ?");
        $stmt->bind_param("i", $idCancion);
        $stmt->execute();
        $stmt->bind_result($rutaArchivo);
        $stmt->fetch();
        $stmt->close();

        // Eliminar la canción de la base de datos
        $stmtDelete = $conexion->prepare("DELETE FROM archivos WHERE id = ?");
        $stmtDelete->bind_param("i", $idCancion);
        $stmtDelete->execute();

        if ($stmtDelete->affected_rows > 0) {
            // La eliminación en la base de datos fue exitosa, ahora eliminar el archivo físico
            if ($rutaArchivo && file_exists($rutaArchivo)) {
                unlink($rutaArchivo);

                // Confirmar la transacción
                mysqli_commit($conexion);
            } else {
                // Revertir la transacción si no se pudo eliminar el archivo físico
                mysqli_rollback($conexion);
            }
        } else {
            // Revertir la transacción si no se pudo eliminar la canción de la base de datos
            mysqli_rollback($conexion);
        }

        // Cerrar la declaración
        $stmtDelete->close();
    } catch (Exception $e) {
        // Manejar excepciones y revertir la transacción en caso de error
        mysqli_rollback($conexion);
        throw new Exception("Error al eliminar la canción: " . $e->getMessage());
    }
}

// Crea una función para obtener el ID del usuario dado su nombre de usuario
function obtenerIdUsuario($nombreUsuario)
{
    global $conexion;

    $stmt = $conexion->prepare("SELECT id FROM usuarios WHERE nombre_usuario = ?");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("s", $nombreUsuario);
    $stmt->execute();
    $stmt->bind_result($idUsuario);
    $stmt->fetch();
    $stmt->close();

    return $idUsuario;
}

// Crea una función para añadir los nuevos usuarios a la base de datos con el formulario
function darDeAltaUsuario($usuario, $contrasena, $perfil)
{
    global $conexion;

    $stmt = $conexion->prepare("INSERT INTO usuarios (nombre_usuario, contrasena, perfil) VALUES (?, ?, ?)");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("sss", $usuario, $contrasena, $perfil);
    $stmt->execute();

    if ($stmt->affected_rows <= 0) {
        throw new Exception("Error al agregar el usuario");
    }

    $stmt->close();
}

function existeUsuario($usuario)
{
    global $conexion;

    $stmt = $conexion->prepare("SELECT nombre_usuario FROM usuarios WHERE nombre_usuario = ?");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->store_result();

    $existe = $stmt->num_rows > 0;

    $stmt->close();

    return $existe;
}

function darDeBajaUsuario($usuario)
{
    global $conexion;

    // Evitar dar de baja al usuario actual
    if ($usuario === $_SESSION['usuario']) {
        throw new Exception("No puedes dar de baja al usuario actual.");
    }

    $stmt = $conexion->prepare("DELETE FROM usuarios WHERE nombre_usuario = ?");
    if ($stmt === false) {
        throw new Exception("Error al preparar la consulta: " . $conexion->error);
    }

    $stmt->bind_param("s", $usuario);
    $stmt->execute();

    if ($stmt->affected_rows <= 0) {
        throw new Exception("Error al eliminar al usuario");
    }

    $stmt->close();
}

function mostrarFormularioConfirmacion($usuario)
{
    echo "<h3>Confirmar Baja de Usuario</h3>";
    echo "<p>¿Estás seguro de que deseas dar de baja al usuario '$usuario'? Esta acción eliminará permanentemente al usuario de la base de datos.</p>";
    echo "<form method='post' action='administracion.php'>";
    echo "<input type='hidden' name='accion' value='baja'>";
    echo "<input type='hidden' name='usuario' value='$usuario'>";
    echo "<input type='hidden' name='confirmacion' value='true'>";
    echo "<input type='submit' value='Confirmar Baja'>";
    echo "</form>";

    // Agregamos un botón de cancelar
    echo "<form method='post' action='administracion.php'>";
    echo "<input type='hidden' name='accion' value='baja'>";
    echo "<input type='hidden' name='usuario' value='$usuario'>";
    echo "<input type='hidden' name='confirmacion' value='false'>";
    echo "<input type='submit' value='Cancelar'>";
    echo "</form>";
}


?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Administración - SoundWave</title>
    <link rel="stylesheet" href="css/<?php echo $tema; ?>.css">
</head>

<body>
    <h2>PANEL DE ADMINISTRACIÓN | SOUNDWAVE</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label>Cambiar Tema:</label>
        <button type="submit" name="tema" value="light">Light</button>
        <button type="submit" name="tema" value="dark">Dark</button>
    </form>
    <br>
    <p>Bienvenido, <strong>
            <?php echo $_SESSION['usuario']; ?>
        </strong> | <a href="logout.php">Cerrar Sesión</a></p>

    <h3>Usuarios</h3>
    <?php
    // Obtener la lista de usuarios desde la base de datos
    $query = "SELECT nombre_usuario, perfil FROM usuarios ORDER BY perfil DESC, nombre_usuario ASC";
    $result = mysqli_query($conexion, $query);

    // Verificar si se encontraron usuarios
    if (mysqli_num_rows($result) > 0) {
        // Mostrar la tabla de usuarios
        echo "<table>";
        echo "<tr><th>Usuario</th><th>Perfil</th><th>Acción</th></tr>";

        // Iterar sobre los usuarios y mostrarlos en la tabla
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['nombre_usuario'] . "</td>";
            echo "<td>" . $row['perfil'] . "</td>";
            echo "<td>";

            // Verificar si el usuario actual es el que ha iniciado sesión
            if ($row['nombre_usuario'] !== $_SESSION['usuario']) {
                echo "<form method='post' action='administracion.php'>";
                echo "<input type='hidden' name='accion' value='baja'>";
                echo "<input type='hidden' name='usuario' value='" . $row['nombre_usuario'] . "'>";
                echo "<input type='submit' value='Dar de baja'>";
                echo "</form>";
            }

            echo "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "No se encontraron usuarios";
    }
    ?>

    <fieldset>
        <legend>
            <h3>Añadir Nuevo Usuario</h3>
        </legend>
        <?php if (isset($errorAgregarUsuario)) { ?>
            <p style="color: red;">
                <?php echo $errorAgregarUsuario; ?>
            </p>
        <?php } ?>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <label for="nuevo_usuario">Nombre de Usuario:</label>
            <input type="text" name="nuevo_usuario" required><br>

            <label for="nueva_contrasena">Contraseña:</label>
            <input type="password" name="nueva_contrasena" required><br>

            <label for="tipo_usuario">Tipo de Usuario:</label>
            <select name="tipo_usuario" required>
                <option value="usuario">Usuario</option>
                <option value="administrador">Administrador</option>
            </select><br>

            <input type="submit" name="agregar" value="Agregar Usuario">
        </form>
    </fieldset>

    <fieldset>
        <legend>
            <h3>Añadir Nuevo Archivo</h3>
        </legend>
        <?php if (isset($errorAgregarArchivo)) { ?>
            <p style="color: red;">
                <?php echo $errorAgregarArchivo; ?>
            </p>
        <?php } ?>
        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype="multipart/form-data">
            <label for="genero">Género:</label>
            <select name="genero" required>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="jazz">Jazz</option>
                <option value="clasica">Clásica</option>
                <option value="electronica">Electrónica</option>
                <option value="reggaeton">Reggaeton</option>
                <option value="hiphop">Hip Hop</option>
                <option value="rap">Rap</option>
                <option value="metal">Metal</option>
                <option value="punk">Punk</option>
            </select><br>

            <label for="archivo">Selecciona un archivo de música (MP3 o WAV):</label>
            <input type="file" name="archivo" accept=".mp3, .wav" required><br>

            <input type="submit" name="agregar_archivo" value="Agregar Archivo">
        </form>
    </fieldset>

    <fieldset>
        <legend>
            <h3>Canciones añadidas</h3>
        </legend>
        <?php
        // Obtener la lista de canciones desde la base de datos
        $queryCanciones = "SELECT id, nombre_archivo, genero, ruta_archivo FROM archivos";
        $resultCanciones = mysqli_query($conexion, $queryCanciones);

        // Verificar si se encontraron canciones
        if (mysqli_num_rows($resultCanciones) > 0) {
            // Mostrar la lista de canciones con un formulario para eliminar
            echo "<ul>";
            while ($rowCancion = mysqli_fetch_assoc($resultCanciones)) {
                echo "<li>";
                echo $rowCancion['nombre_archivo'] . " - " . $rowCancion['genero'];

                // Formulario para eliminar la canción
                echo "<form method='post' action='administracion.php'>";
                echo "<input type='hidden' name='accion' value='eliminar_cancion'>";
                echo "<input type='hidden' name='id_cancion' value='" . $rowCancion['id'] . "'>";
                echo "<input type='submit' value='Eliminar'>";
                echo "</form>";

                echo "</li>";
            }

            echo "</ul>";
        } else {
            echo "<p>No se encontraron canciones añadidas.</p>";
        }
        ?>
    </fieldset>

</body>

</html>