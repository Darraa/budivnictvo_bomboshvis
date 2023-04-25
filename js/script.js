// ------------MASKED PHONE-----------

$("#phone").mask('+38(099) 999-99-99');

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};


$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(5);
});



// ------------GALLERY-----------

$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});
