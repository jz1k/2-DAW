var resultado = document.getElementById("info");
var selectRA = document.getElementById("raSelect");

function cargarRA() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var datos = JSON.parse(xmlhttp.responseText);

            for (var i in datos) {
                for (var j = 0; j < datos[i].length; j++) {
                    var option = document.createElement("option");
                    option.value = datos[i][j].id;
                    option.text = datos[i][j].textoRA;
                    selectRA.add(option);
                }
            }
        }
    }

    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function mostrarCriterios(criterios) {
    var criteriosList = document.getElementById("criteriosList");
    criteriosList.innerHTML = ""; // Limpiar la lista previa

    for (var k in criterios) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<strong>" + k + ":</strong> " + criterios[k];
        criteriosList.appendChild(listItem);
    }
}

function mostrarDatosRA() {
    var selectedRA = selectRA.value;
    resultado.innerHTML = ""; // Limpiar el contenido previo

    if (selectedRA !== "") {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);

                for (var i in datos) {
                    for (var j = 0; j < datos[i].length; j++) {
                        if (datos[i][j].id === selectedRA) {
                            resultado.innerHTML += datos[i][j].id + ": " + datos[i][j].textoRA + " - Peso: " + datos[i][j].peso + "<br/>";

                            var criterios = datos[i][j].criterios;
                            for (var k in criterios) {
                                resultado.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + k + ": " + criterios[k] + "<br/>";
                            }
                            return;
                        }
                    }
                }
            }
        }

        xmlhttp.open("GET", "datos.json", true);
        xmlhttp.send();
    }
}


function agregarRA() {
    // Implementar la lógica para agregar un nuevo RA
    console.log("Agregar nuevo RA");
}

function quitarRA() {
    // Implementar la lógica para quitar el RA actual
    console.log("Quitar RA actual");
}

function mostrarNombreProfesor() {
    var nombreProfesorInput = document.getElementById("nombreProfesorInput").value;
    var nombreProfesorParagraph = document.getElementById("nombreProfesor");
    nombreProfesorParagraph.innerHTML = "Profesor: " + nombreProfesorInput;
}

function adminLogin() {
    var adminUser = document.getElementById("adminUser").value;
    var adminPassword = document.getElementById("adminPassword").value;

    // Implementar la lógica de login del administrador aquí

    // Mostrar el campo para introducir el nombre del profesor
    document.getElementById("nombreProfesorContainer").style.display = "block";
}



var contadorCriterios = 1; // Inicializar el contador para identificadores únicos

function mostrarFormulario() {
    var formularioNuevoRA = document.getElementById("formularioNuevoRA");
    formularioNuevoRA.style.display = "block";
}

function agregarRA() {
    var inputPeso = document.getElementById("inputPeso").value;
    var inputCriterio = document.getElementById("inputCriterio").value;

    // Validar que ambos campos no estén vacíos
    if (inputPeso.trim() === "" || inputCriterio.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear un nuevo elemento de la lista con un checkbox
    var nuevaCriterio = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkCriterio" + contadorCriterios;
    nuevaCriterio.appendChild(checkbox);

    nuevaCriterio.innerHTML += inputPeso + "%" + " - " + inputCriterio;

    // Asignar un identificador único al elemento de la lista
    nuevaCriterio.id = "criterio" + contadorCriterios;
    contadorCriterios++;

    // Agregar el nuevo elemento a la lista
    var listaCriterios = document.getElementById("listaCriterios");
    listaCriterios.appendChild(nuevaCriterio);

    // Limpiar los campos del formulario
    document.getElementById("inputPeso").value = "";
    document.getElementById("inputCriterio").value = "";

    // Ocultar el formulario
    document.getElementById("formularioNuevoRA").style.display = "none";
}

function eliminarCriterio() {
    var listaCriterios = document.getElementById("listaCriterios");

    // Obtener todos los checkboxes
    var checkboxes = listaCriterios.querySelectorAll('input[type="checkbox"]:checked');

    // Eliminar los elementos asociados a los checkboxes seleccionados
    checkboxes.forEach(function (checkbox) {
        var criterioId = checkbox.id.replace("checkCriterio", "");
        var criterioElemento = document.getElementById("criterio" + criterioId);
        listaCriterios.removeChild(criterioElemento);
    });
}



// Cargar RA al cargar la página
cargarRA();
