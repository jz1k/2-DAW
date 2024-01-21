<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Comentarios</title>
</head>
<body>
    <form action="pagina2.php" method="post">
        <label for="nombre">Nombre de usuario:</label>
        <input type="text" name="nombre" required>
        <br>
        <label for="comentario">Comentario:</label>
        <textarea name="comentario" rows="4" cols="50" required></textarea>
        <br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
