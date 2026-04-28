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

let advantagesSwiper = null;
let slidesCounter = advantagesSlides.length;

const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_WIDTH}px)`);

const addAdditionalSlides = () => {
  advantagesSlides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    advantagesSlidesList.appendChild(clonedSlide);
    slidesCounter++;
  });
};

const removeAdditionalSlides = () => {
  advantagesSlidesList
    .querySelectorAll('.advantages__slider-item')
    .forEach((slide, index) => {
      if (index >= INIT_NUMBER_ADVANTAGES_SLIDES) {
        slide.remove();
      }
    });

  slidesCounter = INIT_NUMBER_ADVANTAGES_SLIDES;
};

const enableSlider = () => {
  if (advantagesSwiper) {
    return;
  }

  if (slidesCounter <= INIT_NUMBER_ADVANTAGES_SLIDES) {
    addAdditionalSlides();
  }

  advantagesSwiper = new Swiper('.advantages__slider', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 2,
   centeredSlides: true,
    roundLengths: true,
    spaceBetween: 30,
    initialSlide: 2,
    loopAddBlankSlides: false,

    navigation: {
      nextEl: '.swiper-button-advantages-next',
      prevEl: '.swiper-button-advantages-prev'
    }
  });
};

const disableSlider = () => {
  if (!advantagesSwiper) {
    return;
  }

  advantagesSwiper.destroy(true, true);
  advantagesSwiper = null;
  removeAdditionalSlides();
};

const handleBreakpoint = (evt) => {
  if (evt.matches) {
    enableSlider();
  } else {
    disableSlider();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  handleBreakpoint(mediaQuery);
  mediaQuery.addEventListener('change', handleBreakpoint);
});
