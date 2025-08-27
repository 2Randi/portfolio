const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    projects.forEach(project => {
      if(filter === 'all' || project.dataset.category === filter){
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});


/*
const projects = document.querySelectorAll('.project');
const filterButtons = document.querySelectorAll('.filters button');

function filterProjects(category) {
  projects.forEach(proj => {
    proj.classList.remove('show'); // reset animation
    setTimeout(() => {
      if (category === 'all' || proj.dataset.category === category) {
        proj.style.display = 'block';
        setTimeout(() => proj.classList.add('show'), 50);
      } else {
        proj.style.display = 'none';
      }
    }, 50);
  });
}

// Active sur tous au démarrage
filterProjects('all');

// Event listeners
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => filterProjects(btn.dataset.filter));
});

// Filtrage des projets
const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    projects.forEach(project => {
      if(filter === 'all' || project.dataset.category === filter){
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

function filterProjects(category) {
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'block';
      setTimeout(() => project.classList.add('show'), 50);
    } else {
      project.style.display = 'none';
      project.classList.remove('show');
    }
  });
}

// Au chargement, tout afficher
filterProjects('all');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => filterProjects(btn.dataset.filter));
});

// Animation scroll
const scrollElements = document.querySelectorAll('.scroll-animate');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
  element.classList.add('show');
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
*/
