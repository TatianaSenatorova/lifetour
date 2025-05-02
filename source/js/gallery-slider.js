import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.swiper-gallery', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 2,
  initialSlide: 0,
  spaceBetween: 5,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
      // spaceBetween: 18,
    },

    1440: {
      slidesPerView: 5,
      enabled: false,
    }
  },

  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev'
  },
});

