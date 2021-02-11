var hoverDelayTimer,
    currentVideoIFrame;

$(function () {
    /*
    INIT PAGE
    */
    $('html').removeClass('no-js');
    $('.related-page.sitemap').remove(); // don't display the sitemap if JS is enabled

    if (hfbkConfig.getValue('enableMasonry')) {
        var $relatedPages = $('.related-pages').masonry({
            itemSelector: '.related-page',
            horizontalOrder: true,
            transitionDuration: 0,
        });
        var $storiesGrid = $('.stories').masonry({
            itemSelector: '.story',
            horizontalOrder: true,
            transitionDuration: 0,
        });
        // layout Masonry after each image loads
        $storiesGrid.imagesLoaded().progress( function() {
            $storiesGrid.masonry('layout');
        });
        // layout Masonry after each image loads
        $relatedPages.imagesLoaded().progress( function() {
            $relatedPages.masonry('layout');
        });
        // layout
        $('.story-image').imagesLoaded().progress( function() {
            $relatedPages.masonry('layout');
        });

    }

    /*
    INIT EVENT BINDINGS
    */
    initMatomoIFrame();
    initFullscreenGallery();
    initThumbnailHoverGallery();
    initItemHoverBackground();
    initAnchorScroll();
    initEventSidebarLinks();
    
    // delay flying the thumbnail items in
    window.setTimeout(function () {
        initItemFlyIn();
    }, 500);

    // add "404" url text to search field
    $(window).ready(function () {
        var search_form = $('#startpage-search-form'),
            search_field = $('.startpage-search', search_form),
            url_path = search_form.data('url-path');

        if (typeof url_path !== 'undefined') {
            url_path = url_path.replace(/[^a-zA-ZäöüÄÖÜß]/g, ' ');
            search_field.val(url_path).trigger('input');
        }
    });
});

function initMatomoIFrame () {
    var selector = '.block-matomo iframe';

    $(selector).on('load', function () {
        // update CSS inside the IFrame (works because it's on the same domain)
        $(this).contents().find('body').css({
            'font-family': 'TimesNewArial, sans-serif',
            'font-size':   '16.8px',
            'font-size':   '1.055rem',
            'line-height': '24px',
            'line-height': '1.5rem'
        });

        $(this).contents().find('strong, b').css({
            'font-family': 'TimesNewArial, sans-serif',
            'font-weight': 'normal'
        });

        // init IFrame height based on its content height
        updatMatomoIFrameHeight(selector);
    });

    // update IFrame height on window resize
    $(window).resize(function () {
        updatMatomoIFrameHeight(selector);
    });
}

// gets the current IFrame content height and applies it to the IFrame element's height
function updatMatomoIFrameHeight (selector) {
    var frameHTML = $(selector).contents().find('html');
    $(selector).css('height', frameHTML.height());
}

function updateGallery (slideshow, currentSlide) {
    var newDescriptionText = slideshow.find('.slick-current').attr('data-description'),
        fullscreenGalleryWrapper = slideshow.closest('.fullscreen-gallery-wrapper'),
        numImages = fullscreenGalleryWrapper.attr('data-num-images'),
        galleryImageDescription = $('.gallery-image-description'),
        galleryImageIndex = fullscreenGalleryWrapper.find('.gallery-image-index'),
        currentSlideNumber = parseInt(currentSlide) + 1;

    galleryImageDescription.html(newDescriptionText);
    galleryImageIndex.html(currentSlideNumber + '/' + numImages);
}

// fly in related pages boxes if they fit on the current screen
function flyInRelatedPages () {
    if (!hfbkConfig.getValue('enableItemFlyIn')) {
        return;
    }

    $('.related-page, .post, .story, .jump-navigation').each(function () {
        var winH = $(window).height(),
            itmH = $(this).offset().top - ($(window).scrollTop() + 150);

        if (itmH < winH) {
            $(this).addClass('show');
        }
    });
}

// update background image position based on its focal point
function focalPoint (image) {
    var focalX = image.attr('focal-x'),
        focalY = image.attr('focal-y'),
        imgWidth = image.attr('width'),
        imgHeight = image.attr('height'),
        percentageY = 100 * (focalY / imgHeight),
        percentageX = 100 * (focalX / imgWidth);

    $('.background').css({
        'background-position-x': percentageX + '%',
        'background-position-y': percentageY + '%'
    });
}

function initFullscreenGallery () {
    // update description text in the bottom left corner based on the current slide
    $('html').on('afterChange', 'article .fullscreen-gallery', function (event, slick, currentSlide) {
        if (!hfbkConfig.getValue('enableFullscreenGallery')) {
            return;
        }

        // reset/stop video on the slide we're coming from, if any
        if (currentVideoIFrame) {
            resetIFrame(currentVideoIFrame);
        }

        // store the new slide's iframe
        currentVideoIFrame = $('.slick-current').find('.video-iframe');

        updateGallery($(this), currentSlide);
    });

    // open the gallery and jump to this thumbnail's image
    $('html').on('click', 'article .thumbnail-open-gallery', function (e) {
        var index = $(this).attr('data-index'),
            gallery = $(this).closest('.gallery'),
            fullscreenGalleryWrapper = gallery.find('.fullscreen-gallery-wrapper'),
            fullscreenGallery = fullscreenGalleryWrapper.find('.fullscreen-gallery');

        if (!hfbkConfig.getValue('enableFullscreenGallery')) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        fullscreenGalleryWrapper.addClass('open');
        $('body').css('overflow', 'hidden');

        // init fullscreen gallery (slickjs), but only if it hasn't been initialized before
        if (!fullscreenGallery.hasClass('slick-initialized')) {
            fullscreenGallery.slick({
                'prevArrow': '<div class="gallery-button prev"></div>',
                'nextArrow': '<div class="gallery-button next"></div>',
            });
        }

        fullscreenGallery.slick('slickGoTo', index, true);
        updateGallery(fullscreenGallery, index);
    });

    $('html').on('click', 'article .gallery-image-esc', function (e) {
        var fullscreenGalleryWrapper = $(this).closest('.fullscreen-gallery-wrapper');

        if (!hfbkConfig.getValue('enableFullscreenGallery')) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        fullscreenGalleryWrapper.removeClass('open');
        $('body').css('overflow', 'visible');

        // stop current video if any
        if (currentVideoIFrame) {
            resetIFrame(currentVideoIFrame);
        }
    });

    $(document).on('keyup', function (evt) {
        var fullscreenGalleryWrapper = $('.fullscreen-gallery-wrapper');

        if (!hfbkConfig.getValue('enableFullscreenGallery')) {
            return;
        }

        if (evt.keyCode === 27) {
            if (fullscreenGalleryWrapper.hasClass('open')) {
                fullscreenGalleryWrapper.removeClass('open');
                $('body').css('overflow', 'visible');

                // stop current video if any
                if (currentVideoIFrame) {
                    resetIFrame(currentVideoIFrame);
                }
            }
        }
    });
}

function initThumbnailHoverGallery () {
    // when the mouse enters the thumbnail, activate the fullscreen image background
    // and set its image URL to full the resolution variant of the thumbnail image
    $('html').on('mouseenter', 'article .thumb', function (e) {
        var elem = $(e.target),
            src = elem.parent().attr('data-large-img-url'),
            gallery = elem.closest('.gallery'),
            preview = gallery.find('.preview');

        if (!hfbkConfig.getValue('enableThumbnailHoverGallery')) {
            return;
        }

        clearTimeout(hoverDelayTimer);

        hoverDelayTimer = setTimeout(function () {
            preview.addClass('active')
                .css({
                    'display':          'block',
                    'background-image': 'url("' + src + '")'
                });

            elem.css({
                'z-index': '52'
            });
            elem.next('i').css({
                'z-index': '52'
            });

            $('body').css('overflow', 'hidden');
        }, 200);
    });

    // while moving inside the thumbnail, update the fullscreen image background
    // to display the according part of the image (based on the mouse cursor location
    // inside the thumbnail)
    $('html').on('mousemove', 'article .thumb', function (e) {
        var elem = $(e.target),
            thumbPosition = elem.offset(),
            thumbHeight = elem.height(),
            thumbWidth = elem.width(),
            thumbRatio = thumbWidth / thumbHeight,
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            windowRatio = windowWidth / windowHeight,
            gallery = elem.closest('.gallery'),
            preview = gallery.find('.preview'),
            thumbPositionTop = 0,
            thumbPositionLeft = 0,
            percentage = 0;

        if (!hfbkConfig.getValue('enableThumbnailHoverGallery')) {
            return;
        }

        if (windowRatio > thumbRatio) {
            thumbPositionTop = (e.pageY - thumbPosition.top);
            percentage = 100 * (thumbPositionTop / thumbHeight);

            preview.css('background-position-y', percentage + '%');
        }

        if (windowRatio < thumbRatio){
            thumbPositionLeft = (e.pageX - thumbPosition.left);
            percentage = 100 * (thumbPositionLeft / thumbWidth);

            preview.css('background-position-x', percentage + '%');
        }
    });

    // when the mouse leaves the thumbnail, remove the fullscreen image background
    $('html').on('mouseleave', 'article .thumb', function (e) {
        var elem = $(e.target),
            gallery = elem.closest('.gallery'),
            preview = gallery.find('.preview'),
            fullscreenGalleryWrapper = gallery.find('.fullscreen-gallery-wrapper');

        if (!hfbkConfig.getValue('enableThumbnailHoverGallery')) {
            return;
        }

        preview.removeClass('active');

        preview.css({
            'background-image': '',
            'display':          'none'
        });

        elem.css({
            'z-index': 'initial'
        });
        elem.next('i').css({
            'z-index': 'initial'
        });

        // if the gallery is not open, reenable scrolling
        if (!fullscreenGalleryWrapper.hasClass('open')) {
            $('body').css('overflow', 'visible');
        }

        clearTimeout(hoverDelayTimer);
    });
}

function initItemHoverBackground () {
    $('html').on('mouseenter', '.related-page .related-page-title img', function (e) {
        var elem = $(e.target),
            relatedPage = elem.closest('.related-page'),
            floatingContent = relatedPage.find('.floating-content'),
            background = $('.background'),
            image = $('img', relatedPage),
            imageURL = image.attr('data-img-src') || undefined;

        if (!hfbkConfig.getValue('enableItemHoverBackground')) {
            return;
        }

        // make sure that the floating content is inside the thumbnail, i.e. it is not currently floating upwards
        if (floatingContent.length && (relatedPage.offset().top + 20 < floatingContent.offset().top)) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        focalPoint(image);
        clearTimeout(hoverDelayTimer);
        hoverDelayTimer = setTimeout(function () {
            if (typeof imageURL !== 'undefined') {
                var offset = image.offset();
                $('.preview-image').css({
                    'display': 'block',
                    'top': offset.top - $(window).scrollTop(),
                    'left': offset.left,
                })
                $('.preview-image').attr({
                    'src': image.attr('src'),
                    'data-img-src' : image.attr('data-img-src'),
                });
                background.css({
                    'background-image': 'url(' + imageURL + ')',
                    'z-index': 1,
                });
                // $('#infos').css({
                //     'position': 'relative',
                //     'top': '0',
                // })
            }
        }, 100);
    });

    $('html').on('mouseover', '.preview-image', function (e) {
        var elem = $(e.target),
            background = $('.background'),
            image = elem,
            imageURL = image.attr('data-img-src') || undefined;

        if (!hfbkConfig.getValue('enableItemHoverBackground')) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        focalPoint(image);

        clearTimeout(hoverDelayTimer);
        if (typeof imageURL !== 'undefined') {
            background.css({
                'background-image': 'url(' + imageURL + ')',
                'z-index': 1,
            });
            // $('#infos').css({
            //     'position': 'relative',
            //     'top': '0',
            // })
        }
    });

    $('html').on('mousemove', '.preview-image', function (e) {
        var elem = $(e.target),
            thumbPosition = elem.offset(),
            thumbHeight = elem.height(),
            thumbWidth = elem.width(),
            thumbRatio = thumbWidth / thumbHeight,
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            windowRatio = windowWidth / windowHeight,
            background = $('.background'),
            thumbPositionTop = 0,
            thumbPositionLeft = 0,
            percentage = 0;

        if (!hfbkConfig.getValue('enableThumbnailHoverGallery')) {
            return;
        }

        if (windowRatio > thumbRatio) {
            thumbPositionTop = (e.pageY - thumbPosition.top);
            percentage = 100 * (thumbPositionTop / thumbHeight);

            background.css('background-position-y', percentage + '%');
        }

        if (windowRatio < thumbRatio){
            thumbPositionLeft = (e.pageX - thumbPosition.left);
            percentage = 100 * (thumbPositionLeft / thumbWidth);

            background.css('background-position-x', percentage + '%');
        }
    });

    $('html').on('click', '.content-item', function () {
        if (!hfbkConfig.getValue('enableItemHoverBackground')) {
            return;
        }

        $('.background').css({
            'background-image': 'none',
            'z-index': -1,
        });
        $('.preview-image').css({
            'display': 'none',
            'top': 0,
            'left': 0,
        })
    });

    $('html').on('mouseleave', '.related-page .related-page-title img', function (e) {
        if (!hfbkConfig.getValue('enableItemHoverBackground')) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        clearTimeout(hoverDelayTimer);
    });

    $('html').on('mouseleave', '.preview-image', function (e) {
        if (!hfbkConfig.getValue('enableItemHoverBackground')) {
            return;
        }

        e.stopPropagation();
        e.preventDefault();

        $('.background').css({
            'background-image': 'none',
            'z-index': '-1',
            'background-position-y': 'unset',
        });

        $('.preview-image').css({
            'display': 'none',
            'top': 0,
            'left': 0,
        })
        $('preview-image').attr('src', '');

        $('.related-page').removeClass('active');
        clearTimeout(hoverDelayTimer);
    });
}

function initItemFlyIn () {
    if (!hfbkConfig.getValue('enableItemFlyIn')) {
        return;
    }

    // fly in related pages that fit on the current viewport;
    // afterwards, update when scrolling down/resizing
    flyInRelatedPages();
    $(window).on('scroll resize', flyInRelatedPages);
}

// simply resets the src attribute of the iframe, causing it to reload
// and thus playing any playing video
function resetIFrame (iFrame) {
    var src = iFrame.attr('src');
    iFrame.attr('src', src);
}

function initEventSidebarLinks() {
    $('body').on('click', '.sidebar.event .event-filter', function (e) {
        $('.sidebar.event .event-filter').removeClass('active');
        $(this).addClass('active');
    })
}

function initAnchorScroll() {
    var HISTORY_SUPPORT = !!(history && history.pushState);

    var anchorScrolls = {
      ANCHOR_REGEX: /^#[^ ]+$/,
      OFFSET_HEIGHT_PX: 150,

      /**
       * Establish events, and fix initial scroll position if a hash is provided.
       */
      init: function() {
        this.scrollToCurrent();
        $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
        $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
      },

      /**
       * Return the offset amount to deduct from the normal scroll position.
       * Modify as appropriate to allow for dynamic calculations
       */
      getFixedOffset: function() {
        return this.OFFSET_HEIGHT_PX;
      },

      /**
       * If the provided href is an anchor which resolves to an element on the
       * page, scroll to it.
       * @param  {String} href
       * @return {Boolean} - Was the href an anchor.
       */
      scrollIfAnchor: function(href, pushToHistory) {
        var match, anchorOffset;

        if(!this.ANCHOR_REGEX.test(href)) {
          return false;
        }

        match = document.getElementById(href.slice(1));

        if(match) {
          anchorOffset = $(match).offset().top - this.getFixedOffset();
          $('html, body').animate({ scrollTop: anchorOffset});

          // Add the state to history as-per normal anchor links
          if(HISTORY_SUPPORT && pushToHistory) {
            history.pushState({}, document.title, location.pathname + href);
          }
        }

        return !!match;
      },

      /**
       * Attempt to scroll to the current location's hash.
       */
      scrollToCurrent: function(e) {
        if(this.scrollIfAnchor(window.location.hash) && e) {
            e.preventDefault();
        }
      },

      /**
       * If the click event's target was an anchor, fix the scroll position.
       */
      delegateAnchors: function(e) {
        var elem = e.target;

        if(this.scrollIfAnchor(elem.getAttribute('href'), true)) {
          e.preventDefault();
        }
      }
    };
    $(document).ready($.proxy(anchorScrolls, 'init'));
}
