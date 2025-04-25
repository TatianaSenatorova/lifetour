import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('.swiper-gallery', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 5,

  navigation: {
    nextEl: '.swiper-button-gallery-next',
    prevEl: '.swiper-button-gallery-prev'
  },
});
