<?php
// Configuración de la conexión a la base de datos
$dsn = "mysql:host=localhost;dbname=Instituto";
$username = "instituto";
$password = "instituto";

// Intentar conectar a la base de datos
try {
    $pdo = new PDO($dsn, $username, $password);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Consulta para obtener los datos de la tabla de alumnos ordenados por apellido
$query = "SELECT * FROM Alumnos ORDER BY Apellidos";
$result = $pdo->query($query);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Alumnos</title>
    <link rel="stylesheet" href="dwes.css">
</head>
<body>

    <h1>Lista de Alumnos</h1>

    <table border="1">
        <tr>
            <th>Nº de Expediente</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Curso</th>
            <th>Letra</th>
        </tr>

        <?php
        // Mostrar los datos en la tabla
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>{$row['N_expdte']}</td>";
            echo "<td>{$row['Nombre']}</td>";
            echo "<td>{$row['Apellidos']}</td>";
            echo "<td>{$row['Fecha_nac']}</td>";
            echo "<td>{$row['Curso']}</td>";
            echo "<td>{$row['Letra']}</td>";
            echo "</tr>";
        }
        ?>

    </table>

</body>
</html>
