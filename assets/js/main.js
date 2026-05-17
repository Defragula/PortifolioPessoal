const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
} else {
  const hour = new Date().getHours();
  html.setAttribute('data-theme', hour >= 18 || hour < 6 ? 'dark' : 'light');
}

function updateThemeIcon() {
  const isDark = html.getAttribute('data-theme') === 'dark';
  toggle.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
}

toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  updateThemeIcon();
});

updateThemeIcon();
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = Number(el.dataset.parallax || 0);
    el.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });
