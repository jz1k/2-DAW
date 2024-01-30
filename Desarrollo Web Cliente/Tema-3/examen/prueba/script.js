// script.js
    // Ejercicio 1: Eventos y Manipulación del DOM
    document.getElementById("cambiarColorBtn").addEventListener("click", cambiarColorFondo);

    function cambiarColorFondo() {
        document.body.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function cambiarContenido() {
        document.getElementById("cambioContenidoDiv").innerHTML = "¡Mouse encima!";
    }





    // Ejercicio 2: Manipulación de Objetos y Arrays
    let biblioteca = [];

    window.agregarLibro = function () {
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const annoPublicacion = document.getElementById("annoPublicacion").value;

        if (titulo && autor && annoPublicacion) {
            const libro = {
                titulo: titulo,
                autor: autor,
                annoPublicacion: parseInt(annoPublicacion)
            };

            biblioteca.push(libro);
            document.getElementById("formularioLibro").reset();

            // Mostrar la lista de libros actualizada
            mostrarListaLibros();
        } else {
            alert("Por favor, completa todos los campos del formulario.");
        }
    };

    function mostrarListaLibros() {
        const listaLibrosElement = document.getElementById("listaLibros");
        listaLibrosElement.innerHTML = ""; // Limpiar lista

        biblioteca.forEach(libro => {
            const listItem = document.createElement("li");
            listItem.textContent = `${libro.titulo} - ${libro.autor} - ${libro.annoPublicacion}`;
            listaLibrosElement.appendChild(listItem);
        });
    }






    // Ejercicio 3: Operaciones con Arrays
    calcularSumaPromedio(); // Agrega esta línea para mostrar la lista de números al cargar la página

    function calcularSumaPromedio() {
        // Generar una lista de números del 1 al 10
        const numeros = Array.from({ length: 10 }, (_, i) => i + 1);

        // Calcular la suma de los números
        const suma = numeros.reduce((acc, num) => acc + num, 0);

        // Calcular el promedio
        const promedio = suma / numeros.length;

        // Mostrar la lista y los resultados en el DOM
        mostrarNumerosEnLista(numeros);
        mostrarSumaPromedio(suma, promedio);
    }

    function mostrarNumerosEnLista(numeros) {
        const listaElement = document.getElementById("numerosLista");
        listaElement.innerHTML = ""; // Limpiar lista

        numeros.forEach(num => {
            const listItem = document.createElement("li");
            listItem.textContent = num;
            listaElement.appendChild(listItem);
        });
    }

    function mostrarSumaPromedio(suma, promedio) {
        const resultadoElement = document.getElementById("sumaPromedioResultado");
        resultadoElement.textContent = `Suma: ${suma}, Promedio: ${promedio.toFixed(2)}`;
    }





    // Ejercicio 4: Trabajo con Fechas y Tiempos
    actualizarFechaYVerificarDiaLaborable();

    function actualizarFechaYVerificarDiaLaborable() {
        document.getElementById("fechaActual").textContent = obtenerFechaActual();
        verificarDiaLaborableEnFecha(new Date());
    }

    function calcularDiferenciaYVerificarDiaLaborable() {
        const fechaUsuario1 = new Date(document.getElementById("fechaUsuario1").value);
        const fechaUsuario2 = new Date(document.getElementById("fechaUsuario2").value);

        if (isNaN(fechaUsuario1.getTime()) || isNaN(fechaUsuario2.getTime())) {
            alert("Por favor, ingresa fechas válidas.");
            return;
        }

        const diferenciaDias = calcularDiferenciaEnDias(fechaUsuario1, fechaUsuario2);
        mostrarDiferenciaDias(diferenciaDias);
        // No se verifica si las fechas ingresadas por el usuario son laborables o no
    }

    function verificarDiaLaborableEnFecha(fecha) {
        const diaSemana = fecha.getDay();

        // Considerando que 0 es domingo y 6 es sábado
        const esLaborable = diaSemana >= 1 && diaSemana <= 5;
        
        const mensajeLaborable = esLaborable ? "La fecha actual es un día laborable." : "La fecha actual no es un día laborable.";
        document.getElementById("mensajeLaborable").textContent = mensajeLaborable;
    }

    function calcularDiferenciaEnDias(fecha1, fecha2) {
        const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
        const diferenciaMs = Math.abs(fecha1 - fecha2);
        return Math.round(diferenciaMs / unDia);
    }

    function mostrarDiferenciaDias(diferenciaDias) {
        const resultadoElement = document.getElementById("diferenciaDiasResultado");
        resultadoElement.textContent = `Diferencia en días: ${diferenciaDias}`;
    }

    function obtenerFechaActual() {
        const fechaActual = new Date();
        return fechaActual.toDateString();
    }





    
    // Ejercicio 5: Validaciones y Expresiones Regulares
    function validarFormulario() {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;

        if (validarNombre(nombre) && validarEmail(email) && validarTelefono(telefono)) {
            alert("Formulario válido. ¡Datos enviados!");
        } else {
            alert("Por favor, corrige los errores en el formulario.");
        }
    }

    function validarNombre(nombre) {
        return /^[A-Za-z ]+$/.test(nombre);
    }

    function validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validarTelefono(telefono) {
        return /^\d{10}$/.test(telefono);
    }
