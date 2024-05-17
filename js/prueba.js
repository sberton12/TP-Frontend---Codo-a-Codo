document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = items.length;
  
    function showSlide(index) {
      carouselInner.scrollTo({
        left: index * carouselInner.clientWidth,
        behavior: 'smooth'
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
  
    // Automáticamente cambiar de slide cada 1 segundo
    setInterval(nextSlide, 3000);
  });