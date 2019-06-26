$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".mobile-nav").addClass('open');
        $(".main").addClass('open');
    });
    $('.close-menu').click(function(){
        $('.mobile-nav').removeClass('open');
        $('.main').removeClass('open');
    });

    $('.has-sub').click(function(e){
        e.preventDefault();
        $('.has-sub ul').toggleClass('open');
        $('.fa-plus').toggle();
        $('.fa-minus').toggle();
    });

    $(".slider").owlCarousel({
        items: 1,
        dots: false
    });
});