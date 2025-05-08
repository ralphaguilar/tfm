const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
});


document.addEventListener('DOMContentLoaded', () => {
  const fadeChildren = document.querySelectorAll('.fade-in-child');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // fade only once
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeChildren.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

document.querySelectorAll('.lightbox-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const imgSrc = link.getAttribute('href');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
  });
});

document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('active');
});
