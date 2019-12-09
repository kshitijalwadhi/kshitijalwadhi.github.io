jQuery(document).ready(function () {

    "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        perturbance: 0.01,
    });

    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass('secondary');
        } else
        if ($("nav").hasClass('secondary')) {
            $("nav").removeClass('secondary');
        }
    });

    $('a').smoothScroll();

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });

});