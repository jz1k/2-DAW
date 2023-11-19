<?php

function cuadrado($num) {
    $resultado = $num * $num;
    echo "Cuadrado de $num: $resultado<br>";
}

function cubo($num) {
    $resultado = $num * $num * $num;
    echo "Cubo de $num: $resultado<br>";
}

cuadrado(5);
cubo(3);

?>
