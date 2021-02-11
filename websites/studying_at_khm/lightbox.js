(function($) {
	$.lib = $.lib || {};

	function Lightbox(pElement, pOptions) {
		var self = this;
		self.element = $(pElement);

		self.lightbox = null;
		self.lightboxIsOpen = false;
		self.lightboxSlides = null;
		self.lightboxPagination = null;
		self.lightboxNextButton = null;
		self.lightboxPreviousButton = null;

		self.activeSlideIndex = 0;
		self.lightboxScrollOffset = null;

		var options = {
			"lightboxSelector" : ".lightbox",
			"lightboxHideContent" : ".pageWrapper",
			"callbackAfterShow" : null,
			"onResize" : null,
			"wysiwygTop" : "128px",
			"openSelector" : "[rel^='lightbox']",
			"openSelectorWrapper" : null,
			"preventOpenSelector" : null,
			"slideSelector" : ".stage .SetImage",
			"changeSlideSelector" : "[data-slide-index]",
			"paginationSelector" : ".pagination",
			"nextSlideSelector" : ".nextImage",
			"previousSlideSelector" : ".previousImage",
			"maxItemSelector" : "img",
			"closeSelector" : ".close"
		};
		$.extend(true, options, pOptions);

		function closeLightboxHandler() {
			self.lightboxIsOpen = false;
			$(options.lightboxHideContent).show();
			self.lightbox.find("audio,video").trigger("pause");
			self.lightbox.detach();
			$(window).trigger("resize");
			self.lightbox.removeClass('descriptionExpanded');
			
			$("html,body").scrollTop(self.lightboxScrollOffset);
			self.lightboxScrollOffset = null;
		}

		function openLightboxHandler() {
			// open the lightbox only when we're not editing.
			if ($(this).closest('#wysiwyg.edit').size() <= 0) {
				if (options['preventOpenSelector']) {
					if (self.element.find(options['preventOpenSelector']).addBack(
							options['preventOpenSelector']).size() > 0) {
						return true;
					}
				}
				if ($(this).closest('#wysiwyg').size() > 0) {
					self.lightbox.css("top", options["wysiwygTop"]);
				}

				var startIndex = $(this).data("slide-index");
				if (startIndex != undefined) {
					self.activeSlideIndex = startIndex;
				}

				self.lightboxScrollOffset = $("html").scrollTop() || $("body").scrollTop();

				$(options.lightboxHideContent).hide();

				// detach if the lightbox is the first time opened
				// the video must be init before detach it
				self.lightbox.detach();
				self.lightbox.removeClass("hidden");

				self.lightbox.find("picture[data-srcset]").each(function() {
					var picture = $(this);
					var srcset = $.parseJSON(picture.attr("data-srcset"));
					var documentFragment = $(document.createDocumentFragment());
					$.each(srcset, function(i, sourceValues){
						var sourceTag = $('<source>');
						sourceTag.attr('srcset', sourceValues.srcset);
						sourceTag.attr('media', sourceValues.media);
						documentFragment.append(sourceTag);
					});
					picture.prepend(documentFragment);
					picture.removeAttr("data-srcset");
				});
				
				self.lightbox.find("img").each(function() {
					var image = $(this);
					var srcset = image.attr("data-srcset");
					if (srcset) {
						image.attr("srcset", srcset).removeAttr("data-srcset");
					}
					var src = image.attr("data-src");
					if (src) {
						image.attr("src", src).removeAttr("data-src");
					}
				});
				
				changeSlide(self.activeSlideIndex);
				$("body").append(self.lightbox);
				self.lightboxIsOpen = true;
				self.lightbox.show();
				handleResize();

				if ($.isFunction(options['callbackAfterShow'])) {
					options['callbackAfterShow'].call(this);
				}
				return false;
			}
		}

		function setPagination(current, amount) {
			self.lightboxPagination.html((current + 1) + "&nbsp;/&nbsp;" + amount);
		}

		function changeSlide(pIndex) {
			var index = parseInt(pIndex);
			if (index < 0) {
				index = 0;
			} else if (index >= self.lightboxSlides.length) {
				index = self.lightboxSlides.length - 1;
			}
			self.activeSlideIndex = index;
			setPagination(self.activeSlideIndex, self.lightboxSlides.length);

			// update slide
			self.lightbox.find(".active").removeClass("active");
			$(self.lightboxSlides[self.activeSlideIndex]).addClass('active');

			// update navigation
			self.lightbox.find("[data-slide-index=" + self.activeSlideIndex + "]").addClass(
					'active');

			if (self.lightboxPreviousButton) {
				// update next previous buttons
				if (self.activeSlideIndex > 0) {
					self.lightboxPreviousButton.addClass("visible");
				} else {
					self.lightboxPreviousButton.removeClass("visible");
				}
			}

			if (self.lightboxNextButton) {
				if (self.activeSlideIndex < self.lightboxSlides.length - 1) {
					self.lightboxNextButton.addClass("visible");
				} else {
					self.lightboxNextButton.removeClass("visible");
				}
			}
		}

		function initSlideshow() {
			// slides
			self.lightboxSlides = self.lightbox.find(options["slideSelector"]).toArray();

			// pagination
			self.lightboxPagination = self.lightbox.find(options["paginationSelector"]);
			setPagination(0, self.lightboxSlides.length);

			if (self.lightboxSlides.length < 2) {
				// no slideshow with 1 slide
				return;
			}

			// change slide
			self.lightbox.on('click', options["changeSlideSelector"], function() {
				changeSlide($(this).attr('data-slide-index'));
			});

			// previous slide
			self.lightboxPreviousButton = self.lightbox.find(options["previousSlideSelector"]);
			if (self.lightboxPreviousButton[0]) {
				self.lightboxPreviousButton.on("click", function() {
					changeSlide(self.activeSlideIndex - 1);
				});
				self.lightbox.on('swiperight', function() {
					changeSlide(self.activeSlideIndex - 1);
				});
			}

			// next slide
			self.lightboxNextButton = self.lightbox.find(options["nextSlideSelector"]);
			if (self.lightboxNextButton[0]) {
				self.lightboxNextButton.on("click", function() {
					changeSlide(self.activeSlideIndex + 1);
				});
				self.lightbox.on('swipeleft', function() {
					changeSlide(self.activeSlideIndex + 1);
				});
			}
			// touch / move slide
			self.lightbox.on(
					'movestart',
					function(event) {
						if ((event.distX > event.distY && event.distX < -event.distY)
								|| (event.distX < event.distY && event.distX > -event.distY)) {
							event.preventDefault();
							return;
						}
						self.lightbox.addClass('notransition');
					}).on('move', function(e) {
				var activeSlide = $(self.lightboxSlides[self.activeSlideIndex]);
				var nextSlide = activeSlide.next()[0];
				var previousSlide = activeSlide.prev()[0];

				var width = self.lightbox.width();
				var left = 100 * e.distX / width;
				// Move slides with the finger
				if (e.distX < 0) {
					if (nextSlide) {
						activeSlide[0].style.left = left + '%';
						nextSlide.style.left = (left + 100) + '%';
					} else {
						activeSlide[0].style.left = left / 4 + '%';
					}
				}
				if (e.distX > 0) {
					if (previousSlide) {
						activeSlide[0].style.left = left + '%';
						previousSlide.style.left = (left - 100) + '%';
					} else {
						activeSlide[0].style.left = left / 4 + '%';
					}
				}
			}).on('moveend', function(e) {
				self.lightbox.removeClass('notransition');
				var activeSlide = $(self.lightboxSlides[self.activeSlideIndex]);
				var nextSlide = activeSlide.next()[0];
				var previousSlide = activeSlide.prev()[0];

				activeSlide[0].style.left = '';
				if (nextSlide) {
					nextSlide.style.left = '';
				}
				if (previousSlide) {
					previousSlide.style.left = '';
				}
			});
		}

		var resizeTimeout = null;
		function handleResize(event) {
			if (resizeTimeout != undefined) {
				clearTimeout(resizeTimeout);
				resizeTimeout = null;
			}

			if (self.lightboxIsOpen) {
				var maxWidth = self.lightbox.css("width");
				var maxHeight = self.lightbox.css("height");
				var item = $(self.lightboxSlides).find(options["maxItemSelector"]);
				item.css("max-height", maxHeight).css("max-width", maxWidth);
				
				if ($.isFunction(options['onResize'])) {
					options['onResize'].call(this);
				}
			}
		}
		this.init = function() {
			self.lightbox = self.element.find(options["lightboxSelector"]);
			if (!self.lightbox[0]) {
				return false;
			}

			self.lightbox.on("click", options["closeSelector"], closeLightboxHandler);
			if(options["openSelectorWrapper"] != undefined) {
				$(options["openSelectorWrapper"]).on("click", options["openSelector"], openLightboxHandler);
			} else {
				self.element.on("click", options["openSelector"], openLightboxHandler);
			}

			// ESC
			function handleKeyDown(event) {
				if (event.which == '27') {
					event.preventDefault();
					closeLightboxHandler();
				}
			}
			$(document).on('keydown', handleKeyDown);

			initSlideshow();

			$(window).on('resize', function(event) {
				if (resizeTimeout == undefined) {
					resizeTimeout = setTimeout(handleResize, 300, event);
				}
			});
		}
		self.init();
	}

	$.fn.lightbox = function(pOptions) {
		return this.each(function() {
			if (this.lightbox === undefined) {
				this.lightbox = new Lightbox(this, pOptions);
			}
		});
	};
})(jQuery);