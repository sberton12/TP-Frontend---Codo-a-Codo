//Validacion de campos obligatorios

//MENU PARA LOS MOVILES
const elemento = document.querySelector('.nav-movile-popup');
const botonActivarMenu = document.getElementById('icon-menu');
const botonDesactivarMenu = document.getElementById('faxx2');

botonActivarMenu.addEventListener('click', function() {
  elemento.classList.add('activado');
});


botonDesactivarMenu.addEventListener('click', function() {
  elemento.classList.remove('activado');
});

//DINAMICA DEL CARRUSEL
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

  showSlide(currentIndex);
  setInterval(nextSlide, 5000);
});