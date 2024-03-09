// Añadir una función para cargar los RA al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarRA();
    cargarOpcionesRA();
});

var resultado = document.getElementById("info");
var selectRA = document.getElementById("losRA"); // Cambiado el ID aquí

function cargarOpcionesRA() {
    var selectRA = document.getElementById("selectRA");

    // Limpiar las opciones previas
    selectRA.innerHTML = "<option value=''>Selecciona un RA</option>";

    // Obtener datos de RA del archivo JSON
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var datosRA = JSON.parse(xmlhttp.responseText);

            // Llenar el desplegable con opciones de RA
            datosRA["RA Proyecto Desarrollo Aplicaciones Web"].forEach(function (ra) {
                var option = document.createElement("option");
                option.value = ra.id;
                option.text = ra.textoRA;
                selectRA.add(option);
            });
        }
    };
    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

function cargarCriteriosSeleccionados() {
    var selectRA = document.getElementById("selectRA");
    var selectCriterios = document.getElementById("selectCriterios");
    var criteriosContainer = document.getElementById("criteriosContainer");

    // Limpiar las opciones previas
    selectCriterios.innerHTML = "";

    // Obtener el RA seleccionado
    var selectedRAId = selectRA.value;

    // Obtener datos de RA del archivo JSON
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var datosRA = JSON.parse(xmlhttp.responseText);

            // Encontrar el RA seleccionado en los datos
            var selectedRA = datosRA["RA Proyecto Desarrollo Aplicaciones Web"].find(function (ra) {
                return ra.id === selectedRAId;
            });

            // Llenar el desplegable con opciones de criterios del RA seleccionado
            if (selectedRA) {
                for (var criterioId in selectedRA.criterios) {
                    var option = document.createElement("option");
                    option.value = criterioId;
                    option.text = selectedRA.criterios[criterioId];
                    selectCriterios.add(option);
                }
            }

            // Mostrar el contenedor de criterios
            criteriosContainer.style.display = "block";
        }
    };
    xmlhttp.open("GET", "datos.json", true);
    xmlhttp.send();
}

// Añadir una función para agregar los criterios seleccionados a la lista
function agregarSeleccion() {
    var selectCriterios = document.getElementById("selectCriterios");
    var listaCriteriosSeleccionados = document.getElementById("listaCriteriosSeleccionados");

    // Obtener los criterios seleccionados
    var selectedCriterios = Array.from(selectCriterios.selectedOptions);

    // Agregar los criterios a la lista
    selectedCriterios.forEach(function (criterio) {
        var listItem = document.createElement("li");
        listItem.textContent = criterio.text;
        listaCriteriosSeleccionados.appendChild(listItem);
    });
}

//FASE 1
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
    var criteriosList = document.getElementById("listaCriterios"); // Cambiado el ID aquí
    criteriosList.innerHTML = ""; // Limpiar la lista previa

    for (var k in criterios) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<strong>" + k + ":</strong> " + criterios[k];
        criteriosList.appendChild(listItem);
    }
}

function mostrarDatosRA() {
    var selectedRA = selectRA.value;
    var listaCriterios = document.getElementById('listaCriterios');

    // Limpiar la lista de criterios
    listaCriterios.innerHTML = "";

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
                            // Crear un elemento de lista para el RA
                            var listItem = document.createElement('li');
                            listItem.textContent = datos[i][j].id + ": " + datos[i][j].textoRA + " - Peso: " + datos[i][j].peso;
                            listaCriterios.appendChild(listItem);

                            var criterios = datos[i][j].criterios;
                            for (var k in criterios) {
                                // Crear un elemento de lista para cada criterio
                                var criterioItem = document.createElement('li');
                                criterioItem.textContent = k + ": " + criterios[k];
                                criterioItem.style.marginLeft = '20px'; // Ajustar la indentación
                                listaCriterios.appendChild(criterioItem);
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


function quitarRA() {
    // Implementar la lógica para quitar el RA actual
    console.log("Quitar RA actual");
}

function mostrarNombreProfesor() {
    var nombreProfesorInput = document.getElementById("profesor").value;
    var nombreProfesorParagraph = document.getElementById("nombreProfesor");
    nombreProfesorParagraph.innerHTML = "Profesor: " + nombreProfesorInput;
}

//FASE-2
function adminLogin() {
    var adminUser = document.getElementById("adminUser").value.toLowerCase();
    var adminPassword = document.getElementById("adminPassword").value.toLowerCase();

    // Verificar si el usuario y la contraseña son correctos
    if (adminUser === "admin" && adminPassword === "admin") {
        // Mostrar el campo para introducir el nombre del profesor
        document.getElementById("nombreProfesorContainer").style.display = "block";
    } else {
        // Mensaje de error o cualquier otra acción si el login falla
        alert("Credenciales de administrador incorrectas. Por favor, inténtelo de nuevo.");
    }
}


var contadorCriterios = 1; // Inicializar el contador para identificadores únicos

function mostrarFormulario() {
    var formularioNuevoRA = document.getElementById("formularioNuevoRA");
    formularioNuevoRA.style.display = "block";
}

function agregarRA() {
    var inputPeso = document.getElementById("peso").value; // Cambiado el ID aquí
    var inputCriterio = document.getElementById("losCriterios").value; // Cambiado el ID aquí
    var tipoActividad = document.getElementById("tipoTarea").value; // Cambiado el ID aquí
    var nombreActividad = document.getElementById("nombreTarea").value; // Cambiado el ID aquí

    // Validar que todos los campos estén completos
    if (inputPeso.trim() === "" || inputCriterio.trim() === "" || tipoActividad === "" || nombreActividad.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear un nuevo elemento de la lista con un checkbox
    var nuevaCriterio = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkCriterio" + contadorCriterios;
    nuevaCriterio.appendChild(checkbox);

    // Agregar el contenido del criterio
    nuevaCriterio.innerHTML += inputPeso + "%" + " - " + inputCriterio + " - Tipo: " + tipoActividad + " - Nombre: " + nombreActividad;

    // Asignar un identificador único al elemento de la lista
    nuevaCriterio.id = "criterio" + contadorCriterios;
    contadorCriterios++;

    // Agregar el nuevo elemento a la lista específica
    var listaCriteriosSeleccionados = document.getElementById("listaCriteriosSeleccionados");
    listaCriteriosSeleccionados.appendChild(nuevaCriterio);

    // Limpiar los campos del formulario
    document.getElementById("peso").value = ""; // Cambiado el ID aquí
    document.getElementById("losCriterios").value = ""; // Cambiado el ID aquí
    document.getElementById("tipoTarea").value = ""; // Cambiado el ID aquí
    document.getElementById("nombreTarea").value = ""; // Cambiado el ID aquí

    // Ocultar el formulario
    document.getElementById("formularioNuevoRA").style.display = "none";
}


function eliminarCriterio() {
    var listaCriteriosSeleccionados = document.getElementById("listaCriteriosSeleccionados");

    // Obtener todos los checkboxes
    var checkboxes = listaCriteriosSeleccionados.querySelectorAll('input[type="checkbox"]:checked');

    // Eliminar los elementos asociados a los checkboxes seleccionados
    checkboxes.forEach(function (checkbox) {
        var criterioId = checkbox.id.replace("checkCriterio", "");
        var criterioElemento = document.getElementById("criterio" + criterioId);
        listaCriteriosSeleccionados.removeChild(criterioElemento);
    });
}


// Cargar RA al cargar la página
cargarRA();
