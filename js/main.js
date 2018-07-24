$(document).ready(function () {
    /*Cookies.remove('popupTimer');*/

    /***** Вставляем куки для попапа ****/
    function hidePopup() {
        $(".main_popup").css({
            'display': 'none'
        });
        Cookies.set('popupTimer', 'value', {expires: (1 / 3)});
    }
    function showPopup() {
        $(".main_popup").css({
            'display': 'block'
        })
    }
    $(window).load(function() {
        var windowWidth = $(window).width();
        if(windowWidth > 1023 && ! Cookies.get('popupTimer')) {
            showPopup();
            setTimeout(hidePopup, 4000);
        }
    });

    /***** Активируем карусели ****/
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#inner_genPartners').owlCarousel({
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#inner_sponsors').owlCarousel({
        items: 4,
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#inner_partners').owlCarousel({
        items: 3,
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
    $('#inner_progCarousel').owlCarousel({
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#inner_aboutAlmaty').owlCarousel({
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
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    /***** Менюшка на главной со сдвигом вниз ****/
    $("#dropdownMenuLink").click(function () {

        if($('#dropdownMenuLink').parent().hasClass('_show')){
            $('#dropdownMenuLink').parent().removeClass('_show');
        }else{
            $('#dropdownMenuLink').parent().addClass('_show');
        }

        $('._dropdown_menu').slideToggle('fast');
        if($('._dropdown_menu').hasClass('_show')){
            $('._dropdown_menu').removeClass('_show');
        }else{
            $('._dropdown_menu').addClass('_show');
        }
    });

    $("._dropdown_item").click(function () {
        if($(this).hasClass('activated')){
            $(this).removeClass('activated');
        }else{
            $(this).addClass('activated');
        }

        $(this).next().slideToggle('fast');
        if($(this).next().hasClass('visible')){
            $(this).next().removeClass('visible');
        }else{
            $(this).next().addClass('visible');
        }
    });

});