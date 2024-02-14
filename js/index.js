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
    y.style.backgroundColor = "#ffffff";
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

const questions = document.querySelectorAll(".sub-question");
const arrowDown = document.querySelector(".arrow-down");

let counter = 0;

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle("show");
    console.log(question, index);
  });
});

const navBar = document.querySelector(".nav-bar");
const burgerMenu = document.querySelector(".burger_menu");
burgerMenu.addEventListener("click", () => {
  counter++;
  if (counter % 2 !== 0) {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});
