$(document).ready(function(){

  $("header button").click(function(){
		$("nav").stop().slideToggle("slow", function(){
			if($("nav").css("display")=="block"){
				$("header button").text("close");
			}
			if($("nav").css("display")=="none"){
				$("header button").html("dehaze");
			}	
		});
	});

	$("nav a").click(function(){
		$("nav").stop().slideUp();
		$("header button").html("dehaze");
	});
	
});

/*$("header button").click(function(){
		$("nav").stop().slideToggle("slow", function(){
			if($("nav").css("display")=="block"){
				$("header button").text("close");
			}
			else{
				$("header button").html("dehaze");
			}	
		});
	});*/