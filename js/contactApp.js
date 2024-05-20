//Validacion de campos obligatorios
const ERROR_COLOR = "red";

//Formulario de Contactos
const FormContact = document.getElementById("Form");
FormContact.onsubmit = validacionFormulario();

//Validacion de campos obligatorios
function validacionFormulario() {
  var error = 0;

  var elementNombre = document.getElementById("nombreID");
  if (!validarNombreYApellido(elementNombre.value)) {
    changeBorderColor(ERROR_COLOR, elementNombre)
    error = 1
  }
  var elementApellido = document.getElementById("apellidoID");
  if (!validarNombreYApellido(elementApellido.value)) {
    changeBorderColor(ERROR_COLOR, elementApellido)
    error = 1
  }
  var elementEmail = document.getElementById("telefonoID");
  if (!validarTelefono(elementEmail.value)) {
    changeBorderColor(ERROR_COLOR, elementEmail)
    error = 1
  }
  var elementCel = document.getElementById("emailID");
  if (!validarEmail(elementCel.value)) {
    changeBorderColor(ERROR_COLOR, elementCel)
    error = 1
  }
  var email = document.getElementById("emailID").value;
  var telefonoID = document.getElementById("telefonoID").value;

  if (error) {
    alert("Completa todos los campos obligatorios")
    return false
  } else {
    alert("formulario enviado")
    return true
  }
}

//No contiene numeros ni caracteres especiales
function validarNombreYApellido(text) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(text);
}
//No contiene numeros ni caracteres especiales
function validarTelefono(num) {
  const regex = /^[0-9]+$/;
  return regex.test(num);
}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

function changeBorderColor(rgb, element) {
  element.style.borderColor = rgb;
}

//MENU PARA LOS MOVILES
const elemento = document.querySelector('.nav-movile-popup');
const botonActivarMenu = document.getElementById('icon-menu');
const botonDesactivarMenu = document.getElementById('faxx2');

botonActivarMenu.addEventListener('click', function () {
  elemento.classList.add('activado');
});
botonDesactivarMenu.addEventListener('click', function () {
  elemento.classList.remove('activado');
});


botonDesactivar.addEventListener('click', function () {
  elemento.classList.remove('activado');
});

document.addEventListener("DOMContentLoaded", function () {
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