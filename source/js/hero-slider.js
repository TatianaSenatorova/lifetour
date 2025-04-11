import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
const className = 'hero__pagination-control';

const heroSwiper = new Swiper('.swiper-hero', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,


  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },

  pagination: {
    el: '.hero__slider-pagination',
    bulletClass: 'hero__pagination-control',
    bulletActiveClass: 'hero__pagination-control--is-active',
    type: 'bullets',
    clickable: true,
    scrollOnFocus: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"><span class="visually-hidden">Перейти к слайду ' + (index + 1)+
  '</span></button>';
     },
    enabled: true,
  },
});

// swiper.slides.forEach((slide, index) => {
//   slide.addEventListener('focusin', () => {
//     swiper.slideTo(index);
//   });
// });
