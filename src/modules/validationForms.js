'use strict';

const validationForms = () => {
  const formTag = document.querySelectorAll('form');

  formTag.forEach(form => {
		form.addEventListener('input', event => {
			const target = event.target;

			if (target.name === 'phone') {
				target.value = target.value.replace(/^[0-9+]{20}$/, '');
			}

			if (target.name === 'name' || target.name === 'user_message') {
				target.value = target.value.replace(/[^а-я0-9 ]/gi, '');
			}
		});
	});
};

export default validationForms;