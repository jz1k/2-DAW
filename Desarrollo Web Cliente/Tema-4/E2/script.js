function obtenerGrosorBorde() {
    var tabla = document.getElementById('tabla1');
    var grosorBorde = tabla.getAttribute('border');
    alert('Grosor del borde de la tabla: ' + grosorBorde);
}

function aumentarGrosorBorde() {
    var tabla = document.getElementById('tabla1');
    var grosorActual = parseInt(tabla.getAttribute('border'));
    var nuevoGrosor = grosorActual + 1;
    tabla.setAttribute('border', nuevoGrosor);
}

function reducirGrosorBorde() {
    var tabla = document.getElementById('tabla1');
    var grosorActual = parseInt(tabla.getAttribute('border'));
    var nuevoGrosor = Math.max(1, grosorActual - 1);
    tabla.setAttribute('border', nuevoGrosor);
}
