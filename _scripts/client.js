
$(document).ready(function() {
  console.log('Hello from doc ready!')

  var stickyOffset = $('#main-nav').offset().top;

  $(window).scroll(function(){
    let $navbar = $('#main-nav'),
        scroll = $(window).scrollTop();
  
    if (scroll >= stickyOffset) $navbar.addClass('sticky');
    else $navbar.removeClass('sticky');
  });
  
  




})




