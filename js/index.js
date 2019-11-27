$(document).ready(function(){
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
    if ($(".ad-box .swiper-slide").length>1) {
        console.log('true');
        var swiper = new Swiper('.ad-box .swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    // 開啟 dropMenu
    $('body,html').on('click', function(evt){
        if($(evt.target).attr('class') != "drop-content" && $(evt.target).attr('class') != "drop_menu_toggle") {
            $('.more-horiz').removeClass('is-open');
        }
    })
    $('body').on('click', '.drop_menu_toggle', function(){
        var dropwrap = $(this).parent('.more-horiz');
        dropwrap.toggleClass('is-open');
    })

    // 固定選單
    var stickyOffset = $("#nav-tab").offset().top;
    var stickyHeight = $("#nav-tab").outerHeight();
    $(window).scroll(function() {
        var body = $("body");
        var scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) {
          body.addClass("fixedMenu");
          body.css({"padding-top": stickyHeight + "px"});
        } else {
          body.removeClass("fixedMenu");
          body.css({"padding-top": ""});
        }
    }).trigger("scroll");
});