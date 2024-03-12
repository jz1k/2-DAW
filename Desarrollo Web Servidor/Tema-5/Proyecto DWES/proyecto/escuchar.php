<?php
session_start();


//CONTROLA EL COLOR FAVORITO
include 'cookie.php';
$tema = getTemaCookie();

$listaCreada = false;


// Verifica si se ha enviado un formulario para cambiar el tema
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['tema'])) {
    $tema = $_POST['tema'];

    // Asegúrate de que el tema sea 'light' o 'dark'
    if ($tema === 'light' || $tema === 'dark') {
        setTemaCookie($tema);
    }
}

// Verificar si el usuario tiene una sesión activa y es usuario normal
if (!isset($_SESSION['usuario']) || $_SESSION['perfil'] !== 'usuario') {
    header("Location: login.php");
    exit();
}

$conexion = mysqli_connect("localhost", "dwes", "abc123", "soundwave");
if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}



// Procesar formulario para agregar canciones a la lista de reproducción
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['agregar_lista'])) {
    $idCancion = $_POST['id_cancion'];

    // Obtener información de la canción
    $queryCancion = "SELECT nombre_archivo, genero, ruta_archivo FROM archivos WHERE id = $idCancion";
    $resultCancion = mysqli_query($conexion, $queryCancion);

    if ($resultCancion && mysqli_num_rows($resultCancion) > 0) {
        $rowCancion = mysqli_fetch_assoc($resultCancion);

        // Agregar la canción a la lista de reproducción en la sesión
        if (!isset($_SESSION['lista_reproduccion'])) {
            $_SESSION['lista_reproduccion'] = [];
        }

        $_SESSION['lista_reproduccion'][] = [
            'id' => $idCancion,
            'nombre_archivo' => $rowCancion['nombre_archivo'],
            'genero' => $rowCancion['genero'],
            'ruta_archivo' => $rowCancion['ruta_archivo']
        ];
    }
}

// Procesar formulario para crear la lista de reproducción
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['crear_lista'])) {
    // Simular la creación de la lista de reproducción (puedes agregar lógica adicional aquí)
    $listaCreada = true;

    // Limpiar la lista de reproducción en la sesión
    unset($_SESSION['lista_reproduccion']);
} else {
    $listaCreada = false;
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escuchar - SoundWave</title>
    <link rel="stylesheet" href="css/<?php echo $tema; ?>.css">
</head>

<body>
    <h2>SOUNDWAVE</h2>

    <p>Bienvenido, <strong>
            <?php echo $_SESSION['usuario']; ?>
        </strong> | <a href="logout.php">Cerrar Sesión</a></p>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label>Cambiar Tema:</label>
        <button type="submit" name="tema" value="light">Light</button>
        <button type="submit" name="tema" value="dark">Dark</button>
    </form>

    <h3>Canciones Disponibles</h3>
    <?php
    // Obtener la lista de canciones desde la base de datos
    $queryCanciones = "SELECT id, nombre_archivo, genero, ruta_archivo FROM archivos";
    $resultCanciones = mysqli_query($conexion, $queryCanciones);

    // Verificar si se encontraron canciones
    if (mysqli_num_rows($resultCanciones) > 0) {
        // Mostrar la lista de canciones con un reproductor y botón para agregar a la lista
        echo "<ul>";
        while ($rowCancion = mysqli_fetch_assoc($resultCanciones)) {
            echo "<li>";
            echo $rowCancion['nombre_archivo'] . " - " . $rowCancion['genero'];
            echo "</br>";
            // Reproductor de audio HTML5
            echo "<audio controls>";
            echo "<source src='" . $rowCancion['ruta_archivo'] . "' type='audio/mpeg'>";
            echo "Tu navegador no soporta el elemento de audio.";
            echo "</audio>";

            // Formulario para agregar a la lista de reproducción
            echo "<form method='post' action='escuchar.php'>";
            echo "<input type='hidden' name='id_cancion' value='" . $rowCancion['id'] . "'>";
            echo "<button type='submit' name='agregar_lista'>Agregar a Lista</button>";
            echo "</form>";
            echo "</br>";

            echo "</li>";
        }
        echo "</ul>";

        // Lista de reproducción actual
        if (isset($_SESSION['lista_reproduccion']) && count($_SESSION['lista_reproduccion']) > 0) {
            echo "<h3>Lista de Reproducción Actual</h3>";
            echo "<ul>";
            foreach ($_SESSION['lista_reproduccion'] as $cancion) {
                echo "<li>" . $cancion['nombre_archivo'] . "</li>";
            }
            echo "</ul>";

            // Botón para crear la lista de reproducción
            echo "<form method='post' action='escuchar.php'>";
            echo "<button type='submit' name='crear_lista'>Crear Lista de Reproducción</button>";
            echo "</form>";
        }

        // Mensaje de lista creada
        if ($listaCreada) {
            echo "<p>Tu lista de reproducción ha sido creada.</p>";
        }
    } else {
        echo "<p>No se encontraron canciones disponibles.</p>";
    }
    ?>
</body>

</html>
