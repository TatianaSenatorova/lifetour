import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import {
  TABLET_WIDTH,
  WIDE_DESKTOP_WIDTH,
} from "../constants.js";

let reviewsSwiper = null;

const initReviewsSlider = () => {
  const slider = document.querySelector(".swiper-reviews");
  if (!slider) return;

  reviewsSwiper = new Swiper(slider, {
    modules: [Navigation],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,

    breakpoints: {
      [TABLET_WIDTH]: {
        slidesPerView: "auto",
        autoHeight: false,
      },

      [WIDE_DESKTOP_WIDTH]: {
        slidesPerView: "auto",
        spaceBetween: 120,
        autoHeight: false,
      },
    },

    navigation: {
      nextEl: ".swiper-button-reviews-next",
      prevEl: ".swiper-button-reviews-prev",
    },
  });
};

export { initReviewsSlider };
