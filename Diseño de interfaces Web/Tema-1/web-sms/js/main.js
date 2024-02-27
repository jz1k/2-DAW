let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});


// Script para validar el correo electrónico en tiempo real
function validarCorreo() {
    var correoInput = document.getElementById('correo');
    var mensajeCorreo = document.getElementById('mensajeCorreo');
    if (correoInput.validity.typeMismatch) {
        mensajeCorreo.innerHTML = 'Formato de correo electrónico no válido.';
    } else {
        mensajeCorreo.innerHTML = '';
    }
}

// Script para validar la fecha de nacimiento en tiempo real (puedes personalizar según tus necesidades)
function validarFechaNacimiento() {
    var fechaNacimientoInput = document.getElementById('fechaNacimiento');
    var mensajeFechaNacimiento = document.getElementById('mensajeFechaNacimiento');

    // Puedes agregar lógica adicional para validar la fecha de nacimiento si es necesario
    // En este ejemplo, se verifica si la fecha de nacimiento es menor a una fecha específica
    var fechaLimite = new Date('2006-01-01');
    var fechaSeleccionada = new Date(fechaNacimientoInput.value);

    if (fechaSeleccionada > fechaLimite) {
        mensajeFechaNacimiento.innerHTML = 'Debes ser mayor de 18 años para enviar el formulario.';
    } else {
        mensajeFechaNacimiento.innerHTML = '';
    }
}

// Función para actualizar el valor del slider en tiempo real
function actualizarCantidadCamisetas() {
    var cantidadCamisetasInput = document.getElementById('cantidadCamisetas');
    var cantidadCamisetasValue = document.getElementById('cantidadCamisetasValue');
    cantidadCamisetasValue.innerHTML = cantidadCamisetasInput.value;
}
