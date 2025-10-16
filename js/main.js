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
  const nav = document.querySelector('nav.navbar');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 6) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});


