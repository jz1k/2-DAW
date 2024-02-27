document.addEventListener("DOMContentLoaded", function () {
    const formularioPrincipal = document.getElementById('formularioPrincipal');
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const codigoVerificacionInput = document.getElementById('codigoVerificacion');
    const usuarioAdminInput = document.getElementById('usuarioAdmin');
    const claveAccesoInput = document.getElementById('claveAcceso');
    const cambiarIdiomaBtn = document.getElementById('cambiarIdiomaBtn');
    const salirBtn = document.getElementById('salirBtn');

    const codigoVerificacionRegex = /^\d{4}[A-Z]$/;

    formularioPrincipal.addEventListener('submit', function (event) {
        event.preventDefault();

        if (codigoVerificacionRegex.test(codigoVerificacionInput.value)) {
            if (
                usuarioAdminInput.value.toLowerCase() === 'admin' &&
                claveAccesoInput.value === codigoVerificacionInput.value.slice(0, 4)
            ) {
                alert('Usuario y clave correctas');

                cambiarIdiomaBtn.style.display = 'inline-block';

                setTimeout(function () {
                    salirBtn.style.display = 'none';
                }, 10000);
            } else {
                alert('Inténtelo de nuevo');
            }
        } else {
            alert('Código de verificación incorrecto. Debe tener 4 dígitos seguidos por una letra mayúscula.');
        }
    });

    cambiarIdiomaBtn.addEventListener('click', function () {
        const labels = document.querySelectorAll('label');
        if (cambiarIdiomaBtn.textContent === 'Cambiar a inglés') {
            labels[0].textContent = 'Name';
            labels[1].textContent = 'Last name';
            labels[2].textContent = 'Verification code';
            labels[3].textContent = 'Administrator';
            labels[4].textContent = 'Password';
            cambiarIdiomaBtn.textContent = 'Cambiar a español';
        } else {
            labels[0].textContent = 'Nombre';
            labels[1].textContent = 'Apellidos';
            labels[2].textContent = 'Codigo verificación';
            labels[3].textContent = 'Usuario Administrador';
            labels[4].textContent = 'Clave Acceso';
            cambiarIdiomaBtn.textContent = 'Cambiar a inglés';
        }
    });

    salirBtn.addEventListener('click', function () {
        alert('Saliendo del modo administrador');
    });
});
