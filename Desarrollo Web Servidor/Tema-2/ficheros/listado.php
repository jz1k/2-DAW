<?php
$directorio = "./";

$archivos = scandir($directorio);

foreach ($archivos as $archivo) {
    if ($archivo != "." && $archivo != "..") {
        $ruta = $directorio . $archivo;
        echo "Nombre: $archivo - Última modificación: " . date("d-m-Y H:i:s", filemtime($ruta));

        if (is_file($ruta)) {
            echo " - Tamaño: " . filesize($ruta) . " bytes";
        }

        echo "<br>";
    }
}
?>
