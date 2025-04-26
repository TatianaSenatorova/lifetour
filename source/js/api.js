import {
  BASE_URL,
  METHOD
} from './constants.js';
console.log(BASE_URL, METHOD);

const load = async (BASE_URL, METHOD, body = null) => {
  const response = await fetch(`${BASE_URL}`, { METHOD, body });
  return response.ok ? await response.json() : Promise.reject();
};

export const sendData = async (body) => await load(BASE_URL, METHOD, body);
