/* global Swiper*/
(function($) {
    'use strict';
    // document load event
        $(document).ready(function() {

            var $swiperContainerWrapper = $('.slider-container__wrapper');
            $swiperContainerWrapper.each(function(){
                $(this).children().wrap('<div class="swiper-slide slider-container__slide js__slider-container__slide"></div>');
            });

            var $swiperContainer = $('.js__slider-container__container');
            $swiperContainer.each(function(){
                        var time = $(this).attr('data-autoplay');
                        var loopParam = $(this).attr('data-loop');
                        var amountOfSlides = $(this).attr('data-slidesPerView');
                        var effectName = $(this).attr('data-effect');
                        var transition = $(this).attr('data-speed');
                        var width_a;
                        var width_b;
                        var width_c;
                        var width_d;
                        if( amountOfSlides >= 4){
                            width_a=1,
                            width_b=2,
                            width_c=3,
                            width_d=4
                        }else if(amountOfSlides == 2){
                                width_a=1,
                                width_b=1,
                                width_c=1,
                                width_d=2
                        }else if(amountOfSlides == 1){
                                width_a=1,
                                width_b=1,
                                width_c=1,
                                width_d=1
                        }else{
                                width_a=1,
                                width_b=2,
                                width_c=2,
                                width_d=3
                        }
                        var slider = new Swiper($(this), {
                            containerModifierClass:'js__slider-container__container',
                            wrapperClass:'js__slider-container__wrapper',
                            slideClass:'js__slider-container__slide',
                            nextButton: $(this).parent().find('.js__slider-container__btn-next'),
                            prevButton: $(this).parent().find('.js__slider-container__btn-prev'),
                            pagination: $(this).parent().find('.js__slider-container__pagination'),
                            paginationClickable: true,
                            speed: parseInt(transition),
                            loop:loopParam,
                            autoplay: time,
                            effect:effectName,
                            watchSlidesVisibility: true,
                            spaceBetween: 20,
                            preloadImages: false,
                            lazyLoading: true,
                            lazyLoadingInPrevNext: true,
                            slidesPerView: amountOfSlides,
                            breakpoints:{
                                480: {slidesPerView:width_a},
                                767: {slidesPerView:width_b},
                                992: {slidesPerView:width_c},
                                1024:{slidesPerView:width_d}
                            },
                            coverflow: {
                                rotate: 90,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows : false
                            },
                            cube: {
                                slideShadows : false,
                                shadow: false
                            },
                            fade: {
                                crossFade: true
                            },
                            flip:{
                                slideShadows : false
                            }

                            // Responsive breakpoints
                        });
                        // Makes it possible to skip between slider images if they have links, using the tab button
                        slider.container.on('focus', 'a', function(e) {
                             //Index of focused slide
                            var focusIndex = $(e.target).parents('.slider-container__slide').index();
                            //Reset scrollLeft set by browser on focus
                            slider.container.scrollLeft(0);

                         // IE fix
                         setTimeout(function() {
                             slider.container.scrollLeft(0);
                            }, 0);
                            // IE fix
                            setTimeout(function() {
                                slider.container.scrollLeft(0);
                            }, 0);

                         //Slide to focused slide
                         slider.slideTo(focusIndex);
                            //Slide to focused slide
                            slider.slideTo(focusIndex);
                        });
                   });


     });

})(jQuery);