<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 1</title>
</head>
<body>
    <form action="ejercicio1-resultados.php" method="post">
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
