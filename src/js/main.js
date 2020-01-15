$(document).ready(function(){
    $(".hamburger-icon").click(function(){
        $(".menu, .menu-overlay, .hamburger-icon").addClass('open');
    });
    $(".portfolio-item").hover(function(){
            $(this).find(".overlay").show();
        }, function(){
            $(this).find(".overlay").hide();
    });

});