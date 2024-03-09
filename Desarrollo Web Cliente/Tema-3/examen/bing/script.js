// script.js
var windows = {};
var usuario = {
    nombre: 'alumno',
    contrasena: 'bueno',
    ultimaActualizacion: null,
    cambiarContrasena: function(nuevaContrasena) {
        this.contrasena = nuevaContrasena;
        this.ultimaActualizacion = new Date();
    }
};
var lista = [];
var valoresAleatorios = [];

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
        case 'ventana4':
            features += ',bottom=0,left=0';
            break;
        default:
            break;
    }

    windows[name] = window.open('', name, features);
    windows[name].document.body.style.backgroundColor = color;

    switch (name) {
        case 'ventana1':
            windows[name].document.body.innerHTML = `
                <form onsubmit="event.preventDefault(); validarUsuario();">
                    Usuario: <input type="text" id="usuario"><br>
                    Contraseña: <input type="password" id="contrasena"><br>
                    Nueva Contraseña: <input type="password" id="nuevaContrasena"><br>
                    <input type="submit" value="Enviar">
                    </form>
                    <p id="mensaje"></p>
            `;
            windows[name].validarUsuario = function() {
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
        case 'ventana2':
            generarLista();
            generarValoresAleatorios();
            var minValor = Math.min(...valoresAleatorios);
            var maxValor = Math.max(...valoresAleatorios);
            var listaParaMostrar = lista.slice(minValor - 1, maxValor);
            windows[name].document.body.innerHTML = '<p id="ventana2Content">Valores aleatorios: ' + valoresAleatorios.join('-') + '<br>Lista a representar: ' + listaParaMostrar.join('-') + '</p>';
            break;
        case 'ventana3':
            var valoresImpares = valoresAleatorios.filter(function(valor) {
                return valor % 2 !== 0;
            });
            valoresImpares.sort(function(a, b) {
                return a - b;
            });
            windows[name].document.body.innerHTML = '<p id="ventana3Content">Valores impares: ' + valoresImpares.join('-') + '</p>';
            break;
        case 'ventana4':
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
