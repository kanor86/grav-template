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

        
        // Owl Showcase
        if($.fn.owlCarousel){
            $("#showcase .owl-slider").owlCarousel({
                navigation : true, // Show next and prev buttons
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem: true,
                autoPlay: true,
                stopOnHover: true,
                navigation: false
            });
        };


    }); 
})(jQuery);