// ========== ELEMENTS ==========
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");

// ========== MOBILE NAV ==========
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // close mobile nav when a link is clicked (improves UX)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// ========== THEME (dark) with localStorage ==========
(function handleTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }

  // set button icon initial state
  if (themeBtn) themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
      themeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
  }
})();

// ========== FOOTER YEAR ==========
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ========== CONTACT FORM DEMO ==========
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // demo behaviour — replace this with your API call or form service
    alert("Thanks for contacting ProTech Agency! (demo)");
    contactForm.reset();
  });
}
