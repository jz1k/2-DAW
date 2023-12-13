<?php

function escribirEncabezadoHTML($titulo) {
    echo "<!DOCTYPE html>\n";
    echo "<html>\n";
    echo "<head>\n";
    echo "<title>$titulo</title>\n";
    echo "</head>\n";
    echo "<body>\n";
}

escribirEncabezadoHTML("Ejemplo de Página PHP");

?>
