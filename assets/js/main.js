let nombre = prompt("Ingresa tu nombre:");
let email = prompt("Ingresa tu correo electrónico:");
let password = prompt("Ingresa una contraseña (mínimo 8 caracteres):");

// Validaciones
if (!nombre || nombre.trim() === "") {
  console.log("Error: El campo 'nombre' no puede estar vacío.");
} else if (!email || email.trim() === "") {
  console.log("Error: El campo 'email' no puede estar vacío.");
} else if (!password || password.trim() === "") {
  console.log("Error: El campo 'contraseña' no puede estar vacío.");
} else if (password.length < 8) {
  console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
  console.log(`✅ Registro exitoso. ¡Bienvenido, ${nombre}!`);
}
