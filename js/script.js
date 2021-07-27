$(function(){

  

  // $('.header__burger').on('click', function(){
  //   $('.header__menu-list').slideToggle();
  // });

  $('.slider__inner').slick({  
   asNavFor: '.thumbs',      
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',
     responsive: [
    {
      breakpoint: 445,
      settings: {      
      arrows:false,
      }
    },  
    
  ]
    
  });

  $('.thumbs').slick({  
  asNavFor: '.slider__inner',
  slidesToShow: 6,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 968,
      settings: {
      slidesToShow: 4,
      }
    },
    {
      breakpoint: 945,
      settings: {
      slidesToShow: 5,
      }
    },
    {
      breakpoint: 720,
      settings: {
      slidesToShow: 4,
      }
    },
    {
      breakpoint: 602,
      settings: {
      slidesToShow: 3,
      }
    },
    {
      breakpoint: 445,
      settings: {
      slidesToShow: 4,
      arrows:false,
      }
    },
  ]
  });
  $('.header__burger').on('click', function(){
    $('.header__menu-list').slideToggle();
  });
 
});