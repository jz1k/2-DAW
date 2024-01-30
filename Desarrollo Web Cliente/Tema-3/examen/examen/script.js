// Objeto usuario con propiedades y método
let usuario = {
    nombre: "alumno",
    contrasena: "bueno",
    nuevaContrasena: "",
    fechaHoraUltimaIntroduccion: null,

    autenticar: function (inputUsuario, inputContrasena) {
        return inputUsuario === this.nombre && inputContrasena === this.contrasena;
    },

    cambiarContrasena: function (nuevaContrasena) {
        this.contrasena = nuevaContrasena;
        this.fechaHoraUltimaIntroduccion = new Date();
        return "Contraseña cambiada con éxito.";
    }
};

// Variables globales para la ventana 2
let listaNumeros = [];
let valoresAleatorios = [];

// Función para abrir ventanas en nuevas pestañas del navegador
function openWindow(ventanaNum) {
    let ventana = window.open("", `Ventana${ventanaNum}`, "width=300,height=300");

    switch (ventanaNum) {
        case 1:
            renderVentana1(ventana);
            break;

        case 2:
            renderVentana2(ventana);
            break;

        case 3:
            renderVentana3(ventana);
            break;

        case 4:
            renderVentana4(ventana);
            break;

        default:
            break;
    }
}

// Función para autenticar usuario y cambiar contraseña
function autenticarYCambiarContrasena() {
    let inputUsuario = document.getElementById("usuario").value;
    let inputContrasena = document.getElementById("contrasena").value;

    if (usuario.autenticar(inputUsuario, inputContrasena)) {
        let cambiarContrasena = confirm("Datos correctos, ¿Deseas cambiar la contraseña?");
        if (cambiarContrasena) {
            let nuevaContrasena = document.getElementById("nuevaContrasena").value;
            let mensajeCambio = usuario.cambiarContrasena(nuevaContrasena);
            alert(mensajeCambio);
        }
    } else {
        let intentarDeNuevo = confirm("Datos incorrectos ¿Quieres intentarlo de nuevo?");
        if (intentarDeNuevo) {
            // Limpiar campos y enfocar en el campo de usuario
            document.getElementById("usuario").value = "";
            document.getElementById("contrasena").value = "";
            document.getElementById("usuario").focus();
        }
    }
}

// Función para generar valores aleatorios y representar lista
function generarValoresAleatorios() {
    let longitudLista = parseInt(document.getElementById("longitudLista").value);
    let numAleatoriosEscoger = parseInt(document.getElementById("numAleatoriosEscoger").value);

    listaNumeros = Array.from({ length: longitudLista }, (_, i) => i + 1);
    valoresAleatorios = [];

    for (let i = 0; i < numAleatoriosEscoger; i++) {
        let randomIndex = Math.floor(Math.random() * listaNumeros.length);
        let numAleatorio = listaNumeros.splice(randomIndex, 1)[0];
        valoresAleatorios.push(numAleatorio);
    }

    valoresAleatorios.sort((a, b) => a - b);

    // Mostrar valores aleatorios y lista a representar
    document.getElementById("valoresAleatorios").innerText = "Valores aleatorios: " + valoresAleatorios.join("-");
    document.getElementById("listaRepresentar").innerText = "Lista a representar: " + representarLista();
}

// Función para representar la lista con valores entre el mayor y el menor de los aleatorios
function representarLista() {
    let minValorAleatorio = Math.min(...valoresAleatorios);
    let maxValorAleatorio = Math.max(...valoresAleatorios);

    // Filtrar la lista original para obtener solo los valores entre el min y max aleatorio
    let listaFiltrada = listaNumeros.filter(num => num >= minValorAleatorio && num <= maxValorAleatorio);

    return listaFiltrada.join("-");
}

// Funciones para renderizar contenido en las ventanas
function renderVentana1(ventana) {
    ventana.document.body.style.backgroundColor = "lightgreen";
    ventana.document.write(`
        <form id="formVentana1">
            Usuario: <input type="text" id="usuario" required><br>
            Contraseña: <input type="password" id="contrasena" required><br>
            Nueva Contraseña: <input type="password" id="nuevaContrasena" required><br>
            <button type="button" onclick="autenticarYCambiarContrasena()">Enviar</button>
        </form>
        <button onclick="window.close()">Cerrar Ventana 1</button>
    `);
}

function renderVentana2(ventana) {
    ventana.document.body.style.backgroundColor = "lightblue";
    ventana.document.write(`
        <p id="valoresAleatorios"></p>
        <p id="listaRepresentar"></p>
        <button onclick="window.close()">Cerrar Ventana 2</button>
    `);

    // Invocar la función para generar valores aleatorios al abrir la ventana 2
    generarValoresAleatorios();
}

function renderVentana3(ventana) {
    ventana.document.body.style.backgroundColor = "lightpink";
    ventana.document.write(`
        <p id="valoresImpares"></p>
        <button onclick="window.close()">Cerrar Ventana 3</button>
    `);
}

function renderVentana4(ventana) {
    ventana.document.body.style.backgroundColor = "lightsalmon";
    ventana.document.write(`
        <p id="contrasenaVigente"></p>
        <p id="ultimaFechaHora"></p>
        <button onclick="window.close()">Cerrar Ventana 4</button>
    `);
}
