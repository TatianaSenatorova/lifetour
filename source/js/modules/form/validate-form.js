import { form, inputPhone, inputEmail, submitButton } from "../../dom-elements.js";
import { DataForValidation } from "../../constants.js";

let invalidInputsData = [];

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
};

const showError = () => {
  const inputParent = invalidInputsData[0].DOM_INPUT.closest(".input");
  inputParent.classList.add("input--error");

  invalidInputsData[0].DOM_INPUT.setCustomValidity(invalidInputsData[0].ERROR);
  invalidInputsData[0].DOM_INPUT.reportValidity();
};

const isValid = () => {
  invalidInputsData = [];

  DataForValidation.forEach((item) => {
    if (!item.REG_EXP.test(item.DOM_INPUT.value.trim())) {
      invalidInputsData.push(item);
    }
  });

  return invalidInputsData.length === 0;
};

const removeError = (target) => {
  const parent = target.closest(".input");

  if (parent?.classList.contains("input--error")) {
    parent.classList.remove("input--error");
    target.setCustomValidity("");
  }
};

const initValidateForm = () => {
  if (!form) return;

  form.addEventListener("submit", (event) => {
    blockSubmitButton();

    if (!isValid()) {
      event.preventDefault();
      showError();
    }

    blockSubmitButton(false);
  });

  DataForValidation.forEach((item) => {
    item.DOM_INPUT.addEventListener("input", (evt) => {
      removeError(evt.target);
    });
  });
};

export { initValidateForm };
