$(function () {
  var $headerArrow = $('.header-arrow a');

  $headerArrow.on('click', function (e) {
    e.preventDefault();
     $('.menu').stop().slideToggle();
  })

  $('.slider').slick({
     arrows: false,
      dots: true
  });
});
