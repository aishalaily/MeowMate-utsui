src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";

// Scroll ke bagian Adopsi
function scrollToAdopsi() {
  const adopsiSection = document.getElementById("adopsi");
  if (adopsiSection) {
    adopsiSection.scrollIntoView({ behavior: "smooth" });
  }
}

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

