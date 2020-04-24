
/*****************  index  ********************/
//index ad
$(".imgLiquidFill").imgLiquid();
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
    });
}

// 開啟 dropMenu
$('body').on('click', function(evt){
    if($(evt.target).attr('class') != 'drop-content' && $(evt.target).attr('class') != 'drop_menu_toggle') {
        $('.more-horiz').removeClass('is-open');
    }
})
$('body').on('click', '.drop_menu_toggle', function(){
    var dropwrap = $(this).parent('.more-horiz');
    dropwrap.toggleClass('is-open');
})

//header taipei
if ($('.for-sub').length>0) {
    if ($('body').width() > 767) {
        $('.for-sub .top-item.climate').show();
        $('.for-sub .top-item.input-box').show();
    }else{
        $('.for-sub .top-item.climate').hide();
        $('.for-sub .top-item.input-box').hide();
        $('.for-sub .top-item.more-horiz.has-info').addClass('ml-auto');
    }
}

// 側欄 - 關閉編輯
$('.setting .close-btn').on('click', function(){
    $('.multilayer>.setting').removeClass('edit-mode')
})
$('.title-item.edit-btn').on('click', function(){
    $(this).closest('.multilayer>.setting').addClass('edit-mode');
})
$('.setting .edit-title-cancel').on('click', function(){
    $(this).closest('.multilayer>.setting').removeClass('edit-mode');
})

// footer menu-bar
$('.bar-item').on('click', function() {
    $('.bar-item').removeClass('active');
    $(this).addClass('active');
})

// web service JS 
$(document).on( 'scroll', function(){        
    if ($(window).scrollTop() > 100) {
    $('.scroll-top-wrapper').addClass('show');
    }
});
$("#webservice").on('click', function(){
    $('#qnimate').addClass('popup-box-on');
    $('#webservice').addClass('d-none');
    $('#webservice_close').removeClass();
});
$("#webservice_close").on('click', function(){
    $('#qnimate').removeClass('popup-box-on');
    $('#webservice_close').addClass('d-none');
    $('#webservice').removeClass();
});

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
            320: {
            slidesPerView: 1.7,
            spaceBetween: 10
            },
            480: { 
            slidesPerView: 1.8,
            spaceBetween: 15
            },
            640: {
            slidesPerView: 2,
            spaceBetween: 20
            }
        },
        loop: true
        //建議資料多時,關閉loop
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
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
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

$(document).ready(function(){
    // bear service
    // var windowHight = $(window).height();
    // var bearhight = windowHight-70;
    // $('.bearservice-lg').css('height',bearhight);

    // registeredSelectState for phone select
    // $('.registeredSelectState-btn').on('click', function () {
    //     $('#registeredSelectState').editableSelect({ effects: 'default' });
    // });
    
    $('.btn-vcode').on('click', function(){
        var id=$('#vcode').val();
        $(".vcode-val").text(id);    
        if(id.indexOf("@") >= 0 ) { 
            $(".vcode-mail").text("貼心小提醒：有時驗證信可能會被放到垃圾郵件喔！");
        }     
    });
    //#messageModal message control
    $('.msg-loginerror').on('click', function(){  
        $('#messageModal .modal-body>div').hide();
        $('#msg-loginerror').show();    
    });
    $('.msg-loginok').on('click', function(){; 
        $('#messageModal .modal-body>div').hide();
        $('#msg-loginok').show();         
    });
    $('.msg-psw').on('click', function(){    
        $('#messageModal .modal-body>div').hide();
        $('#msg-psw').show();     
    });
    $('.msg-open').on('click', function(){  
        var msgval = $(this).val();
        $('#messageModal .modal-body>div').hide();
        $('#'+msgval).show();
    });

    // password visiblity
    $(".toggle-password").on('click', function(e) {
        const target = $('.toggle-password').index(e.currentTarget);
        $('.toggle-password').eq(target).find('i.visibility').toggleClass('d-inline-block');
        $('.toggle-password').eq(target).find('i.visibility-off').toggleClass('d-none');
        if ($('.toggle-password').eq(target).siblings('input').attr('type') === 'password') {
            $('.toggle-password').eq(target).siblings('input').attr('type', 'text');
          } else {
            $('.toggle-password').eq(target).siblings('input').attr('type', 'password');
          }
    });
    //gotop 
    // $('.gotop').on('click', function(){  
    //     $('div').animate({
    //     scrollTop:0
    //     },1000);
    // }); 
    
    //footer control hide pathname
    // function getRootPath(){ 
    //     var strFullPath=window.document.location.href; 
    //     var strPath=window.document.location.pathname; 
    //     var pos=strFullPath.indexOf(strPath); 
    //     var prePath=strFullPath.substring(0,pos); 
    //     var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1); 
    //     return(strPath) 
    // } 
    // var pathfoot = ["member","explore"];
    // $.each(pathfoot, function( key, value ) {
    //     if (getRootPath().toLowerCase().indexOf(value)>0){
    //         $('footer.for-pc').hide();
    //     }; 
    // });


    //footer.pc 
    // if(($('.wrap').height()+70) < ($(window).height())){
    //     $('footer.for-pc').css('position','fixed');
    //     $('.wrap').css('padding-bottom','150px');
    // }else{
    //     $('footer.for-pc').css('position','relative');
    //     $('.wrap').css('padding-bottom','auto');
    // }
});



// div switch
function div_switch() {
    $('.div-switch.d-block').removeClass('d-block').addClass('d-none1');
    $('.div-switch.d-none').removeClass('d-none').addClass('d-block');    
    $('.div-switch.d-none1').removeClass('d-none1').addClass('d-none');
};
// function msg_sub(e) {
//     $(e).siblings('div').hide();
// }

//memberclause & memberprivate
// window.onload = function(){   
//     $('.memberclause').on('click', function(){  
//         openMask();
//         $('.memberclause-box').slideToggle();   
//     });    
//     $('.memberprivate').on('click', function(){  
//         openMask();
//         $('.memberprivate-box').slideToggle();
//     });   
//     $('.memberclause-close').on('click', function(){  
//         openMask('hide');
//         $('.memberclause-box').slideToggle();
//     });    
//     $('.memberprivate-close').on('click', function(){  
//         openMask('hide');    
//         $('.memberprivate-box').slideToggle();
//     });
// };
// function openMask(e) {
//     $('#open-mask').addClass("modal-backdrop fade show");
//     if(e="hide"){
//         $('#open-mask').removeClass();
//     };
// };
        
// overlay-choice open close control
$('.open-overlay-choice').on("click", function () {
    $('.overlay-choice').toggle();
    $('body').append("<div class='modal-backdrop container'></div>");
});
$('.close-overlay-choice').on("click", function () {
    $('.overlay-choice').toggle();
    $('.modal-backdrop').remove();
});

// black mask modal massage use
$('.masklayer').on("click", function () {
    $('body').append("<div class='modal-backdrop container'></div>");
});
$('.masklayer-close').on("click", function () {
    $('.modal-backdrop').remove();
});

// cookie access
function getCookie(cname) {
    var ss = document.cookie;
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
            return c.substring(name.length,c.length);
    }
    return "";
};

/*****************  animateCss  ********************/
// multilayer animateCss
var tLayer = [];
function callLayer(nextLayer) {
    if (tLayer.length === 0) { 
        $('.multilayer').animateCss('slideInRight', '+d-block container faster');
    }
    if (tLayer[tLayer.length - 1] !== nextLayer) { tLayer.push(nextLayer); }
    //(($('.wrap').height()) < ($(nextLayer).height())) ? ($('.multilayer').css('position','absolute')):($('.multilayer').css('position','fixed').css('overflow-y','auto'));
    $(nextLayer).animateCss('slideInRight', '+d-block container faster');
};
function backLayer() {
	$(tLayer.pop()).animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
    if (tLayer.length === 0) {
        $('.multilayer').animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
        tLayer.length=0;   
    }
};
//sortlayer use animateCss
var sLayer = [];
function callsortLayer(nextLayer) {
    if (sLayer.length === 0) { 
        $('.sortlayer').animateCss('slideInRight', '+d-block container faster');
        $('body').append("<div class='modal-backdrop container'></div>");
    }
	if (sLayer[sLayer.length - 1] !== nextLayer) { sLayer.push(nextLayer); }
    //(($('.wrap').height()) < ($(nextLayer).height())) ? ($('.sortlayer').css('position','absolute')):($('.sortlayer').css('position','fixed').css('overflow-y','auto'));
    $(nextLayer).animateCss('slideInRight', '+d-block container faster');
};
function backsortLayer() {
	$(sLayer.pop()).animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
    if (sLayer.length === 0) {
        $('.sortlayer').animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
        $('.modal-backdrop').remove();
        sLayer.length=0;
    }
};
//uplayer use animateCss
var tLayerUp = [];
function callLayerUp(nextLayerUp) {
    if (tLayerUp.length === 0) {         
        $('.uplayer').animateCss('slideInUp', '+d-block container faster');
        $('body').append("<div class='modal-backdrop container'></div>");
     }
	if (tLayerUp[tLayerUp.length - 1] !== nextLayerUp) { tLayerUp.push(nextLayerUp); }
    //(($('.wrap').height()) < ($(nextLayerUp).height())) ? ($('.uplayer').css('position','absolute')):($('.uplayer').css('position','fixed').css('overflow-y','auto'));
	$(nextLayerUp).animateCss('slideInUp', '+d-block container faster');
};
function backLayerUp() {
	$(tLayerUp.pop()).animateCss('slideOutDown', '-d-block container faster').removeAttr('style');
    if (tLayerUp.length === 0) { 
        $('.uplayer').animateCss('slideOutDown', '-d-block container faster').removeAttr('style');
        tLayerUp.length=0;
        $('.modal-backdrop').remove();
    }
};

//this onelayer use animateCss
// var oneLayer = [];
// function callLayerOne() {
// var nextLayerOne = '.wrap';
//     oneLayer.push(nextLayerOne);
//     $(nextLayerOne).animateCss('slideInRight', '+container faster');
// };
// function backLayerOne() {
//     $(oneLayer.pop()).animateCss('slideOutRight', '-container faster');
//     $('.wrap').fadeOut(200,function(){ 
//         (history.length<=2) ? window.location.href='../index.html' : history.back(); 
//     });
//     oneLayer.length=0;
// };

//$('.iconpage').css('-webkit-animation-name','slideOutRight').css('animation-name','slideOutRight');