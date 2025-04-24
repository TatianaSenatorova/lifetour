import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import {
  advantagesSlidesList,
  advantagesSlides
} from './dom-elements.js';
import {
  INIT_NUMBER_ADVANTAGES_SLIDES
} from './constants.js';

let currentSlidesNumber = advantagesSlides.length;

const changeSlidesNumber = () => {
  advantagesSlides.forEach((slide) => {
    const clonedSlide = slide.cloneNode(true);
    advantagesSlidesList.appendChild(clonedSlide);
    currentSlidesNumber++;
  });
  console.log(currentSlidesNumber);
}

const removeAdditionalSlides = () => {
const currentSlides = advantagesSlidesList.querySelectorAll('.advantages__slider-item');
console.log(currentSlides);
currentSlides.forEach((slide, index) => {
    if (index > INIT_NUMBER_ADVANTAGES_SLIDES - 1) {
      console.log(slide);
      slide.remove();
      currentSlidesNumber--;
    }
  });
  console.log(advantagesSlidesList.querySelectorAll('.advantages__slider-item'));
  console.log(currentSlidesNumber);
}

const checkDocumentWidth = () => {
  if (document.documentElement.clientWidth >= 1440 && currentSlidesNumber > INIT_NUMBER_ADVANTAGES_SLIDES) {
    return;
  } else if (document.documentElement.clientWidth >= 1440 && currentSlidesNumber <= INIT_NUMBER_ADVANTAGES_SLIDES) {
    changeSlidesNumber();
    return
  }
  removeAdditionalSlides();
}

const onDocumentDomContentLoaded = () => {
  checkDocumentWidth();
}

const onWindowResize = () => {
  checkDocumentWidth();
}

document.addEventListener("DOMContentLoaded", onDocumentDomContentLoaded);
window.addEventListener("resize", onWindowResize);

const advantagesSwiper = new Swiper('.advantages__slider', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  enabled: false,

  breakpoints: {
    // 768: {
    //   enabled: false,
    // },

    1440: {
      enabled: true,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      initialSlide: 2,
      centeredSlides: true,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-advantages-next',
    prevEl: '.swiper-button-advantages-prev'
  },
});
