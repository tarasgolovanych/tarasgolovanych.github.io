$(document).ready(function() {
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 300 & $(window).width() >= 767){
			$('header').addClass('bgHeader');
		} else if ( $(window).scrollTop() < 300 & $(window).width() > 768 ){
			$('header').removeClass('bgHeader');
		}
	});


	$(window).scroll();

	var bar1 = new ProgressBar.Circle(circle1, {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 14,
				  trailWidth: 0,
				  easing: 'easeInOut',
				  duration: 1400,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 14 },
				  to: { color: '#212529', width: 14 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100) + '<span>%</span>';
				    if (value === 0) {
				      circle.setText('') ;
				    } else {
				      circle.setText(value) 
				    }

				  }
			});

			bar1.text.style.fontFamily = 'Helvetica, sans-serif';
			bar1.text.style.fontSize = '34px';

			

		var bar2 = new ProgressBar.Circle(circle2, {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 14,
				  trailWidth: 0,
				  easing: 'easeInOut',
				  duration: 1400,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 14 },
				  to: { color: '#212529', width: 14 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100) + '<span>%</span>';
				    if (value === 0) {
				      circle.setText('') ;
				    } else {
				      circle.setText(value) 
				    }

				  }
			});

			bar2.text.style.fontFamily = 'Helvetica, sans-serif';
			bar2.text.style.fontSize = '34px';

			
		var bar3 = new ProgressBar.Circle(circle3, {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 14,
				  trailWidth: 0,
				  easing: 'easeInOut',
				  duration: 1400,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 14 },
				  to: { color: '#212529', width: 14 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100) + '<span>%</span>';
				    if (value === 0) {
				      circle.setText('') ;
				    } else {
				      circle.setText(value) 
				    }

				  }
			});

			bar3.text.style.fontFamily = 'Helvetica, sans-serif';
			bar3.text.style.fontSize = '34px';

			

			var bar4 = new ProgressBar.Circle(circle4, {
				  color: '#aaa',
				  // This has to be the same size as the maximum width to
				  // prevent clipping
				  strokeWidth: 14,
				  trailWidth: 0,
				  easing: 'easeInOut',
				  duration: 1400,
				  text: {
				    autoStyleContainer: false
				  },
				  from: { color: '#aaa', width: 14 },
				  to: { color: '#212529', width: 14 },
				  // Set default step function for all animate calls
				  step: function(state, circle) {
				    circle.path.setAttribute('stroke', state.color);
				    circle.path.setAttribute('stroke-width', state.width);

				    var value = Math.round(circle.value() * 100) + '<span>%</span>';
				    if (value === 0) {
				      circle.setText('') ;
				    } else {
				      circle.setText(value) 
				    }

				  }
			});

			bar4.text.style.fontFamily = 'Helvetica, sans-serif';
			bar4.text.style.fontSize = '34px';

			

	
		$('#circle1').waypoint({
			handler: function(direction) {
				bar1.animate(0.94);
				this.destroy();
			},
				offset: '60%'
			});	

		$('#circle2').waypoint({
			handler: function(direction) {
				bar2.animate(0.95);
				this.destroy();
			},
				offset: '60%'
			});	

		$('#circle3').waypoint({
			handler: function(direction) {
				bar3.animate(0.98);
				this.destroy();
			},
				offset: '60%'
			});	

		$('#circle4').waypoint({
			handler: function(direction) {
				bar4.animate(0.99);
				this.destroy();
			},
				offset: '60%'
			});	

		var mixer = mixitup('.portfolio-container');
	
		$('.popup-link').magnificPopup({
					  type: 'image',
					   gallery:{
						    enabled:true
						  },
						 callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
					  // other options
					});


		$('.portfolio-container').on('mixEnd', function() {
			    
			if( $('.portfolio-container').children(':visible').length == $('.portfollio-item').length ) {
			   		$('.popup-link').magnificPopup({
					  type: 'image',
					   gallery:{
						    enabled:true
						  },
					callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
					  // other options
					});
			} else {

				$('.photo-work .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
				callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
				$('.illustration .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
				callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
				$('.fonts .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
						 callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
			}
		});

		$('.contest-composition img').css('opacity', '0');

		$('.contest-composition img').each(function() {
			var th = $(this);
			th.waypoint({
			handler: function(direction) {
				th.addClass('animated zoomIn').css('opacity','1');
				this.destroy();
			},
				offset: '70%'
			});
		});
		
	

		
});