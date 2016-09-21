// fix IE11 bug with unresponsive images in Text & Media-elements
jQuery(function($) {
    function responsiveTextpicImage() {
        $('.ce-textpic').each(function() {
            var imageWidth = $(this).outerWidth();
            if (imageWidth > 0) {
                $(this).find('figure img').css('max-width', imageWidth);
            }
        });
    }

    $(document).ready(function() {
        // only run if IE11
        if ($('html.ie11').length) {
            responsiveTextpicImage();
            // set event 50 ms after window resize
            $(window).resize(function() {
                clearTimeout(this.id);
                this.id = setTimeout(responsiveTextpicImage, 50);
            });
        }
    });
});
