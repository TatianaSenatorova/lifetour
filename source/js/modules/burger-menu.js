import { isEscapeKey, isTabKey } from "../utils/keydown.js";
import { toggleFocusability } from "../utils/toggle-focusability.js";
import { FOCUSABLE_SELECTOR } from "../constants.js";
import { mainHeader, burger, navList } from "../dom-elements.js";
import { DESKTOP_WIDTH } from "../constants.js";

const navWrapper = mainHeader.querySelector(".main-header__nav-wrapper");
const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_WIDTH}px)`);

const getFocusableElements = () =>
  Array.from(mainHeader.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    return !el.hasAttribute("disabled") && el.getAttribute("tabindex") !== "-1";
  });

const focusLock = (evt) => {
  if (!isTabKey(evt)) return;

  const focusable = getFocusableElements();
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (evt.shiftKey && document.activeElement === first) {
    evt.preventDefault();
    last.focus();
  }

  if (!evt.shiftKey && document.activeElement === last) {
    evt.preventDefault();
    first.focus();
  }
};

const closeMenu = () => {
  if (mediaQuery.matches) return;
  mainHeader.classList.remove("main-header--nav-is-opened");
  burger.setAttribute("aria-expanded", "false");

  syncMenuState();

  document.removeEventListener("keydown", onKeydown);
  document.removeEventListener("click", onClickOutside);
};

const openMenu = () => {
  mainHeader.classList.add("main-header--nav-is-opened");
  burger.setAttribute("aria-expanded", "true");

  syncMenuState();

  const firstFocusable = navWrapper.querySelector(FOCUSABLE_SELECTOR);
  firstFocusable?.focus({ preventScroll: true });

  document.addEventListener("keydown", onKeydown);
  document.addEventListener("click", onClickOutside);
};

const onKeydown = (evt) => {
  if (mediaQuery.matches) return;

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
    return;
  }

  if (!mainHeader.classList.contains("main-header--nav-is-opened")) {
    return;
  }

  focusLock(evt);
};

const onClickOutside = (evt) => {
  if (mainHeader.contains(evt.target)) return;
  closeMenu();
};

const onBurgerClick = () => {
  if (mainHeader.classList.contains("main-header--nav-is-opened")) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onNavClick = (evt) => {
  if (!evt.target.closest(".main-header__nav-link")) return;
  if (mediaQuery.matches) return;

  closeMenu();
};

const syncMenuState = () => {
  if (mediaQuery.matches) {
    toggleFocusability(navWrapper, true);
  } else {
    const isOpened = mainHeader.classList.contains(
      "main-header--nav-is-opened",
    );
    toggleFocusability(navWrapper, isOpened);
  }
};

const initBurgerMenu = () => {
  if (!burger || !navWrapper) return;
  console.log(mediaQuery.matches);

  syncMenuState();

  burger.setAttribute("aria-expanded", "false");

  burger.addEventListener("click", onBurgerClick);
  navList.addEventListener("click", onNavClick);
  mediaQuery.addEventListener("change", syncMenuState);
};

export { initBurgerMenu };
