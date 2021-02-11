(function($) {
	$.lib = $.lib || {};
	
	function Teaserlist(pElement)
	{
		var self = this;
		var element = $(pElement);
		
		self.filter = {};
		self.options = {
			"cookieKey" : "_filter",
			"teaserSelector" : ".SingleTeaser",
			"filter" : {},
			"items" : [],
			"cookieOverviewUriKey" : "overview_uri",
			"overviewUri" : null,
			"dynamicFlag" : false,
			"dynamicShortClassName": null,
			"dynamicParameters":
			{
				// these parameters are sent along with the ajax call
				view : "teaserList"
			},
			"topHtml" : null,
			"bottomHtml" : null
		};
		
		/**
		 * triggers the dynamic loading of a teaserlist, with the given parameters.
		 */
		this.dynamicLoading = function()
		{
			if(self.options.dynamicShortClassName != null)
			{
				var ajaxParams = {
					parameters : self.options.dynamicParameters
				};
				
				var lastModified = $('meta[name="last-modified"]').attr("content");
				if (lastModified != undefined)
				{
					ajaxParams.lastModified = lastModified;
				}
				
				$.lib.ajax("renderWidget", {
					type: 'GET', // GET needed in order to be able to ngnix cache the ajax-call
					data : ajaxParams
				}, self.options.dynamicShortClassName, self);
			}
			else
			{
				$.lib.Debug.error("teaserlist.js : the option dynamicShortClassName can't be empty when performating a dynamic loading");
			}
		}
		
		/**
		 * handles the data retrieved by the ajax call "renderWidget". It switches the current
		 * teaserList with the data received.
		 */
		this._renderWidgetSuccess = function(response, ajaxOptions)
		{
			if (response.htmlContent != null && response.htmlContent != "")
			{
				if (self.options.topHtml != null && self.options.topHtml != "")
				{
					element.before(self.options.topHtml);
				}
				if (self.options.bottomHtml != null && self.options.bottomHtml != "")
				{
					element.after(self.options.bottomHtml);
				}
			}
			element.replaceWith(response.htmlContent);
		}
		
		/**
		 * handling when an error occurs with the ajax call
		 */
		this._renderWidgetError = function(response, ajaxOptions)
		{
			console.debug("renderWidgetError");
		}
		
		
		this.handleTeaserClick = function(event)
		{
			// updates the cookie/local storage
			if ($.localStorage != undefined)
			{
				var storageValue = {
					"filter" : self.options.filter,
					"items" : self.options.items
				}
				if(self.options.overviewUri != null) {
					storageValue[self.options.cookieOverviewUriKey] = self.options.overviewUri; 
				}
				
				$.localStorage.set(self.options.cookieKey, storageValue);
			}
		}
		
		this.init = function(pOptions)
		{
			$.extend(true, self.options, pOptions);
			
			element.delegate(self.options.teaserSelector, "click", self.handleTeaserClick);
			
			if(self.options.dynamicFlag)
			{
				self.dynamicLoading();
			}
		}
	}
	
	$.fn.teaserlist = function(pOptions)
	{
		return this.each(function()
		{
			if (this.teaserlist === undefined)
			{
				this.teaserlist = new Teaserlist(this);
				this.teaserlist.init.call(this,pOptions);
			}
		});
	};
})(jQuery);