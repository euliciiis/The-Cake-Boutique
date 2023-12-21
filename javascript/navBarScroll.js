// Navbar Fade on Scroll
let lastScrollTop = 0;
navbar = document.querySelector('.navbar');
info = document.querySelector('.info');
window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-172px';
    info.style.opacity = 0;
    navbar.style.transition = 'all .3s ease';
  } else if (scrollTop === 0) {
    info.style.opacity = 1;
  }
  else {
    navbar.style.top = '0';
    
  }

  lastScrollTop = scrollTop;
});