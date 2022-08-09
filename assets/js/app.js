/* 
    ######################################################
    ##################  Navbar Section  ##################
    ######################################################
*/
// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
        path = 'index.html';
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass('active');
});

// Add active class on another page linked
// ==========================================
$(window).on('load', function () {
    var current = location.pathname;
    console.log(current);
    $('#navbarSupportedContent ul li a').each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(current) !== -1) {
            $this.parent().addClass('active');
            $this.parents('.menu-submenu').addClass('show-dropdown');
            $this.parents('.menu-submenu').parent().addClass('active');
        } else {
            $this.parent().removeClass('active');
        }
    })
});

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

/* 
    ######################################################
    ###################  Home Section  ###################
    ######################################################
*/
/* 
    ######################################################
    ##################  About Section  ###################
    ######################################################
*/
/* Writing */
$(function () {
    $(".typed").typed({
        strings: ["Jugar Video Juegos.", "El Ajedrez.", "El Trading.", "Programar."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
    });
});

/* 
    ######################################################
    ################  Portfolio Section  #################
    ######################################################
*/
/* 
    ######################################################
    #################  Contact Section  ##################
    ######################################################
*/
function EnviarCorreo() {
    var nombre = $('#name').val();
    var email = $('#email').val();
    var asunto = $('#subject').val();
    var mensaje = $('#message').val();

    if (nombre != "" && email != "" && asunto != "" && mensaje != "") {
        $.ajax({
            url: 'https://formsubmit.co/ajax/41aa9415c1a6a44e10be761b5f78a569',
            type: 'POST',
            dataType: 'json',
            accepts: 'application/json',
            /* data: { nombre: nombre, email: email, asunto: asunto, mensaje: mensaje }, */
            data: {

                name: nombre,
                email: email,
                subject: asunto,
                message: mensaje
            },
            async: true,
            success: function (datos) {
                if (datos.success == "true") {
                    swal({
                        title: "Exito",
                        text: "Se ha enviado el correo con exito",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "OK",
                        closeOnConfirm: true,
                        closeOnCancel: false
                    }, function (isConfirm) {
                        location.href = "";
                    });
                } else {
                    swal({
                        title: "Error",
                        text: datos.message,
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Cerrar",
                        closeOnConfirm: true,
                        closeOnCancel: false
                    });
                }
            }
        });
    } else {
        swal("Cuidado", "Aun existen campos vacios", "warning");
    }
}