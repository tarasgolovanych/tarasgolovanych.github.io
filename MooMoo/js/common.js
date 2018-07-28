$(function() {

	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	$('.skill-item').each(function() { 
		var $th = $(this);
		var skillsWaypoint = new Waypoint({  // add waypoint to each skill bar
			element: $th,                    
			handler: function(direction) { 
				var percent = $th.attr('data-percent') ;
				var animationDuration = 2500;

				var $percentWrapper = $th.find('.percent span'); // 
				var percentCount = 0;
				var intervalTime = animationDuration/percent;
				var counter = setInterval(function(){  // animate percents
					percentCount++;
					$percentWrapper.text(percentCount);
					
					if(percentCount==percent){
						clearInterval(counter);
					};
				}, intervalTime);

				$th.find('.skill-bar').animate({'width': percent + "%" },animationDuration); //animate skills bars

				skillsWaypoint.destroy();

			},
			offset: "70%"
		})

	});	

	var leftSlide = new Waypoint({  // add waypoint and animate about me
			element: $(".about-me-composition"),                    
			handler: function(direction) { 
				$(".about-me-composition").animate({
					"opacity":'1',
					'left':'0px'
				},2000
				);
				leftSlide.destroy();
			},
			offset: '70%'
	});

	var rightSlide = new Waypoint({  // add waypoint and animate about me
			element: $(".photo-wrap"),                    
			handler: function(direction) { 
				$(".photo-wrap").animate({
					"opacity":'1',
					'right':'0px'
				},2000
				);
				rightSlide.destroy();
			},
			offset: '65%'
	});

	 $(".portfolio-carousel").owlCarousel({
		nav: true,
		loop: true,
		navText : ["<i class='fas fa-arrow-left arrow'></i>","<i class='fas fa-arrow-right arrow'></i"],
		responsive : {
			// breakpoint from 0 up
			0 : {
				items : 1
			},
			// breakpoint from 480 up
			480 : {
				items : 1
			},
			// breakpoint from 768 up
			768 : {
				items : 2
			},
			// breakpoint from 768 up
			992 : {
				items : 3
			}
		}
	 });

	 //E-mail Ajax Send
		$("#main-form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", 
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});


});
