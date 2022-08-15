jQuery(function ($) {
  var $window = $(window);
  var $buttonTop = $('.button-top');

  $buttonTop.on('click', function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 400);
  });

  $window.on('scroll', function () {
    if ($window.scrollTop() > 100) { // 100 is our threshold in pixels
      $buttonTop.addClass('button-top-visible');
    } else {
      $buttonTop.removeClass('button-top-visible');
    }
  });
});

(function ($) {
	"use strict";

	
	
    //document ready function
    jQuery(document).ready(function($){

		 $("#portfoliox-menu").portfolioxAccessibleDropDown();

        }); // end document ready



    	    $.fn.portfolioxAccessibleDropDown = function () {
			    var el = $(this);

			    /* Make dropdown menus keyboard accessible */

			    $("a", el).focus(function() {
			        $(this).parents("li").addClass("hover");
			    }).blur(function() {
			        $(this).parents("li").removeClass("hover");
			    });
			}

}(jQuery));	

