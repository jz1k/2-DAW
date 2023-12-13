<?php

function sumatorio($num) {
    $suma = 0;
    for ($i = 1; $i < $num; $i++) {
        $suma += $i;
    }
    echo "Sumatorio de $num: $suma<br>";
}

sumatorio(5);

?>
