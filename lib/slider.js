$(function(){
	$("#contant").fadeIn(3000);
	var win=$(".win");
	var divs=$(".box .bg1,.box .bg2");
	var num1=0; 
	var num2=0;
	$(".leftB").click(function(){
		$("#contant").fadeIn(3000);
		$("#contant1").hide();
		$(this).css("display","none");
		$(".rightB").css("display","block");
		divs.finish();
		var temp=num1;
		num1--;
		if(num1==-1){
			num1=4;
		}
		divs.eq(num1).css("left","100%").animate({left:0});
		divs.eq(temp).animate({"left":"-100%"});
	});
	$(".rightB").click(function(){
		$("#contant1").fadeIn(3000);
		$("#contant").hide();
		$(this).css("display","none");
		$(".leftB").css("display","block");
		divs.finish();
		var temp=num1;
		num1++;
		if(num1==5){
			num1=0;
		}
		divs.eq(num1).css("left","-100%").animate({left:0});
		divs.eq(temp).animate({"left":"100%"});
	})
})