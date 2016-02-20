$(document).ready(function(){

    $(window).scroll(function() {
        if ($(document).scrollTop() > 50){
            $(".navbar-fixed-top").addClass("navbar-shrink");
        }
        else {
            $(".navbar-fixed-top").removeClass("navbar-shrink");
        }
    });

});

