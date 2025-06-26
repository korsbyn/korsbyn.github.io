// File: script.js
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
});
});

// Contact form feedback
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
feedback.textContent = 'Thank you! I will get back to you soon.';
feedback.classList.add('success');
contactForm.reset();
});

