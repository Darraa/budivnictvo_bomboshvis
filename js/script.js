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
  autoplayTimeout: 3000,
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




// ------------ZOOM IMAGE-----------

$('.zoom').click(function() {
  $('body').css('overflow', 'hidden');
  var imgSrc = $(this).find('img').attr('src');
  $('.image-box').fadeIn();
  $('.image-view').fadeIn();
  $('.image-box').append('<img src="'+imgSrc+'" class="enlarged-img"/>');
  });

  $('#close-btn').click(function() {
  $('.image-box').fadeOut();
  $('.image-view').fadeOut();
  $('.enlarged-img').remove();
  });

  $('.zoom').click(function() {
    $('.carousel').trigger('stop.owl.autoplay');
  });

  $('#close-btn').click(function() {
    $('body').css('overflow', 'auto');
    $('.carousel').trigger('play.owl.autoplay');
  });
