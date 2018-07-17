$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
    $('nav ul li a').addClass('color');
    $('.logo').addClass('remove');
  }
  else
  {
    $('nav').removeClass('black'); 
    $('nav ul li a').removeClass('color');
    $('.logo').removeClass('remove');
  }
});