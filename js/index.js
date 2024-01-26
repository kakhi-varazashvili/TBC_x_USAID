'strict mode';

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
console.log(slides.length);

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const transformValue = -currentIndex * 100 + '%';
  document.querySelector('.slider').style.transform = 'translateX(' + transformValue + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}











