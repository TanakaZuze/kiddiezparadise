// Responsive Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }

})


// smooth scrolling

const scroll = new SmoothScroll('.links a[href*="#"]', {

    // speed: 800
    easeOutQuad: 800


});


