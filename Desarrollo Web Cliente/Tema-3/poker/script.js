// Esta línea borra la cookie 'intentos' si existe, para reiniciar el contador.
document.cookie = "intentos=0; expires=Thu, 01 Jan 1970 00:00:00 UTC";

// Objeto que almacena el conteo de cada figura
let figuras = {
  doblePareja: 0,
  trios: 0,
  escaleraSimple: 0,
  escaleraCompleta: 0,
  pocker: 0,
};

// Función que se ejecuta al hacer clic en el botón "Calcular Figura"
function calcularFigura() {
  const numeroInput = document.getElementById("numeroInput").value;

  // Verificar que se ingresó un número de 4 cifras
  if (!/^\d{4}$/.test(numeroInput)) {
    alert("Por favor, introduce un número de 4 cifras.");
    return;
  }

  // Incrementar el contador de intentos en la cookie
  let intentos = parseInt(getCookie("intentos")) + 1;
  document.cookie = `intentos=${intentos}`;

  // Calcular la figura
  const figura = obtenerFigura(numeroInput);
  actualizarContadorFigura(figura);

  // Mostrar la figura
  alert(`La figura del número ${numeroInput} es: ${figura}`);
}

// Función que determina la figura según las reglas establecidas
function obtenerFigura(numero) {
  const digitos = numero.split('').map(Number);
  const digitosUnicos = new Set(digitos);

  switch (digitosUnicos.size) {
    case 1:
      return "Pocker (4 elementos)";
    case 2:
      // Verificar si es doble pareja o trío
      const frecuencias = obtenerFrecuencias(digitos);
      const tieneDoblePareja = Object.values(frecuencias).filter(count => count === 2).length === 2;
      return tieneDoblePareja ? "Doble pareja" : "Trios";
    case 3:
      return "Escalera simple (3 elementos)";
    case 4:
      return "Escalera completa (4 elementos)";
    default:
      return "Figura no reconocida";
  }
}

// Función auxiliar que cuenta la frecuencia de cada número en un array
function obtenerFrecuencias(arr) {
  return arr.reduce((frecuencias, numero) => {
    frecuencias[numero] = (frecuencias[numero] || 0) + 1;
    return frecuencias;
  }, {});
}

// Función que actualiza el contador de figuras según la figura calculada
function actualizarContadorFigura(figura) {
  switch (figura) {
    case "Doble pareja":
      figuras.doblePareja++;
      break;
    case "Trios":
      figuras.trios++;
      break;
    case "Escalera simple (3 elementos)":
      figuras.escaleraSimple++;
      break;
    case "Escalera completa (4 elementos)":
      figuras.escaleraCompleta++;
      break;
    case "Pocker (4 elementos)":
      figuras.pocker++;
      break;
  }
}

// Función que muestra una ventana emergente con las estadísticas durante 10 segundos
function mostrarVentanaEstadisticas() {
  const ventanaEstadisticas = window.open("", "Estadisticas", "width=400,height=300");
  const intentos = getCookie("intentos");

  const totalFiguras = figuras.doblePareja + figuras.trios + figuras.escaleraSimple + figuras.escaleraCompleta + figuras.pocker;

  const porcentajeDoblePareja = totalFiguras === 0 ? 0 : (figuras.doblePareja / totalFiguras) * 100;
  const porcentajeTrios = totalFiguras === 0 ? 0 : (figuras.trios / totalFiguras) * 100;
  const porcentajeEscaleraSimple = totalFiguras === 0 ? 0 : (figuras.escaleraSimple / totalFiguras) * 100;
  const porcentajeEscaleraCompleta = totalFiguras === 0 ? 0 : (figuras.escaleraCompleta / totalFiguras) * 100;
  const porcentajePocker = totalFiguras === 0 ? 0 : (figuras.pocker / totalFiguras) * 100;

  const estadisticas = `
    <h2>Estadísticas</h2>
    <ul>
      <li>Intentos totales: ${intentos}</li>
      <li>Matrículas correctas: ${totalFiguras}</li>
      <li>Doble Pareja: ${figuras.doblePareja} (${porcentajeDoblePareja.toFixed(2)}%)</li>
      <li>Trios: ${figuras.trios} (${porcentajeTrios.toFixed(2)}%)</li>
      <li>Escalera Simple: ${figuras.escaleraSimple} (${porcentajeEscaleraSimple.toFixed(2)}%)</li>
      <li>Escalera Completa: ${figuras.escaleraCompleta} (${porcentajeEscaleraCompleta.toFixed(2)}%)</li>
      <li>Pocker: ${figuras.pocker} (${porcentajePocker.toFixed(2)}%)</li>
    </ul>
  `;

  ventanaEstadisticas.document.write(estadisticas);

  // Cierra la ventana después de 10 segundos
  setTimeout(() => ventanaEstadisticas.close(), 10000);
}

// Función que obtiene el valor de una cookie por su nombre
function getCookie(nombre) {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key.trim() === nombre) {
      return value;
    }
  }
  return "0";  // Cambié esto para asegurarme de que devuelva algo, incluso si no hay cookie.
}