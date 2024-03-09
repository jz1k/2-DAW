document.addEventListener("DOMContentLoaded", function () {
    // Obtén la referencia a la paleta de colores
    var colores = document.querySelectorAll('.color');

    // Obtén la referencia al tablero de dibujo
    var tableroDibujo = document.getElementById('zonadibujo');
    var tablero = null; // Variable para almacenar el tablero generado

    // Variable para almacenar el color activo
    var colorActivo = '';

    // Variable para determinar si estamos pintando o no
    var pintando = false;

    // Obtén la referencia al elemento del mensaje
    var mensajePincel = document.getElementById('mensajePincel');

    // Función para generar la pizarra
    function crearPizarra(filas, columnas) {
        var tabla = document.createElement('table');
        tabla.className = 'tablerodibujo';

        for (var i = 0; i < filas; i++) {
            var fila = document.createElement('tr');
            for (var j = 0; j < columnas; j++) {
                var celda = document.createElement('td');
                // Agregar event listener a cada celda para pintar cuando el pincel esté activado
                celda.addEventListener("mouseover", pintarCelda);
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }

        tableroDibujo.appendChild(tabla);
        return tabla; // Devuelve la referencia a la tabla creada
    }

    // Llama a la función para crear la pizarra con 30 filas y 30 columnas
    tablero = crearPizarra(30, 30);

    // Agrega un event listener a cada color de la paleta
    colores.forEach(function (color) {
        color.addEventListener('click', function () {
            // Almacena el color activo
            colorActivo = color.style.backgroundColor;

            // Elimina la clase 'seleccionado' de todos los colores
            colores.forEach(function (c) {
                c.classList.remove('seleccionado');
            });

            // Agrega la clase 'seleccionado' al color clicado
            color.classList.add('seleccionado');
        });
    });

    // Función para actualizar el mensaje del pincel
    function actualizarMensajePincel() {
        mensajePincel.textContent = pintando ? 'PINCEL ACTIVADO' : 'PINCEL DESACTIVADO';
    }

    // Agrega un event listener a cada celda del tablero para pintar al hacer clic y arrastrar
    tablero.addEventListener('mousedown', function () {
        pintando = true;
        actualizarMensajePincel();
    });

    document.addEventListener('mouseup', function () {
        pintando = false;
        actualizarMensajePincel();
    });

    // Función para pintar la celda cuando el pincel esté activado
    function pintarCelda(event) {
        // Verificar si el pincel está activado
        var pincel = document.getElementById("pincel");
        if (pincel.textContent === "PINCEL ACTIVADO") {
            // Verificar si hay un color seleccionado en la paleta
            var colorSeleccionado = document.querySelector("#paleta .seleccionado");
            if (colorSeleccionado) {
                // Obtener el color seleccionado
                var color = window.getComputedStyle(colorSeleccionado).backgroundColor;
                // Pintar la celda con el color seleccionado
                event.target.style.backgroundColor = color;
            }
        }
    }

    // Agregar evento de clic al documento para alternar entre activado y desactivado
    document.addEventListener("click", function (event) {
        // Verificar si el clic fue en un color de la paleta
        if (event.target.classList.contains("color")) {
            // Llamar a la función seleccionar si se hace clic en un color
            seleccionar();
        } else {
            // Llamar a la función activarPincel si se hace clic en otro lugar
            activarPincel();
        }
    });

    // Función para seleccionar un color en la paleta
    function seleccionar() {
        // Obtener todos los elementos con la clase "color" dentro de la tabla de la paleta
        var celdasColorPaleta = document.querySelectorAll("#paleta .color");

        // Recorrer todos los elementos y quitar la clase "seleccionado" de cada uno
        celdasColorPaleta.forEach(function (celda) {
            celda.classList.remove("seleccionado");
        });

        // Agregar la clase "seleccionado" al elemento que llama a la función (el que se hace clic)
        event.target.classList.add("seleccionado");
    }

    // Función para activar o desactivar el pincel
    function activarPincel() {
        var pincel = document.getElementById("pincel");
        if (pincel.textContent === "PINCEL ACTIVADO") {
            pincel.textContent = "PINCEL DESACTIVADO";
        } else {
            pincel.textContent = "PINCEL ACTIVADO";
        }
    }

    // Llama a la función para inicializar el mensaje del pincel
    actualizarMensajePincel();
});
