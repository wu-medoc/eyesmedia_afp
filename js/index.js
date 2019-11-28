$(document).ready(function(){
    var body = $("body");
    var swiper = new Swiper('.kv-box .swiper-container', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
    });

    $('.nav-item').on('click', function(){
        event.preventDefault();
    })

    // ad
    // 超過一張才執行 swiper，並且顯示 pagination
    if ($(".ad-box .swiper-slide").length>1) {
        // console.log('true');
        var swiper = new Swiper('.ad-box .swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // 開啟 dropMenu
    body.on('click', function(evt){
        if($(evt.target).attr('class') != "drop-content" && $(evt.target).attr('class') != "drop_menu_toggle") {
            $('.more-horiz').removeClass('is-open');
        }
    })
    body.on('click', '.drop_menu_toggle', function(){
        var dropwrap = $(this).parent('.more-horiz');
        dropwrap.toggleClass('is-open');
    })

    // 固定選單
    var stickyOffset = $("#nav-tab").offset().top;
    var stickyHeight = $("#nav-tab").outerHeight();
    var navtabsbox = $(".nav-tabs-box");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) {
          body.addClass("fixedMenu");
          navtabsbox.css({"height": stickyHeight + "px"});
        } else {
          body.removeClass("fixedMenu");
          navtabsbox.css({"height": "auto"});
        }
    }).trigger("scroll");

    // 自訂連結更多按鈕 - 開啟側欄
    $('.more-btn').on('click', function(){
        body.addClass('is-open-aside');
    })
    // 側欄 header - 關閉側欄
    $('.aside-header .close-btn').on('click', function(){
        body.removeClass('is-open-aside');
    })
    
});