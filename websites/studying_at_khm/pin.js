/**
 * 
 */
(function($) {
	$.lib = $.lib || {};

	function Pin(pOptions) {
		var self = this;
		var options = {
			pinwrapper : ".pin",
			container : "",
			minWidth : "",
			minHeight : "",
			onlyOnScrollTop : false,
			wrapContent : false,
			startonElementPositon : false,
			startonElementPositonOffset : 0,
			keepWrapperSize: true,
			setCssClass : false
		}

		this.container = null;
		this.pinned = null;
		this.pinWrapper = null;
		this.window = $(window);

		var active = true;

		var fixedfrom = 0;
		var fixedto = 0;
		var end = 0;

		var viewportHeight = 0;
		var pinheight = 0;
		var containerheight = 0;
		var pinbottom = 0;

		var pinWidth = 0;
		var leftPos = 0;
		var lastScroll = 0;
		var pinOffset = 0;
		
		var cssClass= "";
		

		this.checkHeight = function() {
			// set height of container, if the pin element is bigger than the
			// container
			self.container.height("auto");
			if (!active) {
				return;
			}
			var containerheight = self.container.height();
			pinheight = self.pinned.outerHeight(true);

			if (pinheight > containerheight) {
				self.container.height(pinheight);
			}
		}

		this.calculatePos = function() {
			// if the height OR the width is not big enough, then deactivate the pinning
			if ((options.minWidth && self.window.width() <= options.minWidth) ||
				(options.minHeight && self.window.height() <= options.minHeight)){
				self.pinned.css({
					width : "",
					left : "",
					top : "",
					botton : "",
					position : ""
				});
				self.pinned.removeClass(self.cssClass);
				active = false;
				return;
			} else {
				active = true;
			}
			
			var containerOffset = self.container.offset();
			var parentOffset = self.container.offsetParent().offset();
			var offset = self.pinned.offset();

			fixedfrom = (options.container ? containerOffset.top : offset.top) + pinOffset;
			
			//update size after resize  
			if (options.keepWrapperSize){
				var widthBefore = self.pinned.css("width");
				var positionBefore = self.pinned.css("position");
				self.pinned.css({
					width : "",
					position : ""
				});
				pinWidth = self.pinned.outerWidth();
				self.pinned.css({
					width : widthBefore,
					position : positionBefore
				});
				
				leftPos = "";
			}
			
			fixedto = containerOffset.top + self.container.height() + pinOffset;
			end = containerOffset.top + self.container.height();

			viewportHeight = self.window.height();
			pinheight = self.pinned.outerHeight(true);
			if(pinheight > viewportHeight) {
				fixedfrom = fixedfrom + (pinheight - viewportHeight);
				fixedto = fixedto - viewportHeight;
			} else {
				fixedto = fixedto - pinheight;
			}
			containerheight = self.container.height();
			pinbottom = self.pinned.outerHeight(true) + self.container.offset().top;
			
			if (self.pinWrapper != null) {
				self.pinWrapper.css({
					width : pinWidth
				});
				self.pinWrapper.css("height", self.pinned.outerHeight());
			} 
			else
			{
				self.pinned.css({
					width : pinWidth
				});
			}
		}

		this.onScroll = function() {
			if (!active) {
				return;
			}

			var scrollY = self.window.scrollTop();
			var cssClass = "";
			var disable = false;
			if (options.onlyOnScrollTop) {
				if (lastScroll < scrollY) {
					disable = true;
				}
				lastScroll = scrollY;
			}
			if (fixedfrom  >= scrollY || pinheight >= containerheight || disable) {
				self.pinned.css({
					left : "",
					top : "",
					bottom : "",
					width : "",
					position : ""
				});
				
			} else {
				if (scrollY >= fixedto || pinbottom >= end) {
					// sticky on container bottom
					self.pinned.css({
						left : "",
						top : "auto",
						bottom : 0,
						width : pinWidth
					}).css("position", "absolute");
					cssClass = 'pinnedAbsolute';
				} else {
					if (!options.keepWrapperSize)
					{
						leftPos = self.container.offset().left
							+ parseInt(self.container.css('paddingLeft'));
					}
					if (pinheight < viewportHeight) {
						// sticky von viewport top
						self.pinned.css({
							left : leftPos,
							top : -pinOffset,
							bottom : "auto",
							width : pinWidth
						}).css("position", "fixed");
						cssClass = 'pinnedTop';
					} else {
						// sticky von viewport bottom
						self.pinned.css({
							left : leftPos,
							top : "auto",
							bottom : 0,
							width : pinWidth
						}).css("position", "fixed")
						cssClass = 'pinnedBottom';
					}
				}
			}
			// set cssCLass to the pin Element
			if (options.setCssClass){
				if (self.cssClass != "" && self.cssClass != cssClass){
					self.pinned.removeClass(self.cssClass);
				}
				self.cssClass = cssClass;
				self.pinned.addClass(cssClass);
			}
		}

		this.update = function() {
			self.checkHeight();
			self.calculatePos();
			self.onScroll();
		}

		this.init = function() {
			self.pinned = $(this);
			
			// http://stackoverflow.com/questions/32875046/ios-9-safari-changing-an-element-to-fixed-position-while-scrolling-wont-paint
			// there is a glitch on ipad, when the position gets from static to fixed, the element
			// becomes invisible while it's still scrolling. fixed with a translate3d(0,0,0)
			self.pinned.css('transform', 'translate3d(0,0,0)');
			
			self.container = options.container ? self.pinned.closest(options.container)
					: $(document.body);

			if (!options.wrapContent) {
				if(self.pinned.closest(options["pinwrapper"]).length != 0)
				{
					self.pinWrapper = self.pinned.closest(options["pinwrapper"]);
				}
			} else {
				self.pinWrapper = self.pinned.wrap("<div class='pin'>").parent();
			}
			
			// set the offset 
			if(options.startonElementPositon){
				pinOffset = self.pinned.offset().top - self.container.offset().top - options.startonElementPositonOffset;
			}
			// keep the width of the original  
			if (options.keepWrapperSize){
				pinWidth = self.pinned.width();
				leftPos = "";
			}
			
			// var scrollLastFired = false;
			// self.window.scroll(function() {
			// if (!scrollLastFired) {
			// scrollLastFired = true;
			// setTimeout(function() {
			// scrollLastFired = false;
			// }, 100);
			// self.onScroll();
			// }
			// });
			// in the above sample self.onScroll gets called with the 1st scroll
			// event after 100 ms pause

			// HJW:better this way
			// see also
			// https://github.com/shichuan/javascript-patterns/tree/master/general-patterns

			// onScroll should be called if 50 ms after the last scroll events,
			// others are ignored
			var scrollTimeout; // keep scrollTimeout
			$(window).scroll(function() {
//				if (scrollTimeout) {
//					 clear the timeout, if one is pending
//					clearTimeout(scrollTimeout);
//					scrollTimeout = null;
//				}
//				scrollTimeout = setTimeout(function() {
					self.onScroll()
//				}, 50);
			});
			
			// RLT : Because of the timeout, the function is only triggered at the end of the scroll
			// and this causes the pinned area to sometimes jump around, especially when going
			// to position static to position fixed.
			// Without timeout, the transition is smoother
			
			self.window.resize(function() {
				self.update();
			});

			self.pinned.mutate("height", function() {
				self.update();
			});

			self.container.mutate("height", function() {
				self.container.trigger("heightchanged");
			});

			self.container.children().mutate("height", function() {
				self.container.trigger("heightchanged");
			});

			self.container.on("heightchanged", function() {
				self.update();
			});

			self.window.load(function() {
				self.update();
			});
			self.update();
		}

		$.extend(true, options, pOptions);
	}

	$.fn.pin = function(pOptions) {
		/*
		 * init every pinned element
		 */
		return this.each(function() {
			if (this.pin == undefined) {
				this.pin = new Pin(pOptions);
				this.pin.init.call(this);
			}
		});
	};
})(jQuery);
