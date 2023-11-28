const hamburger = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

// Accordions

const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accordion) => {
  const icon = accordion.querySelector(".icon");
  const answer = accordion.querySelector(".answer");

  accordion.addEventListener("click", () => {
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

