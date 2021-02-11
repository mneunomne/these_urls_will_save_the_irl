(function($) {
	function loadVideoOnDemand() {
		var self = this;
		
		this._videoPlayerSuccess = function(response, ajaxOptions) {
			if(response && response.data && response.data['embeddedVideo']) {
				var embeddedVideo = $(response.data['embeddedVideo']);
				ajaxOptions.element.replaceWith(embeddedVideo);
				if(ajaxOptions.options && ajaxOptions.options.autoplay) {
					setTimeout(function() {
						var video = embeddedVideo.find("video");
						if (video[0]) {
							video[0].play();
						}
					}, 300);
				}
			}
		}
		this._videoPlayerError = function(response) {
		}

		function handleClickVideoOnDemand(event) {
			var element = $(event.target).closest('.previewImageWrapper');
			var elementOptions = element.data('loadVideoOnDemand');
			var cookieAgreementService = element.data('cookie-agreement-service');

			if (cookieAgreementService) {
				if(!hasCookieAgreement(cookieAgreementService)){
					// If cookie agreement was no given add class hover
					element.closest('.BasicVideo').addClass('hover');

					return false;
				}
			}

			if ($.type(elementOptions) === "string") {
				element.replaceWith(elementOptions);
			} else {
				$.lib.ajax('videoPlayer', {
					"data" : elementOptions,
					"options" : elementOptions,
					"element" : element
				}, 'basic_video', self);
			}
			return false;
		}

		/**
		 * Update cookie service forbidden --> show or hide it depending if the service was accepted by the user
		 *
		 * @param pServiceKey
		 */
		function updateCookieServiceForbidden(pServiceKey) {
			let $cookieServiceForbidden = $('.BasicVideo .cookieServiceForbidden[data-service="' + pServiceKey +'"]');

			if ($cookieServiceForbidden.length) {
				if(hasCookieAgreement(pServiceKey)) {
					$cookieServiceForbidden.addClass('js-cookieServiceForbidden-hidden');
				} else {
					$cookieServiceForbidden.removeClass('js-cookieServiceForbidden-hidden');
				}
			}
		}

		/**
		 * Return if user has accepted the given service
		 *
		 * @param pServiceKey
		 * @returns {null|boolean}
		 */
		function hasCookieAgreement(pServiceKey) {
			if ($.lib !== undefined && $.lib.cookieAgreementForServiceIsGiven !== undefined) {
				return $.lib.cookieAgreementForServiceIsGiven('basic_video', pServiceKey);
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
			if (pShortClassName === 'basic_video') {
				updateCookieServiceForbidden(pServiceKey);
			}
		}

		/**
		 * Handle for initCookieAgreementStorage event from $.lib.cookieAgreementStorage
		 */
		function handleInitCookieAgreementStorage() {
			// Search for all cookie agreement services in preview image wrapper
			let cookieAgreementServices = {};

			$('.previewImageWrapper').each(function(){
				let currentCookieAgreementService = $(this).data('cookie-agreement-service');
				if (currentCookieAgreementService) {
					cookieAgreementServices[currentCookieAgreementService] = true;
				}
			});

			// Update cookie service forbidden for each cookie agreement service
			if (Object.keys(cookieAgreementServices).length) {
				Object.keys(cookieAgreementServices).forEach(function(cookieAgreementService){
					updateCookieServiceForbidden(cookieAgreementService);
				});
			}
		}
		
		this.init = function() {
			if ($.lib === undefined || $.lib.cookieAgreementStorage === undefined) {
				$(document).on('initCookieAgreementStorage', handleInitCookieAgreementStorage);
			} else {
				handleInitCookieAgreementStorage();
			}
			
			$('body').on('click play', '.previewImageWrapper', handleClickVideoOnDemand);
			$(document).on('updateCookieAgreement', handleUpdateCookieAgreement);

			// Click on preview image if the cookies were accepted
			$(document).delegate('.js-cookie-allow-service', 'click', function(event){
				$(this).closest(".BasicVideo").find('.previewImageWrapper').delay(300).click();
			});
		};

		this.initVideo = function(pElement, pOptions) {
			$(pElement).data('loadVideoOnDemand', pOptions);
		}
	}
	
	$.fn.loadVideoOnDemand = function(pOptions) {
		
		if ($.lib.loadVideoOnDemand == undefined) {
			$.lib.loadVideoOnDemand = new loadVideoOnDemand();
			$.lib.loadVideoOnDemand.init();
		}
		
		return this.each(function() {
			$.lib.loadVideoOnDemand.initVideo(this, pOptions);
		});
	};
})(jQuery);