// Define an empty object to store user information
let usuario = {};

// Functions for opening windows (implementation details omitted)
function abrirVentana1() {
  // Open window 1 with size 300x300 and position (top: 0, left: 0)
  // Set background color to light green
  // ... (Implement window manipulation using DOM methods)
}

function abrirVentana2() {
  // Open window 2 with size 300x300 and position (top: 0, right: window width - 300)
  // Set background color to light blue
  // ... (Implement window manipulation using DOM methods)
}

function abrirVentana3() {
  // Open window 3 with size 300x300 and position (bottom: window height - 300, left: window width / 2 - 150)
  // Set background color to pink
  // ... (Implement window manipulation using DOM methods)
}

// Function to create user with validation
function crearUsuario(event) {
  event.preventDefault(); // Prevent default form submission

  const nombreUsuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;
  const repetirContraseña = document.getElementById("repetir-contraseña").value;

  // Check if username is valid (lowercase letters, 5 characters)
  if (!/^[a-z]{5}$/.test(nombreUsuario)) {
    document.getElementById("mensaje-usuario").textContent = "Usuario inválido. Debe tener 5 caracteres en minúscula.";
    return;
  }

  // Check if passwords are valid (numbers, 4 digits) and match
  if (!/^\d{4}$/.test(contraseña) || contraseña !== repetirContraseña) {
    document.getElementById("mensaje-usuario").textContent = "Contraseña inválida. Debe tener 4 dígitos y coincidir con la repetición.";
    return;
  }

  usuario.nombre = nombreUsuario;
  usuario.contraseña = contraseña;

  document.getElementById("mensaje-usuario").textContent = "Usuario y contraseña creados correctamente";
  // Update user display in window 2 (if applicable)
  actualizarVentana2();
}

// Function to clear password and update display
function borrarContraseña() {
  usuario.contraseña = undefined;
  document.getElementById("mensaje-contraseña").textContent = "Contraseña borrada correctamente. Debe introducirla de nuevo.";
  document.getElementById("contraseña-actual").textContent = "";
  // Close window 2 after 5 seconds
  setTimeout(() => {
    document.getElementById("ventana2").style.display = "none";
  }, 5000);
}

// Function to update user display in window 2 (if applicable)
function actualizarVentana2() {
  if (usuario.nombre && usuario.contraseña) {
    document.getElementById("usuario-actual").textContent = "Usuario: " + usuario.nombre;
    document.getElementById("contraseña-actual").textContent = "Contraseña: " + usuario.contraseña;
  } else {
    document.getElementById("usuario-actual").textContent = "";
    document.getElementById("contraseña-actual").textContent = "";
  }
}

// Placeholder functions for showing values (replace with your implementation)
function mostrarValoresPares() {
  // Implement logic to get selected number of values and generate random values
  // Use the selected number and generated values to display only even numbers
  document.getElementById("valores-pares").textContent = "Valores pares (función pendiente de implementación)";
}

// Placeholder function for countdown (replace with your provided code)
function iniciarCuentaAtras() {
  // Implement countdown logic using your provided code
  document.getElementById("cuenta-atras").textContent = "Cuenta atrás (función pendiente de implementación)";
}
