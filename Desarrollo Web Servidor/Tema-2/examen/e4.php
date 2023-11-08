<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <h1>Ejercicio 4</h1>

    <?php

    

    $cad="Hola que tal";
    //Cambia el valor de N
    $n=2;

    $palabras = explode(" ",$cad);
    $n -= 1;
    echo"$palabras[$n]";

    

?>

</body>
</html>