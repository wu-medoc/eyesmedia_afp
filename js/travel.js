// body.width > 767 control
var windowsize = $('body').width();
if (windowsize > 767) {
    $('.travel-hot').addClass('container');
    $('.travel-topic').addClass('container');
}else{
    $('.travel-hot').removeClass('container');
    $('.travel-topic').removeClass('container');
}

// owl-carousel JS for travel
$(".travel-featured-owl.owl-carousel").owlCarousel({    
    loop:true,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$(".travel-topic-owl.owl-carousel").owlCarousel({    
    loop:true,
    nav:false,
    margin:10,
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
$(".travel-hot-owl.owl-carousel").owlCarousel({    
    loop:true,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
});
$(".travel-icon-owl.owl-carousel").owlCarousel({    
    loop:false,
    nav:false,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    }
});
$('.owl-travel.owl-carousel .owl-prev').hide();
$('.owl-travel.owl-carousel .owl-next').hide();
