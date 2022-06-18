












$(function(){
// Stekey Header 
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling >200){
        $('.navbar').addClass('navbar-scroll-color');
    }
    else{
        $('.navbar').removeClass('navbar-scroll-color');
    }
  });
});



// bg-middle slider 
$('.bg-middle-slider').slick({
  dots: false,
  autoplay:true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 400,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:false,
  // prevArrow:'<i class="fas fa-angle-double-left prevArrow"></i>',
  // nextArrow:'<i class="fas fa-angle-double-right nextArrow"></i>',

    responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: false
      }
    },
  
   
  ]


});

// bg-middle slider 




// custon slider 
$('.custom-slider-pr').slick({
  dots: false,
  autoplay:true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 400,
  slidesToShow:4,
  slidesToScroll:1,
  arrows:false,
  // prevArrow:'<i class="fas fa-angle-double-left prevArrow"></i>',
  // nextArrow:'<i class="fas fa-angle-double-right nextArrow"></i>',
  centerMode: true,
  centerPadding: '',

    responsive: [
    {
      breakpoint:576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
  
   
  ]


});

// custon slider 



// realize slider 
$('.realizerslider').slick({
  centerMode: true,
  centerPadding: '',
  slidesToShow:3,
  slidesToScroll:1,
  autoplay:true,
  arrows:false,
  responsive: [
    {
      breakpoint:576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// realize slider 

// olp slider 
var containerEl = document.querySelector('.all-olp-img');

            var mixer = mixitup(containerEl);
// olp slider 

// video part veno box 
$(document).ready(function(){
    $('.venobox').venobox(); 
});
// video part veno box 

// counter up part 
$('.counter').counterUp({
    delay:2,
    time:500,
});
// counter up part 


//recent post slider 

$('.recentpostslider').slick({
  centerMode:true,
  centerPadding: '',
  slidesToShow:3,
  slidesToScroll:1,
  autoplay:false,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-circle-right prevArrow"></i>',
  nextArrow:'<i class="fas fa-chevron-circle-left nextArrow"></i>',
  responsive: [
    {
      breakpoint:768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '',
        slidesToShow:1,
      }
    },
    {
      breakpoint:576,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '',
        slidesToShow: 1
      }
    }
  ]
});

// recent post slider 


//barbar img slider 

$('.barbarimg-slider').slick({
  centerMode:true,
  centerPadding: '',
  slidesToShow:4,
  slidesToScroll:1,
  autoplay:true,
  autoplaySpeed:1000,
  arrows:false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint:576,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '10px',
        slidesToShow:1,
      }
    }
  ]
});

// barbar img slider 