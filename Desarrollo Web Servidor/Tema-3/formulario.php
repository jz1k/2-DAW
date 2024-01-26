<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>

<?php
    // Contador de visitas
    $contadorFile = 'contador.txt';
    $contador = file_exists($contadorFile) ? (int)file_get_contents($contadorFile) : 0;
    $contador++;
    file_put_contents($contadorFile, $contador);
?>

<h2>Formulario</h2>
<p>Contador de visitas: <?php echo $contador; ?></p>

<form action="procesar_formulario.php" method="post" enctype="multipart/form-data">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" required><br><br>

    <label for="apellidos">Apellidos:</label>
    <input type="text" name="apellidos" required><br><br>

    <label for="dni">DNI:</label>
    <input type="text" name="dni" required><br><br>

    <label>Sexo:</label>
    <input type="radio" name="sexo" value="hombre" required> Hombre
    <input type="radio" name="sexo" value="mujer" required> Mujer<br><br>

    <label>Méritos:</label>
    <input type="checkbox" name="meritos[]" value="carnet_conducir_b"> Carnet de Conducir B
    <input type="checkbox" name="meritos[]" value="pensionista"> Pensionista
    <input type="checkbox" name="meritos[]" value="experiencia"> 20 años o más de experiencia
    <input type="checkbox" name="meritos[]" value="discapacidad"> Discapacidad superior al 33%<br><br>

    <label for="pais_residencia">País de Residencia:</label>
    <select name="pais_residencia" required>
        <option value="españa">España</option>
        <option value="portugal">Portugal</option>
        <option value="francia">Francia</option>
    </select><br><br>

    <label for="comentario">Comentario:</label><br>
    <textarea name="comentario" rows="4" cols="50"></textarea><br><br>

    <label for="foto_carnet">Foto Carnet:</label>
    <input type="file" name="foto_carnet" accept="image/jpeg" required><br><br>

    <input type="submit" value="Enviar">
</form>

</body>
</html>
