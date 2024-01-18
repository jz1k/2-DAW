<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5</title>
    <style>
        .advertencia {
            color: red;
        }
    </style>
</head>
<body>
    <?php
    // Variables para manejar la advertencia y los resultados
    $advertencia = '';
    $resultados = [];

    // Procesar el formulario al enviar
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verificar si el texto a buscar está vacío
        $textoBusqueda = isset($_POST['texto_busqueda']) ? trim($_POST['texto_busqueda']) : '';

        if (empty($textoBusqueda)) {
            $advertencia = 'El texto a buscar no puede estar vacío.';
        } else {
            // Aquí puedes realizar cualquier otra acción con el texto a buscar
            // En este ejemplo, simplemente se guarda para mostrar después
            $resultados['texto_busqueda'] = $textoBusqueda;
            $resultados['buscar_en'] = isset($_POST['buscar_en']) ? $_POST['buscar_en'] : '';
            $resultados['genero'] = isset($_POST['genero']) ? $_POST['genero'] : 'todos';
        }
    }
    ?>

    <form action="ejercicio5.php" method="post">
        <label for="texto_busqueda">Texto a buscar:</label>
        <input type="text" name="texto_busqueda" id="texto_busqueda">
        <br>

        <label>Buscar en:</label>
        <input type="radio" name="buscar_en" value="cancion"> Títulos de canción
        <input type="radio" name="buscar_en" value="album"> Nombre de álbum
        <input type="radio" name="buscar_en" value="ambos"> Ambos campos
        <br>

        <label for="genero">Género musical:</label>
        <select name="genero" id="genero">
            <option value="todos">Todos</option>
            <option value="acustica">Acústica</option>
            <option value="banda_sonora">Banda Sonora</option>
            <option value="blues">Blues</option>
            <option value="electronica">Electrónica</option>
            <option value="folk">Folk</option>
            <option value="jazz">Jazz</option>
            <option value="new_age">New Age</option>
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
        </select>
        <br>

        <input type="submit" name="buscar" value="Buscar">
    </form>

    <?php
    // Mostrar advertencia si es necesario
    if (!empty($advertencia)) {
        echo "<p class='advertencia'>$advertencia</p>";
    }

    // Mostrar resultados si existen
    if (isset($resultados['texto_busqueda'])) {
        echo "<p>Formulario simple. Resultados del formulario</p>";
        echo "<p>Estos son los datos introducidos:</p>";
        echo "• Texto de búsqueda: {$resultados['texto_busqueda']}<br>";
        echo "• Buscar en: {$resultados['buscar_en']}<br>";
        echo "• Género: {$resultados['genero']}<br>";

        echo '<br><a href="ejercicio5.php">Nueva búsqueda</a>';
    }
    ?>
</body>
</html>
