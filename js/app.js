//Validacion de campos obligatorios

function validacionFormulario (){
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

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

//Clip en menu movile
const elemento = document.querySelector('.nav-movile-popup');

const botonActivar = document.getElementById('icon-menu');
const botonDesactivar = document.getElementById('faxx2');

botonActivar.addEventListener('click', function() {
    elemento.classList.add('activado');
});


botonDesactivar.addEventListener('click', function() {
    elemento.classList.remove('activado');
});