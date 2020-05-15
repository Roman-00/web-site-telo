const scrollDocument = () => {
  const topMenu = document.querySelector('.top-menu'),
  wrapper = document.querySelector('.wrapper>a');

  // wrapper показываем после 1 блока
  if ( window.scrollY == 0 ) {
      wrapper.style.display = 'none';
  }
  // фиксируем menu-button к верху стр
  document.addEventListener('scroll', () => {
      if (window.scrollY > 190 && document.documentElement.clientWidth < 768){
          topMenu.style.position = 'fixed';
      } else {
          topMenu.removeAttribute("style");
      }
      // wrapper показываем после 1 блока
      if (window.scrollY < 775){
          wrapper.style.display = 'none';
      } else {
          wrapper.style.display = 'block';
      }
  });
};
export default scrollDocument;
