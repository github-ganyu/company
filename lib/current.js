/**
 * Created by melody on 2017/1/4.
 */
$(document).ready(function () {
    $("#fr li a").bind('click',function () {
        if($(this).has(".current")){
            $(this).addClass("current").parent("li").siblings("li").find("a").removeClass("current")
        }
    })
    $("#box div").bind('click',function () {
        if($(this).has("current")){
            $(this).addClass("current").siblings("div").removeClass("current")
        }
    })
    $("#menu a").bind('click',function () {
        $("#menu a").eq($(this).index()).addClass("current").siblings().removeClass("current")
        $("#content li").hide().eq($(this).index()).show();
    })
    $("#fr-list li a").bind('click',function () {
        if($(this).has(".current")){
            $(this).addClass("current").parent("li").siblings("li").find("a").removeClass("current")
        }
    })
    $(".section .container .fr img:first-child").hover(function(){
        $(".section .content .qrcode").css({display:"block"});
    },function(){
        $(".section .content .qrcode").hide();
    });
    // $(".section .container .fr img:last-child").hover(function(){
    //     $(".section .content .qrcode1").css({display:"block"});
    // },function(){
    //     $(".section .content .qrcode1").hide();
    // });
    $(document).ready(function () {
        $(".section-a .next img").bind("click",function () {
            $(this).hide();
            $(".section-a .prev img").css({display:"block"});
            $(".tab").show();
            $(".tab1").hide();
        })
        $(".section-a .prev img").bind("click",function () {
            $(this).hide();
            $(".section-a .next img").css({display:"block"});
            $(".tab1").show();
            $(".tab").hide();
        })

    })
    $(document).ready(function () {
        $(".section-a .next img").bind("click",function () {
            $(this).hide();
            $(".section-a .prev img").css({display:"block"});
            $(".tab3").show();
            $(".tab2").hide();
        })
        $(".section-a .prev img").bind("click",function () {
            $(this).hide();
            $(".section-a .next img").css({display:"block"});
            $(".tab2").show();
            $(".tab3").hide();
        })

    })
})



