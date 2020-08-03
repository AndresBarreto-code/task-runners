function validar(formulario) {

  var validacion = true;
  // Inicio condiciones del nombre
  if (formulario.nombres.value.trim().length < 3) {
    document.getElementById("errornombres").innerText = "Campo obligatorio";
    validacion = false;
    formulario.nombres.focus();
  } else{
    document.getElementById("errornombres").innerText = "";
  }
  // Fin condiciones del nombre

  // Inicio condiciones del Email
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
  if(!re.test(formulario.email.value)){
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    formulario.email.focus();
    validacion = false;
  } else{
    document.getElementById("errorEmail").innerText = "";
  }
  // Fin condiciones del Email

  // Inicio condiciones del contrasena
  if (formulario.contrasena.value.length < 5) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    validacion = false;
  } else{
    document.getElementById("errorContrasena").innerText = "";
  }
  // Fin condiciones del contrasena

 // Inicio condiciones del confirmacion
 if (formulario.contrasena.value != formulario.confirmacion.value || formulario.confirmacion.value.length < 5) {
  document.getElementById("errorConfirmacion").innerText = "Campo obligatorio";
  formulario.confirmacion.focus();
  validacion = false;
} 
else{
  document.getElementById("errorConfirmacion").innerText = "";
}
// Fin condiciones del confirmacion

// Inicio condiciones del Genero
if (formulario.tipo.value == "-1") {
  document.getElementById("errorTipo").innerText = "Campo obligatorio";
  validacion = false;
} else{
  document.getElementById("errorTipo").innerText = "";
}
// Fin condiciones del Genero

// Inicio condiciones del terminos
if (!formulario.acepto.checked) {
  document.getElementById("errorAcepto").innerText = "Debe aceptar terminos";
  formulario.acepto.focus();
  validacion = false;
} else{
  document.getElementById("errorAcepto").innerText = "";
}
  // Fin condiciones del terminos



  if (validacion){
    alert("Datos enviados");
    return true;
  } else{
    alert("Datos incompletos");
    return false;
  }
  
}