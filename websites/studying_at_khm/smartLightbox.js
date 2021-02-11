(function($) {
	$.lib = $.lib || {};
	
	function SmartLightboxEntity(pElement, pOptions) {
		var entity = this;
		entity.options = pOptions;
		entity.element = $(pElement);
		
		entity.smartLightboxScope = null;
		entity.smartLightbox = null;
		entity.smartLightboxElements = null;
		
		function initSmartLightbox(pElement) {
			// elements with eqivalent scope
			entity.smartLightboxScope = getScope(pElement);
			entity.smartLightboxElements = $('[data-scope="' + entity.smartLightboxScope + '"][data-smartlightbox-type]');
			
			// initialise stage and elements
			entity.smartLightbox = entity.options.smartLightboxStage;
			var widgets = "";
			var navigationItems = "";
			
			entity.smartLightboxElements.each(function(index, item){
				$(this).attr('data-slide-index', index);
				var $smartlightboxType = $(this).attr('data-smartlightbox-type');
				var navigationItem = entity.options.smartLightboxNavigationItem;
				navigationItem = navigationItem.replace(/###slideIndex###/gi, index);
				navigationItems += navigationItem;
				
				switch($smartlightboxType){
					case "image":
						widgets += replaceElementAttributes(entity.options.smartLightboxImage, $(this));
						break;
						
					case "video":
						break;
						
					case "audio":
						break;
						
					default: 
				}
			});
			
			// all widgets as string replace ###content###
			entity.smartLightbox = entity.smartLightbox.replace(/###content###/gi, widgets);
			entity.smartLightbox = entity.smartLightbox.replace(/###navigation###/gi, navigationItems);
			entity.smartLightbox = entity.smartLightbox.replace(/###scope###/gi, entity.smartLightboxScope);
			$(entity.options.smartLightboxWrapper).append(entity.smartLightbox);
			
			$(".lightbox[scope='"+ entity.smartLightboxScope +"']").on("click", ".absbottom", function(event) {
				$(this).closest(".lightbox").toggleClass("descriptionExpanded");
			});
		}
		
		function replaceElementAttributes (pTemplate, pElement){
			var template = pTemplate;
			
			template = template.replace(/###uuid###/gi, pElement.attr('data-uuid'));
			template = template.replace(/###filename###/gi, pElement.attr('data-filename'));
			template = template.replace(/###alt###/gi, pElement.attr('data-alternative'));
			
			var text = ['title', 'description', 'copyright'];
			var countItems = 0;
			
			$.each(text, function(index, item){
				var attribute = " ";
				if(pElement.attr('data-'+ item)!== ""){
					countItems++;
					var dataContent = pElement.attr('data-'+item).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
					
					attribute = "<div class='textWrapper '>"+ dataContent +"</div>";
				}
				var regEx = new RegExp(`###${item}###`);
				template = template.replace(regEx, attribute);
			});
			
			if(countItems == 1){
				template = template.replace('textWrapper ', 'textWrapper fullHeight');
			}
			
			return template;
		}
		
		initSmartLightbox(entity.element);
	}
	
	getScope = function(pElement){
		var scope = $(pElement).attr("data-scope");
		return scope;
	}
	function SmartLightbox(pOptions) {
		var self = this;
		self.smartLightboxScopes = [];
		
		var options = {
				"smartLightboxWrapper" : "#smartLightboxWrapper",
				"smartLightboxStage" : "",
				"smartLightboxImage" : "",
				"smartLightboxNavigationItem" : "<li class='navigationItems ss-record ss-standard' data-slide-index='###slideIndex###'></li>",
				"smartLightboxClickSelector": "div[data-smartlightbox-type]"
			};
		$.extend(true, options, pOptions);
		
		function openLightbox(pElement) {
			var currentScope = getScope(pElement);
			var openSelector = options.smartLightboxClickSelector;
			
			if ($(pElement).attr('data-click-selector')){
				openSelector = $(pElement).attr('data-click-selector');
			}
			
			var lightboxOptions = {
					'openSelectorWrapper' : 'body',
					'openSelector' : openSelector,
					'lightboxSelector' : ".smartLightbox[scope='"+ currentScope +"']"
			};
			
			// lightbox initialisieren
			$(options.smartLightboxWrapper).lightbox(lightboxOptions);
		}
		
		/**
		 * Init function
		 */
		this.init = function() {
			// get all Dom-elements with smartlighbox-type or click selector
			var allClickableElements = $(options.smartLightboxClickSelector +', [data-click-selector]');
			
			if(allClickableElements.length >= 1){
				// go over all clickable elements bevore click to set count info on first image
				allClickableElements.each(function(){
					var scope = getScope(this);
					
					if(scope !== undefined && self.smartLightboxScopes[scope] === undefined) {
						self.smartLightboxScopes[scope] = false;
						var scopeElements = $('[data-scope="' + scope + '"][data-smartlightbox-type]');
						
						// get first element and change icon
						$(scopeElements[0]).addClass('smartLightbox');
						if(scopeElements.length > 1){
							$(scopeElements[0]).append('<div class="count">+ '+ (scopeElements.length - 1) +'</div>');
						}else{
							$(scopeElements[0]).append('<div class="zoom">+</div>');
						}
					}
				});
			}
			// init smartLightbox Entity
			allClickableElements.on('click', function() {
				var currentScope = getScope(this);
				if(!self.smartLightboxScopes[currentScope] || self.smartLightboxScopes[currentScope] === undefined) {
					self.smartLightboxScopes[currentScope] = new SmartLightboxEntity($(this), options);
				}
				
				// open lightbox
				openLightbox($(this));
			});
		};
		
		self.init();
	}
	
	$.fn.smartLightbox = function(pOptions) {
		if($.lib.smartLightbox == undefined) {
			$.lib.smartLightbox = new SmartLightbox(pOptions);
		}
	};
})(jQuery);