/*
 * Blog Javascript
 * Copied from Clean Blog v1.0.0 (http://startbootstrap.com)
 */

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight = $('.intro-header').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                console.log(bannerHeight);
                var currentTop = $(window).scrollTop();

                //if window below banner height, then add class
                if(currentTop > bannerHeight) {
                    $('.navbar-custom').addClass('is-below-header');
                } else {
                    $('.navbar-custom').removeClass('is-below-header');
                }
            });
    }

    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
