let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSlideShow();

  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', stopSlideShow);
  carousel.addEventListener('mouseleave', startSlideShow);
});

