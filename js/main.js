$(document).ready(function () {
    $('#main-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        nav:true,
        navText: [
            "<i class='mdi mdi-menu-left'></i>",
            "<i class='mdi mdi-menu-right'></i>"
        ]
    });
    $('#partners-carousel').owlCarousel({
        items: 5,
        loop:true,
        margin:10,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        nav:true,
        navText: [
            "<i class='mdi mdi-menu-left'></i>",
            "<i class='mdi mdi-menu-right'></i>"
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });
});