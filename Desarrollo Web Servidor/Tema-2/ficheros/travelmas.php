<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>TRAVELMAS</title>
</head>
<body>
    <form action="agregar_destino.php" method="post">
        <label for="nombre">Nombre del destino:</label>
        <input type="text" name="nombre" required>
        <br>
        <label for="pais">País:</label>
        <input type="text" name="pais" required>
        <br>
        <label for="duracion">Duración:</label>
        <input type="text" name="duracion" required>
        <br>
        <label for="dias">Días de la semana disponibles:</label>
        <input type="text" name="dias" required>
        <br>
        <input type="submit" value="Agregar destino">
    </form>

    <?php
    $viajes = file("viajes.txt", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    if (!empty($viajes)) {
        echo "<h2>Listado de Destinos</h2>";
        echo "<table border='1'>
                <tr>
                    <th>Nombre del Destino</th>
                    <th>País</th>
                    <th>Duración</th>
                    <th>Días Disponibles</th>
                </tr>";
        foreach ($viajes as $viaje) {
            $detalle = explode(":", $viaje);
            echo "<tr>
                    <td>{$detalle[0]}</td>
                    <td>{$detalle[1]}</td>
                    <td>{$detalle[2]}</td>
                    <td>{$detalle[3]}</td>
                  </tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>
