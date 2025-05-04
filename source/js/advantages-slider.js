import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import {
  advantagesSlidesList,
  advantagesSlides
} from './dom-elements.js';
import {
  INIT_NUMBER_ADVANTAGES_SLIDES,
  DESKTOP_WIDTH
} from './constants.js';

let slidesCounter = advantagesSlides.length;
let advantagesSwiper;

const initSlider = () => {
  advantagesSwiper = new Swiper('.advantages__slider', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    enabled: false,

    breakpoints: {
      1440: {
        enabled: true,
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        initialSlide: 2,
        centeredSlides: true,
        spaceBetween: 30,
        loopAddBlankSlides: false,
      }
    },

    navigation: {
      nextEl: '.swiper-button-advantages-next',
      prevEl: '.swiper-button-advantages-prev'
    }
  });
};

const addAdditionalSlides = () => {
  advantagesSlides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    advantagesSlidesList.appendChild(clonedSlide);
    slidesCounter++;
  });
};

const removeAdditionalSlides = () => {
  const currentSlides = advantagesSlidesList.querySelectorAll('.advantages__slider-item');
  currentSlides.forEach((slide, index) => {
    if (index > INIT_NUMBER_ADVANTAGES_SLIDES - 1) {
      slide.remove();
      slidesCounter--;
    }
  });
};

const checkDocumentWidth = () => {
  if (document.documentElement.clientWidth >= DESKTOP_WIDTH && slidesCounter <= INIT_NUMBER_ADVANTAGES_SLIDES) {
    addAdditionalSlides();
    initSlider();
  } else if (advantagesSwiper && document.documentElement.clientWidth < DESKTOP_WIDTH) {
    removeAdditionalSlides();
    advantagesSwiper.destroy();
  }
};

const onDocumentDomContentLoaded = () => {
  checkDocumentWidth();
};

const onWindowResize = () => {
  checkDocumentWidth();
};

document.addEventListener('DOMContentLoaded', onDocumentDomContentLoaded);

window.addEventListener('resize', onWindowResize);
