//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
//= require underscore
//= require gmaps/google
//= require jquery-fileupload/basic
//= require cloudinary/jquery.cloudinary
//= require attachinary


$(document).ready(function() {

$("#owl-example").owlCarousel({

  //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,

  //Autoplay
    autoPlay : true,
    stopOnHover : true,
})

});


$( document ).ready( function() {

    /* strict mode */

    'use strict';

    /* global variables */

    var windowWidth = 0;
    var windowHeight = 0;

    /* actions after window load */
    $( window ).load( function() {

        /* window width */
        windowWidth = $( window ).width();

        /* window height */
        windowHeight = $( window ).height();


        /* configure service tab */
        $.martanianConfigureServiceTab();

    });

    /* actions after window resize */
    $( window ).resize( function() {

       /* window width */

        windowWidth = $( window ).width();

       /* window height */

        windowHeight = $( window ).height();

       /* resize manager */

        $.martanianResizeManager();

    });

    /* configure service tab */
    $.martanianConfigureServiceTab = function() {

        if( windowWidth > 1332 ) {

            var padding = 75;
            var height = 'math';
        }

        else if( windowWidth > 932 ) {

            var padding = 50;
            var height = 'math';
        }

        else {

            var padding = 50;
            var height = 300;
        }

        $( '.services-section' ).each( function() {

            var tab = $( this ).children( '.container' ).children( '.row' ).children( '.services-container' );
            var descriptions = tab.children( '.services-content' ).children( '.descriptions' );
            var activeService = tab.parent( '.services-content' ).parent( '.tabs' ).parent( 'li.active' ).data( 'service-key' );

            if( typeof activeService == 'undefined' || activeService === false ) {

                activeService = tab.children( '.services-content' ).children( '.tabs' ).children( 'li' ).first().data( 'service-key' );
                tab.children( '.services-content' ).children( '.tabs' ).children( 'li' ).first().addClass( 'active' );
            }

            descriptions.children( '.service-description[data-service-key="'+ activeService +'"]' ).show();
            descriptions.css({ 'height': descriptions.children( '.service-description[data-service-key="'+ activeService +'"]' ).height() });

            tab.children( '.services-images' ).children( '.service-image[data-service-key="'+ activeService +'"]' ).show();

            if( height == 'math' ) height = tab.children( '.services-content' ).height() + padding;
            tab.children( '.services-images' ).css({ 'height': height });

        });

    };

    /* change tab single service */
    $( '.services-section .tabs li' ).click( function() {

        if( !$( this ).hasClass( 'active' ) ) {

            if( windowWidth > 1332 ) {

                var space = 213;

            }

            else if( windowWidth > 932 ) {

                var space = 188;
            }

            var newServiceKey = $( this ).data( 'service-key' );
            var oldServiceKey = $( this ).siblings( '.active' ).data( 'service-key' );

            var tab = $( this ).parent().parent().parent();
            var newHeight = 0;

            var oldDescription = tab.children( '.services-content' ).children( '.descriptions' ).children( '.service-description[data-service-key="'+ oldServiceKey +'"]' );
            var newDescription = tab.children( '.services-content' ).children( '.descriptions' ).children( '.service-description[data-service-key="'+ newServiceKey +'"]' );

            $( '.services-section .tabs li' ).removeClass( 'active' );
            $( this ).addClass( 'active' );

            oldDescription.addClass( 'animated speed fadeOut' );

            tab.children( '.services-images' ).children( '.service-image[data-service-key="'+ oldServiceKey +'"]' ).fadeOut( 300 );
            tab.children( '.services-images' ).children( '.service-image[data-service-key="'+ newServiceKey +'"]' ).fadeIn( 300 );

            setTimeout( function() {

                newDescription.addClass( 'animated speed fadeIn' ).show();
                newHeight = newDescription.height();

                tab.children( '.services-content' ).children( '.descriptions' ).animate({  }, 200 );
                tab.children( '.services-images' ).animate({  }, 200 );

                setTimeout( function() {

                    oldDescription.removeClass( 'animated speed fadeOut' ).hide();
                    newDescription.removeClass( '' );

                }, 400 );

            }, 300 );
        }

    });


    $.martanianResizeManager = function() {

        /* mode */
        var mode = windowWidth > 932 && windowHeight > 670 ? 'fixed' : 'absolute';

        /* services tab */
        $( '.services-section' ).each( function() {

            if( windowWidth > 1332 ) {

                var padding = 75;
                var height = 'math';

            } else if( windowWidth > 932 ) {

                var padding = 50;
                var height = 'math';
            } else {

                var padding = 50;
                var height = 300;
            }

            var tab = $( this ).children( '.services-container' );
            var activeService = tab.children( '.services-content' ).children( '.tabs' ).children( 'li.active' ).data( 'service-key' );
            var image = tab.children( '.services-images' ).children( '.service-image[data-service-key="'+ activeService +'"]' );

            if( height == 'math' ) height = tab.children( '.services-content' ).height() + padding;
            image.css({ 'height': height });

        });

    };

    /* Logos */
    var width = $(window).width(), height = $(window).height();

    if ((width >= 767)) {

        var nav = $('.navbar');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                nav.addClass("navbar-fixed-top");
                $(".navbar-fixed-top .navbar-brand img").attr('src', 'images/weinnovate.logo.png');
            } else {
                nav.removeClass("navbar-fixed-top");
                $(".navbar .navbar-brand img").attr('src', 'images/footer-logo.png');
            }
        });

    } else {

        $(".navbar .navbar-brand img").attr('src', 'images/weinnovate.logo.png');

    }

    /* Our Works */
    $('.works').mixItUp();

    /* Testemonial Carousel */
    $('#myCarousel').carousel({
        interval: 30000
    })

    /* Recent & Popular Posts */
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
        e.target
        e.relatedTarget
    });
    $('#popular').tab('show');

    /* Team Carousel */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    /* Testemonial Carousel */
    $('.testemonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        dots: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                loop:true
            }
        }
    });


    new WOW().init();

    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

   document.onreadystatechange = function () {
      var state = document.readyState
      if (state == 'interactive') {
           document.getElementById('wrapper').style.visibility="hidden";
      } else if (state == 'complete') {
          setTimeout(function(){
             document.getElementById('interactive');
             document.getElementById('load').style.visibility="hidden";
             document.getElementById('wrapper').style.visibility="visible";
          },1000);
      }
    }


});




// SHOW

$(document).ready(function() {

  $("#owl-show").owlCarousel({


      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

});

