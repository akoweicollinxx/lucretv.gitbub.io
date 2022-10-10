$(document).ready(function(){
    $('.navbar-toggler-open').click(function(){
        $('.navbar-collapse').addClass('navbarShow');
    });

    $('.navbar-toggler-close').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, Options = 2000);
    });
});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});