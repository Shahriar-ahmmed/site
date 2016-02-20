//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 50){
        $(".navbar-fixed-top").addClass("navbar-shrink");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-shrink");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
//    have to work with page scroll    $(".navbar .nav > li > a::after").toggleClass('full-width');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
