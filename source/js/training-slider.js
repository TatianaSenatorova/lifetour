import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const heroSwiper = new Swiper('.swiper-training', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 2,

  breakpoints: {
    768: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.swiper-button-training-next',
    prevEl: '.swiper-button-training-prev'
  },
});
