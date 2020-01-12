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

  $('.navbar-nav .nav-link').click(function() {
    const blockID = $(this).attr('href');
    document.querySelector ('' + blockID).scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });

    return false;
  });
  
  $('.details-icon li a').click(function() {
    let id = $(this).attr('data-content-id');

    $('.details-content .item').removeClass('active');

    $('#'+id).addClass('active');

    return false;
  });

$('.graphic-icon li a').click(function() {
  let id = $(this).attr('data-content-id');

  $('.disign-item .wr-design').removeClass('active');

  $('#'+id).addClass('active');

  return false;
});