import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { TOURS_TABLET_SMALL_WIDTH, DESKTOP_WIDTH } from "../constants.js";

let toursSwiper = null;

const initToursSlider = () => {
  const slider = document.querySelector(".swiper-tours");
  if (!slider) return;

  toursSwiper = new Swiper(slider, {
    modules: [Navigation],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 16,
    initialSlide: 0,

    breakpoints: {
      [TOURS_TABLET_SMALL_WIDTH]: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      [DESKTOP_WIDTH]: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-tour-next",
      prevEl: ".swiper-button-tour-prev",
    },
  });
};

export { initToursSlider };
