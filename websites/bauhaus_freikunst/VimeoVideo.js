(function($){
    $(document).ready(function() {
        //  load player script once
        var playerScriptLoaded = false;
        //  Play buttons
        var vimeoEmbedToggles  = $('.tx-buwvimeo-player div.play > button');
        //  Unlock buttons
        var vimeoUnlockToggles = $('.tx-buwvimeo-player div.unlock > button');
        //  Local storage key
        var localStorageKey    = 'embedVimeoConsent';

        //  Use with touch devices
        var buttonsDisabled    = false;

        //  Get preview setting
        if (localStorage.getItem(localStorageKey) === '1') {
            //  User has consented to load all Vimeo videos without local preview
            loadVideos();
        } else {
            //  Embed one video by clicking play button
            vimeoEmbedToggles.click(function () {
                if (buttonsDisabled === false) {
                    loadVideo($(this).parents('div.vimeo-preview'));
                }
            });
            //  Load all videos and store setting in local storage
            vimeoUnlockToggles.click(function () {
                loadVideos();
                localStorage.setItem(localStorageKey, '1');
            });
        }

        //  Touch devices: Touching curtain doesn't mean touching buttons - prevent it
        $('.activate-actions').bind('touchstart', function () {
            buttonsDisabled = true;
            window.setTimeout(
                function () {
                    buttonsDisabled = false;
                },
                400);
        });

        //  Simulate breakpoints
        setSizeAttr();
        $(window).on('resize', function () {
            setSizeAttr();
        });

        /**
         * Embed one video
         * @param toggleContainer
         */
        function loadVideo(toggleContainer) {
            var toggleData = JSON.parse(toggleContainer.attr('data-video'));
            toggleContainer.html(toggleData);

            if (playerScriptLoaded === false) {
                $('body').append('<script src="https://player.vimeo.com/api/player.js"></script>');
                playerScriptLoaded = true;
            }
        }

        /**
         * Embed all Vimeo videos at once
         */
        function loadVideos() {
            $('div.vimeo-preview').each(function () {
                loadVideo($(this));
            });
        }

        /**
         * Detect current video width and add appropriate class
         * Videos in portrait format always get 'size-l'
         */
        function setSizeAttr() {
            $('.tx-buwvimeo-player').each(function () {
                var thisWidth  = $(this).outerWidth(true);
                var thisHeight = $(this).outerHeight(true);

                if (thisHeight > thisWidth) {
                    $(this).addClass('size-l');
                } else {
                    $(this).removeClass('size-l size-m size-s size-xs');
                    if (thisWidth < txBuwvimeoPlayerSizeXs) {
                        $(this).addClass('size-xs');
                    } else if (thisWidth < txBuwvimeoPlayerSizeS) {
                        $(this).addClass('size-s');
                    } else if (thisWidth < txBuwvimeoPlayerSizeM) {
                        $(this).addClass('size-m');
                    } else {
                        $(this).addClass('size-l');
                    }
                }
            });
        }
    })
})(jQuery);
