<?php

function intercambio(&$num1, &$num2) {
    $temp = $num1;
    $num1 = $num2;
    $num2 = $temp;
}

$a = 3;
$b = 7;
intercambio($a, $b);
echo "\$a después del intercambio: $a<br>";
echo "\$b después del intercambio: $b<br>";

?>
