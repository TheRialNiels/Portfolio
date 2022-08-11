/* 
    ######################################################
    ##################  Navbar Section  ##################
    ######################################################
*/
//##################  Responsive navbar active animation  ##################
function NavbarAnimation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    console.log(tabsNewAnim);
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
}

//##################  Navbar/URL Scroll Change  ##################
const headers = document.querySelectorAll('.page-content .header');
const navLinks = document.querySelectorAll('#navbarSupportedContent ul li a');
const observer = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const id = entrada.target.id;
            const idLink = '#' + id;
            history.pushState({}, entrada.target.innetText, idLink);

            navLinks.forEach(link => {
                $('#navbarSupportedContent ul li').removeClass("active");

                const href = link.attributes.href.nodeValue;
                if (href === idLink) {
                    document.querySelector('#navbarSupportedContent ul li a[href*=' + id + ']').classList.add('active');
                    var activeWidthNewAnimHeight = $('#navbarSupportedContent ul li a[href*=' + id + ']').innerHeight();
                    var activeWidthNewAnimWidth = $('#navbarSupportedContent ul li a[href*=' + id + ']').innerWidth();
                    var itemPosNewAnimTop = $('#navbarSupportedContent ul li a[href*=' + id + ']').position();
                    var itemPosNewAnimLeft = $('#navbarSupportedContent ul li a[href*=' + id + ']').position();

                    if (idLink == "#home" || idLink == "#portfolio") {
                        $('.navbar').addClass('navbar-secondbg');
                        navLinks.forEach(linkClass => {
                            linkClass.classList.add('background');
                        });
                        $('#horis').addClass('hori-selector-background');

                        $(".hori-selector-background").css({
                            "top": itemPosNewAnimTop.top + "px",
                            "left": itemPosNewAnimLeft.left + "px",
                            "height": activeWidthNewAnimHeight + "px",
                            "width": activeWidthNewAnimWidth + "px"
                        });
                    }
                    else {
                        $('.navbar').removeClass('navbar-secondbg');
                        navLinks.forEach(linkClass => {
                            linkClass.classList.remove('background');
                        });
                        $('#horis').removeClass('hori-selector-background');

                        $(".hori-selector").css({
                            "top": itemPosNewAnimTop.top + "px",
                            "left": itemPosNewAnimLeft.left + "px",
                            "height": activeWidthNewAnimHeight + "px",
                            "width": activeWidthNewAnimWidth + "px"
                        });
                    }
                }
            })
        }
    });
}, {
    threshold: [0, 1],
    rootMargin: '0px 0px -93% 0px'
});

headers.forEach(encabezado => {
    observer.observe(encabezado);
});

//##################  Navbar Scroll Change  ##################
/* var sectionPage = document.querySelectorAll('.page-content .header');
var navLinks = document.querySelectorAll('#navbarSupportedContent ul li a');
console.log(sectionPage);

window.onscroll = () => {
    sectionPage.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        var navbar = $('#navbarSupportedContent ul li');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#navbarSupportedContent ul li a[href*=' + id + ']').classList.add('active');
                var activeWidthNewAnimHeight = $('#navbarSupportedContent ul li a[href*=' + id + ']').innerHeight();
                var activeWidthNewAnimWidth = $('#navbarSupportedContent ul li a[href*=' + id + ']').innerWidth();
                var itemPosNewAnimTop = $('#navbarSupportedContent ul li a[href*=' + id + ']').position();
                var itemPosNewAnimLeft = $('#navbarSupportedContent ul li a[href*=' + id + ']').position();
                $(".hori-selector").css({
                    "top": itemPosNewAnimTop.top + "px",
                    "left": itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }
    });
}; */

//##################  Check If Navbar Is Clicked And Do An Animation  ##################
function NavbarClick() {
    $("#navbarSupportedContent ul li").on("click", "a", function (e) {
        var btnArray = $(this)[0].className.split(" ");
        var btnClass = btnArray[0];
        var navbar = $('#navbarSupportedContent ul li');
        var navbarObject = $('#navbarSupportedContent ul li a.' + btnClass);
        navbar.removeClass("active");
        navbarObject.addClass('active');
        var activeWidthNewAnimHeight = navbarObject.innerHeight();
        var activeWidthNewAnimWidth = navbarObject.innerWidth();
        var itemPosNewAnimTop = navbarObject.position();
        var itemPosNewAnimLeft = navbarObject.position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}

/* $(document).ready(function () {
    var clickedOption = false;
    var scrolledOption = false;

    $("#navbarSupportedContent").on("click", "li", function (e) {
        clickedOption = true;
        alert("Clicked Option Activado");
    });

    window.addEventListener('scroll', function (e) {
        changeActiveClassNavbar(scrolledOption);
        if (changeActiveClassNavbar(scrolledOption) == true) {
            scrolledOption = true;
        }
    });


}); */

$(document).ready(function () {
    setTimeout(function () { NavbarClick(); });
});
$(window).on('resize', function () {
    setTimeout(function () { NavbarClick(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { NavbarClick(); });
});
$(window).on('load', function () {
    setTimeout(function () { NavbarAnimation(); });
});

//##################  ScrollTo Function  ##################
$(document).ready(function () {
    //##################  Scrolling effect for Arrow icons  ##################
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