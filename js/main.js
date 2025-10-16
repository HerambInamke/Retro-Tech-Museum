// Global JavaScript
function setActiveNav() {
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('#navLinks a[data-link]').forEach(a => {
    a.classList.toggle('active', a.dataset.link === page);
  });
}
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setYear();
});


