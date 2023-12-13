function votar(idOpcion) {
    if (yaVoto(idOpcion)) {
        alert("Ya has votado por esta opción.");
    } else {
        let votos = obtenerVotos(idOpcion);
        votos++;
        establecerVotos(idOpcion, votos);
        actualizarResultados(idOpcion, votos);
        mostrarVentanaAgradecimiento();
    }
}

function mostrarVentanaAgradecimiento() {
    const ventanaEmergente = window.open('', '_blank', 'width=300,height=200,top=200,left=200');
    ventanaEmergente.document.write('<div style="text-align:center; padding:20px;">¡Gracias por tu voto!</div>');

    setTimeout(() => {
        ventanaEmergente.close();
    }, 5000);
}

function yaVoto(idOpcion) {
    return document.cookie.includes(idOpcion);
}

function obtenerVotos(idOpcion) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [nombre, valor] = cookie.trim().split('=');
        if (nombre === idOpcion) {
            return parseInt(valor) || 0;
        }
    }
    return 0;
}

function establecerVotos(idOpcion, votos) {
    document.cookie = `${idOpcion}=${votos}`;
}

function actualizarResultados(idOpcion, votos) {
    document.getElementById(`votos_${idOpcion}`).innerText = votos;
}

function reiniciarVotos() {
    const opciones = document.querySelectorAll('.opcion');
    for (const opcion of opciones) {
        const idOpcion = opcion.getAttribute('data-id');
        establecerVotos(idOpcion, 0);
        actualizarResultados(idOpcion, 0);
    }
    alert("Votos reiniciados.");
}

// Crear opciones dinámicamente
const contenedorOpciones = document.getElementById('opciones');
const opcion1 = crearElementoOpcion('Opción 1', 'opcion1');
const opcion2 = crearElementoOpcion('Opción 2', 'opcion2');
const opcion3 = crearElementoOpcion('Opción 3', 'opcion3');
const opcion4 = crearElementoOpcion('Opción 4', 'opcion4');
contenedorOpciones.appendChild(opcion1);
contenedorOpciones.appendChild(opcion2);
contenedorOpciones.appendChild(opcion3);
contenedorOpciones.appendChild(opcion4);

function crearElementoOpcion(texto, id) {
    const opcion = document.createElement('div');
    opcion.classList.add('opcion');
    opcion.setAttribute('data-id', id);

    opcion.innerHTML = `
        ${texto}
        <br>
        Votos: <span id="votos_${id}">0</span>
        <br>
        <button onclick="votar('${id}')">Votar</button>
    `;

    return opcion;
}
