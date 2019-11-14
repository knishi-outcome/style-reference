// Double motion
var EffectH = 100;
$(window).on('scroll load', function() {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;
  $('.js-scroll').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(500).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });
});
$(function () {
    // Video aside animation with scroll
    var vid = $('.video');
    var pid = $('.post');
    // var top = vid.offset().top - parseFloat(vid.css('margin-top').replace(/auto/, 0));
    // var top = vid.scrollTop()+vid.height()+vid.height();
    var top = vid.offset().top-vid.height();
    // var top = 1090;
    $(window).on('scroll', function(event) {
    	// what the y position of the scroll is
    	var y = $(this).scrollTop();
    	// whether that's below the form
    	if (y >= top) {
    		// if so, ad the fixed class
    		if ( vid.is('.aside') ) {
    			return;
    		}
    		vid.addClass('aside');
            pid.addClass('aside-post')
    	} else {
    		// otherwise remove it
    		vid.removeClass('aside');
            pid.removeClass('aside-post')
    	}
    });
});
