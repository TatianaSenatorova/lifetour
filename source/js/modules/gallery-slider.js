import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { DESKTOP_WIDTH } from "../constants.js";

let gallerySwiper = null;
let mediaQuery = null;

const enableSlider = () => {
  if (gallerySwiper) {
    return;
  }

  gallerySwiper = new Swiper(".swiper-gallery", {
    modules: [Navigation],
    direction: "horizontal",
    spaceBetween: 5,
    slidesPerView: "auto",
    speed: 500,
    loop: true,
    centeredSlides: false,

    navigation: {
      nextEl: ".swiper-button-gallery-next",
      prevEl: ".swiper-button-gallery-prev",
    },
  });
};

const disableSlider = () => {
  if (!gallerySwiper) {
    return;
  }

  gallerySwiper.destroy(true, true);
  gallerySwiper = null;
};

const handleBreakpoint = (evt) => {
  if (evt.matches) {
    disableSlider();
  } else {
    enableSlider();
  }
};

const initGallerySlider = () => {
  const slider = document.querySelector(".swiper-gallery");
  if (!slider) return;

  mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_WIDTH}px)`);

  handleBreakpoint(mediaQuery);
  mediaQuery.addEventListener("change", handleBreakpoint);
};

export { initGallerySlider };
