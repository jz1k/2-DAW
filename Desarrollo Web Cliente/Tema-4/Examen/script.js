// Ponemos esto para que el js se cargue una vez se carga todo el HTML para evitar problemas
document.addEventListener("DOMContentLoaded", function () {

    // Declaramos todas la variables
    const formularioPrincipal = document.getElementById('formularioPrincipal');
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');
    const codigoVerificacionInput = document.getElementById('codigoVerificacion');
    const usuarioAdminInput = document.getElementById('usuarioAdmin');
    const claveAccesoInput = document.getElementById('claveAcceso');
    const cambiarIdiomaBtn = document.getElementById('cambiarIdiomaBtn');
    const salirBtn = document.getElementById('salirBtn');

    // Preparamos para la verificacion
    const codigoVerificacionRegex = /\d{4}[A-Z]$/;
    //Verificamos
    formularioPrincipal.addEventListener('submit', function (event) {
        event.preventDefault();

        if (codigoVerificacionRegex.test(codigoVerificacionInput.value)) {
            if (
                usuarioAdminInput.value.toLowerCase() === 'admin' &&
                claveAccesoInput.value === codigoVerificacionInput.value.slice(0, 4)
            ) {
                // alert('Usuario y clave correctas');
                document.getElementById('mensajes').innerText='Usuario y clave correctas';

                cambiarIdiomas.style.display = 'inline-block';

                setTimeout(function () {
                    cambiarIdiomas.style.display = 'none';
                }, 10000);
            } else {
                document.getElementById('mensajes').innerText='Inténtelo de nuevo';
                // alert('Inténtelo de nuevo');
            }
        } else {
            // document.getElementById('mensajes').innerText='Código de verificación incorrecto. Tiene que tener 4 dígitos y una letra mayúscula.';
            alert('Código de verificación incorrecto. Tiene que tener 4 dígitos y una letra mayúscula.');
        }
    });

    // Configuramos las opciones de cambiar idioma
    cambiarIdiomaBtn.addEventListener('click', function () {
        const labels = document.querySelectorAll('label');
        if (cambiarIdiomaBtn.textContent === 'Cambiar a inglés') {
            labels[0].textContent = 'Name';
            labels[1].textContent = 'Last name';
            labels[2].textContent = 'Verification code';
            labels[3].textContent = 'Administrator';
            labels[4].textContent = 'Password';
            cambiarIdiomaBtn.textContent = 'Switch to Spanish';
            salirBtn.textContent = 'Exit';
            enviarBtn.textContent = 'Send';


        } else {
            labels[0].textContent = 'Nombre';
            labels[1].textContent = 'Apellidos';
            labels[2].textContent = 'Codigo verificación';
            labels[3].textContent = 'Usuario Administrador';
            labels[4].textContent = 'Clave Acceso';
            cambiarIdiomaBtn.textContent = 'Cambiar a inglés';
            salirBtn.textContent = 'Salir';
            enviarBtn.textContent = 'Enviar';


        }
    });

    // Configuramos el boton SALIR
    salirBtn.addEventListener('click', function () {
        cambiarIdiomaBtn.style.display = 'none';
        salirBtn.style.display = 'none';
        alert('Has salido del modo administrador');
    });
});
