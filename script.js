const menuBtn = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle the 'show' class (Bootstrap style naming)
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove('show');
    }
  });
});

// Remove active class handling if you want it purely static, 
// but here is the simple switcher:
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});