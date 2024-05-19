
//Validacion de campos obligatorios
export function validacionFormulario2(event){
    event.preventDefault(); // a partir de esta linea el comportamiento del evento lo manejo YO - el Dev

    let miFormulario = event.currentTarget;
    var nombre = document.getElementById("nombreID").value;
    var apellido = document.getElementById("apellidoID").value;
    var email = document.getElementById("emailID").value;
    var telefonoID = document.getElementById("telefonoID").value;

    if (nombre==""||apellido==""||email==""||telefonoID==""){   
        alert ("Completa todos los campos obligatorios")
        return false
    }
    if (!validarEmail(email)) {
        alert ("Correo no valido")
        return false
    }
    alert ("formulario enviado")
    return true
}
    
//No contiene numeros ni caracteres especiales
function validarNombreYApellido(text){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(text);
}

function validarTelefono(){

}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
