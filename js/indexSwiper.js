$(document).ready(function(){    
    
    /*****************  index  ********************/
    //index ad
    // $(".imgLiquidFill").imgLiquid();
    var swiper = new Swiper('.kv-box .swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
    });
    // ad
    // 超過一張才執行 swiper，並且顯示 pagination
    if ($('.ad-box .swiper-slide').length>1) {
        // console.log('true');
        var swiper = new Swiper('.ad-box .swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.3,
            spaceBetween: 10,
            breakpoints: {
                // when window width is >= 320px
                320: {
                slidesPerView: 1,
                spaceBetween: 0
                },
                // when window width is >= 480px
                480: {
                slidesPerView: 1,
                spaceBetween: 0
                },
                // when window width is >= 640px
                640: {
                slidesPerView: 1.3,
                spaceBetween: 20
                }
            },
            autoplay: {
                delay: 5000,
            },
        });
    }

    /*****************  swiper  ********************/
    // swiper JS for index
    if ($( ".index-gowhere" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.index-gowhere.swiper-container', {
            paginationClickable: true,
            slidesPerView: 4,
            spaceBetween: 5,
            freeMode: true
        });
    }
    if ($( ".index-icon" ).hasClass("swiper-container"))  {
        var swiper = new Swiper('.index-icon.swiper-container', {
            paginationClickable: true,
            slidesPerView: 7,
            breakpoints: {
            1024: {
                slidesPerView: 9
            },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: false
        });
    }

    // swiper JS for travel
    if ($( ".tablist-swiper" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.tablist-swiper.swiper-container', {
            paginationClickable: true,
            slidesPerView: 5,
            spaceBetween: 10,
            breakpoints: { 
                320: {
                slidesPerView: 4,
                spaceBetween: 10
                },
                480: { 
                slidesPerView: 5,
                spaceBetween: 15
                },
                640: {
                slidesPerView: 5,
                spaceBetween: 20
                }
            }
        });
    }
    if ($( ".travel-featuredbox" ).hasClass("swiper-container"))  {
        var swiper = new Swiper('.travel-featuredbox.swiper-container', {
            paginationClickable: true,
            slidesPerView: 1.7,
            spaceBetween: 10,
            breakpoints: { 
                768: { 
                slidesPerView: 1.8,
                spaceBetween: 15
                },
                1024: {
                slidesPerView: 2,
                spaceBetween: 20
                }
            },
            loop: true,
            observer:true,
            observeParents:true,
            preloadImages: true,
            updateOnImagesReady : true
        });
    }
    if ($( ".travel-topicbox" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.travel-topicbox.swiper-container', {
            paginationClickable: true,
            freeMode: true,
            slidesPerView: 1.5,
            spaceBetween: 10,        
            breakpoints: { 
                320: {
                slidesPerView: 1.5,
                spaceBetween: 10
                },
                480: { 
                slidesPerView: 1.5,
                spaceBetween: 15
                },
                640: {
                slidesPerView: 2.5,
                spaceBetween: 20
                }
            },
            loop: true
            //建議資料多時,關閉loop
        });
    }
    if ($( ".travel-hotbox" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.travel-hotbox.swiper-container', {
            paginationClickable: true,
            freeMode: true,
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
            640: {
                slidesPerView: 6
            },
            },
            loop: true
            //建議資料多時,關閉loop
        });
    }
    if ($( ".travel-box" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.travel-box.swiper-container', {
            slidesPerView: 5,
            slidesPerGroup: 5,
            slidesPerColumn:2,
            slidesPerColumnFill : 'row',
            // direction: 'horizontal',
            paginationClickable: true,
            spaceBetween: 0,
            loop: false        
        });
    }

    // swiper JS for shopping
    if ($( ".shoppingkv" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.shoppingkv.swiper-container', {
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
            },
        });
    }
    if ($( ".shopping-icon" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.shopping-icon.swiper-container', {
            slidesPerView: 5,
            slidesPerColumn: 1,
            spaceBetween: 2,
            pagination: {
            el: '.shopping-icon .swiper-pagination',
            clickable: true,
            },
        });
    }
    if ($( ".shopping-ad" ).hasClass("swiper-container")) {
    var swiper = new Swiper('.shopping-ad.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        },
        scrollbar: {
        el: '.shopping-ad .swiper-scrollbar',
        hide: true,
        },
    });
    }
    if ($( ".shopping-products" ).hasClass("swiper-container")) {
        var swiper = new Swiper('.shopping-products.swiper-container', {
            slidesPerView: 2.5,
            spaceBetween: 10,
            breakpoints: {
                320: {
                slidesPerView: 2.5,
                spaceBetween: 10
                },
                480: { 
                slidesPerView: 2.5,
                spaceBetween: 15
                },
                640: {
                slidesPerView: 3,
                spaceBetween: 20
                }
            },
            loop: true
        });
    }
    if ($( ".onsale-products" ).hasClass("swiper-container")) {    
        var onsaleswiper = new Swiper('.onsale-products.swiper-container', {
            observer:true,
            observeParents:true,
            slidesPerView: 2.6,
            spaceBetween: 10,
            loop: true,
            breakpoints: {
                640: {
                slidesPerView: 3,
                spaceBetween: 20
                }
            },
            //updateOnWindowResize: false,
            preloadImages: true,
            updateOnImagesReady : true,
        });
    }


    if ($( ".shopping-productsimg" ).hasClass("swiper-container")) {
    var swiper = new Swiper('.shopping-productsimg.swiper-container', {
        pagination: {
            el: '.shopping-productsimgbox .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.shopping-productsimgbox .swiper-button-next',
            prevEl: '.shopping-productsimgbox .swiper-button-prev',
        },
        });
    }

    if ($( ".enterswiper" ).hasClass("swiper-container")) {    
        var onsaleswiper = new Swiper('.enterswiper.swiper-container', {
            observer:true,
            observeParents:true,
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            loopPreventsSlide: true,
            breakpoints: {
                640: {
                slidesPerView: 1,
                spaceBetween: 30
                }
            },
            pagination: {
              el: '.swiper-pagination',
            },
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
        });
    }
})