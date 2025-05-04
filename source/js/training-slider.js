import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const trainingSwiper = new Swiper('.swiper-training', {
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
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },

  navigation: {
    nextEl: '.swiper-button-training-next',
    prevEl: '.swiper-button-training-prev'
  },
});
