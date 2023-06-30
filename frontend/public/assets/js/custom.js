(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
  // Background Color
  $('[data-bg-color]').each(function() {
    $(this).css('background-color', $(this).data("bg-color"));
  });
  // Height
  $('[data-height]').each(function() {
    $(this).css('height', $(this).data("height"));
  });
  // Padding Bottom
  $('[data-padding-bottom]').each(function() {
    $(this).css('padding-bottom', $(this).data("padding-bottom"));
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
      canvasWrapper.addClass('active');
      $("body").addClass('fix');
  });

  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
      canvasWrapper.removeClass('active');
      $("body").removeClass('fix');
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
      appendTo: '.res-mobile-menu',
      closeOnClick: true,
      removeClasses: true,
      closedSymbol: '<i class="icon-arrows-plus"></i>',
      openedSymbol: '<i class="icon-arrows-minus"></i>'
  });



  // Swipper JS
  $(document).ready(function(){

    var serviceSlider = new Swiper('.service-slider-container', {
      slidesPerView : 3,
      speed: 1000,
      loop: true,
      spaceBetween : 30,
      autoplay: false,
      breakpoints: {
        1200:{
            slidesPerView : 3,
            spaceBetween : 84
        },

        992:{
            slidesPerView : 3,
            spaceBetween : 30
        },

        768:{
            slidesPerView : 2,
            spaceBetween : 50

        },

        576:{
            slidesPerView : 2,
            spaceBetween : 30
        },

        0:{
            slidesPerView : 1
        }
      }
    });

    var teamSlider = new Swiper('.team-slider-container', {
      slidesPerView : 3,
      speed: 1000,
      loop: true,
      spaceBetween : 30,
      autoplay: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1200:{
            slidesPerView : 3
        },

        991:{
            slidesPerView : 2
        },

        767:{
            slidesPerView : 2

        },

        560:{
            slidesPerView : 2
        },

        0:{
            slidesPerView : 1
        }
      }
    });

    var caseSlider = new Swiper('.case-slider-container', {
      slidesPerView : 2,
      speed: 1000,
      loop: true,
      spaceBetween : 30,
      autoplay: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        1200:{
            slidesPerView : 2
        },

        991:{
            slidesPerView : 2
        },

        767:{
            slidesPerView : 2

        },

        576:{
            slidesPerView : 2
        },

        0:{
            slidesPerView : 1
        }
      }
    });

    var testimonialSlider = new Swiper('.testimonial-slider-container', {
      slidesPerView : 1,
      speed: 1000,
      loop: true,
      spaceBetween : 0,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
          delay: 2500,
          disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    var gallerySlider = new Swiper('.department-gallery', {
      slidesPerView : 1,
      speed: 1000,
      loop: true,
      spaceBetween : 10,
      autoplay: {
          delay: 2500,
          disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    var brandLogoSlider = new Swiper('.brand-logo-slider-container', {
      slidesPerView : 5,
      loop: true,
      speed: 1000,
      spaceBetween : 30,
      autoplay: false,
      breakpoints: {
        1200:{
            slidesPerView : 5,
            spaceBetween : 100
        },

        992:{
            slidesPerView : 4,
            spaceBetween : 90
        },

        768:{
            slidesPerView : 3,
            spaceBetween : 110

        },

        576:{
            slidesPerView : 3,
            spaceBetween : 60
        },

        380:{
            slidesPerView : 3,
            spaceBetween : 30
        },

        0:{
            slidesPerView : 2,
            spaceBetween : 30
        }
      }
    });

  });


  // Fancybox Js
  $('.lightbox-image').fancybox();

  //Video Popup
  $('.play-video-popup').fancybox();
  

  // Scroll Top Hide Show
  $(window).on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }

  });

  jQuery(document).ready(function($) {

    // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success fade show');

            // Set the message text.
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger fade show');

            // Set the message text.
            if (data.responseText !== '') {
                formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
                formMessages.append(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });
  
  });

  // Datepicker
  $( "#datepicker" ).datepicker();

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }
  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  $(window).on('load', function() {
    AOS.init();
    stylePreloader();
  });

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  $(window).on('scroll', function() {
  });
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  $(window).on('resize', function() {
  });
  

})(window.jQuery);