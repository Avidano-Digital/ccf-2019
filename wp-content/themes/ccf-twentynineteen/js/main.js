jQuery(document).ready(function ($) {

    ////////////////////////////////////////
    // Primary Navigation Dropdowns
    ////////////////////////////////////////

    var header_drop_downs = $('#primary-navigation-desktop ul > li');

    function sub_nav_hover_on() {
        if ($(this).find('ul.sub').length) {
            $(this).addClass('active');
            $(this).find('ul.sub').addClass('active');
        } else {
            return;
        }
    }

    function sub_nav_hover_off() {
        if ($(this).find('ul.sub').length) {
            $(this).removeClass('active');
            $(this).find('ul.sub').removeClass('active');
        } else {
            return;
        }
    }

    header_drop_downs.hoverIntent({
        over: sub_nav_hover_on,
        out: sub_nav_hover_off,
        timeout: 300
    });

    ////////////////////////////////////////
    // Magnific Popups
    ////////////////////////////////////////

    var main = $('body');

    var standardOptions = { 
      closeOnContentClick: false,
      preloader: true,
      callbacks: {
        open: function() {
          $('html').addClass('popup-active');
            main.css({'overflow-y': 'scroll'});
        },
        close: function() {
          $('html').removeClass('popup-active');
            main.css({'overflow-y': 'visible'});
        },
        ajaxContentAdded: function() { }
      },

    };

    $('a:has(span.fa-search-plus)').magnificPopup($.extend({}, standardOptions, {
  
      type: 'image',
      overflowY: 'auto',
      
      image: {
        verticalFit: true,
      },
      
      gallery:{
        enabled: true
      }
  
    }));

    ////////////////////////////////////////
    // Mutation observer - watch for RTL
    ////////////////////////////////////////

    var target = document.querySelector('html');

    var observer = new MutationObserver( function(mutations) {
        mutations.forEach( function(mutation) {
            var classes = target.getAttribute('class');
            var single_class = 'translated-rtl';
            if (classes.includes(single_class)) {
                target.setAttribute('dir', 'rtl');
            } else {
                target.setAttribute('dir', 'ltr');
            }
        });
    });

    var config = {
        attributes: true,
        attributeFilter: ['class']
    }

    observer.observe(target, config);

}); // end document ready