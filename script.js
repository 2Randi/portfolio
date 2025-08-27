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
