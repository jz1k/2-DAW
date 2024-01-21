<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
</head>
<body>
    <!-- Antes de nada importante crear la carpeta img y darle los permisos correspondientes -->
    
    <?php
    // Variables para manejar errores y mostrar resultados
    $errores = [];
    $resultados = [];

    // Procesar el formulario al enviar
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Validar campos obligatorios
        $titulo = isset($_POST['titulo']) ? trim($_POST['titulo']) : '';
        $texto = isset($_POST['texto']) ? trim($_POST['texto']) : '';

        if (empty($titulo)) {
            $errores[] = "Se requiere el título de la noticia";
        }

        if (empty($texto)) {
            $errores[] = "Se requiere el texto de la noticia";
        }

        // Si no hay errores, procesar la inserción y mostrar resultados
        if (empty($errores)) {
            // Procesar la imagen (guardar en carpeta img)
            $imagen = '';
            if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == UPLOAD_ERR_OK) {
                $imagen = $_FILES['imagen']['name'];
                move_uploaded_file($_FILES['imagen']['tmp_name'], 'img/' . $imagen);
            }

            // Guardar datos para mostrar después
            $resultados['titulo'] = $titulo;
            $resultados['texto'] = $texto;
            $resultados['categoria'] = isset($_POST['categoria']) ? $_POST['categoria'] : 'Sin categoría';
            $resultados['imagen'] = $imagen;  // Nombre del archivo guardado

            // Mostrar mensaje de éxito
            echo "<p>La noticia ha sido recibida correctamente:</p>";
            echo "• Título: $titulo<br>";
            echo "• Texto: $texto<br>";
            echo "• Categoría: {$resultados['categoria']}<br>";
            
            if (!empty($imagen)) {
                echo "• Imagen: <a href='img/$imagen' target='_blank'>$imagen</a><br>";
            }
            
            echo '<br><a href="ejercicio4.php">Insertar otra noticia</a>';
        } else {
            // Mostrar errores y enlace para volver al formulario
            echo "<p>Resultado de la inserción de nueva noticia</p>";
            echo "No se ha podido realizar la inserción debido a los siguientes errores:<br>";
            foreach ($errores as $error) {
                echo "• $error<br>";
            }
            echo '<br><a href="ejercicio4.php">Volver</a>';
        }
    }
    ?>

    <form action="ejercicio4.php" method="post" enctype="multipart/form-data">
        <h1>Subida de ficheros. Insertar nueva noticia</h1>

        <label for="titulo">Título: *</label>
        <input type="text" name="titulo" id="titulo" required>
        <br>

        <label for="texto">Texto: *</label>
        <textarea name="texto" id="texto" rows="4" cols="50" required></textarea>
        <br>

        <label for="categoria">Categoría:</label>
        <select name="categoria">
            <option value="promociones">Promociones</option>
            <option value="eventos">Eventos</option>
            <option value="noticias">Noticias</option>
            <option value="ofertas">Ofertas</option>
            <option value="otros">Otros</option>
        </select>
        <br>

        <label for="imagen">Imagen:</label>
        <input type="file" name="imagen">
        <br>

        <input type="submit" name="insertar" value="Insertar noticia">
    </form>
</body>
</html>
