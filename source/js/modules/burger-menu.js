import { isEscapeKey, isTabKey } from "../utils/keydown.js";
import { toggleFocusability } from "../utils/toggle-focusability.js";
import { FOCUSABLE_SELECTOR } from "../constants.js";
import { mainHeader, burger, navList } from "../dom-elements.js";

const navWrapper = mainHeader.querySelector(".main-header__nav-wrapper");

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
  mainHeader.classList.remove("main-header--nav-is-opened");
  burger.setAttribute("aria-expanded", "false");

  toggleFocusability(navWrapper, false);

  document.removeEventListener("keydown", onKeydown);
  document.removeEventListener("click", onClickOutside);
};

const openMenu = () => {
  mainHeader.classList.add("main-header--nav-is-opened");
  burger.setAttribute("aria-expanded", "true");

  toggleFocusability(navWrapper, true);

  const firstFocusable = navWrapper.querySelector(FOCUSABLE_SELECTOR);
  firstFocusable?.focus({ preventScroll: true });

  document.addEventListener("keydown", onKeydown);
  document.addEventListener("click", onClickOutside);
};

const onKeydown = (evt) => {
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
  if (evt.target.closest(".main-header__nav-link")) {
    closeMenu();
  }
};

const initBurgerMenu = () => {
  if (!burger || !navWrapper) return;

  toggleFocusability(navWrapper, false);

  burger.setAttribute("aria-expanded", "false");

  burger.addEventListener("click", onBurgerClick);
  navList.addEventListener("click", onNavClick);
};

export { initBurgerMenu };
