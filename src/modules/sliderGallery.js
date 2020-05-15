const sliderGallery = () => {
  const gallerySlider = document.querySelector('.gallery-slider'),
  slides = gallerySlider.querySelectorAll('.slide'),
  btn = document.querySelectorAll('.gallery-btn'),
  dots = document.querySelectorAll('.dot');

  
  slides.forEach( (slide, index) => {
      if (index == 0) {
          slide.style.display = 'block';
      } else if (index !== 0) {
         slide.style.display = 'none';
      }
  });

  const prevSlide = (elem, index) => {
      elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index) => {
      
      elem[index].style.display = 'block';
  };

  /*const prevDot =(elem, index, strClass) => {
      elem[index].classList.remove(strClass);
  };
  
  const nextDot =(elem, index, strClass) => {
      elem[index].classList.add(strClass);
  };*/

  let currentSlide = 0,
  interval = 0;
  const autoPlay = () => {
      prevSlide(slides,currentSlide);
      currentSlide++;
      if ( currentSlide >= slides.length ){
          currentSlide = 0;
      } 
      nextSlide(slides,currentSlide);
  };

  const startSlide = ( time = 2500 ) => {
      interval = setInterval (autoPlay , time);
  };

  const stopSlide = () => {
      clearInterval(interval);
  };

  gallerySlider.addEventListener('click', (event) => {
      let target = event.target;
      event.preventDefault();

      if(!target.matches('.slider-arrow, .dot')){
          return;
      }

      prevSlide(slides,currentSlide);

      if (target.matches('#services-right')){
          currentSlide++;
      } if (target.matches('#services-left')){
          currentSlide--;
      } else if (target.matches('.dot')){
          dots.forEach((elem, index) => {
              if ( elem === target){
                  currentSlide = index;
              }
          });
      }
      if (currentSlide >= slides.length){
          currentSlide = 0;
      } if (currentSlide < 0){
          currentSlide = slides.length -1 ;
      } 
      nextSlide(slides,currentSlide);
      //nextDot(dots,currentSlide, 'dot-active');

  });

  gallerySlider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.slider-arrow') || 
      event.target.matches('.dot')){
          stopSlide();
      }
  });

  gallerySlider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.slider-arrow') || 
      event.target.matches('.dot')){
          startSlide();
      }
  });

  startSlide(5000);
};
export default sliderGallery;