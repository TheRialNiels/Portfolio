$(document).ready(function () {

    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });


    // Scrolling effect for Arrow icons
    $("#scrollIcon").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#about"), 500);
    });
    $(".navbar-brand").click(function (e) {
        e.preventDefault();
        $.scrollTo(0, 500);
    });
    $("#scrollProjects").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#portfolio"), 500);
    });
    $("#scrollPortfolio").click(function (e) {
        e.preventDefault();
        $.scrollTo($("#portfolio"), 500);
    });

});
