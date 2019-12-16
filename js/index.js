var body = $('body');
var wrap = $('.wrap');
var windowWidth = 767;
$(window).on('resize', function(){
    var footer = $('.mobile-footer').outerHeight();
    wrap.css({'padding-bottom':footer + 10});
}).trigger('resize');

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

// 判斷螢幕width
var windowsize = $('body').width();
if (windowsize > 767) {
    $(window).scroll(function() {
        var stickyOffset = $('#pc-top').offset().top;
        var stickyHeight = $('#pc-top').outerHeight();
        var navtabsbox = $('.pc-top');
        var scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) {
            $('.kv-box .swiper-container').addClass('container');
            $('.pc-top-box').addClass('container');
        } else {
            $('.kv-box .swiper-container').removeClass('container');
            $('.pc-top-box').removeClass('container');
        }
    }).trigger('scroll');
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

// 開啟登入頁
$('.open-login').on('click', function(){
    body.addClass('is-open-login');
})

// 關閉登入頁
$('.login-box .close-btn').on('click', function(){
    body.removeClass('is-open-login');
})

// 關閉登入頁並開啟註冊頁
$('.login-box .go-reg-box').on('click', function(){
    body.removeClass('is-open-login');
    body.addClass('is-open-reg');
})

// 關閉註冊頁
$('.reg-box .close-btn').on('click', function(){
    body.removeClass('is-open-reg');
})

// 關閉註冊頁並開啟登入頁
$('.reg-box .go-login-box').on('click', function(){
    body.removeClass('is-open-reg');
    body.addClass('is-open-login');
})

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

// 開啟 輸入驗證碼
$('.send-veri-code').on('click', function(){
    body.removeClass('is-open-reg');
    body.addClass('is-open-verification');
})

// 關閉 輸入驗證碼
$('.verification-box .close-left').on('click', function(){
    body.removeClass('is-open-verification');
    body.addClass('is-open-reg');
})

// 開啟 密碼設定
$('.forget-password').on('click', function(){
    body.removeClass('is-open-login');
    body.addClass('is-open-password');
})
$('.forget-password-pc').on('click', function(){
    body.addClass('is-open-password');
})

// 關閉 密碼設定
$('.password-box .close-left').on('click', function(){
    body.removeClass('is-open-password');
    //body.addClass('is-open-login');
})

// 登入及註冊訊息控制
$('.msg-loginerror').on('click', function(){
    $('#msg-loginerror').removeClass();
    $('#msg-loginok').addClass('d-none');
})
$('.msg-loginok').on('click', function(){
    $('#msg-loginok').removeClass();
    $('#msg-loginerror').addClass('d-none');
})

// 開啟 選擇國家或地區
$('.open-country').on('click', function(){
    body.removeClass('is-open-reg');
    body.addClass('is-open-country');
})

/// 關閉 選擇國家或地區
$('.country-box .close-left').on('click', function(){
    body.removeClass('is-open-country');
    body.addClass('is-open-reg');
})

// footer
$('.bar-item').on('click', function() {
    $('.bar-item').removeClass('active');
    $(this).addClass('active');
})

// registeredSelectState
$('#registeredSelectState').on('click', function () {
    $('#registeredSelectState').editableSelect({ effects: 'default' });
  });


// owl-carousel JS
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:9
        }
    }
})
$('.owl-prev').hide();
$(".owl-next").click(function () {
    $('.owl-prev').show();
});

// web service JS 
$(document).on( 'scroll', function(){        
    if ($(window).scrollTop() > 100) {
    $('.scroll-top-wrapper').addClass('show');
    }
});
$("#webservice").click(function () {
    $('#qnimate').addClass('popup-box-on');
    $('#webservice').addClass('d-none');
    $('#webservice_close').removeClass();
});
$("#webservice_close").click(function () {
    $('#qnimate').removeClass('popup-box-on');
    $('#webservice_close').addClass('d-none');
    $('#webservice').removeClass();
});