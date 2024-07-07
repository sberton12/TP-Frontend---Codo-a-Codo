//Validacion de campos obligatorios
const ERROR_COLOR = "red";
const CORRECTO_COLOR = "#dee2e6";
//Formulario de Contactos
/*const FormContact = document.getElementById("Form");
FormContact.onsubmit = validacionFormulario;
*/

const URL_CONTACT = "http://localhost:3000/contact/formulario";

//Validacion de campos obligatorios
function validacionFormulario(event) {
  event.preventDefault(); 
  var error = 0;

  var elementNombre = document.getElementById("nombreID");
  if (!validarNombreYApellido(elementNombre.value)) {
    changeBorderColor(ERROR_COLOR, elementNombre);
    error = 1;
  } else {
    changeBorderColor(CORRECTO_COLOR, elementNombre)
  }
  var elementApellido = document.getElementById("apellidoID");
  if (!validarNombreYApellido(elementApellido.value)) {
    changeBorderColor(ERROR_COLOR, elementApellido);
    error = 1;
  } else {
    changeBorderColor(CORRECTO_COLOR, elementApellido);
  }
  var elementCel = document.getElementById("telefonoID");
  if (!validarTelefono(elementCel.value)) {
    changeBorderColor(ERROR_COLOR, elementCel);
    error = 1;
  }else {
    changeBorderColor(CORRECTO_COLOR, elementCel);
  }
  var elementEmail = document.getElementById("emailID");
  if (!validarEmail(elementEmail.value)) {
    changeBorderColor(ERROR_COLOR, elementEmail);
    error = 1;
  }else {
    changeBorderColor(CORRECTO_COLOR, elementEmail);
  }

  if (error) {
    alert("Error con los campos obligatorios");
    return false;
  } else {
    alert("Formulario enviado");

    conexionBackendAPI(elementEmail.value)
    .then(() => alert("salio bien"))
    .catch( () => alert("salio mal"))
    .finally( () => alert("Esta completo"));

    return true;
  }
}

function conexionBackendAPI(email) {
  return new Promise((resolve, reject) => {

      /// preparo un json para enviar al backend...
      let data = {
          "email":  email,
          "type": "venta de producto",
          "text": "Quiero saber sobre su producto, que precio tiene?"
      }

      //DATA es un objeto en javascript

      // Request necesita convertir ese objeto en JSON...
      let request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
      }


      fetch( URL_CONTACT , request )
      .then((respuesta) => respuesta.json() )
      .then( (res) => {
          // Este res es la promesa de convertir la respuesta en json
          console.log(res);
      });

  });
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

