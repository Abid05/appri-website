$(document).ready(function(){
   
 $('.testimonial-active').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.testimonial-img'
   });
   $('.testimonial-img').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     asNavFor: '.testimonial-active',
     dots: false,
     arrows: false,
     centerMode: true,
     focusOnSelect: true,
     centerPadding: '0px',
   });  
   $('.sponsor-active').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     centerPadding: '0px',
     autoplaySpeed: 2000,
     arrows: false,
   });
        
});