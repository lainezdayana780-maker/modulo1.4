// Carrusel automático de imágenes
let index = 0;
const slides = document.querySelectorAll(".carousel-slide"); // Clase que usamos en HTML

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length; // Ciclo infinito
}

// Cambia la imagen cada 4 segundos
setInterval(showSlide, 4000);
