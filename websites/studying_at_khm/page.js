/**
 * Page. This class handles the overlays and header navigation elements
 */
(function($) {
	/**
	 * Definition of the namespace
	 */
	$.lib = $.lib || {};
	
	function Page() {
		var self = this;
		this.element = null;
		this.scrollTopDesktop = 0;
		this.lastScrollTop = null;
		this.options = {};
		
		
		this.init = function(pParameter)
		{
			self.element = $(this);
			$.extend(true, self.options, pParameter.options);
			
			// **** overlays init
			self.initSearchOverlay();
			self.initMenuOverlay();
			
			
			self.initMobileMenu();
			
			self.initScrollBehavior();
			
			/* **** sets the menu elements in the overlayMenu to the same height **** */
			self.setOverlayMenuItemsHeight();
			
			
			$( window ).resize(self.resizeHandler);
			self.resizeHandler();
			
			// ****************************************** end
			
		};
		
		this.getOptimalDesktopMenuWidth2Lines = function()
		{
			var itemWidths = [];
			var itemTotalWidth =  0;
			var maxItemWidth = 0;

			$('.desktopMenu .mainMenu li[data-depth="0"]').each(function(){
				var myWidth = $(this).outerWidth(true);
				itemWidths.push(myWidth);
				itemTotalWidth = itemTotalWidth + myWidth;
				maxItemWidth = Math.max(maxItemWidth,myWidth);
			});
			
			var theoryWidth = Math.ceil(itemTotalWidth/2);
			
			if(maxItemWidth > theoryWidth)
			{
				return maxItemWidth;
			}
			
			var optimalWidth = itemTotalWidth;
			
			var line1 = [];
			var sumLine1 = 0;
			var line2 = [];
			var sumLine2 = 0;
			
			for(var i = 0;i < itemWidths.length; i++ )
			{
				if(sumLine1 < theoryWidth)
				{
					line1.push(itemWidths[i]);
					sumLine1 += itemWidths[i];
				}
				else
				{
					line2.push(itemWidths[i]);
					sumLine2 += itemWidths[i];
				}
			}
			
			optimalWidth = Math.max(sumLine1, sumLine2);
			
			var wildValue = line1.pop();
			sumLine1 -= wildValue;
			line2.unshift(wildValue);
			sumLine2 += wildValue;
			
			optimalWidth = Math.min(optimalWidth, Math.max(sumLine1, sumLine2));
			
			return optimalWidth;
		};
		
		
		
		this.getOptimalDesktopMenuWidth3Lines = function()
		{
			var itemWidths = [];
			var itemTotalWidth =  0;
			var maxItemWidth = 0;

			$('.desktopMenu .mainMenu li[data-depth="0"]').each(function(){
				var myWidth = $(this).outerWidth(true);
				itemWidths.push(myWidth);
				itemTotalWidth = itemTotalWidth + myWidth;
				maxItemWidth = Math.max(maxItemWidth,myWidth);
			});
			
			var theoryWidth = Math.ceil(itemTotalWidth/3);
			
			if(maxItemWidth > theoryWidth)
			{
				return maxItemWidth;
			}
			
			var optimalWidth = itemTotalWidth;
			
			var line1 = [];
			var sumLine1 = 0;
			var line2 = [];
			var sumLine2 = 0;
			var line3 = [];
			var sumLine3 = 0;
			
			for(var i = 0;i < itemWidths.length; i++ )
			{
				if(sumLine1 < theoryWidth)
				{
					line1.push(itemWidths[i]);
					sumLine1 += itemWidths[i];
				}
				else if(sumLine2 + itemWidths[i] < theoryWidth)
				{
					line2.push(itemWidths[i]);
					sumLine2 += itemWidths[i];
				}
				else
				{
					line3.push(itemWidths[i]);
					sumLine3 += itemWidths[i];
				}
			}
			
			optimalWidth = Math.max(sumLine1, sumLine2, sumLine3);
			
			var wildValue = line1.pop();
			sumLine1 -= wildValue;
			line2.unshift(wildValue);
			sumLine2 += wildValue;
			
			optimalWidth = Math.min(optimalWidth, Math.max(sumLine1, sumLine2, sumLine3));
			
			var wildValue = line2.pop();
			sumLine2 -= wildValue;
			line3.unshift(wildValue);
			sumLine3 += wildValue;
			
			optimalWidth = Math.min(optimalWidth, Math.max(sumLine1, sumLine2, sumLine3));
			
			return optimalWidth;
		};
		
		this.setDesktopMenuWidth = function()
		{
			var itemTotalWidth =  0;
			
			$('.desktopMenu .mainMenu li[data-depth="0"]').each(function(){
				itemTotalWidth = itemTotalWidth + $(this).outerWidth(true);
			});
			
			var menuAvailableWidth = $('.desktopMenu .mainMenu').width();
			
			if(itemTotalWidth <= menuAvailableWidth)
			{
				$('.desktopMenu .mainMenu ul.link').css('width', 'auto');
			}
			else
			{
				var optimalWidth2Lines = self.getOptimalDesktopMenuWidth2Lines();
				if(optimalWidth2Lines < menuAvailableWidth)
				{
					$('.desktopMenu .mainMenu ul.link').css('width', optimalWidth2Lines);
				}
				else
				{
					var optimalWidth3Lines = self.getOptimalDesktopMenuWidth3Lines();
					if(optimalWidth3Lines < menuAvailableWidth)
					{
						$('.desktopMenu .mainMenu ul.link').css('width', optimalWidth3Lines);
					}
					else
					{
						$('.desktopMenu .mainMenu ul.link').css('width', 'auto');
					}
				}
			}
		};

		
		this.initSearchOverlay = function()
		{
			$('body').delegate('.header .searchLink', 'click', function(){
				self.openOverlay('overlaySearch');
				return false;
			});
			
			$('body').delegate('.overlaySearch', 'click', function(){
				self.closeOverlay('overlaySearch');
				return false;
			});
			
			$('body').delegate('.overlaySearch .overlayContent', 'click', function(event){
				event.stopPropagation();
				return true;
			});
		};
		
		this.openOverlay = function(overlayName)
		{
			/**** open the overlay ****/
			self.scrollTopDesktop = $(window).scrollTop();
			$('.pageWrapper').addClass('overlayOpen');
			$('.' + overlayName).addClass('open').css('top',0);
			$('.Page').css('top','-' + self.scrollTopDesktop + 'px');
			window.scrollTo(0,0);
			
			// hide the other overlays, to avoid having height's problems
			$('.pageOverlay:not(.' + overlayName+')').removeClass("open");
			
			if (overlayName == "overlaySearch")
			{
				setTimeout(function()
				{
					$('.' + overlayName + ' #inputSearch').focus();
				}, 100);
			}
		}
		
		this.closeOverlay = function(overlayName)
		{
			var overlayScrollTop = $(window).scrollTop();
			
			$('.pageWrapper').removeClass('overlayOpen');
			$('.' + overlayName).removeClass('open').css('top',self.scrollTopDesktop-overlayScrollTop);
			$('.Page').css('top',0);
			window.scrollTo(0,self.scrollTopDesktop);
			self.scrollTopDesktop = 0;
		}
		
		this.initMenuOverlay = function()
		{
			$('body').delegate('.header .desktopMenuIcon', 'click', function(){
				self.openOverlay('overlayMenu');
				return false;
			});
			
			// doesnt work in ios safari, maybe nested level too deep
			//$('body').delegate('.overlayMenu.pageOverlay', 'click', function(){
			$('.pageWrapper').delegate('.overlayMenu.pageOverlay', 'click', function(){
				self.closeOverlay('overlayMenu');
				return true;
			});
			
			$('body').delegate('.overlayMenu li[data-depth="0"]', 'click', function(event){
				event.stopPropagation();
				return true;
			});
		};
		
		
		this.setOverlayMenuItemsHeight = function(){
			var maxHeight = 0;
			$('.overlayMenu li[data-depth="0"]').each(function(){
				maxHeight = Math.max(maxHeight, $(this).outerHeight());
			});
			
			$('.overlayMenu li[data-depth="0"]').css("min-Height",maxHeight);
		};
		
		this.setOverlayHeight = function()
		{
			var windowHeight = $(window).height();
			$('.pageOverlay').each(function(){
				var contentHeight = $(this).find('.overlayContent').outerHeight();
				if(contentHeight < windowHeight)
				{
					$(this).css('height',windowHeight);
				}
				else
				{
					$(this).css('height', 'auto');
				}
			});
		}
		
		this.resizeHandler = function(){
			self.setDesktopMenuWidth();

			self.setOverlayHeight();
		};
		
		
		this.initMobileMenu = function()
		{
			var currentLevel = undefined;
			var scrollTopMobile = 0;
			$('.header .mobileMenuButton').click(function(){
				scrollTopMobile = $(window).scrollTop();
				$('.Page').css('top','-'+scrollTopMobile+'px');
				$('.Page').addClass('menuOpened');
				$('.Page').addClass('menuTransition');
				setTimeout(function(){ $('.Page').removeClass('menuTransition'); }, 500);
			});
			
			$('.header .closeIcon').click(function(){
				$('.Page').removeClass('menuOpened');
				$('.Page').addClass('menuTransition');
				setTimeout(function(){ $('.Page').removeClass('menuTransition'); }, 500);
				window.scrollTo(0,scrollTopMobile);
			});
			
			/**** move the caption-element in the mobilenav to fix the scroll problem (caption stayed fixed at the top screen) (via js because its a linklistwidget)*****/
			$('.mobileMenu .mobileNav').append($('.mobileMenu .nextLevelCaption'));
			$('.mobileMenu .mobileNav a').on('click', function(){
				if($(this).siblings('ul').length <= 0) return true;
				var current_item = $(this).closest('li');
				var next_level_list = current_item.children('ul');
				if(next_level_list.length != 0){
					next_level_list.addClass('show');
					currentLevel = current_item.closest('ul');
					currentLevel.addClass('move');
					var mobileNav = currentLevel.closest('.mobileNav');
					mobileNav.css('height', next_level_list.css('height'));
					var next_level_caption = mobileNav.find('.nextLevelCaption');
					next_level_caption.addClass('move');
					return false;
				}
			});
			
			$('.mobileMenu .back').on('click', function(){
				var menuContent = $(this).closest('.menuContent');
				menuContent.find('.mobileNav').css('height', currentLevel.css('height'));
				currentLevel.removeClass('move');
				soonToBePastLevel = currentLevel;
				setTimeout(function(){ soonToBePastLevel.find('li ul').removeClass('show'); }, 300);
				if(!currentLevel.hasClass('link')){
					currentLevel = currentLevel.parent().closest('ul');
				}else{
					menuContent.find('.nextLevelCaption').removeClass('move');
				}
			});
			
			$('.mobileMenu').delegate('.CustomUserLogin a.login', 'click', function(){
				$('.header .closeIcon').click();
			});
		};
		
		
		this.initScrollBehavior = function(){
			lastScrollTop = $(document).scrollTop();

			$(window).on('scroll', function(event){
				var st = $(this).scrollTop();
				
				 /**** checks wether we have scrolled ****/
				if (st > 1)
				{
					$('.Page').addClass("scrolled");
				}
				else
				{
					$('.Page').removeClass("scrolled");
				}
				
				/**** checks wether we're scrolling up or down ****/
				if (st > lastScrollTop)
				{
					$('.Page').addClass("scrollDown").removeClass("scrollUp");
				}
				else if(lastScrollTop != st)
				{
					$('.Page').removeClass("scrollDown").addClass("scrollUp");
				}
				
				lastScrollTop = st;
			});
			$(window).trigger("scroll");
		}
	}
		
	$.fn.page = function(pOptions) {
		return this.each(function() {
			if (this.page === undefined) {
				this.page = new Page();
				this.page.init.call(this, pOptions);
			}
		});
	};
})(jQuery);