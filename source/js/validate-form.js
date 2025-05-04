import {
  form,
  inputPhone,
  inputEmail,
  submitButton
} from './dom-elements.js';

import {
  DataForValidation
} from './constants.js';

let invalidInputsData = [inputPhone, inputEmail];

startValidation();

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
};

const showError = () => {
  const inputParent = invalidInputsData[0].DOM_INPUT.closest('.input');
  inputParent.classList.add('input--error');
  invalidInputsData[0].DOM_INPUT.setCustomValidity(invalidInputsData[0].ERROR);
  invalidInputsData[0].DOM_INPUT.reportValidity(invalidInputsData[0].ERROR);
};

function startValidation() {
  form.addEventListener('submit', (event) => {
    blockSubmitButton();
    if (!isValid()) {
      event.preventDefault();
      showError();
    }
    blockSubmitButton(false);
  });
}

function isValid() {
  invalidInputsData = [];
  DataForValidation.forEach((element) => {
    if (!(element.REG_EXP.test(element.DOM_INPUT.value.trim()))) {
      element.VALID = !element.VALID;
      invalidInputsData.push(element);
    }
  });
  return invalidInputsData.length === 0;
}

const removeError = (target) => {
  if (target.closest('.input').classList.contains('input--error')) {
    target.closest('.input').classList.remove('input--error');
    target.setCustomValidity(' ');
    target.reportValidity();
    target.blur();
    target.focus();
  }
};

invalidInputsData.forEach((input) => {
  input.addEventListener('input', (evt) => {
    removeError(evt.target);
  });
});
