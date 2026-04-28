import { initBurgerMenu } from "./modules/burger-menu.js";
import { initHeroSlider } from "./modules/hero-slider.js";
import { initToursSlider } from "./modules/tours-slider.js";
import { initTrainingSlider } from "./modules/training-slider.js";
import { initReviewsSlider } from "./modules/reviews-slider";
import { initAdvantagesSlider } from "./modules/advantages-slider.js";
import { initGallerySlider } from "./modules/gallery-slider.js";
import { initForm } from "./modules/form/index.js";

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initHeroSlider();
  initToursSlider();
  initTrainingSlider();
  initReviewsSlider();
  initAdvantagesSlider();
  initGallerySlider();
  initForm();
});
