import {
  form
} from './dom-elements.js';

const onFormChange = (evt) => {
  if (evt.target.classList.contains('input__field')) {
    const input = evt.target.closest('.input');
    console.log(input);
    evt.target.value.trim() !== '' ? input.classList.add('input--hide-label') : input.classList.remove('input--hide-label');
  }
}

form.addEventListener('change', onFormChange);
