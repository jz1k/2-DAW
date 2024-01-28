var nodoImagen;

function crearNodo() {
    nodoImagen = document.getElementById("imagen");
}

function agregar() {
    var descripcionInput = document.getElementById("descripcionInput");
    var descripcion = descripcionInput.value.trim();

    if (descripcion !== "") {
        nodoImagen.setAttribute("title", descripcion);
        descripcionInput.value = ""; // Limpiar el campo después de agregar
    }
}

function eliminar() {
    nodoImagen.removeAttribute("title");
}
