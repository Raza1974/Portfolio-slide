;// Select all slides and buttons
const slides = document.querySelectorAll('.items');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

// Function to show the slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Next Slide
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Wrap around to the first slide
  }
  showSlide(currentIndex);
});

// Previous Slide
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Wrap around to the last slide
  }
  showSlide(currentIndex);
});

// Auto-slide (optional, if you want automatic transitions)
setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}, 10000); // Adjust the interval (5000 ms = 10 seconds)
