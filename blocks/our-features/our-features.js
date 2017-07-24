$(function() {
    'use strict';
    var $container = $('.our-features-slider__container'),
        $arrow = $('.our-features-graff__control'),
        $indicatorItem = $('.our-features-indicator__item'),
        i = 0, len = 4, n = 1,
        isMobile = false;

    if ($('body').width() <= 640) {
        isMobile = true;
    }

    if (isMobile) {
        $indicatorItem.each(function(indx, li) {
            $(li).on("click", function() {
                setIndex(n * indx, 630)
            })
        });

        $arrow.on("click", function(e) {
            var isLeft = $(this).hasClass("our-features-graff__control-right");
            i += isLeft ? n : -n;
            i > len - n && (i = len - n);
            i < 0 &&
            (i = 0);
            setIndex(i, 630)
        });
    }

    if (!isMobile) {
        $indicatorItem.each(function(indx, li) {
            $(li).on("click", function() {
                setIndex(n * indx, 1229)
            })
        });

        $arrow.on("click", function(e) {
            var isLeft = $(this).hasClass("system-graff__control-right");
            i += isLeft ? n : -n;
            i > len - n && (i = len - n);
            i < 0 &&
            (i = 0);
            setIndex(i, 1229)
        });
    }

    function setIndex(i, size) {
        $indicatorItem.removeClass("our-features-indicator__item_active")
            .eq(i / n).addClass("our-features-indicator__item_active");
        var left = -i * size + "px";
        $container.stop().animate({left: left}, 300)
    }

});