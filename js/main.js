$(document).ready(function(){

//mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });

// sub-menu 

     $('.menu li').click(function(e){
        e.preventDefault();
        $(this).find('.sub-menu').slideToggle(300);
    });  
    
// slider     
    
    $('#coin-slider').coinslider({
        width: 1230,
        height: 400,
        opacity: 1,
    });
    
});
    

    
