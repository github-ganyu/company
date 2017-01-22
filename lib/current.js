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
})



