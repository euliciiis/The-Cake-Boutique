// Fade on scroll
let lastScrollTop = 0;
info = document.querySelector('.info');
window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    info.style.opacity = 0;
  } 
  else {
    info.style.opacity = 1;
  }

  lastScrollTop = scrollTop;
});