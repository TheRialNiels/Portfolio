/* 
    ######################################################
    ##################  Navbar Section  ##################
    ######################################################
*/
//##################  Responsive navbar active animation  ##################
function NavbarAnimation() {
    var activeWidthNewAnimHeight = $('#navbarSupportedContent ul li a.btn-home').innerHeight();
    var activeWidthNewAnimWidth = $('#navbarSupportedContent ul li a.btn-home').innerWidth();
    var itemPosNewAnimTop = $('#navbarSupportedContent ul li a.btn-home').position();
    var itemPosNewAnimLeft = $('#navbarSupportedContent ul li a.btn-home').position();
    $('.navbar').addClass('navbar-secondbg');
    $('#navbarSupportedContent ul li a.btn-home').addClass('background');
    $('#horis').addClass('hori-selector-background');
    $(".hori-selector-background").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
}

//##################  Navbar/URL Scroll Change  ##################
/* const headers = document.querySelectorAll('.page-content .header');
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
    rootMargin: '0px 0px -100% 0px'
});

headers.forEach(encabezado => {
    observer.observe(encabezado);
}); */

//##################  Navbar Scroll Change  ##################
function NavbarScroll() {
    var sectionPage = document.querySelectorAll('.page-content .header');
    var navLinks = document.querySelectorAll('#navbarSupportedContent ul li a');
    const url = document.location.origin + document.location.pathname;
    window.onscroll = () => {
        sectionPage.forEach(section => {
            //Distancia Recorrida
            let top = window.scrollY;
            //Distancia a la que se encuentra la seccion
            let offset = section.offsetTop;
            //Altura total de la seccion
            let height = section.offsetHeight;
            //Informacion de todas las
            let id = section.getAttribute('id');
            //Informacion del navbar
            var navbar = document.querySelector('.navbar');
            var navbarHeight = navbar.offsetHeight;
            console.log('Distancia recorrida: ' + top + '\nSeccion: ' + id + ' offset: ' + offset + ' height: ' + height);

            if (top + navbarHeight >= offset && top < offset + height) {
                const idLink = '#' + id;
                navLinks.forEach(links => {
                    links.classList.remove('active');
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
                });
            }
        });
    }
}

$(document).ready(function () {
    setTimeout(function () { NavbarScroll(); });
});
$(window).on('resize', function () {
    setTimeout(function () { NavbarScroll(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { NavbarScroll(); });
});
$(window).on('load', function () {
    setTimeout(function () { NavbarAnimation(); });
});

//##################  ScrollTo Function  ##################
$(document).ready(function () {
    //##################  Scrolling effect for icons/text  ##################
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
//##################  Habilitar Tooltips  ##################
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* 
    ######################################################
    ##################  About Section  ###################
    ######################################################
*/
//##################  Script para las animaciones al bajar scroll  ##################
AOS.init({
    offset: 300,
    duration: 3000
});

//##################  Animacion de Escribir  ##################
$(function () {
    $(".typed").typed({
        strings: ["El Ajedrez.", "El Trading.", "Jugar Video Juegos.", "Programar."],
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

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

/* 
    ######################################################
    ################  Portfolio Section  #################
    ######################################################
*/
//##################  Pausar video al cerrar el modal  ##################
$(document).ready(function () {
    $('.modal').each(function () {
        $this = $(this);
        $this.on('hidden.bs.modal', function () {
            $("iframe").each(function () {
                var src = $(this).attr('src');
                $(this).attr('src', src);
            });
        })
    });
});

/* 
    ######################################################
    #################  Contact Section  ##################
    ######################################################
*/
function SendEmail() {
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

function CheckEmail() {
    if ($('#email').val().indexOf('@', 0) == -1 || $('#email').val().indexOf('.', 0) == -1) {
        swal("Alerta", 'El correo electrónico introducido no es correcto.', "warning");
        $('#email').val("");
    }
}
