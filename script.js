/* js de mon portfolio */
document.addEventListener('DOMContentLoaded', function() {

  /* --- Filtrage des projets --- */
 const filterButtons = document.querySelectorAll('.filters button');
  const projects = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      projects.forEach(project => {
        if(filter === 'all' || project.dataset.category === filter){
          project.style.display = 'block';
          setTimeout(() => project.classList.add('show'), 50);
        } else {
          project.style.display = 'none';
          project.classList.remove('show');
        }
      });
    });
  });

  /* --- Animation au scroll --- */
  const scrollElements = document.querySelectorAll('.scroll-animate');
  const elementInView = (el, dividend = 1) => 
    el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  const displayScrollElement = (el) => el.classList.add('show');
  const handleScrollAnimation = () => scrollElements.forEach(el => { 
    if(elementInView(el,1.25)) displayScrollElement(el); 
  });
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);

  /* --- Charger projets depuis JSON --- */
  let projectDetails = {};
  fetch('./projects-data.json')
    .then(response => response.json())
    .then(data => {
      projectDetails = data;

      /* --- Modal projets --- */
      const modal = document.getElementById('project-modal');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');
      const modalImg = document.getElementById('modal-img');
      const prevBtn = document.querySelector('#modal-slider .prev');
      const nextBtn = document.querySelector('#modal-slider .next');
      const closeBtn = modal.querySelector('.close');

      let currentImages = [];
      let currentIndex = 0;

      projects.forEach(project => {
        project.addEventListener('click', () => {
          const title = project.querySelector('h4').textContent;
          modalTitle.textContent = title;

          const details = projectDetails[title];
          let html = `<p>${details.description}</p>`;
          details.links.forEach(link => html += `<p><a href="${link}" target="_blank">${link}</a></p>`);
          modalBody.innerHTML = html;

          currentImages = details.images;
          currentIndex = 0;
          modalImg.src = currentImages[currentIndex];
          modalImg.alt = title;

          modal.style.display = 'flex';
        });
      });

      prevBtn.addEventListener('click', () => {
        if(currentImages.length === 0) return;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        modalImg.src = currentImages[currentIndex];
      });

      nextBtn.addEventListener('click', () => {
        if(currentImages.length === 0) return;
        currentIndex = (currentIndex + 1) % currentImages.length;
        modalImg.src = currentImages[currentIndex];
      });

      closeBtn.addEventListener('click', () => modal.style.display = 'none');
      window.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });

    })
    .catch(error => console.error("Erreur lors du chargement des projets :", error));

  /* --- Modal CV simplifié --- */
  const cvModal = document.getElementById("cv-modal");
  const openCv = document.getElementById("open-cv");
  const closeCv = document.getElementById("close-cv");

  openCv.onclick = function(e) {
    e.preventDefault();
    cvModal.style.display = "flex";
  }

  closeCv.onclick = function() { 
    cvModal.style.display = "none"; 
  }

  window.addEventListener("click", function(e) { 
    if (e.target === cvModal) cvModal.style.display = "none"; 
  });

 });

