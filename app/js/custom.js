$(function(){
    /*Menu*/
    var pull        = $('#pull');
    menu        = $('nav ul');
    menuHeight  = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    /*Up to top button*/
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    /*Close menu button*/
    $("#close_btn").click(function(){
        $( "#st-container" ).removeClass( "st-menu-open" )
    });

    /*smooth-scroll*/
    $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
});