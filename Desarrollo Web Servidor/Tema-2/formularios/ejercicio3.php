<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 3</title>
</head>
<body>
    <?php
    // Procesar el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recoger y mostrar los datos
        $texto_busqueda = isset($_POST['texto_busqueda']) ? $_POST['texto_busqueda'] : '';
        $buscar_en = isset($_POST['buscar_en']) ? $_POST['buscar_en'] : '';
        $genero = isset($_POST['genero']) ? $_POST['genero'] : 'todos';

        echo "<p>Formulario simple. Resultados del formulario</p>";
        echo "<p>Estos son los datos introducidos:</p>";
        echo "• Texto de búsqueda: $texto_busqueda<br>";
        echo "• Buscar en: $buscar_en<br>";
        echo "• Género: $genero<br>";

        echo '<br><a href="ejercicio3.php">Nueva búsqueda</a>';
    }
    ?>

    <form action="ejercicio3.php" method="post">
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
</body>
</html>
