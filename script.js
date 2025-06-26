// Dark mode
const darkToggle = document.getElementById("darkToggle");
const darkIcon = document.getElementById("darkIcon");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)) {
  document.documentElement.setAttribute("data-theme", "dark");
  if (darkIcon) darkIcon.textContent = "☀️";
}
darkToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  darkIcon.textContent = isDark ? "🌙" : "☀️";
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate-in on scroll
function animateSections() {
  document.querySelectorAll(".animate-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", animateSections);
window.addEventListener("DOMContentLoaded", animateSections);

// Animated skill bars
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".skill-bar").forEach(bar => {
      bar.classList.add("visible");
    });
  }, 600);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Expandable project details
document.querySelectorAll(".project-toggle").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const card = this.closest(".project-card");
    card.classList.toggle("expanded");
    this.textContent = card.classList.contains("expanded") ? "Hide" : "Details";
  });
});

// Contact form (static demo: shows success/fail, replace with backend if needed)
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  feedback.textContent = "";
  feedback.className = "form-feedback";
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  // Simple validation
  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.classList.add("error");
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.classList.add("error");
    return;
  }
  // Simulate sending...
  feedback.textContent = "Sending...";
  setTimeout(() => {
    feedback.textContent = "Thank you for reaching out! I’ll get back to you soon.";
    feedback.classList.remove("error");
    feedback.classList.add("success");
    contactForm.reset();
  }, 1400);
});
