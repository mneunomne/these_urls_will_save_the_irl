(function($) {
	$.lib = $.lib || {};

	function CookieAgreementStorage() {
		var self = this;

		this.UPDATE_COOKIE_AGREEMENT_EVENT  = 'updateCookieAgreement';
		this.INIT_COOKIE_AGREEMENT_STORAGE_EVENT = 'initCookieAgreementStorage';

		this.cookieInformation = {};

		/**
		 * Count of loading scripts
		 * @type {number}
		 */
		this.countOfLoadingScripts = 0;

		/**
		 * Indicate if all init logic was already done.
		 * @type {boolean}
		 */
		this.initCompleted = false;

		/**
		 * Init cookie agreement storage
		 */
		this.init = function() {
			if($.lib.cookieAgreementInformation !== undefined) {
				self.cookieInformation = $.lib.cookieAgreementInformation;
			}
			
			$(document).delegate('[data-cookie-type="all"]', 'click', handleAcceptAll);
			$(document).delegate('input[data-cookie-type="category"]', 'change', handleCategoryChange);
			$(document).delegate('[data-cookie-type="service"] input', 'change', handleServiceChange);

			loadCookieServiceScripts(function(){
				self.initCompleted = true;
				$(document).trigger(self.INIT_COOKIE_AGREEMENT_STORAGE_EVENT);
			});
		};

		/**
		 * Get cookie agreement from local storage. By default return an empty object
		 */
		this.getCookieAgreementFromLocalStorage = function() {
			const YEAR = 365 * 24 * 3600 * 1000; // ms

			let cookieAgreement = $.localStorage.get('cookieAgreement') || {};

			// Check if last change in cookie agreement is older than 1 year
			if (cookieAgreement.dateTime) {
				let cookieAgreementDate = new Date(cookieAgreement.dateTime);
				let yearBeforeDate = (new Date()).getTime() - YEAR;

				if (cookieAgreementDate.getTime() < yearBeforeDate) {
					self.setCookieAgreementToLocalStorage({});
					return {};
				}
			}

			return cookieAgreement;
		};

		/**
		 * Set cookie agreement to local storage
		 *
		 * @param pCookieAgreement
		 */
		this.setCookieAgreementToLocalStorage = function(pCookieAgreement) {
			pCookieAgreement.dateTime = new Date();
			$.localStorage.set('cookieAgreement', pCookieAgreement);
		};

		/**
		 * Set the given value to cookie agreement in local storage
		 *
		 * @param pKey
		 * @param pValue
		 */
		this.setValueToCookieAgreement = function(pKey, pValue) {
			let cookieAgreement = self.getCookieAgreementFromLocalStorage();
			cookieAgreement[pKey] = pValue;
			self.setCookieAgreementToLocalStorage(cookieAgreement);
		};

		/**
		 * Create cookie agreement storage with unselectable categories and services.
		 * If the cookie agreement already exists, WON'T be initialize again
		 */
		this.createCookieAgreementStorage = function() {
			let cookieAgreement = self.getCookieAgreementFromLocalStorage();

			// If cookie agreement storage doest not exists yet, create it
			if (!Object.keys(cookieAgreement).length) {
				// Set version
				let version = self.cookieInformation.version || 0;
				self.setValueToCookieAgreement('version', version);

				if (self.cookieInformation.categories) {
					self.cookieInformation.categories.forEach(function (category) {
						if (!category.selectableServices) {
							updateCookieCategory(category.key, true);
						}
					});
				}
			}

			self.syncHtmlWithCookieAgreement();
		};

		/**
		 * Return is cookie agreemnt storage has been initialized
		 *
		 * @returns {boolean}
		 */
		this.isCookieAgreementStorageInitialized = function () {
			let cookieAgreement = self.getCookieAgreementFromLocalStorage();
			return Object.keys(cookieAgreement).length > 0;
		};

		/**
		 * Return if an agreement for a service has been given
		 *
		 * @param pShortClassName
		 * @param pServiceKey
		 * @returns {boolean}
		 */
		this.agreementForServiceIsGiven = function (pShortClassName, pServiceKey) {
			let cookieAgreement = self.getCookieAgreementFromLocalStorage();

			return cookieAgreement.services !== undefined
				&& cookieAgreement.services[pShortClassName] !== undefined
				&& cookieAgreement.services[pShortClassName][pServiceKey] !== undefined;
		};

		/**
		 * Synchronize the HTML with the information in cookie agreement local storage
		 */
		this.syncHtmlWithCookieAgreement = function() {
			let cookieAgreement = $.lib.cookieAgreementStorage.getCookieAgreementFromLocalStorage();

			$.lib.cookieAgreementStorage.eventHandlersEnabled = false;

			// Synchronize categories checkboxes
			if (cookieAgreement.categories !== undefined) {
				Object.keys(cookieAgreement.categories).forEach(function(category){
					$('input[data-cookie-type="category"][data-cookie-value="' + category + '"]').attr('checked', true);
				});
			}

			// Synchronize services checkboxes
			if (cookieAgreement.services !== undefined) {
				Object.keys(cookieAgreement.services).forEach(function(shortClassName){
					Object.keys(cookieAgreement.services[shortClassName]).forEach(function (serviceKey) {
						$('[data-cookie-type="service"][data-cookie-value="' + serviceKey + '"][data-cookie-short_class_name="' + shortClassName +'"] input').attr('checked', true);
					})
				});
			}

			$.lib.cookieAgreementStorage.eventHandlersEnabled = true;
		};

		this.enableCookieService = function (pShortClassName, pServiceKey) {
			updateCookieService(pShortClassName, pServiceKey, true);
		}
		
		/**
		 * Handle accept all cookies
		 */
		function handleAcceptAll() {
			if (self.cookieInformation.categories) {
				self.cookieInformation.categories.forEach(function (category) {
					updateCookieCategory(category.key, true);
				});
			}

			$('.cookieBanner').addClass('js-cookie-hide');
		}

		/**
		 * Handle when a category change
		 *
		 * @param pEvent
		 */
		function handleCategoryChange(pEvent) {
			let $caller = $(pEvent.target || pEvent.srcElement);
			let isChecked = $caller.is(':checked');

			updateCookieCategory($caller.data('cookie-value'), isChecked);
		}

		/**
		 * Handle when a service change
		 *
		 * @param pEvent
		 */
		function handleServiceChange(pEvent) {
			let $caller = $(pEvent.target || pEvent.srcElement);

			let cookieTypeService = $caller.closest('[data-cookie-type="service"]');
			let isChecked = $caller.is(':checked');

			let shortClassName = $(cookieTypeService).data('cookie-short_class_name');
			let serviceKey = $(cookieTypeService).data('cookie-value');

			updateCookieService(shortClassName, serviceKey, isChecked);
		}

		/**
		 * Function to update a cookie category
		 *
		 * @param pCategoryKey
		 * @param pIsChecked
		 */
		function updateCookieCategory(pCategoryKey, pIsChecked) {
			setImportantBtnStatus();
			
			if (self.cookieInformation && self.cookieInformation.categories) {
				self.cookieInformation.categories.forEach(function(category){
					if (pCategoryKey === category.key) {
						// Update cookie agreement storage
						let cookieAgreement = self.getCookieAgreementFromLocalStorage();

						if (cookieAgreement.categories === undefined) {
							cookieAgreement.categories = {};
						}

						if (pIsChecked) {
							cookieAgreement.categories[pCategoryKey] = {dateTime: new Date()};
						} else {
							delete cookieAgreement.categories[pCategoryKey];
						}

						self.setCookieAgreementToLocalStorage(cookieAgreement);

						// Update category input
						$('input[data-cookie-type="category"][data-cookie-value="' + pCategoryKey + '"]').attr('checked', pIsChecked);

						// Update cookie services for the category
						if (category.widgetsWithCookies) {
							Object.keys(category.widgetsWithCookies).forEach(function (shortClassName ) {
								if (category.widgetsWithCookies[shortClassName].services) {
									Object.keys(category.widgetsWithCookies[shortClassName].services).forEach(function (serviceKey) {
										if (category.widgetsWithCookies[shortClassName].services[serviceKey].active) {
											updateCookieService(shortClassName, serviceKey, pIsChecked);
										}
									})
								}
							})
						}
					}
				});
			}
		}

		/**
		 * Function to update a cookie service
		 *
		 * @param pShortClassName
		 * @param pServiceKey
		 * @param pIsChecked
		 */
		function updateCookieService(pShortClassName, pServiceKey, pIsChecked) {
			setImportantBtnStatus();
			
			// Update service information in local storage
			updateServiceInCookieAgreement(pShortClassName, pServiceKey, pIsChecked);

			let $serviceInput = $('[data-cookie-type="service"][data-cookie-value="' + pServiceKey + '"][data-cookie-short_class_name="' + pShortClassName +'"] input');

			if ($serviceInput.length) {
				// Update service input
				$serviceInput.attr('checked', pIsChecked);

				if (!pIsChecked) {
					// Uncheck category input of the current service
					$serviceInput.closest('.cookieAgreementCategory')
						.find('[data-cookie-type="category"]')
						.first()
						.attr('checked', false);
				}
			}

			// Trigger event for service
			loadCookieServiceScripts(function(){
				$(document).trigger(self.UPDATE_COOKIE_AGREEMENT_EVENT, [pShortClassName, pServiceKey, pIsChecked]);
			});
		}
		
		
		
		/**
		 * set "important" class to highlight close / save button in cookie AgreementOverview
		 */
		function setImportantBtnStatus(){
			$('.cookieAgreementOverview button.close').addClass('important');
		}
		
		
		/**
		 * Update service in cookie agreement local storage
		 *
		 * @param pShortClassName
		 * @param pServiceKey
		 * @param pIsChecked
		 */
		function updateServiceInCookieAgreement(pShortClassName, pServiceKey, pIsChecked) {
			let cookieAgreement = self.getCookieAgreementFromLocalStorage();

			if (pIsChecked) {
				if (cookieAgreement.services === undefined) {
					cookieAgreement.services = {};
				}

				if (cookieAgreement.services[pShortClassName] === undefined) {
					cookieAgreement.services[pShortClassName] = {};
				}

				if (cookieAgreement.services[pShortClassName][pServiceKey] === undefined) {
					cookieAgreement.services[pShortClassName][pServiceKey] = {};
				}

				cookieAgreement.services[pShortClassName][pServiceKey]['dateTime'] = new Date();
			} else {
				// Delete service if it is set in cookie agreement local storage
				if (cookieAgreement.services !== undefined
					&& cookieAgreement.services[pShortClassName] !== undefined
					&& cookieAgreement.services[pShortClassName][pServiceKey] !== undefined) {
						delete cookieAgreement.services[pShortClassName][pServiceKey];
				}

				// Delete category if it is set in cookie agreement local storage
				if (self.cookieInformation && self.cookieInformation.categories) {
					self.cookieInformation.categories.forEach(function(category){
						if (category.widgetsWithCookies !== undefined) {
							Object.keys(category.widgetsWithCookies).forEach(function(shortClassName){
								if (shortClassName === pShortClassName && category.widgetsWithCookies[shortClassName].services !== undefined) {
									Object.keys(category.widgetsWithCookies[shortClassName].services).forEach(function(serviceKey){
										if (pServiceKey === serviceKey) {
											// Delete category from local storage
											if (cookieAgreement.categories !== undefined && cookieAgreement.categories[category.key] !== undefined) {
												delete cookieAgreement.categories[category.key];
											}
										}
									});
								}
							});
						}
					});
				}
			}

			self.setCookieAgreementToLocalStorage(cookieAgreement)
		}

		/**
		 * Function to load scripts with attribute "data-cookie-service" when cookie agreement is given
		 *
		 * @param callback
		 */
		function loadCookieServiceScripts(callback) {
			$('script[data-cookie-service]').each(function(){
				let $currentScript = $(this);
				if (self.agreementForServiceIsGiven($currentScript.data('cookie-shortClassName'), $currentScript.data('cookie-service'))) {
					// Get current source
					let src = $currentScript.data('src');

					// Load script
					let script = document.createElement("script");
					script.src = src;
					script.async = false;

					// Logic to know when the file was load
					script.onload = function() {self.countOfLoadingScripts--; };
					self.countOfLoadingScripts++;

					// Add script to DOM
					$currentScript.parent()[0].appendChild(script);

					// Remove script from DOM
					$currentScript.remove();
				}
			});

			// Check that all scripts was loaded and call the callback function
			let callbackTimer = setInterval(function(){
				if (self.countOfLoadingScripts === 0) {
					clearInterval(callbackTimer);
					callback.call();
				}
			}, 100);
		}

		self.init();
	}

	if ($.lib.cookieAgreementStorage === undefined) {
		$.lib.cookieAgreementStorage = new CookieAgreementStorage();
	}
	
	$.lib.cookieAgreementForServiceIsGiven = function(pShortClassName, pServiceKey) {
		if ($.lib.cookieAgreementStorage !== undefined) {
			return $.lib.cookieAgreementStorage.agreementForServiceIsGiven(pShortClassName,
					pServiceKey);
		}
		return null;
	}
})(jQuery);