document.addEventListener('DOMContentLoaded', () => {

  /* ===== MENU MOBILE ===== */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===== FORM CONTACT (FORMSPREE) ===== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const statusElement = document.getElementById('status');
      if (!statusElement) return;

      statusElement.textContent = 'Envoi en cours...';
      statusElement.className = 'status loading';
      statusElement.style.display = 'block';

      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      })
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors de l’envoi');
        statusElement.textContent = 'Message envoyé avec succès !';
        statusElement.className = 'status success';
        contactForm.reset();
      })
      .catch(err => {
        statusElement.textContent = err.message;
        statusElement.className = 'status error';
      });
    });
  }

  /* ===== ANIMATION AU SCROLL ===== */
  const animatedElements = document.querySelectorAll('.project-card, .skill-category');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const animateOnScroll = () => {
    animatedElements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight / 1.3) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  /* ===== MODAL CV ===== */
  const openCv = document.getElementById('open-cv');
  const cvModal = document.getElementById('cv-modal');
  const closeCv = document.getElementById('close-cv');

  if (openCv && cvModal && closeCv) {
    openCv.addEventListener('click', (e) => {
      e.preventDefault();
      cvModal.classList.add('active');
    });

    closeCv.addEventListener('click', () => {
      cvModal.classList.remove('active');
    });

    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        cvModal.classList.remove('active');
      }
    });
  }

  /* ===== AUTRES MENUS (SÉCURISÉS) ===== */
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      document.getElementById('main-menu')?.classList.toggle('active');
    });
  }

  const mobileToggle = document.getElementById('mobileToggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      const menu = document.getElementById('mainMenu');
      this.classList.toggle('active');
      menu?.classList.toggle('active');
    });
  }

  /* ===== NAV BAR ACTIVE ===== */
  document.querySelectorAll('.bottom-nav a').forEach(link => {
    link.addEventListener('click', function () {
      document.querySelectorAll('.bottom-nav a')
        .forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

});
