"strict mode";
let div = document.querySelectorAll(".slide-div");
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
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

  const transformValue = -currentIndex * 100 + "%";
  document.querySelector(".slider").style.transform =
    "translateX(" + transformValue + ")";

  for (let i of div) {
    if (currentIndex === 0) {
      console.log(div[0]);
      div[0].style.backgroundColor = "#ffffff";
    } else {
      i.style.backgroundColor = "#E8E6E6";
    }
  }
}

const prevSlide = () => {
  showSlide(currentIndex - 1);
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};
