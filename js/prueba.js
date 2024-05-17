document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselInner.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showSlide(currentIndex);
    }
  
    // Automáticamente cambiar de slide cada 1 segundo
    setInterval(nextSlide, 7000);
  });