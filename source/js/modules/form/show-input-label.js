import { form } from "../../dom-elements.js";

const onFormChange = (evt) => {
  const input = evt.target.closest(".input");
  if (evt.target.value.trim() !== "") {
    input.classList.add("input--hide-label");
  } else {
    input.classList.remove("input--hide-label");
  }
};

const initInputLabel = () => {
  if (!form) return;

  form.addEventListener("input", onFormChange);
};

export { initInputLabel };
