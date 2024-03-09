function obtenerGrosorBorde() {
    var tabla=document.getElementById('tabla1');
    grosor=tabla.getAttribute('border');
    alert("El grosor del borde es de: "+grosor);
}

function aumentarGrosorBorde() {
    var tabla=document.getElementById('tabla1');
    grosor=tabla.getAttribute('border');
    grosor++;
    tabla.setAttribute('border', grosor);
}

function reducirGrosorBorde() {
    var tabla=document.getElementById('tabla1');
    grosor=tabla.getAttribute('border');

    if (grosor<=1) {
        alert("No se puede reducir mas el grosor")
        
    }else{
        var nuevoGrosor=grosor-1;
    }

    
    tabla.setAttribute('border', nuevoGrosor);
}