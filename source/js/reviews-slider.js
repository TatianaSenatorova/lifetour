import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.swiper-reviews', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 30,
  autoHeight: true,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      autoHeight: false,
    },

    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
      autoHeight: false,
    }
  },

  navigation: {
    nextEl: '.swiper-button-reviews-next',
    prevEl: '.swiper-button-reviews-prev'
  },
});
