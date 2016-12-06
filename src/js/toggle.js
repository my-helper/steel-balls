const navBtn = document.querySelector('.nav-btn'),
  nav = document.querySelector('.nav'),
  navContainer = nav.parentElement.parentElement,
  navBtnLines = document.querySelectorAll('.nav-btn__lines');

navBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleEl(navContainer, 'hidden-sm-down');
  for( let el of navBtnLines) {
    toggleEl(el, 'nav-btn__lines_open');
  }
});

function toggleEl(el, cssClass) {
  el.classList.toggle(cssClass);
}
