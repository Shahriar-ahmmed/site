$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        /* if ($(".scroll-navigation li").hasClass("active")) {
         $(".scroll-navigation li").removeClass('active');
         }
         $(this).parent('li').addClass('active');*/
        console.log($($anchor.attr('href')).offset().top);
        event.preventDefault();

    });
});
$(document).ready(function(){
    $('.nav').on('click','li', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});
