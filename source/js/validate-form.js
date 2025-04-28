import {
  inputPhone,
  inputEmail
} from './dom-elements.js';

import {
  errorClassInput
} from './constants.js';

const inputs = [inputPhone, inputEmail];

const onInputInvalid = (target) => {
  const input = target.closest('.input');
  input.classList.add(errorClassInput);
  target.addEventListener('input', () => {
    input.classList.remove(errorClassInput);
  });
};

inputs.forEach((input) => {
  input.addEventListener('invalid', ({ target }) => {
    onInputInvalid(target);
  });
});


// import {
//   form,
//   inputPhone,
//   inputEmail,
//   submitButton
// } from './dom-elements.js';

// import { Errors } from './constants.js';

// import {sendData} from './api.js';

// console.log(inputPhone, inputEmail);

// const inputs = [userName, userPhone];
// const errors = [nameError, phoneError];

// const onInputInvalid = (target, index) => {
//   errors[index].style.display = 'block';
//   target.classList.add(errorClassInput);
//   target.addEventListener('input', () => {
//     target.classList.remove(errorClassInput);
//     errors[index].style.display = 'none';
//   });
// };

// inputs.forEach((input, index) => {
//   input.addEventListener('invalid', ({ target }) => {
//     onInputInvalid(target, index);
//   });
// });

// const emailRegExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})$/;

// const phoneRegExp = /^(?=(?:.*\d){10,})[0-9\(\)\+\-]+$/;
// // const emailRegExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w)$/;
// const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.[a-zA-Zа-яА-Я]{2,}$/;

// console.log(phoneRegExp, emailRegExp);

// const validatePhone = (value) => phoneRegExp.test(value);

// const validateEmail = (value) => emailRegExp.test(value);

// const isValid = (phoneValue, inputValue) => validatePhone(phoneValue) && validateEmail(inputValue);

// const blockSubmitButton = (isBlocked = true) => {
//   submitButton.disabled = isBlocked;
// };

// const changeTextButton = () => submitButton.textContent = 'Данные отправлены';

// const onFormSubmit = (evt) => {
//   evt.preventDefault();
//   console.log(inputPhone.value);
//   console.log(inputEmail.value);
//   console.log(validatePhone(inputPhone.value));
//   console.log(validateEmail(inputEmail.value));
//   if (isValid(inputPhone.value, inputEmail.value)) {
//     fetch('https://echo.htmlacademy.ru', {
//       method: "POST",
//       body: new FormData(evt.target),
//     })

//     // console.log(isValid(inputPhone.value, inputEmail.value));
//     // blockSubmitButton();
//     // sendData(new FormData(evt.target))
//     //   .then(() => {
//     //     console.log('123');
//     //     // clearForm();
//     //   })
//     //   .catch(() => changeTextButton())
//     //   .finally(() => blockSubmitButton(false));

//     console.log('ok');
//   }
// };

// // const onResetClick = () => {
// //   clearForm();
// // };

// form.addEventListener('submit', onFormSubmit);

