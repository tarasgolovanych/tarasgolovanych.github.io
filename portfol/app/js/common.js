



$(document).ready(function() {
	$(".top_menu").hide();
	


	var controller = new ScrollMagic.Controller();

 	new ScrollMagic.Scene({
			triggerElement: '.fotorama__wrap',
			triggerHook: 0,
			duration: '100%'	
		})
		.setPin('.fotorama__wrap',{pushFollowers:false}) // pins the element for the the scene's duration
		.addTo(controller); // assign the scene to the controller
	
	$(".hamburger").click(function() {
		$(this).toggleClass("is-active");
	});

    
    

	$(".hamburger").click(function() {
		$top_menu = $('.top_menu');
		if( $top_menu.is(':visible') ){
			$top_menu.fadeOut(500);
			$('.top_menu a').removeClass('animated bounceInUp');
			
		} else {
			$top_menu.fadeIn(500);
			
			$('.top_menu a').addClass('animated bounceInUp');
		};

		
	});


	$('.top_menu a').click(function() {
		$('.top_menu').fadeOut(500);
		$(".hamburger").removeClass("is-active");
	});	


$(window).scroll(function() {
	if( $(window).scrollTop() >=300 ){
		$('.logo_container').removeClass('fadeInDown').addClass('fadeOutLeft');
	} else{
		$('.logo_container').removeClass('fadeOutLeft').addClass('fadeInDown');
	}
});
	

	(function($) {                                   // waipoints plagin
 $.fn.animated = function(inEffect, outEffect) { 
  var jQueryObject = $(this); 

  jQueryObject.css("opacity", "0").addClass("animated"); 


  jQueryObject.waypoint(function(dir) { 
   if (dir === "down") { 
    jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
   } else { 
    jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
   }; 
  }, { 
   offset: "80%" 
  }); 

  jQueryObject.waypoint(function(dir) { 
   if (dir === "down") { 
    jQueryObject.removeClass(inEffect).addClass(outEffect).css("opacity", "1"); 
   } else { 
    jQueryObject.removeClass(outEffect).addClass(inEffect).css("opacity", "1"); 
   }; 
  }, { 
   offset: -$(window).height() 
  }); 
 }; 
})(jQuery);



$('.sectionName').each(function() {
	$(this).animated('fadeInDown','fadeOutUp');
});

$('.animationLeft').each(function() {
	$(this).animated('fadeInLeft','fadeOutLeft');
});

$('.animationRight').each(function() {
	$(this).animated('fadeInRight','fadeOutRight');
});

$('.animationCenter').animated('flipInX','flipOutX');

$('.popup').magnificPopup({type:'image'});
$('.popup-link').magnificPopup({
  type:'inline',
  midClick: true
});


var activeList = $('.myJobs li:first');   // scripts for jobs menu animation

$('<div class="active"></div>').css({
      width: $('.myJobs li:first').width() + 40,
      left: $('.myJobs li:first').position().left ,
      height: $('.myJobs li:first').height() + 20
    }).appendTo('.myJobs ul');

$('.myJobs li').click(function() {
	activeList = $(this);
	$('.active').animate(
		{
			width : activeList.width() + 40 ,
			left : activeList.position().left ,
			top : activeList.position().top
		}
		);
});
$(window).resize(function() {

	$('.active').css(
		{
			width : activeList.width() + 40 ,
			left : activeList.position().left ,
			top : activeList.position().top
		}
		);
});
$(window).resize();



var mixer = mixitup('.portfolio_table');



$('#phoneNumber').mask("+38 (099) 999 99 99");

$(".top_menu a").mPageScroll2id();



});

$(window).on('load', function() { 

  $('.cssload-loader').fadeOut('slow');
  $('.preloader').delay(750).fadeOut('slow'); 

});

	
