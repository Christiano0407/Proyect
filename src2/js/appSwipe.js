var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows : true,
    },
   /* pagination: {
      el: '.swiper-pagination',
    },  */
   loop:true, 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });