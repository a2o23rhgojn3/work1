$('.slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
})
$('.horizontal-scroll').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 15000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 959,
        settings: {
            slidesToShow: 1,
        }
    },
]
});