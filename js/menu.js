var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__toggle');
var navToggled = 'main-nav--toggled';

navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
  if (navMain.classList.contains(navToggled)) {
    navMain.classList.remove(navToggled);
  } else {
    navMain.classList.add(navToggled);
  }
});
