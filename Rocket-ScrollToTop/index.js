/* B站：@VincentTV */
/* Share with you */
/* 主页：https://space.bilibili.com/402141442 */
/* 本视频：https://www.bilibili.com/video/av49252072 */
$(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() < 100) {
      $('.rocket').slideUp(500);
    }else {
      $('.rocket').slideDown(500);
    }
  });

  $('.rocket').on('click', function() {
    $(this).animate({bottom: '100%'}, 1000);
    $('html,body').animate({scrollTop: '0px'}, 1000);
    setTimeout(function(){
      $('.rocket').removeAttr('style');
    }, 1200)
  });
});