$(document).ready(function(){
    $(".burger").click(()=>{
        $(".sidedrawer").addClass("sidedrawer--visible");
    })
    $(".sidedrawer").click(()=>{
        $(".sidedrawer").removeClass("sidedrawer--visible")
    })
    $("li a").click(event => {
        event.preventDefault();
        const link = event.target.getAttribute('href')
        $('html, body').animate({
            scrollTop: $(link).offset().top
        }, 2100);
    })

    $(window).scroll( function(){
        $('.pricing-box, .infobox__group--details').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_element ){
                $(this).css({ transform: 'translateY(0px)'},1000);
            }
        });
    });
    
})