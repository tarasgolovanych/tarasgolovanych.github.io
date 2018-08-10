$(function() {

/*	$(window).resize(function() {
	 var screenWidth = $(window).width();
	 if (screenWidth > 768 ){
	 	$('.main-navigation').css('display','inline-block');
	 } else {
	 };

	});*/

	$('.navigation-button').click(function(){
			$(this).stop().toggleClass('active-button');
			$('.main-navigation').toggleClass('menu-active');
		});
	
		

	

});
