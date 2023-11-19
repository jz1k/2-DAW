<?php

function mostrarInformacionPais($pais, $capital = "Madrid", $habitantes = "muchos") {
    echo "La capital de $pais es $capital y tiene $habitantes habitantes.<br>";
}

mostrarInformacionPais("España");
mostrarInformacionPais("Portugal", "Lisboa");
mostrarInformacionPais("Francia", "París", 6000000);

?>
