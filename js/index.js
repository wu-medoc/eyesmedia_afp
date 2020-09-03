

$(document).ready(function(){    
    
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
            autoplay: {
                delay: 5000,
            },
        });
    }

    // 開啟 dropMenu
    // $('body').on('click', function(evt){
    //     if($(evt.target).attr('class') != 'drop-content' && $(evt.target).attr('class') != 'drop_menu_toggle') {
    //         $('.more-horiz').removeClass('is-open');
    //     }
    // })
    // $('body').on('click', '.drop_menu_toggle', function(){
    //     var dropwrap = $(this).parent('.more-horiz');
    //     dropwrap.toggleClass('is-open');
    // })

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

    
    $('.btn-vcode').on('click', function(){
        var id=$('#vcode').val();
        $(".vcode-val").text(id);    
        if(id.indexOf("@") >= 0 ) { 
            $(".vcode-mail").text("貼心小提醒：有時驗證信可能會被放到垃圾郵件喔！");
        }     
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
    
    // overlay-choice open close control
    $('.open-overlay-choice').on("click", function () {
        $('.overlay-choice').parent().append("<a onclick='location.replace(\""+curPath+"\");' class='w-100 h-100 masklayer'><div class='modal-backdrop container'></div></a>");
        $('.overlay-choice').toggle();
    });
    $('.close-overlay-choice').on("click", function () {
        $('.overlay-choice').toggle();
        $('.masklayer').remove();
    });

    // black mask modal massage use
    $('.masklayer').on("click", function () {
        $('body').append("<a onclick='location.replace(\""+curPath+"\");' class='w-100 h-100 masklayer'><div class='modal-backdrop container'></div></a>");
    });
    $('.masklayer-close').on("click", function () {
        $('.masklayer').remove();
    });

    //gotop 
    // $('.gotop').on('click', function(){  
    //     $('div').animate({
    //     scrollTop:0
    //     },1000);
    // }); 

   
});

var curPath=window.document.location.pathname;
window.onload = function(){  

    //footer bar active
    var strPath=window.document.location.pathname.replace("/eyesmedia_afp","");
    var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1).replace("/",""); 
    $('.bar-item').removeClass('active');   
    (postPath=="")?
        $('.Findex').addClass('active'):
        $('.F'+postPath).addClass('active');

    //#messageModal message control
    $('.msg-open').on('click', function(){  
        var msgval = $(this).val();
        $('#messageModal .modal-body>div').hide();
        $('#'+msgval).show();
        if($(this).attr('data-title').length > 1){
            $('.dataTit').text($(this).attr('data-title'));
        }
    });

    //member, explore footer pc hide
    var strPath1=window.document.location.pathname; 
    if (strPath1.toLowerCase().indexOf("member")>0){
        $('footer.for-pc').hide();
    }; 
    if (strPath1.toLowerCase().indexOf("explore")>0){
        $('footer.for-pc').hide();
    }; 

    //footer pc position controll 
    if($('body').height() < $(window).height())   
        $('footer.for-pc').css('position','absolute');
    // function getRootPath(){ 
    //     var strFullPath=window.document.location.href; 
    //     var strPath=window.document.location.pathname; 
    //     var pos=strFullPath.indexOf(strPath); 
    //     var prePath=strFullPath.substring(0,pos); 
    //     var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1); 
    //     return(strPath) 
    // } 
    // var pathfoot = ["member","explore"];
    // console.log(getRootPath().toLowerCase().indexOf("member"));
    // $.each(pathfoot, function( key, value ) {
    //     if (getRootPath().toLowerCase().indexOf(value)>0){
    //         $('footer.for-pc').hide();
    //     }; 
    // });
};

//#messageModal message 
function msgpara(){
    $('#messageModal').modal('show');
    $('#messageModal .modal-body>div').hide();
    $('#msgpara').show();
}
function msgpara2(){
    $('#messageModal').modal('show');
    $('#messageModal .modal-body>div').hide();
    $('#msgpara2').show();
}
// div switch
function div_switch() {
    $('.div-switch.d-block').removeClass('d-block').addClass('d-none1');
    $('.div-switch.d-none').removeClass('d-none').addClass('d-block');    
    $('.div-switch.d-none1').removeClass('d-none1').addClass('d-none');
};
// function msg_sub(e) {
//     $(e).siblings('div').hide();
// }

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
// 同頁DIV動畫
// multilayer animateCss
var tLayer = [];
var i=1;
function callLayer(nextLayer) {
    if (tLayer.length === 0) { 
        $('.multilayer').animateCss('slideInRight', '+d-block container faster');
    }
    if (tLayer[tLayer.length - 1] !== nextLayer) { tLayer.push(nextLayer); }
    $(nextLayer).animateCss('slideInRight', '+d-block container faster');    
    $(nextLayer).css("z-index",i++);
};
function backLayer() {
    var lastlayer = tLayer.pop();
	$(lastlayer).animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
    if (tLayer.length === 0) {
        $('.multilayer').animateCss('slideOutRight', '-d-block container faster').removeAttr('style');        
        tLayer.length=0; $('.modal-backdrop').remove();
    }
    tLayer = jQuery.grep(tLayer, function(value) {
        return value !== lastlayer;
    });    
};

//sortlayer use animateCss
var sLayer = [];
function callsortLayer(nextLayer) {
    if (sLayer.length === 0) { 
        $('.sortlayer').animateCss('slideInRight', '+d-block container faster');
        $('body').append("<a onclick='location.replace(\""+curPath+"\");' class='w-100 h-100 masklayer'><div class='modal-backdrop container'></div></a>");
    }
	if (sLayer[sLayer.length - 1] !== nextLayer) { sLayer.push(nextLayer); }
    //(($('.wrap').height()) < ($(nextLayer).height())) ? ($('.sortlayer').css('position','absolute')):($('.sortlayer').css('position','fixed').css('overflow-y','auto'));
    $(nextLayer).animateCss('slideInRight', '+d-block container faster');
};
function backsortLayer() {
	$(sLayer.pop()).animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
    if (sLayer.length === 0) {
        $('.sortlayer').animateCss('slideOutRight', '-d-block container faster').removeAttr('style');
        $('.masklayer').remove();
        sLayer.length=0;
    }
};
//uplayer use animateCss
var tLayerUp = [];
function callLayerUp(nextLayerUp) {
    if (tLayerUp.length === 0) {         
        $('.uplayer').animateCss('slideInUp', '+d-block container faster');
        $('body').append("<a onclick='location.replace(\""+curPath+"\");' class='w-100 h-100 masklayer'><div class='modal-backdrop container'></div></a>");
     }
	if (tLayerUp[tLayerUp.length - 1] !== nextLayerUp) { tLayerUp.push(nextLayerUp); }
    //(($('.wrap').height()) < ($(nextLayerUp).height())) ? ($('.uplayer').css('position','absolute')):($('.uplayer').css('position','fixed').css('overflow-y','auto'));
	$(nextLayerUp).animateCss('slideInUp', '+d-block container faster');
};
function backLayerUp() {
	$(tLayerUp.pop()).animateCss('slideOutDown', '-d-block container faster').removeAttr('style');
    if (tLayerUp.length === 0) { 
        $('.uplayer').animateCss('slideOutDown', '-d-block container faster').removeAttr('style');
        $('.masklayer').remove();
        tLayerUp.length=0;
    }
};


//this onelayer use animateCss
var oneLayer = [];
function callLayerOne() {
var nextLayerOne = '.wrap';
    oneLayer.push(nextLayerOne);
    $(nextLayerOne).animateCss('slideInRight', '+container faster');
};
function backLayerOne() {
    $(oneLayer.pop()).animateCss('slideOutRight', '-container faster');
    //$('.wrap').fadeOut(200,function(){ 
        (history.length<=2) ? window.location.href='../index.html' : history.back(); 
    //});
    oneLayer.length=0;
};

// 換頁動畫
function animRouter(e) {
    $('body').animate({'margin-left' : '100%', 'width' : 'toggle'},function(){ 
        window.location = e;
    });
};
$('.header-secondary, .headerbox').parents().find('.wrap').addClass("slideInRight animated");
$('.animated').css('animation-fill-mode','inherit');

$('.fixed-bottom').addClass('slideInRight animated faster');


//copy url
function copyUrl(){
    var url = window.document.location.href;
    var temp = $('<input id="copyinput">'); // 建立input物件      
    $('body').prepend(temp); // 將input物件增加到body
    temp.val(url).select(); // 將連結加到input物件value    
    temp.focus();  
    document.execCommand('copy'); // 複製
    temp.remove(); // 移除input物件
};

