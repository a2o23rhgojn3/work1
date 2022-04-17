$(document).ready(function() {
    $(window).scroll(function() {
        $('.change-color-trigger').each(function() {
            let elemPos = $('.slider').offset().top;
            let scroll = $(window).scrollTop();
            var windowHeight = $(window).height() - 100;
            if(scroll >= windowHeight) {
                $(this).addClass('change-color');
            }
            else
            {
                $(this).removeClass('change-color');
            }
        })
        $('.change-color-trigger').each(function() {
            let elemPos = $('footer').offset().top - 300;
            let scroll = $(window).scrollTop();
            if(scroll >= elemPos) {
                $(this).addClass('opacity');
            }
            else
            {
                $(this).removeClass('opacity');
            }
        })
    })
})