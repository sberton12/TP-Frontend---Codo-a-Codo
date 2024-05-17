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

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    }
  
    // Inicializar el primer slide
    showSlide(currentIndex);
  
    // Automáticamente cambiar de slide cada 1 segundo
    setInterval(nextSlide, 5000);
  });