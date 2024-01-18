<?php
$nombre = $_POST["nombre"];
$comentario = $_POST["comentario"];

$datos = "$nombre\n$comentario\n--------------------------------------------------------\n";

file_put_contents("datos.txt", $datos, FILE_APPEND);

echo "Los datos se guardaron correctamente:<br>";
echo "--------------------------------------------------------<br>";
echo "$nombre<br>";
echo "$comentario<br>";
echo "--------------------------------------------------------<br>";
echo '<a href="pagina3.php">ver fichero</a>';
?>
