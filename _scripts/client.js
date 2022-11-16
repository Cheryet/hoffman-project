
$(document).ready(function() {
  console.log('Hello from doc ready!')


  // Sticky nav bar on scroll
  var stickyOffset = $('#main-nav').offset().top;

  $(window).scroll(function(){
    let $navbar = $('#main-nav'),
    scroll = $(window).scrollTop();
  
    if (scroll >= stickyOffset) $navbar.addClass('sticky');
    else $navbar.removeClass('sticky');
  });

  const $menuIcon = $('#menu-icon')
  const $nav = $('#nav')

  const menuHandler = function () {
    $nav.slideToggle('slow')

  }


  $menuIcon.on('click', menuHandler) 


})






