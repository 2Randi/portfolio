'use strict';

/* ── NAV SCROLL ── */
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(13,17,23,.99)'
    : 'rgba(13,17,23,.95)';
}, { passive: true });

/* ── HAMBURGER ── */
const burger = document.getElementById('burger');
const menu   = document.getElementById('nav-menu');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('on'), i * 90);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => io.observe(el));
}

/* ── ABOUT GRID RESPONSIVE ── */
const ag = document.querySelector('.about-grid-resp');
if (ag) {
  const fix = () => {
    ag.style.gridTemplateColumns = window.innerWidth < 768 ? '1fr' : '1fr 340px';
  };
  fix();
  window.addEventListener('resize', fix);
}
