$(function(){
	$(".pos1").mouseover(function(){  
		                $(this).prev("a").addClass("confous2");   
		});
		$(".pos1").mouseout(function(){  
		                $(this).prev("a").removeClass("confous2");   
		});
	$(".menu li").each(function(index){
			$(this).click(function(){
				$(".menu li.tabFocus1").removeClass("tabFocus1");
				$(this).addClass("tabFocus1");
				$(".content li:eq("+ index +")").show().siblings().hide();
		  	});

		 });
})