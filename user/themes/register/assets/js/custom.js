/*Custom JS*/
(function($){
    $(function(){


        // Revolution Slider
        if($.fn.revolution){
            $('.tp-banner-container .tp-banner').revolution({
                startwidth:1366,
                startheight:350,
                fullWidth:"on",
                forceFullWidth:"on"
            });
        };

        // Font Resizer
        if($.fn.makeitchangefs){
            $('body').makeitchangefs({defSize: 14, upperLimit: 16, lowerLimit: 12});
        };

        // Contrast Change
        $('#contrast-normal').on('click', function(e){
            $('body').removeClass('chage');
            e.preventDefault();
        });
        $('#contrast-high').on('click', function(e){
            $('body').addClass('chage');
            e.preventDefault();
        });

        //owl carousel
        if($.fn.owlCarousel){
            $("#owl-demo").owlCarousel({
     		  navigation : true, // Show next and prev buttons
    	      slideSpeed : 300,
    	      paginationSpeed : 400,
    	      singleItem:true,
    	      autoPlay:true,
    	      stopOnHover:true,
    	      navigation: false
    	 
    	      // "singleItem:true" is a shortcut for:
    	      // items : 1, 
    	      // itemsDesktop : false,
    	      // itemsDesktopSmall : false,
    	      // itemsTablet: false,
    	      // itemsMobile : false
    	 	});
        };

        if($.fn.owlCarousel){
            $(".owl-gallery .custom").owlCarousel({
                items: 2,
                pagination: false,
              slideSpeed : 300,
              paginationSpeed : 400,
              autoPlay:true,
              stopOnHover:true,
              navigation: false
            });
        };

	 	//scroll up
	 	$('.scroll').click(function() {
               if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
               && location.hostname == this.hostname) {
                 var $target = $(this.hash);
                 $target = $target.length && $target
                 || $('[name=' + this.hash.slice(1) +']');
                 if ($target.length) {
                   var targetOffset = $target.offset().top;
                   $('html,body')
                   .animate({scrollTop: targetOffset }, 1000);
                  return false;
        	    }
            }
        });

        if($.fn.fancybox){
            $('.fancybox').fancybox();
        }

	 	// on scroll show up arrow
	 	$(window).scroll(function(){

        var scrl=$(window).scrollTop();

        if(scrl > 300){
        $('.scollUp').fadeIn();
        }
        else{
        $('.scollUp').fadeOut();
        }
    });

    $('.list-archive > li:first-child > ul').addClass('in');

    });
})(jQuery);