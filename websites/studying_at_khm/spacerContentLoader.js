/**
 * 
 */
(function($) {
	/**
	 * Definition of the namespace
	 */
	$.lib = $.lib || {};

	$.fn.spacerContentLoader = $.spacerContentLoader = function(pOptions) {
		if ($.lib.spacerContentLoader == undefined) {
			$.lib.spacerContentLoader = new spacerContentLoader();
			$.lib.spacerContentLoader.init.call(this, pOptions);
		}
	}
	
	function spacerContentLoader() {
		var self = this;
		var shortcuts = {login:{
					shortClassName:"custom_userLogin",
					spacerContentLoader:"spacerHeader"
				},
				basket : {	
					shortClassName:"custom_shop_basket",
					spacerContentLoader:"spacerHeader"
				},
				cookie : {	
					shortClassName:"skeleton_cookie",
					spacerContentLoader:"spacerHeader",
					view: "agreementOverview"
				},
				wishlist : {
					shortClassName: "custom_shop_basket",
					spacerContentLoader: "spacerHeader",
					view: "wishListOverview"
				},
				resetPassword : {
					shortClassName: "custom_userResetPassword",
					spacerContentLoader: "spacerHeader"
				},
				onRequest : {
					shortClassName: "custom_shop_basket",
					spacerContentLoader: "spacerHeader",
					view: "wishListOverview",
					requestForm : "productRequest"
				}
			};
		this.options = {
			fadeTimeToWait:100,
			fadeTimeToClose : 200,
			fadeTimeToOpen : 150,
			scrollTime : 400,
			shortcuts : shortcuts,
			mapping : {
				
			}
		};
		this.waiting = {};

		this.currentTargets = {};
		
		this.loadContent = function(event, target)
		{
			// getting all the attributes
			var ajaxParameter = {};
			var spacerName = 'default';
			if (!target)
			{
				target = event.currentTarget;
			}
			
			if (typeof event === "string" && self.options.shortcuts[event])
			{
				ajaxParameter = self.options.shortcuts[event];
			}
			else
			{
				ajaxParameter = self.getAttributesOfTarget(target);
			}
			spacerName = ajaxParameter['spacerContentLoader'];
			if(self.options.mapping[spacerName] != undefined)
			{
				spacerName = self.options.mapping[spacerName];
			}
			
			if(self.waiting[spacerName] != true) // so if spacer in waiting state, do
													// nothing
			{
				if(self.currentTargets[spacerName] != target)
				{
					self.currentTargets[spacerName] = target;
					
					// define data-scroll-offset = integer to scroll to a given offset
					// define data-scroll = (value which won't be taken into account, for
					// instance "true")
					// to scroll to the top of the spacer.
					
					var scrollOffset;
					if(ajaxParameter['scrollOffset'] != undefined)
					{
						scrollOffset = ajaxParameter['scrollOffset'];
						delete ajaxParameter['scrollOffset'];
					}
					else if (ajaxParameter['scroll']  != undefined)
					{
						scrollOffset = $('#'+spacerName).offset().top;
						delete ajaxParameter['scroll'];
					}
					
					if(scrollOffset != undefined)
					{
//						console.log('scrollTime: '+ self.options.scrollTime);
						$('html,body').animate({
							scrollTop : scrollOffset
						}, self.options.scrollTime);
					}
					
					self.startWaiting(spacerName);
					
					$.lib.ajax("loadContent", {
						data : {
							data : ajaxParameter
						}
					
					}, "basic_spacer", self);
				}
				else
				{
					self.close(ajaxParameter['spacerContentLoader']);
				}
			}
		}
		
		/**
		 * Returns the attributes of the given dom element as an associatibe array, the name
		 * beeing camel cased and 'data-' removed
		 * 
		 * @param DOMElement
		 * @returns array(camelCasedAttribute name => value)
		 */
		this.getAttributesOfTarget = function(DOMElement)
		{
			var result = {};
			var attributes = DOMElement.attributes;
			aLength = attributes.length;
			
			for ( var a = 0; a < aLength; a++) {
				// we want to consider only the params that start with data-
				if(attributes[a].name.indexOf("data-") !== -1)
				{
					// get the camel cased value of the attribute name without
					// 'data-'
					var nameParts = attributes[a].name.replace('data-', '').split(
							'-');
					var name = "";
					for ( var b = 0; b < nameParts.length; b++) {
						name += nameParts[b].charAt(0).toUpperCase()
								+ nameParts[b].slice(1);
					}
					name = name.charAt(0).toLowerCase() + name.slice(1)
					
					// get value of the attribute
					var value = attributes[a].nodeValue;
					
					result[name] = value;
				}
			}
			
			return result;
		}
		
		this._loadContentSuccess = function(pResponse, pAjaxOptions)
		{
			var name = pResponse.spacerName;
			
			if (pAjaxOptions.data.data.spacerCssClass != undefined)
			{
				$('#' + name + '.BasicSpacerContentLoader').addClass(pAjaxOptions.data.data.spacerCssClass);
				$('#' + name + '.BasicSpacerContentLoader').attr("data-spacer-css-class", pAjaxOptions.data.data.spacerCssClass);
			}
			
			if (pAjaxOptions.data.data.spacerWithoutClose != undefined && pAjaxOptions.data.data.spacerWithoutClose == "1")
			{
				$('#' + name + '.BasicSpacerContentLoader .closeButton').hide();
				$('#' + name + '.BasicSpacerContentLoader').attr("data-spacer-without-close", "1");
			}
			
			$('#'+name+' .wrapperContentLoader').html(pResponse.htmlContent);
			
			self.stopWaiting(name);
		}
		
		this._loadContentError = function(pResponse, pAjaxOptions)
		{
			self.stopWaiting(pResponse.spacerName);
			console.debug('Error !');
		}
		
		this.startWaiting = function(spacerName)
		{
			self.waiting[spacerName] = true;
			
			if(spacerName.toLowerCase().indexOf("overlay") > -1)
			{
				// this should be done here only if we want a waiting symbole. otherwise
				// should be done in the stop waiting.
				
				// prevents the html & body to scroll
				if(!$('html').hasClass('noScroll'))
				{
					if ($(document).height() > $(window).height()) {
						var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
						$('html').addClass('noScroll').css('top',-scrollTop);
					}
				}
				
				$('#'+spacerName).addClass('wait');
				//no need for height-animation
			}else
			{
				// it's important to do that to avoid content appearing without animation
				// if no height is specificaly defined
				var spacerHeight = $('#'+spacerName).outerHeight();
				$('#'+spacerName).css('height',spacerHeight);
				
				$('#'+spacerName).addClass('wait');
				
				$('#'+spacerName).animate({
					height : "160px",
					opacity: "1"
				}, self.options.fadeTimeToWait, 'swing');
			}
			
			$('html').addClass(spacerName+'Waiting');
		}
		
		this.stopWaiting = function(spacerName)
		{
			self.waiting[spacerName] = false;
			$('html').removeClass(spacerName+'Waiting');
			
			$('#'+spacerName).removeClass('wait');
			
			if($('#'+spacerName+' .wrapperContentLoader').html() == "")
			{
				self.close(spacerName);
			}
			else
			{
				self.open(spacerName);
			}
		}
		
		this.getHeightSpacer = function(spacerName)
		{
			var totalHeight = 0;
			$('#'+spacerName).children().each(function(){
				totalHeight = totalHeight + $(this).outerHeight(true); 
			});
			return totalHeight;
		}
		
		this.open = function (spacerName)
		{
			$('html').addClass(spacerName+'Opened');
			
			$('#'+spacerName).addClass('opened');
			
			var totalHeight = self.getHeightSpacer(spacerName);
			
			if(spacerName.toLowerCase().indexOf("overlay") > -1)
			{
				$('#'+spacerName+' .wrapperContentLoader, #'+spacerName+' .scrollWrapper > .wrapper').animate({
					opacity: '1'
				}, 500, 'swing', function(){
				});
			}
			else
			{
				$('#'+spacerName).animate({
					opacity: '1',
					height : totalHeight +"px"
				}, self.options.fadeTimeToOpen, 'swing', function(){
					$('#'+spacerName).css('overflow','hidden').css('height','');
				});
			}
		}
		
		this.close = function (spacerName)
		{
			$('html').addClass(spacerName+'Closing');
			$('html').removeClass(spacerName+'Opened');
			
			$('#'+spacerName).removeClass('opened');
			
			if ($('#' + spacerName + '.BasicSpacerContentLoader[data-spacer-css-class]').length)
			{
				$('#' + spacerName + '.BasicSpacerContentLoader').removeClass($('#' + spacerName + '.BasicSpacerContentLoader').attr("data-spacer-css-class"));
				$('#' + spacerName + '.BasicSpacerContentLoader').removeAttr("data-spacer-css-class");
			}
			
			$(window).trigger("closeSpacerContentLoader", {name:spacerName});
			
			if(spacerName.toLowerCase().indexOf("overlay") > -1)
			{
				//enable scrolling again
				if($('html').hasClass('noScroll'))
				{
					var scrollTop = parseInt($('html').css('top'));
					$('html').removeClass('noScroll');
					$('html,body').scrollTop(-scrollTop);
				}
				
				$('#'+spacerName+' .wrapperContentLoader, #'+spacerName+' .scrollWrapper > .wrapper').animate({
					opacity: '0'
				}, 500, 'swing', function(){
					$('html').removeClass(spacerName+'Closing');
				});
			}
			else
			{
				$('#'+spacerName).animate({
					opacity: '0',
					height : "0px"
				}, self.options.fadeTimeToClose, 'swing', function(){
					$('#'+spacerName+' .wrapperContentLoader').html('');
					$('#'+spacerName).css('overflow','');
					
					$('html').removeClass(spacerName+'Closing');
				});
			}
			
			self.currentTargets[spacerName] = null;
		}
		
		this.clickOnCloseButton = function(event)
		{
			var spacerName = $(event.currentTarget).closest(".BasicSpacerContentLoader").attr("id");
			
			if ($('#' + spacerName + '.BasicSpacerContentLoader[data-spacer-without-close]').length)
			{
				return;
			}
			
			self.close(spacerName);
		}
		
		this.clickOnCloseWithoutButton = function(event)
		{
			var spacerName = $(event.currentTarget).closest(".BasicSpacerContentLoader").attr("id");
			
			if ($('#' + spacerName + '.BasicSpacerContentLoader[data-spacer-without-close]').length)
			{
				$('#' + spacerName + '.BasicSpacerContentLoader .closeButton').css("display", "");
				$('#' + spacerName + '.BasicSpacerContentLoader').removeAttr("data-spacer-without-close");
			}
			
			self.close(spacerName);
		}
		
		this.onHashChange = function(a,b,c)
		{
			// console.debug("hashchange " + location.hash);
			var hash = location.hash.substring(1);
			if (self.options.shortcuts[hash])
			{
				window.location.hash = "";
				// console.debug(self.options.shortcuts[hash]);
				self.loadContent.call(this, hash, "#"+hash);
			}
		}
		
		this.init = function(pOptions)
		{
			$.extend(true, self.options, pOptions);
			
			if (self.options.shortcuts)
			{
				self.onHashChange();
				$(window).bind('hashchange', self.onHashChange);
			}
			
			$(document).undelegate('[data-spacer-content-loader]', 'click',
					self.loadContent).delegate('[data-spacer-content-loader]',
					'click', self.loadContent);
			$(document).undelegate('.BasicSpacerContentLoader .closeButton', 'click',
					self.loadContent).delegate('.BasicSpacerContentLoader .closeButton',
							'click', self.clickOnCloseButton);
			// in case we want to have another area that closes the spacer content loader
			$(document).undelegate('.BasicSpacerContentLoader .closeWrapper', 'click',
					self.loadContent).delegate('.BasicSpacerContentLoader .closeWrapper',
							'click', self.clickOnCloseButton);
			
			// in case we want to have an extern event to close the 
			$(document).undelegate('.BasicSpacerContentLoader', 'close',
					self.loadContent).delegate('.BasicSpacerContentLoader',
							'close', self.clickOnCloseButton);
			$(document).undelegate('.BasicSpacerContentLoader', 'closeWithout',
					self.loadContent).delegate('.BasicSpacerContentLoader',
							'closeWithout', self.clickOnCloseWithoutButton);
			
			$(document).on("openSpacerContentLoader", self.loadContent);
		}
	}

})(jQuery);