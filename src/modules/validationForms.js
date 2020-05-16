'use strict';

const validationForms = () => {
	/*const formTag = document.querySelectorAll('form');

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
	});*/
	class Validator {
		constructor({
			selector,
			pattern = {},
			method
		}) {
			this.form = document.querySelector(selector);
			this.pattern = pattern;
			this.method = method;
			this.elementsForm = [...this.form.elements].filter(item => {
				return item.tagName.toLowerCase() !== 'button' &&
					item.type !== 'button';
			});
			this.elementsButtons = [...this.form.elements].filter(item => {
				return item.tagName.toLowerCase() == 'button' ||
					item.type == 'button';
			});
			this.error = new Set();
		}

		init() {
			this.applyStyle();
			this.setPattern();
			this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
			this.form.addEventListener('submit', e => {
				this.elementsForm.forEach(elem => this.checkIt({
					target: elem
				}));
				if (this.error.size) {
					e.preventDefault();
				}
			});
		}

		isValid(elem) {
			const validatorMethod = {
				notEmpty(elem) {
					if (elem.value.trim() === '') {
						return false;
					}
					return true;
				},
				pattern(elem, pattern) {
					return pattern.test(elem.value);
				}
			};

			if (this.method) {
				const method = this.method[elem.id];

				if (method) {
					return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
				}
			} else {
				console.warn('Необходимо передать id полей ввода и метода этих полей!');
			}

			return true;
		}

		checkIt(event) {
			const target = event.target;
			if (this.isValid(target)) {
				this.showSucces(target);
				this.error.delete(target);
			} else {
				this.showError(target);
				this.error.add(target);
			}
			if (this.error.size) {
				if (!this.disabled) {
					this.elementsButtons.forEach((item) => {
						item.setAttribute('disabled', 'true');
					});
				}
			} else {
				this.elementsButtons.forEach((item) => {
					item.disabled = false;
				});
			}
		}

		showError(elem) {
			elem.classList.remove('success');
			elem.classList.add('error');
		}

		showSucces(elem) {
			elem.classList.remove('error');
			elem.classList.add('success');
		}

		applyStyle() {
			const style = document.createElement('style');
			style.textContent = `
        input.success {
          border: 2px solid green !important
        }
        input.error {
            border: 2px solid red !important
        }
        `;
			document.head.appendChild(style);
		}
		setPattern() {
			if (!this.pattern.phone) {
				this.pattern.phone = /^\+?[78]([-()]*\d){8,20}$/;
			}
			if (!this.pattern.email) {
				this.pattern.email = /^\w+@\w+\.\w{2,}$/;
			}
		}
	}

	const validBannerForm = new Validator({
		selector: '#banner-form',
		pattern: {
			name: /^[А-Яа-яЁё\s]+$/,
			phone: /^\+?[78]\d{10}$/
		},
		method: {
			'phone': [
				['notEmpty'],
				['pattern', 'phone']
			],
			'name': [
				['notEmpty'],
				['pattern', 'name']
			]
		}
	});

	const validCardOrder = new Validator({
		selector: '#card_order',
		pattern: {
			name: /^[А-Яа-яЁё\s]+$/,
			phone: /^\+?[78]\d{10}$/
		},
		method: {
			'callback_form-phone': [
				['notEmpty'],
				['pattern', 'phone']
			],
			'callback_form-name': [
				['notEmpty'],
				['pattern', 'name']
			]
		}
	});

	const validCall = new Validator({
		selector: '#footer_form',
		pattern: {
			phone: /^\+?[78]\d{10}$/
		},
		method: {
			'callback_footer_form-phone': [
				['notEmpty'],
				['pattern', 'phone']
			]
		}
	});

	const validForm1 = new Validator({
		selector: '#form1',
		pattern: {
			name: /^[А-Яа-яЁё\s]+$/,
			phone: /^\+?[78]\d{10}$/
		},
		method: {
			'callback_form1-name': [
				['notEmpty'],
				['pattern', 'name']
			],
			'callback_form1-phone': [
				['notEmpty'],
				['pattern', 'phone']
			]
		}
	});

	const validForm2 = new Validator({
		selector: '#form2',
		pattern: {
			name: /^[А-Яа-яЁё\s]+$/,
			phone: /^\+?[78]\d{10}$/
		},
		method: {
			'callback_form2-name': [
				['notEmpty'],
				['pattern', 'name']
			],
			'callback_form2-phone': [
				['notEmpty'],
				['pattern', 'phone']
			]
		}
	});

	validBannerForm.init();
	validCardOrder.init();
	validCall.init();
	validForm1.init();
	validForm2.init();
};

export default validationForms;