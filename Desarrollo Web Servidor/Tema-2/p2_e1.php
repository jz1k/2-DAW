<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
    <h1>1 - Comprobar rimas</h1>
    <?php
    $palabra1 = strtolower($_POST['palabra1']);
    $palabra2 = strtolower($_POST['palabra2']);

    $rima=false;
    
    if (strlen($palabra1)>=3 && strlen($palabra2)>=3) {
        $ultimas3Palabra1 = substr($palabra1, -3);
        $ultimas3Palabra2 = substr($palabra2, -3);

        if ($ultimas3Palabra1===$ultimas3Palabra2) {
            $rima=true;
        } elseif (substr($ultimas3Palabra1,-2)== substr($ultimas3Palabra2,-2)) {
            $rima="un poco";
        }
    }

    if ($rima===true) {
        echo "<p>Las palabras '{$palabra1}' y '{$palabra2}' riman</p>";
    } elseif ($rima=== "un poco") {
        echo "<p>Las palabras '{$palabra1}' y '{$palabra2}' riman un poco</p>";
    } else{
        echo "<p>Las palabras no riman</p>";
    }

    ?>

    <form action="" method="post">
        <label for="palabra1">Palabra 1</label>
        <input type="text" name="palabra1">

        <label for="palabra2">Palabra 2</label>
        <input type="text" name="palabra2">

        <input type="submit" value="Comprobar Rima">
    </form>
</body>
</html>