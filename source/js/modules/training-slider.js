import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { toggleFocusability } from "../utils/toggle-focusability.js";
import { TABLET_WIDTH, TRAINING_DESKTOP_WIDTH } from "../constants.js";

let trainingSwiper = null;

const mediaQuery = window.matchMedia(`(min-width: ${TABLET_WIDTH}px)`);

const updateSlidesFocusability = () => {
  if (!trainingSwiper) return;

  trainingSwiper.slides.forEach((slide) => {
    const isActive = slide.classList.contains("swiper-slide-active");
    toggleFocusability(slide, isActive);
  });
};

const setInitialSlide = (isTablet) => {
  if (!trainingSwiper) return;

  if (isTablet) {
    trainingSwiper.slideToLoop(0, 0);
  } else {
    trainingSwiper.slideToLoop(2, 0);
  }

  updateSlidesFocusability();
};

const handleBreakpoint = (evt) => {
  setInitialSlide(evt.matches);
};

const initTrainingSlider = () => {
  const slider = document.querySelector(".swiper-training");
  if (!slider) return;

  trainingSwiper = new Swiper(slider, {
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,

    breakpoints: {
      [TABLET_WIDTH]: {
        slidesPerView: 3,
      },
      [TRAINING_DESKTOP_WIDTH]: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: ".swiper-button-training-next",
      prevEl: ".swiper-button-training-prev",
    },
  });

  handleBreakpoint(mediaQuery);

  mediaQuery.addEventListener("change", handleBreakpoint);

  trainingSwiper.on("slideChange", updateSlidesFocusability);
};

export { initTrainingSlider };
