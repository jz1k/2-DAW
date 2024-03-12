<?php
function setTemaCookie($tema) {
    setcookie('tema_preferido', $tema, time() + (365 * 24 * 60 * 60), '/');
}

function getTemaCookie() {
    return isset($_COOKIE['tema_preferido']) ? $_COOKIE['tema_preferido'] : 'light';
}
?>
