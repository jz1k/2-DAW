<?php
$contenido = file_get_contents("tu_otra_pagina.html");

$file = fopen("fich_salida.txt", "w");
fwrite($file, $contenido);
fclose($file);

echo "Número total de bytes escritos: " . strlen($contenido);
?>