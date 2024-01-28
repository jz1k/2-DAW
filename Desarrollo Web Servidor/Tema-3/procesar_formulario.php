<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") { //Usar aqui REQUEST comprueba que efectivamente se sube con el metodo POST
    // COmprueba que no se han dejado en blanco campos
    $camposObligatorios = ["nombre", "apellidos", "dni", "foto_carnet"];

    $errores = [];

    foreach ($camposObligatorios as $campo) {
        if (empty($_POST[$campo]) && $campo !== "foto_carnet") {
            $errores[] = "Error: El campo $campo no puede estar en blanco";
        }
    }

    // Comprobar que el fichero subido es una foto (JPEG)
    $tipoImagenPermitido = IMAGETYPE_JPEG;
    $tipoImagenSubido = exif_imagetype($_FILES['foto_carnet']['tmp_name']);

    if ($tipoImagenSubido !== $tipoImagenPermitido) {
        $errores[] = "Error: El archivo subido no es una imagen JPEG válida.";
    }

    // Si hay errores, mostrar el formulario con los errores
    if (!empty($errores)) {
        echo "<h2>Errores:</h2>";
        foreach ($errores as $error) {
            echo "<p>$error</p>";
        }
        echo "<p><a href='formulario.php'>Volver al formulario</a></p>";
        exit();
    }

    // Mover el fichero al directorio 'img'
    $directorioDestino = 'img/';
    $nombreArchivo = $_FILES['foto_carnet']['name'];
    $rutaDestino = $directorioDestino . $nombreArchivo;

    if (!move_uploaded_file($_FILES['foto_carnet']['tmp_name'], $rutaDestino)) {
        echo "Error: No se pudo mover el archivo al directorio de destino.";
        exit();
    }
    // Mostrar los datos y la foto
    echo "<h2>Datos Recibidos de {$_POST['nombre']}:</h2>";
    echo "<p>Nombre: {$_POST['nombre']}</p>";
    echo "<p>Apellidos: {$_POST['apellidos']}</p>";
    echo "<p>DNI: {$_POST['dni']}</p>";
    echo "<p>Sexo: {$_POST['sexo']}</p>";
    echo "<p>Méritos: " . implode(", ", isset($_POST['meritos']) ? $_POST['meritos'] : []) . "</p>";
    echo "<p>País de Residencia: {$_POST['pais_residencia']}</p>";
    echo "<p>Comentario: {$_POST['comentario']}</p>";
    // Mostrar la foto
    echo "<p>Foto Carnet: <img src='$rutaDestino' alt='Foto Carnet'></p>";
    // Enlace para volver al formulario
    echo "<p><a href='formulario.php'>Volver al formulario</a></p>";

} else {
    // Redireccionar si se intenta acceder directamente a este script sin enviar datos por el formulario
    header("Location: formulario.php");
    exit();
}

?>