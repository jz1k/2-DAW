let user = {
    username: "",
    password: ""
};

let countdownValue = 0;
let countdownInterval;
var windows = {};

var lista = [];
var valoresAleatorios = [];

var valores='';

function generarLista() {
    var longitudLista = document.getElementById('listLength').value;
    for (var i = 0; i < longitudLista; i++) {
        lista.push(i + 1);
    }
}

function generarValoresAleatorios() {
    var numeroValores = document.getElementById('randomValues').value;
    while (valoresAleatorios.length < numeroValores) {
        var valorAleatorio = lista[Math.floor(Math.random() * lista.length)];
        if (!valoresAleatorios.includes(valorAleatorio)) {
            valoresAleatorios.push(valorAleatorio);
        }
    }
}


function showWindow(windowId) {
    hideAllWindows();
    document.getElementById(windowId).style.display = "block";
}

function hideAllWindows() {
    const windows = document.getElementsByClassName("window");
    for (let i = 0; i < windows.length; i++) {
        windows[i].style.display = "none";
    }
}

function crearUsuario() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const messageElement = document.getElementById("message");

    if (password !== repeatPassword) {
        messageElement.innerText = "Contraseña incorrecta. Las dos contraseñas deben ser iguales.";
    } else {
        user.username = username;
        user.password = password;
        messageElement.innerText = "Usuario y contraseña creados correctamente.";
    }
}

function deletePassword() {
    const window2 = document.getElementById("window2");
    const userDataElement = document.getElementById("userData");

    userDataElement.innerText = `Usuario: ${user.username}\nContraseña: ${user.password}`;
    showWindow("window2");

    setTimeout(() => {
        window2.style.display = "none";
        alert("Contraseña borrada correctamente. Debes introducirla de nuevo.");
    }, 5000);
}

function showSelectedValues() {
    const list1Value = document.getElementById("list1").value;
    const list2Value = document.getElementById("list2").value;

    startCountdown(list1Value);

    setTimeout(() => {
        const selectedValues = generateRandomValues(list2Value);
        document.getElementById("valores").innerHTML;
        alert(`Valores pares de la lista2: ${selectedValues.filter(value => value % 2 === 0).join(", ")}`);
    }, (list1Value + 1) * 1000);
}

function startCountdown(value) {
    countdownValue = value;
    const countdownElement = document.getElementById("countdown");

    countdownInterval = setInterval(() => {
        countdownElement.innerText = countdownValue;
        countdownValue--;

        if (countdownValue < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    showWindow("window3");
}

function generateRandomValues(count) {
    const values = [];
    for (let i = 0; i < count; i++) {
        values.push(Math.floor(Math.random() * 100) + 1);
    }
    return values;
}


function openWindow(name, color) {
    var features = 'width=300,height=300';

    switch (name) {
        case 'ventana1':
            features += ',top=0,left=0';
            break;
        case 'ventana2':
            features += ',top=0,right=0';
            break;
        case 'ventana3':
            features += ',bottom=0,right=0';
            break;
        default:
            break;
    }

    windows[name] = window.open('', name, features);
    windows[name].document.body.style.backgroundColor = color;

    switch (name) {
        case 'ventana1':
            windows[name].document.body.innerHTML = `
            <div id="window1" class="window">
    <form id="userForm">
        Usuario: <input type="text" id="username" required pattern="[a-z]{5}"><br>
        Contraseña: <input type="password" id="password" required pattern="\d{4}"><br>
        Repita Contraseña: <input type="password" id="repeatPassword" required pattern="\d{4}"><br>
        <button type="button" onclick="crearUsuario()">Crear Usuario</button>
        <p id="message"></p>
    </form>
</div>
            `;
            windows[name].validarUsuario = function () {
                var usuarioInput = windows[name].document.getElementById('usuario').value;
                var contrasenaInput = windows[name].document.getElementById('contrasena').value;
                var nuevaContrasenaInput = windows[name].document.getElementById('nuevaContrasena').value;
                var mensaje = windows[name].document.getElementById('mensaje');

                if (usuarioInput === usuario.nombre && contrasenaInput === usuario.contrasena) {
                    mensaje.textContent = 'Datos correctos, ¿Deseas cambiar la contraseña?';
                    usuario.cambiarContrasena(nuevaContrasenaInput);
                } else {
                    mensaje.textContent = 'Datos incorrectos ¿Quieres intentarlo de nuevo?';
                }
            };
            break;
        case 'ventana4':
            generarLista();
            generarValoresAleatorios();
            var minValor = Math.min(...valoresAleatorios);
            var maxValor = Math.max(...valoresAleatorios);
            var listaParaMostrar = lista.slice(minValor - 1, maxValor);
            windows[name].document.body.innerHTML = '<p id="ventana2Content">Valores aleatorios: ' + valoresAleatorios.join('-') + '<br>Lista a representar: ' + listaParaMostrar.join('-') + '</p>';
            break;
        case 'ventana3':
            generarLista();
            generarValoresAleatorios();
            var valoresImpares = valoresAleatorios.filter(function (valor) {
                return valor % 2 !== 0;
            });
            valoresImpares.sort(function (a, b) {
                return a - b;
            });
            windows[name].document.body.innerHTML = '<p id="ventana3Content">Valores impares: ' + valoresImpares.join('-') + '</p>';
            break;
        case 'ventana2':
            var fechaUltimaActualizacion = usuario.ultimaActualizacion ? usuario.ultimaActualizacion.toLocaleString() : 'Nunca';
            windows[name].document.body.innerHTML = '<p id="ventana4Content">Contraseña vigente: ' + usuario.contrasena + '<br>Última actualización: ' + fechaUltimaActualizacion + '</p>';
            break;
        default:
            break;
    }
}


function closeWindow(name) {
    if (windows[name] && !windows[name].closed) {
        windows[name].close();
    }
}