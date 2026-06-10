'use strict';

/* ── DYNAMIC COPYRIGHT YEAR ── */
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

/* ── NAV SCROLL ── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50 ? 'rgba(13,17,23,1)' : 'rgba(13,17,23,.97)';
}, { passive: true });

/* ── HAMBURGER ── */
const burger = document.getElementById('burger');
const nl = document.getElementById('nl');
if (burger && nl) {
  burger.addEventListener('click', () => nl.classList.toggle('open'));
  nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nl.classList.remove('open')));
}

/* ── SCROLL REVEAL ── */
const rvs = document.querySelectorAll('.rv');
if (rvs.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add('on'), i * 90); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  rvs.forEach(el => io.observe(el));
}

/* ── CATEGORY FILTER ── */
const filterButtons = document.querySelectorAll('.pfb');
if (filterButtons.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.pc').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? 'flex' : 'none';
      });
    });
  });
}
