<?php

function mediaAritmeticaV2(array $numeros) {
    $cantidad = count($numeros);
    if ($cantidad === 0) {
        return 0; // No se puede 0
    }
    $suma = array_sum($numeros);
    $media = $suma / $cantidad;
    return $media;
}

$valores = [15, 25, 35, 45];
echo "Media Aritmética V2: " . mediaAritmeticaV2($valores) . "<br>";

?>
