$(document).ready(function(){
	$(".up_img").bind("click",function(){
		var allheigth = $(this).siblings().height();
		console.log(allheigth)
		$(this).siblings().animate({top:"-="+allheigth+"px"},10000).animate({top:"+="+allheigth+"px"},500)
	});
	$(".down_img").bind("click",function(){
		var allheigth = $(this).siblings().height();
		console.log(allheigth)
		$(this).siblings().animate({top:"-="+allheigth+"px"},10000).animate({top:"+="+allheigth+"px"},500)
	});
})
