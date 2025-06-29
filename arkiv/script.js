// Enkel bekräftelse på formulärinlämning (demo)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Tack för ditt meddelande! Vi hör av oss snart.');
      form.reset();
    });
  }
});
