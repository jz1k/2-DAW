<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados de Búsqueda</title>
</head>
<body>
    <?php
    if (isset($_POST['buscar'])) {
        $texto_busqueda = isset($_POST['texto_busqueda']) ? $_POST['texto_busqueda'] : '';
        $buscar_en = isset($_POST['buscar_en']) ? $_POST['buscar_en'] : '';
        $genero = isset($_POST['genero']) ? $_POST['genero'] : 'Todos';

        echo "<p>Formulario simple. Resultados del formulario</p>";
        echo "<p>Estos son los datos introducidos:</p>";
        echo "• Texto de búsqueda: $texto_busqueda<br>";
        echo "• Buscar en: $buscar_en<br>";
        echo "• Género: $genero<br>";

        echo '<br><a href="ejercicio1.php">Nueva búsqueda</a>';
    }
    ?>
</body>
</html>
