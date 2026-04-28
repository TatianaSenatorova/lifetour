import { FOCUSABLE_SELECTOR } from "../constants.js";

export const toggleFocusability = (container, isEnabled) => {
  const focusables = container.querySelectorAll(FOCUSABLE_SELECTOR);

  focusables.forEach((el) => {
    if (isEnabled) {
      el.removeAttribute("tabindex");
    } else {
      el.setAttribute("tabindex", "-1");
    }
  });
};
