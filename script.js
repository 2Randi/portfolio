'use strict';

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(13,17,23,0.98)'
    : 'rgba(13,17,23,0.92)';
});

/* ── HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ── TYPING EFFECT ── */
const typedEl = document.getElementById('typed-text');
const words = [
  'Réseaux & Systèmes',
  'Infrastructure Linux',
  'Virtualisation Proxmox',
  'Sécurité pfSense',
  'Supervision Zabbix',
];
let wordIdx = 0;
let charIdx = 0;
let deleting = false;
let paused = false;

function type() {
  if (paused) { setTimeout(type, 1800); paused = false; return; }
  const current = words[wordIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) { paused = true; deleting = true; }
    setTimeout(type, 75);
  } else {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
    }
    setTimeout(type, 40);
  }
}
type();

/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

/* ── ACTIVE NAV LINK ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const activateLink = () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
};
window.addEventListener('scroll', activateLink, { passive: true });
