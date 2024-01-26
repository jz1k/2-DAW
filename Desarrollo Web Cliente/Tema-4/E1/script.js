function obtenerGrosorBorde() {
    // Obtén el elemento de la tabla por su ID
    var tabla = document.getElementById('tabla1');

    // Obtiene el valor del atributo 'border' de la tabla
    var grosorBorde = tabla.getAttribute('border');

    // Muestra un mensaje emergente con el grosor del borde
    alert('Grosor del borde de la tabla: ' + grosorBorde + 'px');
}
