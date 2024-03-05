var resultado = document.getElementById("info");
var selectRA = document.getElementById("losRA"); // Cambiado el ID aquí

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

    nuevaCriterio.innerHTML += inputPeso + "%" + " - " + inputCriterio + " - Tipo: " + tipoActividad + " - Nombre: " + nombreActividad;

    // Asignar un identificador único al elemento de la lista
    nuevaCriterio.id = "criterio" + contadorCriterios;
    contadorCriterios++;

    // Agregar el nuevo elemento a la lista
    var listaCriterios = document.getElementById("listaCriterios");
    listaCriterios.appendChild(nuevaCriterio);

    // Limpiar los campos del formulario
    document.getElementById("peso").value = ""; // Cambiado el ID aquí
    document.getElementById("losCriterios").value = ""; // Cambiado el ID aquí
    document.getElementById("tipoTarea").value = ""; // Cambiado el ID aquí
    document.getElementById("nombreTarea").value = ""; // Cambiado el ID aquí

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
