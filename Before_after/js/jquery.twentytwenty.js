
  

  $.fn.beforeAfter = function(options) {
    var options = $.extend({default_offset_pct: 0.5}, options);
    return this.each(function() {

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
        adjustSlider(sliderPct);
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

