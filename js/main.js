$('.slade-test').slick({
    infinite: true,
    arrows: false,
    dots: true,
    dotsClass: 'dots-style'
});
$('.slade-news').slick({
    verticalSwiping: true,
    vertical: true,
    infinite: true,
    rows: 1,
    arrows: false,
    dots: true,
    dotsClass: 'dotsnews-style'
  });
  $(function () {
    $('#carouselExampleFade').carousel({
      keyboard: true,
      pause: 'hover',
      ride: 'carousel',
      wrap: true,
    });
  });