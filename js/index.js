var body = $('body');
var wrap = $('.wrap');
var windowWidth = 570;
var windowsize = $('body').width();

$(".imgLiquidFill").imgLiquid();
var swiper = new Swiper('.kv-box .swiper-container', {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
});


$( document ).ready(function() {
    var windowHight = $(window).height();
    var bearhight = windowHight-70;
    $('.bearservice-lg').css('height',bearhight);
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
            768: {
              slidesPerView: 1.3,
              spaceBetween: 20
            }
        },
    });
}

// 開啟 dropMenu
body.on('click', function(evt){
    if($(evt.target).attr('class') != 'drop-content' && $(evt.target).attr('class') != 'drop_menu_toggle') {
        $('.more-horiz').removeClass('is-open');
    }
})
body.on('click', '.drop_menu_toggle', function(){
    var dropwrap = $(this).parent('.more-horiz');
    dropwrap.toggleClass('is-open');
})

//header taipei
if ($('.for-sub').length>0) {
    if (windowsize > 570) {
        $('.for-sub .top-item.climate').show();
        $('.for-sub .top-item.input-box').show();
    }else{
        $('.for-sub .top-item.climate').hide();
        $('.for-sub .top-item.input-box').hide();
        $('.for-sub .top-item.more-horiz.has-info').addClass('ml-auto');
    }
}
// 自訂連結更多按鈕 - 開啟側欄
$('.more-btn').on('click', function(){
    body.addClass('is-open-aside');
})
// 側欄 header - 關閉側欄
$('.aside-header .close-btn').on('click', function(){
    body.removeClass('is-open-aside');
    $('.more-link-aside').removeClass('edit-mode')
})

// aside 編輯鍵
$('.edit-btn').on('click', function(){
    $(this).closest('.more-link-aside').addClass('edit-mode');
})
$('.aside-header .edit-title-cancel').on('click', function(){
    $(this).closest('.more-link-aside').removeClass('edit-mode');
})


// vcode&msg modal control
$(function(){
    
    // registeredSelectState
    $('.registeredSelectState-btn').on('click', function () {
        $('#registeredSelectState').editableSelect({ effects: 'default' });
    });
    $('.btn-vcode').on('click', function(){
        var id=$('#vcode').val();
        $(".vcode-val").text(id);    
        if(id.indexOf("@") >= 0 ) { 
            $(".vcode-mail").text("貼心小提醒：有時驗證信可能會被放到垃圾郵件喔！");
        }     
    });
    $('.msg-loginerror').on('click', function(){
        $('#msg-loginok, #msg-psw, #msg-noselected').hide();  
        $('#msg-loginerror').show();    
    });
    $('.msg-loginok').on('click', function(){
        $('#msg-loginerror, #msg-psw, #msg-noselected').hide(); 
        $('#msg-loginok').show();         
    });
    $('.msg-psw').on('click', function(){
        $('#msg-loginok, #msg-loginerror, #msg-noselected').hide();     
        $('#msg-psw').show();     
    });
    $('.msg-noselected').on('click', function(){
        $('#msg-loginok, #msg-loginerror, #msg-psw').hide();     
        $('#msg-noselected').show();     
    });
    // 密碼
    $(".toggle-password").on('click', function() {
        $(this).parent().toggleClass("toggle-visibility");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
        input.attr("type", "text");
        } else {
        input.attr("type", "password");
        }
    });
});


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
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true
    });
}
if ($( ".travel-featuredbox" ).hasClass("swiper-container"))  {
    var swiper = new Swiper('.travel-featuredbox.swiper-container', {
        paginationClickable: true,
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
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
          1024: {
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
        direction: 'horizontal',
        paginationClickable: true,
        spaceBetween: 0,
        loop: false        
    });
}

// swiper JS for shopping
if ($( ".shopping-icon" ).hasClass("swiper-container")) {
    var swiper = new Swiper('.shopping-icon.swiper-container', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 0,
        pagination: {
          el: '.shopping-icon .swiper-pagination',
          clickable: true,
        },
    });
}
if ($( ".shopping-ad" ).hasClass("swiper-container")) {
var swiper = new Swiper('.shopping-ad.swiper-container', {
    scrollbar: {
      el: '.shopping-ad .swiper-scrollbar',
      hide: true,
    },
  });
}
if ($( ".shopping-products" ).hasClass("swiper-container")) {
var swiper = new Swiper('.shopping-products.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true
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

// open-page
$( ".open-page" ).on('click', function () {
    if ($( "#open-pagebox" ).hasClass("slideOutRight animated")) {
        $( "#open-pagebox" ).removeClass('slideOutRight animated');
        $( "#open-pagebox" ).addClass('slideInRight animated');
        $( "#open-pagebox" ).removeClass('d-block');
        $( "#open-pagebox" ).addClass('d-none');
    }
    $( "#open-pagebox" ).removeClass('d-none');
    $( "#open-pagebox" ).addClass('d-block');
    $( "#open-mask" ).addClass("modal-backdrop fade show");
    $( ".wrap" ).addClass("blur");
});
$( ".close-left" ).on('click', function () {
    $( "#open-pagebox" ).removeClass('slideInRight animated');
    $( "#open-pagebox" ).addClass('slideOutRight animated');
    $( "#open-pagebox1" ).removeClass('slideInRight animated');
    $( "#open-pagebox1" ).addClass('slideOutRight animated');
    $( "#open-mask" ).removeClass("modal-backdrop fade show");
    $( ".wrap" ).removeClass("blur");
});
if($('#open-pagebox').length>0) {
    var wrapheight = $('#products-list').innerHeight();
    var openheight = $('#open-pagebox').outerHeight();  
    var openheight1 = (wrapheight-openheight)/3.5;
    if (openheight < wrapheight) {
        $('#open-pagebox').css({'padding-bottom': openheight1});
    }  
}
// open-page1
$( ".open-page1" ).on('click', function () {
    if ($( "#open-pagebox1" ).hasClass("slideOutRight animated")) {
        $( "#open-pagebox1" ).removeClass('slideOutRight animated');
        $( "#open-pagebox1" ).addClass('slideInRight animated');
        $( "#open-pagebox1" ).removeClass('d-block');
        $( "#open-pagebox1" ).addClass('d-none');
    }
    $( "#open-pagebox1" ).removeClass('d-none');
    $( "#open-pagebox1" ).addClass('d-block');
    $( "#open-mask" ).addClass("modal-backdrop fade show");
    $( ".wrap" ).addClass("blur");
});
$( ".close-left1" ).on('click', function () {
    $( "#open-pagebox1" ).removeClass('slideInRight animated');
    $( "#open-pagebox1" ).addClass('slideOutRight animated');
});
if($('#open-pagebox1').length>0) {
    var wrapheight = $('#products-list').innerHeight();
    var openheight = $('#open-pagebox1').outerHeight();  
    var openheight1 = (wrapheight-openheight)/3.5;
    if (openheight < wrapheight) {
        $('#open-pagebox1').css({'padding-bottom': openheight1});
    }  
}
// open-uppage
$( ".open-uppage" ).on('click', function () {
    $( "#open-pageupbox" ).removeClass('d-none');
    $( "#open-pageupbox" ).addClass('d-block');
    $( "#open-mask" ).addClass("modal-backdrop fade show");
    $( ".wrap" ).addClass("blur");
});
$( ".close-up" ).on('click', function () {
    $( "#open-mask" ).removeClass("modal-backdrop fade show");
    $( ".wrap" ).removeClass("blur");    
    $( "#open-pageupbox" ).removeClass('d-block');
    $( "#open-pageupbox" ).addClass('d-none');
});

/* masonry JS for shopping*/
if($('.products-listbox .grid').length>0) {
    $('.products-listbox .grid').masonry({
        itemSelector: '.products-item',
        gutter: 10
    });
}

/* products-detail quantity min max control */
if($('.number-spinner').length>0) {    
    $(document).on('click', '.number-spinner button', function () {    
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            input = btn.closest('.number-spinner').find('input'),
            newVal = 0;
        
        $('[data-dir=dwn]').addClass('btn-outline-info').removeClass('btn-outline-secondary');
        if (btn.attr('data-dir') == 'up') {            
            if (oldValue < input.attr('max')) {
                newVal = parseInt(oldValue) + 1;
            } else {
                newVal = input.val();
                $('[data-dir=up]').addClass('btn-outline-secondary').removeClass('btn-outline-info');
            }
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
                $('[data-dir=up]').addClass('btn-outline-info').removeClass('btn-outline-secondary');
            } else {
                newVal = 1;
                $('[data-dir=dwn]').addClass('btn-outline-secondary').removeClass('btn-outline-info');
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });
}
