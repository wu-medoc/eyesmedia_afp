var body = $('body');
var wrap = $('.wrap');
$(window).on('resize', function(){
    var footer = $('.mobile-footer').outerHeight();
    wrap.css({'padding-bottom':footer + 10});
    console.log(footer);
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

// 固定選單
var stickyOffset = $('#nav-tab').offset().top;
var stickyHeight = $('#nav-tab').outerHeight();
var navtabsbox = $('.nav-tabs-box');
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= stickyOffset) {
        body.addClass('fixedMenu');
        navtabsbox.css({'height': stickyHeight + 'px'});
    } else {
        body.removeClass('fixedMenu');
        navtabsbox.css({'height': 'auto'});
    }
}).trigger('scroll');

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

// 關閉 密碼設定
$('.password-box .close-left').on('click', function(){
    body.removeClass('is-open-password');
    body.addClass('is-open-login');
})

// footer
$('.bar-item').on('click', function() {
    $('.bar-item').removeClass('active');
    $(this).addClass('active');
});
