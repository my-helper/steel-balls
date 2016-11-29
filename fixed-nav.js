'use strict';

function fixedNav() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$linkEl = _ref.linkEl,
      linkEl = _ref$linkEl === undefined ? document.querySelectorAll('.nav__item') : _ref$linkEl,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? 39 : _ref$offset;

  var linkLength = linkEl.length;

  for (var i = 0; i < linkLength; i++) {
    linkEl[i].addEventListener('click', function (e) {
      e.preventDefault();
      var id = this.getAttribute('href').substring(1);
      var el = document.getElementById(id);
      el.scrollIntoView();
      window.scrollTo(0, window.scrollY - offset);
      toggleEl(navContainer, 'hidden-sm-down');
    });
  }
}