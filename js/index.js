$(document).ready(function(){
    var swiper = new Swiper('.kv-box .swiper-container', {});

    // ad
    // 超過一張才執行 swiper，並且顯示 pagination
    if ($(".ad-box .swiper-slide").length>1) {
        console.log('true');
        var swiper = new Swiper('.ad-box .swiper-container', {
            pagination: {
                el: '.ad-box .swiper-pagination',
            },
            paginationClickable: true,
        });
    }

    $('body,html').on('click', function(evt){
        // console.log(evt.target);
        // if($(evt.target).attr('class') != "drop-content" && $(evt.target).attr('class') != "more-horiz-ctrl") {
        //     $('.more-horiz').removeClass('is-open');
        // }
        if($(evt.target).attr('class') != "drop-content" && $(evt.target).attr('class') != "drop_menu_toggle") {
            $('.more-horiz').removeClass('is-open');
        }
    })
    $('body').on('click', '.drop_menu_toggle', function(){
        var dropwrap = $(this).parent('.more-horiz');
        dropwrap.toggleClass('is-open');
    })
});