<?php

function segundosDesdeDias($dias) {
    $segundos = $dias * 24 * 60 * 60;
    echo "Número de segundos en $dias días: $segundos<br>";
}

segundosDesdeDias(10);

?>
