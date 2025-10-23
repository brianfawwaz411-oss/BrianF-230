document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

       
        let headerOffset = 0;
        const header = document.querySelector('#header-style-1');
        if (header) {
            headerOffset = header.offsetHeight;
        }
        
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


(function($) {

    if (typeof $ === 'undefined') {
        console.error("jQuery not loaded. Sticky header will not work.");
        return;
    }

    "use strict";
    var $header = $('#header-style-1');
    var $navbar = $header.find('.navbar');


    if (typeof $header.affix === 'function') {
        
      
        $header.affix({
            offset: {
                top: $header.offset().top 
            }
        });

 
        $header.on('affix.bs.affix', function () {
            $navbar.addClass('affix-effect');
        });


        $header.on('affix-top.bs.affix', function () {
            $navbar.removeClass('affix-effect');
        });

    } else {
        console.error("Bootstrap's 'affix' function not found. Sticky header might not work correctly.");
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) { 
                $header.addClass('affix');
                $navbar.addClass('affix-effect');
            } else {
                $header.removeClass('affix');
                $navbar.removeClass('affix-effect');
            }
        });
    }

})(jQuery);