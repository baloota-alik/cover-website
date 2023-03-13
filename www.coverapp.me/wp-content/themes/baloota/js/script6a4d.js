jQuery(document).ready(function ($) {
  $(".top-line").sticky({
    topSpacing:0
  });

  $('select').niceSelect();

  $('.scroll').click(function () {
    var win = $(window).height();
    $('body,html').animate({
      scrollTop: win
    }, 800);
    return false;
  });


  if(window.innerWidth > 768){
    $('.articles .content-width .item p, .articles-bottom .wrap-articles .item p, .blog-block .content-width .item p, .blog-block .content-width .top-item .wrap p').dotdotdot({
      height: 48
    });
  }

  if(window.innerWidth < 769){
    $('.articles .content-width .item p, .articles-bottom .wrap-articles .item p, .blog-block .content-width .item p, .blog-block .content-width .top-item .wrap p').dotdotdot({
      height: 100
    });
  }

  $(".feedback-slider").owlCarousel({
    items: 2,
    nav: false,
    dots: true,
    smartSpeed: 1400,
    margin:30,
    loop:true,
    center:true,
    responsiveClass:true,
    responsive:{
      0:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 0
      },
      568:{
        items: 1,
        nav: true,
        dots: true,
        stagePadding: 0
      },
      1025:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 50
      },
      1280:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 240
      },
      1400:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 300
      },
      1500:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 350
      },
      1600:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 400
      },
      1700:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 450
      },
      1800:{
        items: 1,
        nav: false,
        dots: true,
        stagePadding: 500
      }
    }
  });

  $('.icon-menu').click(function (event){
    $(".menu-responsive").toggleClass('active');
    $(this).toggleClass('active');
    $('.sticky-wrapper').toggleClass('active');
  });

  $('.menu-responsive').click(function (event){
    $(".menu-responsive").removeClass('active');
    $('.icon-menu').removeClass('active');
    $('.sticky-wrapper').removeClass('active');
  });

  $('.menu-responsive .wrap-panel').click(function(e){
    e.stopPropagation();
  });

  $(window).on('load', function () {
    if($("section").is(".number-wrap")){
      var textPos = $('.number-wrap').offset().top;

      $(window).scroll(function() {

        var topOfWindow = $(window).scrollTop();

        if($('.number-wrap .wrap').hasClass('stop')){
          return;
        }

        if (textPos < topOfWindow + 500) {
          $('.number-wrap .item-1 p.number span').animateNumber({
            number: 40
          },2000);
          $('.number-wrap .item-2 p.number span').animateNumber({
            number: 300
          },2100);
          $('.number-wrap .item-3 p.number span').animateNumber({
            number: 16
          },3000);
          $('.number-wrap .item-4 p.number span').animateNumber({
            number: 700
          },4000);
          $('.number-wrap .wrap').addClass('stop');
        }
      });
    }

  });

  var width = $(window).width();
  $(window).resize(function(){
    if($(this).width() != width){
      window.location.reload();
    }
  });

  $(window).load(function() {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  });

  $('.top-form input').change(function(){
    myInput = $(this);
    tmpval = $(this).val();
    if(tmpval == '') {
      $(myInput).siblings('.top-form label').removeClass('text');
    } else {
      $(myInput).siblings('.top-form label').addClass('text');
    }
  });
  $('.top-form input').focus(function (e) {
    $('.top-form label').addClass('focus')
  });
  $('.top-form input').blur(function (e) {
    $('.top-form label').removeClass('focus')
  });
});

