'use strict';

const validationForms = () => {
  document.getElementsByName('neme').forEach((element) => {
    element.addEventListener('input', () => {
      element.value = element.value.replace(/[^а-яё]/i, '');
    });
  });
  document.getElementsByName('phone').forEach((element) => {
    element.addEventListener('input', () => {
      element.value = element.value.replace(/[^0-9+]/, '');
    });
  });
};

export default validationForms;