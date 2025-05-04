import {
  inputPhone,
  inputEmail
} from './dom-elements.js';

export const INIT_NUMBER_ADVANTAGES_SLIDES = 5;
export const DESKTOP_WIDTH = 1440;
export const DataForValidation = [
  {
    DOM_INPUT: inputPhone,
    REG_EXP: /^(?=(?:.*\d){10,})[0-9()+\-\s]+$/,
    VALID: true,
    ERROR: 'Не вводите буквы. Можно символы +, -, ( , ). Минимум 10 цифр'
  },
  {
    DOM_INPUT: inputEmail,
    REG_EXP: /^\S+@\S+\.\S+$/,
    VALID: true,
    ERROR: 'Введите email в формате ____@___.__'
  }
];

