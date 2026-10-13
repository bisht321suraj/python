const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-wrapper');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})