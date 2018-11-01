$(document).ready(function(){

//mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass('burger_active'); 
    });
    
// sub-menu 1024
    
    if ( $(window).width() > 1023 ) {
        $('.menu li').mouseenter(function () { 
            $(this).find('.sub-menu').fadeIn(200).addClass('active'); 
        });

        $('.menu li').mouseleave(function () { 
            $(this).find('.sub-menu').fadeOut(200).removeClass('active'); 
        });
    };

// sub-menu 1023

    $('.menu li.menu-item-has-children>a').click(function(e){
        if($('.burger').is(':visible')){
            e.preventDefault();
            $(this).closest('li').find('.sub-menu').slideToggle(300);
        }
    });  
    
// slider     
    
    $('#coin-slider').coinslider({
        width: 1230,
        height: 400,
        opacity: 1,
    });
    
});
    

    
