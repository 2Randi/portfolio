'use strict';

/* ── DYNAMIC COPYRIGHT YEAR ── */
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

/* ── NAV ── */

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
