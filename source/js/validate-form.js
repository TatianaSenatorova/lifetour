import {
  inputPhone,
  inputEmail
} from './dom-elements.js';

import {

  errorClassInput
} from './constants.js';

const inputs = [inputPhone, inputEmail];

const onInputInvalid = (target, index) => {
  const input = target.closest('.input');
  // const errorText = input.querySelector('.input__error-text');
  // errorText.classList.add('input__error-text--show');
  input.classList.add(errorClassInput);
  // input.classList.add('input--hide-label');
  target.addEventListener('input', () => {
    input.classList.remove(errorClassInput);
    // errorText.classList.remove('input__error-text--show');
    // input.classList.add('input--hide-label');
  });
};

inputs.forEach((input, index) => {
  input.addEventListener('invalid', ({ target }) => {
    onInputInvalid(target, index);
  });
});

