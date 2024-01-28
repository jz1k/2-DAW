<?php
$nombre = $_POST["nombre"];
$pais = $_POST["pais"];
$duracion = $_POST["duracion"];
$dias = $_POST["dias"];

$destino = "$nombre:$pais:$duracion:$dias\n";

file_put_contents("viajes.txt", $destino, FILE_APPEND);

header("Location: travelmas.php");
?>
