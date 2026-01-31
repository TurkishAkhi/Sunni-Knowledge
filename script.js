document.addEventListener("DOMContentLoaded", () => {
  const darkToggle = document.getElementById("darkToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Dark Mode Toggle
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark")
      ? "☀️"
      : "🌙";
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
