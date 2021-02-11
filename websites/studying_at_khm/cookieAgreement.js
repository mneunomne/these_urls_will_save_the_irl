(function($) {
	$.lib = $.lib || {};

	function CookieAgreement() {
		var self = this;

		self.options = {};

		/**
		 * Init function
		 */
		this.init = function() {
			if($.lib.cookieAgreementInformation.closeBannerSetting !== undefined) {
				self.cookieBannerCloseSetting = $.lib.cookieAgreementInformation.closeBannerSetting;
			}
			initEvents();
			checkAndShowCookieBanner();
		};

		/**
		 * Set options
		 * @param pOptions
		 */
		this.setOptions = function (pOptions) {
			self.options = pOptions;
		};

		/**
		 * Init the tri state checkboxes
		 */
		this.initTriStateCheckboxes = function () {
			let $categories = $('[data-cookie-type="category"]');

			$categories.each(function(i, category) {
				let $category = $(category);
				addTriStateEvents($category);
				setTriStateValue($category, checkServicesStatus($category));
			});

			addEventToServices();

			$(document).delegate('.cookieAgreementOverview [data-cookie-type="all"]', 'click', function(event){
				$categories.each(function(i, category) {
					setTriStateValue($(category), 'true');
				});
				$('.overlayOpened #overlay .closeButton').trigger('click');
			});
			
			$(document).on('click', '.cookieAgreementOverview button.close', function(event){
				$('.overlayOpened #overlay .closeButton').trigger('click');
			});
		};

		/**
		 * Add click events for the tri state divs
		 *
		 * @param $pCategory
		 */
		function addTriStateEvents($pCategory) {
			$pCategory.closest('[role="checkbox"]').click(function(){
				let $triStateCheckbox = $(this);
				let triStateValue = $triStateCheckbox.attr('aria-checked');
				if (triStateValue === 'true') {
					setTriStateValue($pCategory, 'false');
					$triStateCheckbox
						.attr('aria-checked', 'false')
						.children('input').prop('checked', false).trigger('change');
				} else {
					setTriStateValue($pCategory, 'true');

					$triStateCheckbox.attr('aria-checked', 'true')
						.children('input').prop('checked', true).trigger('change');
				}
			});
		}

		/**
		 * Set tri state image
		 *
		 * @param $pCategory
		 * @param pTriStateNewValue
		 */
		function setTriStateValue($pCategory, pTriStateNewValue) {
			let $roleCheckbox = $pCategory.closest('[role="checkbox"]');
			let $image = $roleCheckbox.children('span.triStateCheckbox__icon');

			// update aria-checked attribute from element with checkbox role
			$roleCheckbox.attr('aria-checked', pTriStateNewValue );

			// Remove state before
			$image.removeClass('triStateCheckbox__icon--checked triStateCheckbox__icon--unchecked triStateCheckbox__icon--mixed');

			if (pTriStateNewValue === 'true' ) {
				$image.addClass('triStateCheckbox__icon--checked');
			}
			else if (pTriStateNewValue === 'false' ) {
				$image.addClass('triStateCheckbox__icon--unchecked');
			}
			else if (pTriStateNewValue === 'mixed' ) {
				$image.addClass('triStateCheckbox__icon--mixed');
			}
		}

		/**
		 * Check services status
		 *
		 * @param $pCategory
		 * @returns {string}
		 */
		function checkServicesStatus($pCategory) {
			let all = 'true', none = 'true';
			$pCategory.closest('.cookieAgreementCategory').find('[data-cookie-type="service"] input').each(function() {
				if ($(this).prop('checked') === true) {
					none = 'false';
				}
				else if ($(this).prop('checked') === false) {
					all = 'false';
				}
			});

			if (all === 'true') {
				return 'true';
			}

			if (none === 'true') {
				return 'false';
			}

			return 'mixed';
		}

		/**
		 * Add listener for changes in the services to update tri state checkbox
		 */
		function addEventToServices() {
			$(document).delegate('.cookieAgreementCategory [data-cookie-type="service"] input', 'change', function() {
				let $cookieAgreementCategory = $(this).closest('.cookieAgreementCategory');
				let triStateNewValue = checkServicesStatus($cookieAgreementCategory.find('[data-cookie-type="service"] input'));
				setTriStateValue ( $cookieAgreementCategory.find('[data-cookie-type="category"]'), triStateNewValue );
			});
		}

		/**
		 * Check if cookie agreement storage is already initialized and if not show cookie banner
		 */
		function checkAndShowCookieBanner() {
			
			if (!$.lib.cookieAgreementStorage.isCookieAgreementStorageInitialized()) {
				$('.cookieBanner.js-cookie-hide').removeClass('js-cookie-hide');
			}
		}
		
		function initEvents() {
			$(document).delegate(".cookieAgreementOverview .wrapper.firstPart .expand", "click", function(event){
				$(this).closest(".wrapper.firstPart").toggleClass("open");
			});
			
			$(document).delegate(".cookieAgreementCategory .wrapperCategoryFirstPart .expandInfoCategory", "click", function(event){
				$(this).closest(".wrapperCategoryFirstPart").toggleClass("open");
			});
			
			$(document).delegate(".cookieAgreementCategory .wrapperCategorySecondPart .showCookie", "click", function(event){
				$(this).closest(".wrapperCategorySecondPart").toggleClass("open");
			});
			
			$(document).delegate(".cookieAgreementService .wrapperServiceFirstPart .title", "click", function(event){
				$(this).closest(".wrapperServiceFirstPart").toggleClass("open");
			});
			
			$(document).delegate('.cookieBanner .closeButton', 'click', function(event){
				$('.cookieBanner').addClass('js-cookie-hide');
				
				if(self.cookieBannerCloseSetting == "necessairyCookies"){
					$.lib.cookieAgreementStorage.createCookieAgreementStorage();
				}
			});
			
			$(document).delegate('.js-cookie-open_settings', 'click', function(event){
				$('.cookieBanner').addClass('js-cookie-hide');
			});
			
			$(document).delegate('.js-cookie-allow-service', 'click', function(event){
				if ($.lib.cookieAgreementStorage !== undefined) {
					let overlay = $(this).closest(".cookieServiceForbidden");
					let shortClassName = $(overlay).data('short_class_name');
					let serviceKey = $(overlay).data('service');
					$.lib.cookieAgreementStorage.enableCookieService(shortClassName, serviceKey);
				}
			});
		}
		self.init();
	}

	if ($.lib.cookieAgreement === undefined) {
		$.lib.cookieAgreement = new CookieAgreement();
	}
})(jQuery);