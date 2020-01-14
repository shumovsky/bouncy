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

function progressBar(time){
  let start = 0;
  let progressElement = document.getElementById('user-progress');
  let intervalID=setInterval(function(){
if(start>100) {
  clearInterval(intervalID);
  userProgressCallBack();
}
else {
progressElement.value = start;
}
start++;
}, time);
}

function userProgressCallBack(){
  document.querySelector('.staff span').style.display = 'block';
}
progressBar(50);