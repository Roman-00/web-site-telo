'use strict';

const validationForms = () => {
    document.getElementsByName('name').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/[^А-Яа-яЁё0-9]/i, '');
        });
    });
    document.getElementsByName('phone').forEach((element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/^\+\d{1,3}\s\d{2,3}\s\d{2,3}\s\d{4}/);
        });
    });
};

export default validationForms;