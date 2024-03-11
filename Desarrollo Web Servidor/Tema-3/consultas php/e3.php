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

// Obtener la lista de cursos y letras para los desplegables de filtro
$queryCursos = "SELECT DISTINCT Curso FROM Alumnos";
$queryLetras = "SELECT DISTINCT Letra FROM Alumnos";
$cursos = $pdo->query($queryCursos)->fetchAll(PDO::FETCH_COLUMN);
$letras = $pdo->query($queryLetras)->fetchAll(PDO::FETCH_COLUMN);

// Procesar el formulario de filtro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filtroCurso = isset($_POST['curso']) ? $_POST['curso'] : '';
    $filtroLetra = isset($_POST['letra']) ? $_POST['letra'] : '';

    // Construir la consulta con los filtros
    $queryFiltrada = "SELECT * FROM Alumnos WHERE 1";

    if ($filtroCurso !== '') {
        $queryFiltrada .= " AND Curso = '$filtroCurso'";
    }

    if ($filtroLetra !== '') {
        $queryFiltrada .= " AND Letra = '$filtroLetra'";
    }

    $queryFiltrada .= " ORDER BY Apellidos";

    // Ejecutar la consulta filtrada
    $result = $pdo->query($queryFiltrada);
}
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

    <form method="post" action="">
        <label for="curso">Filtrar por Curso:</label>
        <select name="curso" id="curso">
            <option value="">Todos</option>
            <?php foreach ($cursos as $curso) : ?>
                <option value="<?php echo $curso; ?>"><?php echo $curso; ?></option>
            <?php endforeach; ?>
        </select>

        <label for="letra">Filtrar por Letra:</label>
        <select name="letra" id="letra">
            <option value="">Todas</option>
            <?php foreach ($letras as $letra) : ?>
                <option value="<?php echo $letra; ?>"><?php echo $letra; ?></option>
            <?php endforeach; ?>
        </select>

        <button type="submit">Filtrar</button>
    </form>

    <table border="1">
        <tr>
            <th>Número de Expediente</th>
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
