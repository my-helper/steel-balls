'use strict';

loadCSS('main.css');
loadCSS('https://fonts.googleapis.com/css?family=Lobster|PT+Sans&amp;subset=cyrillic');

var navBtn = document.querySelector('.nav-btn');
var nav = document.querySelector('.nav');
var navContainer = nav.parentElement;

navBtn.addEventListener('click', function (e) {
  e.preventDefault();
  toggleEl(navContainer, 'hidden-sm-down');
});

function toggleEl(el, cssClass) {
  el.classList.toggle(cssClass);
}