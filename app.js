// Mobile menu toggle functionality
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "";
});

// Close menu when clicking overlay
overlay.addEventListener("click", function () {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

// Close menu when clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});
