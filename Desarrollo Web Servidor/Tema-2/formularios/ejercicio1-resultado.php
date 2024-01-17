<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados de Búsqueda</title>
</head>
<body>
    <?php
    if (isset($_POST['buscar'])) {
        $album = isset($_POST['album']) ? $_POST['album'] : '';
        echo "Resultados de búsqueda:<br>";
        echo "Nombre de álbum: $album<br>";
    }
    ?>
    <a href="ejercicio1.php">Volver a la página de búsqueda</a>
</body>
</html>
