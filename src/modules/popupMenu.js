'use strict';

const popupMenu = () => {

	const topMenu = document.querySelector('.top-menu'),
    btnTopMenu = topMenu.querySelector('img'),
    popupMenu = document.querySelector('.popup-menu');

    document.body.addEventListener('click', event => {
      const target = event.target;

      if(target && target.closest('.menu-button')) {
        popupMenu.style.display = 'flex';
      } else if(target && (target.tagName === 'A' || !target.classList.contains('close-menu-btn>img'))) {
        popupMenu.style.display = 'none';
      }
    });
};


export default popupMenu;