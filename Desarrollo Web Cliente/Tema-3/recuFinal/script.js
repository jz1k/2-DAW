// Funciones para las ventanas
function abrirVentana1() {
    // Crear ventana 1
    let ventana1 = window.open("", "", "width=300,height=300,top=50,left=50");
    ventana1.document.write("<p style='color: lightgreen'>Ventana 1</p>");
    // Formulario
    let formulario = ventana1.document.createElement("form");
    formulario.innerHTML = `
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario">
        <br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena">
        <br>
        <label for="nuevaContrasena">Nueva contraseña:</label>
        <input type="password" id="nuevaContrasena" name="nuevaContrasena">
        <br><br>
        <button type="button" id="btnValidar">Validar</button>
    `;
    ventana1.document.body.appendChild(formulario);

    // Función para validar el usuario y la contraseña
    let btnValidar = ventana1.document.getElementById("btnValidar");
    btnValidar.addEventListener("click", function() {
        let usuario = ventana1.document.getElementById("usuario").value;
        let contrasena = ventana1.document.getElementById("contrasena").value;
        let nuevaContrasena = ventana1.document.getElementById("nuevaContrasena").value;

        if (usuario === "alumno" && contrasena === "bueno") {
            alert("Datos correctos, ¿Deseas cambiar la contraseña?");
            if (nuevaContrasena.length > 0) {
                // Cambiar la contraseña
                // ...
            } else {
                alert("No se ha cambiado la contraseña");
            }
        } else {
            alert("Datos incorrectos. ¿Quieres intentarlo de nuevo?");
        }
    });
}

function abrirVentana2() {
    // Obtener la longitud de la lista y el número de valores aleatorios
    let longitudLista = document.getElementById("longitudLista").value;
    let numValoresAleatorios = document.getElementById("numValoresAleatorios").value;

    // Generar una lista de números
    let listaNumeros = [];
    for (let i = 1; i <= longitudLista; i++) {
        listaNumeros.push(i);
    }

    // Generar valores aleatorios
    let valoresAleatorios = [];
    for (let i = 0; i < numValoresAleatorios; i++) {
        let indiceAleatorio = Math.floor(Math.random() * listaNumeros.length);
        valoresAleatorios.push(listaNumeros.splice(indiceAleatorio, 1)[0]);
    }

    // Crear ventana 2
    let ventana2 = window.open("", "", "width=300,height=300,top=150,left=50");
    ventana2.document.write("<p style='color: lightblue'>Ventana 2</p>");

    // Mostrar la lista y los valores aleatorios
    ventana2.document.write("<p>Valores aleatorios: " + valoresAleatorios.join(", ") + "</p>");
    ventana2.document.write("<p>Lista a representar: ");
    for (let i = 0; i < listaNumeros.length; i++) {
        ventana2.document.write(listaNumeros[i] + " ");
    }
    ventana2.document.write("</p>");
}



function abrirVentana3() {
    // Obtener la longitud de la lista y el número de valores aleatorios
    let longitudLista = document.getElementById("longitudLista").value;
    let numValoresAleatorios = document.getElementById("numValoresAleatorios").value;

    // Generar una lista de números
    let listaNumeros = [];
    for (let i = 1; i <= longitudLista; i++) {
        listaNumeros.push(i);
    }

    // Generar valores aleatorios
    let valoresAleatorios = [];
    for (let i = 0; i < numValoresAleatorios; i++) {
        let indiceAleatorio = Math.floor(Math.random() * listaNumeros.length);
        valoresAleatorios.push(listaNumeros.splice(indiceAleatorio, 1)[0]);
    }

    // Filtrar valores impares
    let valoresImpares = valoresAleatorios.filter(numero => numero % 2 !== 0);

    // Ordenar valores impares
    valoresImpares.sort((a, b) => a - b);

    // Crear ventana 3
    let ventana3 = window.open("", "", "width=300,height=300,top=150,right=50");
    ventana3.document.write("<p style='color: pink'>Ventana 3</p>");

    // Mostrar los valores impares ordenados
    ventana3.document.write("<p>Valores impares ordenados: " + valoresImpares.join(", ") + "</p>");
}


function abrirVentana4() {
    // Implementar la funcionalidad para la ventana 4
    // Debería mostrar la contraseña actual (suponiendo que hay un objeto usuario)
    // y la fecha y hora de la última actualización (aún no implementada)

    let ventana4 = window.open("", "", "width=300,height=300,bottom=50,left=50");
    ventana4.document.write("<p style='color: orange'>Ventana 4</p>");
    // ... (completar con el código para mostrar la contraseña y fecha/hora)
}


// Asignar eventos a los botones
let btnVentana1 = document.getElementById("btnVentana1");
btnVentana1.addEventListener("click", abrirVentana1);

let btnVentana2 = document.getElementById("btnVentana2");
btnVentana2.addEventListener("click", abrirVentana2);

let btnVentana3 = document.getElementById("btnVentana3");
btnVentana3.addEventListener("click", abrirVentana3);

let btnVentana4 = document.getElementById("btnVentana4");
btnVentana4.addEventListener("click", abrirVentana4);
