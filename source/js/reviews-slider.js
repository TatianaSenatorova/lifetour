import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.swiper-reviews', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 30,
  // autoHeight: true,

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      // spaceBetween: 18,
    },

    1440: {
      // slidesPerView: 3,
      slidesPerView: 'auto',
      spaceBetween: 120,
    }
  },

  navigation: {
    nextEl: '.swiper-button-reviews-next',
    prevEl: '.swiper-button-reviews-prev'
  },
});
