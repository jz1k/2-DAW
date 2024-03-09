var nodoimagen;

function crearNodo() {
    nodoimagen = document.getElementById('imagen');
}

function agregar() {
    var descripcionInput = document.getElementById('descripcionInput');
    var descripcion = descripcionInput.value.trim();

    if (descripcion !== "") {
        nodoimagen.setAttribute('title', descripcion);
        descripcionInput = "";
    }
}

function eliminar() {
    nodoimagen.removeAttribute('title');
}