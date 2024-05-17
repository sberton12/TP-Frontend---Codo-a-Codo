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
    setInterval(nextSlide, 7000);
  });