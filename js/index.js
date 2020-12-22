

$(document).ready(function(){    
    

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
    // $('.setting .close-btn').on('click', function(){
    //     $('.multilayer>.setting').removeClass('edit-mode')
    // })
    // $('.title-item.edit-btn').on('click', function(){
    //     $(this).closest('.multilayer>.setting').addClass('edit-mode');
    // })
    // $('.setting .edit-title-cancel').on('click', function(){
    //     $(this).closest('.multilayer>.setting').removeClass('edit-mode');
    // })

    
    $('.btn-vcode').on('click', function(){
        var id=$('#vcode').val();
        $(".vcode-val").text(id);    
        if(id.indexOf("@") >= 0 ) { 
            $(".vcode-mail").text("貼心小提醒：有時驗證信可能會被放到垃圾郵件喔！");
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
        if( $(this).attr('data-title') != null ){
            $('.dataTit').text($(this).attr('data-title'));
        }
        //offers
        (msgval=="msg-offers")?$(this).addClass("tempTAG"):$(this).removeClass("tempTAG");
    });
    $(document).on('click','button.step1', function(){
        $(".tempTAG").parent().prepend('<button class="btn px-2 index-outline-btn small-80 sendval" type="submit" name="type" value="step1">使用</button>');
        $(".tempTAG").remove();
    }); 

    //member, explore footer pc hide
    // var strPath1=window.document.location.pathname; 
    // if (strPath1.toLowerCase().indexOf("member")>0){
    //     $('footer.for-pc').hide();
    // }; 
    // if (strPath1.toLowerCase().indexOf("explore")>0){
    //     $('footer.for-pc').hide();
    // }; 

    //footer pc position controll 
    if($('body').height() < $(window).height())   
        $('footer.for-pc').css('position','absolute');
    function getRootPath(){ 
        var strFullPath=window.document.location.href; 
        var strPath=window.document.location.pathname; 
        var pos=strFullPath.indexOf(strPath); 
        var prePath=strFullPath.substring(0,pos); 
        var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1); 
        return(strPath) 
    } 
    var pathfoot = ["member","explore"];
    //console.log(getRootPath().toLowerCase().indexOf("member"));
    $.each(pathfoot, function( key, value ) {
        if (getRootPath().toLowerCase().indexOf(value)>0){
            $('footer.for-pc').hide();
        }; 
    });

    //退貨問題記錄輸入框位置設定
    if( document.querySelector('.service-store-footer') != null ){
        let sfot = document.querySelector('.service-store-footer');
        if($('#footer-mb').height != 0){
            sfot.style='bottom:'+ $('#footer-mb').height +'px';
        }else if(footpc!=0){
            sfot.style='bottom:'+ $('#footer-pc').height +'px';
        }else{
            sfot.style='bottom:0px'
        }
    };
    
};

//#messageModal message 
function msgpara(x,y,a){
    $('#messageModal').modal('show');
    $('#messageModal .modal-body>div').hide();
    $('#msgpara').show();
    $('#msgP1').html(x);
    $('#msgB1').html(y).removeAttr('data-dismiss','modal').removeAttr('data-label','Close');
    (a!='')? 
        $('#msgB1').attr('data-toggle','modal').attr('data-target', a): 
        $('#msgB1').removeAttr('data-toggle').removeAttr('data-target');
    $('#msgB1').attr('data-dismiss','modal').attr('data-label','Close');
    // Close需在最後
}
function msgpara2(x,y,z,a){
    $('#messageModal').modal('show');
    $('#messageModal .modal-body>div').hide();
    $('#msgpara2').show();
    $('#msgP2').html(x);
    $('#msgC1').html(z);
    $('#msgK1').html(y).removeAttr('data-dismiss','modal').removeAttr('data-label','Close');
    (a!='')? 
        $('#msgK1').attr('data-toggle','modal').attr('data-target', a): 
        $('#msgK1').removeAttr('data-toggle').removeAttr('data-target');
    $('#msgK1').attr('data-dismiss','modal').attr('data-label','Close');
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

function toggleDiv(e){    
    setTimeout(function(){$(e).toggle()},1700);
}
function hideDiv(e){    
    $(e).toggle();
    $('body').removeAttr('style');
}

function closeDown(e){
    $(e).removeAttr('style').addClass('animationMoveDownOut');
    setTimeout(function(){$('.enterbox').removeClass('d-none')},1700);
}
