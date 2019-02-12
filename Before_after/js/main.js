$(document).ready(function() {
  
  /* BEFORE AFTER SLIDER */

  /*INITIALIZE BEFOREAFTER BOX */
  $.fn.beforeAfter = function(options) {
    return this.each( function() {
      var options = {default_offset_pct: 0.5};
      var sliderPct = options.default_offset_pct;
      var container = $(this);
      
      var beforeImg = container.find("div:first");
      var afterImg = container.find("div:last");
      container.append("<div class='before-after-handle'></div>");
      var slider = container.find(".before-after-handle");
      slider.append("<span class='before-after-left-arrow'></span>");
      slider.append("<span class='before-after-right-arrow'></span>");

      beforeImg.addClass("button-before");
      afterImg.addClass("button-after");


      var calcOffset = function(widthPct) {
        var w = beforeImg.width();
        var h = beforeImg.height();
        return {
          w: w+"px",
          h: h+"px",
          cw: (widthPct*w)+"px"
        };
      };

      var adjustContainer = function(offset) {
        beforeImg.css("clip", "rect(0,"+offset.cw+","+offset.h+",0)");
        //container.css("height", offset.h);
      };

      var adjustSlider = function(pct) {
        var offset = calcOffset(pct);
        //slider.css("height", offset.h);
        var sliderWidth =  slider.width();
        var leftOffset = parseFloat(offset.cw) - sliderWidth / 2;
        slider.css("left", leftOffset);
        adjustContainer(offset);
      }

      $(window).on("resize.beforeAfter", function(e) {
        if(container.hasClass('current') && sliderPct !== 0.5){
          adjustSlider(sliderPct);
        } else {
          sliderPct = 0.5;
          adjustSlider(0.5);
        }
        
      });

      var offsetX = 0;
      var imgWidth = 0;
      
      container.on("movestart", function(e) {
        if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
          e.preventDefault();
        }
        container.addClass("active");
        offsetX = container.offset().left;
        imgWidth = beforeImg.width();          
      });

      container.on("moveend", function(e) {
        container.removeClass("active");
      });

      container.on("move", function(e) {
        if (container.hasClass("active")) {
          sliderPct = (e.pageX-offsetX)/imgWidth;
          if (sliderPct < 0.03 || sliderPct > 0.97) {
            e.preventDefault();
            return false;
          }
          adjustSlider(sliderPct);
        }
      });

      container.find(".inner-image").on("mousedown", function(e) {
        event.preventDefault();
      });

      $(window).trigger("resize.beforeAfter");
    });
  };


  $('.before-after-box').beforeAfter();




 /* INITIALIZE BEFORE AFTER SLIDER */
  $('.before-after-slider').each(function() {
    var th = $(this);
    
     /* Set NAV */
    var preItems = th.find('.nav-item').clone();
    th.find('.nav-item:first-of-type').addClass('current');
    th.find('.before-after-nav-wrap').prepend(preItems);

    var navWrapCont = th.find('.before-after-nav-wrap');
    var contWidth = th.find('.before-after-nav').width();

    function setNawigationWidth(col){
      contWidth = th.find('.before-after-nav').width();
      var itemWidth = contWidth/col;
      th.find('.nav-item').width(itemWidth);
      var itemLength = th.find('.nav-item').length;
      navWrapCont.width(itemWidth * itemLength);
      navWrapCont.css('left', - itemWidth * th.find('.before-after-box').length + itemWidth); /* LENGTH OF BEFORE AFTER BLOCKS */   
    }

    $(window).resize(function() {
      setNawigationWidth(3);
    });
    setNawigationWidth(3);

     /* Add NAV button functional */

    $('.nav-left').click(function() { 
      var navCont = $(this).closest('.before-after-slider');
      var navWrap = navCont.find('.before-after-nav-wrap');
      if(!navCont.hasClass('lock')){
        navCont.addClass('lock');
        var pos =  parseFloat(navWrap.css('left'));
        navWrap.animate({'left': pos + navWrap.find('.nav-item:last-of-type').width()},300,function() {
          var lastItem = navWrap.find('.nav-item:last-of-type');
          navWrap.prepend(lastItem);
          navWrap.animate({'left': pos }, 0);
          navCont.removeClass('lock');
        });
      }
    });

    $('.nav-right').click(function() {
        var navCont = $(this).closest('.before-after-slider');
        var navWrap = navCont.find('.before-after-nav-wrap');
        if(!navCont.hasClass('lock')){
          navCont.addClass('lock');
          var pos =  parseFloat(navWrap.css('left'));
          navWrap.animate({'left': pos - navWrap.find('.nav-item:last-of-type').width()},300,function() {
            var firstItem = navWrap.find('.nav-item:first-of-type');
            navWrap.append(firstItem);
            navWrap.animate({'left': pos }, 0);
            navCont.removeClass('lock');
          });
        }
    });


    var el = this.getElementsByClassName("before-after-nav")[0];
    var hammer = new Hammer(el);
    hammer.on("swipeleft", function(e) {
       var curEl = e.target;
       var curSlider = curEl.closest('.before-after-slider');
       $((curSlider)).find('.nav-right').click();
    });
    hammer.on("swiperight", function(e) {
      var curEl = e.target;
       var curSlider = curEl.closest('.before-after-slider');
       $((curSlider)).find('.nav-left').click();
    });
    
  });


  /* BBEFORE AFTER NAVIGATION */
  /* ITEM CLICK */
  $(document).on('click','.nav-item',function() {  

     var th = $(this);
     var sliderCont = th.closest('.before-after-slider');

     var property = th.find('.property p').clone().css({
       'opacity': 0
     });
     var location = th.find('.location .loc-wrap').clone().css({
       'opacity': 0
     });
     var descr =  th.find('.main-descr div').clone().css({
        'opacity': 0
     });


    var index = +th.attr('data-index')-1; 
    var slides = th.closest('.before-after-slider').find('.before-after-box');
    var activeSlide = th.closest('.before-after-slider').find('.before-after-box.current');
    var nextSlide = slides.eq(index);

    var currentNavIndex = sliderCont.find('.before-after-box').length ;
    var navWrap = sliderCont.find('.before-after-nav-wrap');
    var pos = parseFloat(navWrap.css('left'));

      if(!sliderCont.hasClass('lock')){
          if(index !== activeSlide.index()){
            
            sliderCont.addClass('lock');

             /*FIRST CHANGE NAV MENU */
            sliderCont.find('.nav-item').removeClass('current');
            th.addClass('current');

          if(th.index() < currentNavIndex){
            navWrap.animate({'left': pos + navWrap.find('.nav-item:last-of-type').width()},300,function() {
              var lastItem = navWrap.find('.nav-item:last-of-type');
              navWrap.prepend(lastItem);
              navWrap.animate({'left': pos }, 0);
              sliderCont.find('.nav-item:first-of-type').addClass('current');
            });
          } else if(th.index() > currentNavIndex){
              navWrap.animate({'left': pos - navWrap.find('.nav-item:last-of-type').width()},300,function() {
              var firstItem = navWrap.find('.nav-item:first-of-type');
              navWrap.append(firstItem);
              navWrap.animate({'left': pos }, 0);
            });
          };


           /*CHANGE BEFORE AFTER BOX*/
           $(window).trigger("resize.beforeAfter"); 
          sliderCont.find('.before-after-descr .property p, .before-after-descr .location .loc-wrap, .before-after-main-descr div').animate({
              'opacity': 0
            },200, function() {
              sliderCont.find('.before-after-descr .property p, .before-after-descr .location .loc-wrap, .before-after-main-descr div').remove();
              sliderCont.find('.before-after-descr .property').prepend(property);
              sliderCont.find('.before-after-descr .location').prepend(location);
              sliderCont.find('.before-after-main-descr').prepend(descr);
              sliderCont.find('.before-after-descr .property p,.before-after-descr .location .loc-wrap,.before-after-main-descr div').animate({opacity: 1},300);
          });

          nextSlide.css({'left':'-0%'}).animate({opacity:1,left:'0%'},300);

          activeSlide.css({'left':'initial'}).animate({
            'opacity': 0,
            'right': '-80%'
          },400, function() {
            nextSlide.addClass('current').css('z-index','100');
            activeSlide.removeClass('current').css({'z-index':'0','right': '0'});
            sliderCont.removeClass('lock');

                         
          });
        }
      }
    });



});