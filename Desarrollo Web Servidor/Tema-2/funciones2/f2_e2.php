<?php

function mediaAritmetica(...$numeros) {
    $cantidad = count($numeros);
    if ($cantidad === 0) {
        return 0; // No se puede 0
    }
    $suma = array_sum($numeros);
    $media = $suma / $cantidad;
    return $media;
}

$valores = [10, 20, 30, 40];
echo "Media Aritmética: " . mediaAritmetica(...$valores) . "<br>";

?>
