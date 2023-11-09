<!DOCTYPE html>
<html>
<head>
    <title>Cálculo de Fibonacci</title>
</head>
<body>

<h1>Cálculo de Fibonacci</h1>

<?php
function fibonacci($n) {
    if ($n <= 0) {
        return 0; // Caso base: Fibonacci(0) es 0.
    } elseif ($n == 1) {
        return 1; // Caso base: Fibonacci(1) es 1.
    } else {
        // Llamada recursiva: Fibonacci(n) es la suma de Fibonacci(n-1) y Fibonacci(n-2).
        return fibonacci($n - 1) + fibonacci($n - 2);
    }
}

$n = 10; // Cambia este valor para calcular el número Fibonacci deseado.
$resultado = fibonacci($n);
?>

<p>El número Fibonacci de <?= $n ?> es <?= $resultado ?></p>

</body>
</html>
