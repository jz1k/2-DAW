<?php
$file = fopen("visitas.txt", "r+");

$contador = fread($file, 8);
$contador = (int)$contador + 1;

rewind($file);
fwrite($file, $contador);
fclose($file);

echo "Esta es la visita número: $contador";
?>
