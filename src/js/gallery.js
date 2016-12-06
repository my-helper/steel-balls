function gallery({
  images = document.querySelectorAll('.gallery__img'),
  cover = document.querySelector('.gallery-cover'),
  closeBrn = document.querySelector('.gallery-cover__close'),
  mainImg = document.querySelector('.popup-gallery__main-img')
} = {}) {
  for(let img of images) {
    img.addEventListener('click', function (e) {
      e.preventDefault();
      cover.classList.remove('hidden');
      mainImg.src = img.src;
      mainImg.alt = img.alt;
    })
  }
  closeBrn.addEventListener('click', function (e) {
    e.preventDefault();
    cover.classList.add('hidden');
  })
}