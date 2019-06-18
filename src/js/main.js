$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(".mobile-nav").addClass('open');
        $(".main").addClass('open');
    });
    // $('.mobile-nav').click(function(){
    //     console.log('tewofjoiwejf');
    //     $(this).removeClass('open');
    // });
    $('.close-menu').click(function(){
        // console.log('tewofjoiwejf');
        $('.mobile-nav').removeClass('open');
        $('.main').removeClass('open');
    });

    $('.has-sub').click(function(){
        $('.has-sub ul').toggleClass('open');
        //$('.has-sub ul').animate({"height": "300px"});
        $('.fa-plus').toggle();
        $('.fa-minus').toggle();
    });
});