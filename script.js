const navButton = document.getElementById('nav-button');
const navBg = document.getElementById('nav-bg');
const navMenu = document.getElementById('nav-menu');
const navIcon = document.querySelector('.navigation__icon');

if (navButton) {
  navButton.addEventListener('click', () => {
    navBg.classList.toggle('bg-scale');
    navMenu.classList.toggle('nav-active');
    navIcon.classList.toggle('transparent');
  });
}
