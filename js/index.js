"strict mode";
const slideDiv = document.querySelectorAll(".slide-div");
let slidesLength = slideDiv.length;
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

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
}

const prevSlide = () => {
  showSlide(currentIndex - 1);
};

const nextSlide = () => {
  showSlide(currentIndex + 1);
};


for (let y of slideDiv) {
  y.addEventListener("click", () => {
    y.style.backgroundColor = "#ffffff"
    if (y === slideDiv[0]) {
      showSlide((currentIndex = 0));
    } else if (y === slideDiv[1]) {
      showSlide((currentIndex = 1));
    } else if (y === slideDiv[2]) {
      showSlide((currentIndex = 2));
    }
  });
}

// FAQ

const questions = document.querySelectorAll(".question");
const arrowDown = document.querySelector(".arrow-down");

let counter = 0;
const answer = document.querySelector(".answer");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    counter++;
    if (counter % 2 !== 0) {
      answer.style.display = "grid";
      arrowDown.style.transform = "rotate(-180deg)";
    } else {
      answer.style.display = "none";
      arrowDown.style.transform = "rotate(0deg)";
    }
  });
});
