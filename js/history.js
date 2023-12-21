
/*------------------------------------------------------------- SWİPER JS ----------------------------------------------- */ 
const swiper = new Swiper('.history__img', {
    loop: true,
    spaceBeetwwen: true,
    grabCursor:true,
    effect: "creative",
    creativeEffect: {
        prev:{
            translate: [-100, 0, -500],
            rotate:[0, 0, 15],
            opacity: 0,
        },
        next:{
            translate:[100 , 0 ,-500],
            rotate:[0, 0, -15],
            opacity:0
        }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  
  });



