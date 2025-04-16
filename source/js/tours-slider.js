import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const heroSwiper = new Swiper('.swiper-tours', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 0,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-tour-next',
    prevEl: '.swiper-button-tour-prev'
  },
});


