import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import { toggleFocusability } from "../utils/toggle-focusability.js";
import { WIDE_DESKTOP_WIDTH } from "../constants.js";

let heroSwiper = null;

const initHeroSlider = () => {
  const slider = document.querySelector(".swiper-hero");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero__slider-item");

  const updateSlidesFocusability = () => {
    if (!heroSwiper) return;

    slides.forEach((slide, index) => {
      toggleFocusability(slide, index === heroSwiper.realIndex);
    });
  };

  heroSwiper = new Swiper(slider, {
    modules: [Pagination],
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    watchSlidesProgress: true,

    breakpoints: {
      [WIDE_DESKTOP_WIDTH]: {
        allowTouchMove: false,
      },
    },

    pagination: {
      el: ".hero__slider-pagination",
      bulletClass: "hero__pagination-control",
      bulletActiveClass: "hero__pagination-control--is-active",
      clickable: true,
      renderBullet: (index, className) => {
        return `<button class="${className}">
          <span class="visually-hidden">
            Перейти к слайду ${index + 1}
          </span>
        </button>`;
      },
    },
  });

  updateSlidesFocusability();
  heroSwiper.on("slideChange", updateSlidesFocusability);
};

export { initHeroSlider };
