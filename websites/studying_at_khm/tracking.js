(function($) {
    $.lib = $.lib || {};

    function SkeletonTracking() {
        var self = this;

        self.options = {};

        /**
         * Init function
         */
        this.init = function(pTrackingServices) {
            self.options.trackingServices = pTrackingServices;
            initEvents();
        };


        /**
         * Add HTML code from active tracking service if the user has accepted the cookies
         */
        function handleInitCookieAgreementStorage() {
            if (self.options.trackingServices) {
                 Object.keys(self.options.trackingServices).map(function(trackingKey) {
                     let tracking = self.options.trackingServices[trackingKey];
                     if (tracking.active && tracking.serviceKey && hasCookieAgreement(tracking.serviceKey)) {
                         addHtmlCodeToDocument(tracking.htmlCode);
                     }
                });
            }
        }

        /**
         * Init event listener
         */
        function initEvents() {
            if ($.lib === undefined || $.lib.cookieAgreementStorage === undefined) {
                $(document).on('initCookieAgreementStorage', handleInitCookieAgreementStorage);
            } else {
                handleInitCookieAgreementStorage();
            }

            $(document).on('updateCookieAgreement', handleUpdateCookieAgreement);
        }

        /**
         * Return if user has accepted the given service
         *
         * @param pServiceKey
         * @returns {null|boolean}
         */
        function hasCookieAgreement(pServiceKey) {
            if ($.lib !== undefined && $.lib.cookieAgreementForServiceIsGiven !== undefined) {
                return $.lib.cookieAgreementForServiceIsGiven('skeleton_tracking', pServiceKey);
            }
            return false;
        }

        /**
         * Handle for updateCookieAgreement event from $.lib.cookieAgreementStorage
         *
         * @param event
         * @param pShortClassName
         * @param pServiceKey
         * @param pIsChecked
         */
        function handleUpdateCookieAgreement(event, pShortClassName, pServiceKey, pIsChecked) {
            // If user accepts the cookies, the tracking service HTML code will be added to the document body
            if (pIsChecked && pShortClassName === 'skeleton_tracking') {
                Object.keys(self.options.trackingServices).map(function(trackingKey){
                    let tracking = self.options.trackingServices[trackingKey];
                    if (tracking.active && tracking.serviceKey === pServiceKey) {
                        addHtmlCodeToDocument(tracking.htmlCode);
                    }
                });
            }
        }

        /**
         * Add HTML code to document body
         *
         * @param pHtmlCode
         */
        function addHtmlCodeToDocument(pHtmlCode) {
            $(pHtmlCode).appendTo(document.body);
            $(window).trigger('googleAnalyticIsLoaded');
        }
    }

    if ($.lib.skeletonTracking === undefined) {
        $.lib.skeletonTracking = new SkeletonTracking();
    }
})(jQuery);
