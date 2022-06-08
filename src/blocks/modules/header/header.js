const menuBtn = document.querySelector('.header__burger'),
  menu = document.querySelector('.header__nav');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
