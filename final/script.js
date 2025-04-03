const buttons = document.querySelectorAll("[data-carousel-button]");
const titles = [
  "Missionary Photos",
  "Portrait Photos",
  "Group Photos"
];

const titleElement = document.querySelector(".home-image-container h2"); // Selects the first h2 element

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    titleElement.textContent = titles[newIndex]; // Update the title

  });
});
