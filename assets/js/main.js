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

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader')?.classList.add('hidden');
  }, 450);
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const backToTop = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (y / pageHeight) * 100 : 0;

  progressBar.style.width = `${progress}%`;
  backToTop.classList.toggle('visible', y > 500);

  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = Number(el.dataset.parallax || 0);
    el.style.transform = `translateY(${y * speed}px)`;
  });
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const words = ['clareza', 'organização', 'dados', 'tecnologia'];
const wordRotator = document.getElementById('wordRotator');
let wordIndex = 0;

function rotateWord() {
  wordRotator.classList.add('switching');

  setTimeout(() => {
    wordIndex = (wordIndex + 1) % words.length;
    wordRotator.textContent = words[wordIndex];
    wordRotator.classList.remove('switching');
  }, 450);
}

setInterval(rotateWord, 2600);

document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menuPrincipal');
    const bsCollapse = bootstrap.Collapse.getInstance(menu);
    if (bsCollapse) bsCollapse.hide();
  });
});
