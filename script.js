// Filtrage des projets
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

// Animation au scroll
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
    if(elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);


//pop up
// Contenu détaillé pour chaque projet
const projectDetails = {
  "Active Directory & GPO": {
    description: "Mise en place d’un domaine Windows Server et gestion des politiques centralisées",
    images: ["./images/ad1.jpg", "./images/ad2.jpg"],
    links: ["https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/"]
  },
  "Administration Linux": {
    description: "Debian, Ubuntu Scripting Bash et Python, automatisation avec Ansible",
    images: ["./images/linux1.jpg", "./images/linux2.jpg"],
    links: ["https://www.ansible.com/resources/get-started"]
  },
  "Infrastructure Réseau Sécurisée": {
    description: "VLAN, routage inter-VLAN, VPN, firewall pfSense",
    images: ["./images/network1.jpg"],
    links: ["https://www.pfsense.org/"]
  },
  "CI/CD GitLab & Jenkins": {
    description: "Pipeline automatisé pour tests et déploiement Docker/Kubernetes",
    images: ["./images/cicd1.jpg"],
    links: ["https://www.jenkins.io/", "https://docs.gitlab.com/ee/ci/"]
  },
  "Monitoring": {
    description: "Zabbix, Grafana et Prometheus – Supervision et alertes temps réel",
    images: ["./images/monitor1.jpg"],
    links: ["https://www.zabbix.com/", "https://grafana.com/", "https://prometheus.io/"]
  },
  "Application E-commerce Android": {
    description: "Application de vente en ligne complète, gestion des produits et commandes",
    images: ["./images/android1.jpg"],
    links: ["https://github.com/2Randi/ecommerce-android"]
  },
  "API REST Symfony": {
    description: "Gestion d’événements et base MySQL",
    images: ["./images/symfony1.jpg"],
    links: ["https://symfony.com/doc/current/index.html"]
  },
  "SIEM ELK Stack": {
    description: "Collecte et analyse centralisée des logs pour la détection d’incidents",
    images: ["./images/elk1.jpg"],
    links: ["https://www.elastic.co/what-is/elk-stack"]
  }
};

// Modal elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalImg = document.getElementById('modal-img');
const prevBtn = document.querySelector('#modal-slider .prev');
const nextBtn = document.querySelector('#modal-slider .next');
const closeBtn = document.querySelector('.close');

let currentImages = [];
let currentIndex = 0;

// Ouvrir modal
projects.forEach(project => {
  project.addEventListener('click', () => {
    const title = project.querySelector('h3').textContent;
    modalTitle.textContent = title;

    const details = projectDetails[title];

    // Description + liens
    let html = `<p>${details.description}</p>`;
    details.links.forEach(link => {
      html += `<p><a href="${link}" target="_blank">${link}</a></p>`;
    });
    modalBody.innerHTML = html;

    // Slider images
    currentImages = details.images;
    currentIndex = 0;
    modalImg.src = currentImages[currentIndex];
    modalImg.alt = title;

    modal.style.display = 'flex'; // garde toujours centré
  });
});

// Slider images
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

// Fermer modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


// --- Modal CV ---
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
  if (e.target === cvModal) {
    cvModal.style.display = "none";
  }
});




/*const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project-card');

// Filtrage
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projects.forEach(proj => {
      if(filter === 'all' || proj.dataset.category === filter) {
        proj.style.display = 'block';
      } else {
        proj.style.display = 'none';
      }
    });
  });
});

// Animation scroll
const scrollElements = document.querySelectorAll('.scroll-animate');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => element.classList.add('show');
const handleScrollAnimation = () => {
  scrollElements.forEach(el => { if(elementInView(el,1.25)) displayScrollElement(el); });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);


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
