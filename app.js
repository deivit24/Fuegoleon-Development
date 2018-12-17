$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
    $('nav ul li a').addClass('color');
    $('.logo').addClass('remove');
  } else {
    $('nav').removeClass('black');
    $('nav ul li a').removeClass('color');
    $('.logo').removeClass('remove');
  }
});

var controller = new ScrollMagic.Controller();
var tween = TweenMax.from("#animate", 0.5, {
  autoAlpha: 0,
  scale: 0.7
});

var tween = new ScrollMagic.Scene({
    triggerElement: "a#top",
    duration: 200,
    triggerHook: "ovLeave"
  })
  .setTween(tween)

  .addTo(controller);

controller.scrollTo(function (newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

$(document).on("click", "a[href^='#']", function (e) {
  var id = $(this).attr("href");
  if ($(id).length > 0) {
    e.preventDefault();
    controller.scrollTo(id);
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }
});

// OUR PROCESS STUFF
var scrollMagicController = new ScrollMagic.Controller();
$('#our-process span.icon').hover(function () {

  $('#our-process span.icon').removeClass('active');
  $(this).addClass('active');

  var match = $(this).data('match');

  $('#our-process h4').removeClass('active');
  $('h4.' + match).addClass('active');

  return false;
});
var processTween = TweenMax.from('#our-process h2 span', 0.5, {
    y: 150,
    opacity: 0.5
  }, {
    y: 0,
    opacity: 0.1
  },
  0.1
);
var processScene = new ScrollMagic.Scene({
    triggerElement: '#our-process h2',
    duration: 700,
    offset: -100
  })
  .setTween(processTween)
  .addTo(scrollMagicController);
var processIconsTween = TweenMax.from('#our-process .step', 0.5, {
    opacity: 0.4
  }, {
    opacity: 1
  },
  0.1
);
var processIconsScene = new ScrollMagic.Scene({
    triggerElement: '#our-process h2',
    duration: 500,
    offset: -100
  })
  .setTween(processIconsTween)
  .addTo(scrollMagicController);