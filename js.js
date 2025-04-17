src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

// Scroll ke bagian Adopsi
function scrollToAdopsi() {
  const adopsiSection = document.getElementById("adopsi");
  if (adopsiSection) {
    adopsiSection.scrollIntoView({ behavior: "smooth" });
  }
}

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let index = 0;

document.querySelector('.nav.left').addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = cards.length - 1; // Go to the last card
  }
  carousel.style.transform = `translateX(-${index * 320}px)`;
});

document.querySelector('.nav.right').addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
  } else {
    index = 0; // Go to the first card
  }
  carousel.style.transform = `translateX(-${index * 320}px)`;
});

// Aktifkan Bootstrap Carousel untuk Testimoni
const testimonialCarousel = document.getElementById('testimonialCarousel');
const bsCarousel = new bootstrap.Carousel(testimonialCarousel, {
  interval: 5000, // Geser otomatis setiap 5 detik
  ride: 'carousel'
});

// Fitur heart (like) untuk kucing (jika ada card kucing di halamanmu)
document.querySelectorAll('.heart').forEach(function(heart) {
  heart.addEventListener('click', function() {
    this.classList.toggle('liked');
  });
});

const tipCards = document.querySelectorAll('.tip-card');

tipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('clicked');
    setTimeout(() => {
      card.classList.remove('clicked');
    }, 300);
  });
});

// Klik dimanapun munculkan jejak kaki 🐾
document.addEventListener("click", function(e) {
  const existingPaw = document.querySelector('.paw-print');
  if (existingPaw) {
    existingPaw.remove();
  }

  const paw = document.createElement("div");
  paw.className = "paw-print";
  paw.textContent = "🐾";
  paw.style.left = `${e.pageX}px`;
  paw.style.top = `${e.pageY}px`;
  document.body.appendChild(paw);
});

