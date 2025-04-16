import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const heroSwiper = new Swiper('.swiper-training', {
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
    nextEl: '.swiper-button-training-next',
    prevEl: '.swiper-button-training-prev'
  },
});
