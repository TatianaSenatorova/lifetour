import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const toursSwiper = new Swiper('.swiper-tours', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  initialSlide: 0,

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-tour-next',
    prevEl: '.swiper-button-tour-prev'
  },
});
