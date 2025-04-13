import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { slides } from './dom-elements';
console.log(slides);

const className = 'hero__pagination-control';

const heroSwiper = new Swiper('.swiper-hero', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  // a11y: {
  //   scrollOnFocus: false,
  // },

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
    // scrollOnFocus: false,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"><span class="visually-hidden">Перейти к слайду ' + (index + 1) +
        '</span></button>';
    },
    enabled: true,
  },
});

// if (heroSwiper.addEventListener) {
//   // `true` включает капчуринг
//   heroSwiper.slide.addEventListener('focus', heroSwiper.slide.onfocusin, true);
// }



heroSwiper.slides.forEach((slide, index) => {
  slide.addEventListener('focusin', () => {
    console.log(index);
    heroSwiper.loopFix();
    // heroSwiper.slideTo(index);
    // console.log(slides[index]);
    // slides[index].style.right = '0';
    // slides[index].style.left = '0';
  });
})
