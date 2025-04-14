import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { slides } from './dom-elements';
console.log(slides);

const className = 'hero__pagination-control';

const heroSwiper = new Swiper('.swiper-hero', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  // watchSlidesProgress: true,
  // centeredSlides: true,
  // a11y: {
  //   scrollOnFocus: false,
  // },

  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },

  pagination: {
    el: '.hero__slider-pagination',
    bulletClass: 'hero__pagination-control',
    bulletActiveClass: 'hero__pagination-control--is-active',
    type: 'bullets',
    clickable: true,
    // scrollOnFocus: false,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"><span class="visually-hidden">Перейти к слайду ' + (index + 1) +
        '</span></button>';
    },
    enabled: true,
  },
});

// if (heroSwiper.addEventListener) {
//   // `true` включает капчуринг
//   heroSwiper.slide.addEventListener('focus', heroSwiper.slide.onfocusin, true);
// }



// heroSwiper.slides.forEach((slide) => {
//   slide.addEventListener('focusin', () => {
//     const focusedSlide = slide.dataset.swiperSlideIndex;
//     heroSwiper.slides.forEach((slide) => {
//       console.log(focusedSlide);
//       slide.classList.remove('swiper-slide-active');
//     })

//     console.log(focusedSlide);
//     heroSwiper.slides[focusedSlide].classList.add('swiper-slide-active');
//     // heroSwiper.loopFix();
//     // heroSwiper.slideTo(index);
//     // console.log(slides[index]);
//     // slides[index].style.right = '0';
//     // slides[index].style.left = '0';
//   });
// })


// slide.onfocusin = function () {
//   // Сбрасываем скролл
//   _this.scrollLeft = 0;
//   // И еще раз с нулевым таймаутом, потому что в вебките скролл
//   // выставляется позже события. Первый ресет оставляем, чтобы
//   // в других браузерах не дергалось.
//   setTimeout(function () {
//     _this.scrollLeft = 0;
//   }, 0);

//   // Переключаем на слайд, к которому привязано событие
//   changeActiveSlide(i);
// };

// Используем привязанную к `onfocusin` функцию уже
// в нормальном `addEventListener`
// if (slide.addEventListener) {
//   // `true` включает капчуринг
//   slide.addEventListener('focus', slide.onfocusin, true);
// }

const onFocusSlider = (index) => {
console.log(index);
changeActiveSlide(i);
}

heroSwiper.slides.forEach((slide, index) => {
  slide.addEventListener('focusin', () => onFocusSlider(index));
})
