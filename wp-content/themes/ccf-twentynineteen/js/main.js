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
    // Lightbox
    ////////////////////////////////////////
    
    $('[data-toggle="lightbox"]').on('click', function(event) {
        
        event.preventDefault();
        
        var data_title = $(this).data('title');

        function update_shit() {

            var target =  $('.ekko-lightbox');
            var close_button = target.find('button[data-dismiss="modal"]');
            var modal_header = target.find('.modal-header h4');

            target.removeClass('fade in');
            close_button.removeClass('close').addClass('ml-auto no-btn-style');
            close_button.html('<span class="fas fa-times fa-lg"></span>');

            if (data_title) {
                return;
            } else {
                modal_header.remove();
            }
        }
        
        $(this).ekkoLightbox({
            alwaysShowClose: true,
            onShow: function() {
                update_shit(data_title);
            } 
        });
    });

    ////////////////////////////////////////
    // Mutation observer - watch for RTL
    ////////////////////////////////////////

    var target = document.querySelector('html');

    var observer = new MutationObserver( function(mutations) {
        mutations.forEach( function() {
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
    };

    observer.observe(target, config);

}); // end document ready