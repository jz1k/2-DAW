<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>

<body>
    <h1>Ejercicio 5</h1>

    <?php
    $numero = "654 65 65 65";
    $valido = true;


    if (preg_match('/[6789]/', $numero[0])) {
        $compNum = explode(" ", $numero);
        
        if (strlen($compNum[0]) == 3) {
            for ($i = 0; $i < strlen($compNum); $i++) {
                $comNum[$i]=trim($compNum[$i]);
                if ($valido != is_numeric($comNum)) {
                    $valido = false;
                }
            }
        }
    }


    if ($valido==true) {
        echo "El numero $numero es valido";
    } else {
        echo "El numero $numero NO es valido";
    }

    ?>
</body>

</html>