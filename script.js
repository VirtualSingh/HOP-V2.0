const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".hamburger__menu");

// toggle menu-open class from header to open and close menu.
hamburgerMenu.addEventListener("click", () => {
  header.classList.toggle("menu-open");
});

// change the size of navbar on scroll
window.addEventListener("scroll", () => {
  windowPosition = window.scrollY > 0;
  header.classList.toggle("active", windowPosition);
});
