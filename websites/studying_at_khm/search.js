(function($)
{
	$.lib = $.lib || {};
	
	function Search()
	{
		var self = this;
		this.strUri = "";
		
		function init()
		{
			this.strUri = arguments[1][0]['uri'];
			
			$("body").delegate(".submit form[name=formSearch]", "submit", this.formSubmit);
			$("body").delegate(".submit input[name=submitSearch]", "submit", this.formSubmit);
			$("body").delegate(".redirect form[name=formSearch]", "submit", this.redirect);
			$("body").delegate(".redirect input[name=submitSearch]", "submit", this.redirect);
			
			$("body").delegate(".searchWidget .inputSearchIcon","click",function()
			{
				$(this).closest("[name=formSearch]").trigger("submit");
			});
			
			$("body").delegate(".searchResults .loadMore", "click", this.loadMore);
		}
		
		this.redirect = function()
		{
			if ($(this).closest(".redirect").find("input[name=inputSearch]").val() != "")
			{
				location.href = self.strUri + "?s=" + encodeURIComponent($(this).closest(".redirect").find("input[name=inputSearch]").val());
			}
			
			return false;
		}
		
		this.formSubmit = function()
		{
			if ($(".submit input[name=inputSearch]").val() != "")
			{
				var aData = {};
				aData['query'] = $(".submit input[name=inputSearch]").val();
				$.lib.ajax('search',
				{
					data: { searchData: aData }
				}, "custom_search", self);
			}
			
			return false;
		}
		
		this._searchSuccess = function(response, ajaxOptions)
		{
			if (ajaxOptions.data.searchData.page != undefined)
			{
				$(".searchResults .gif").hide();
				var results = $(response.data).find(".searchData li");
				var page = $(response.data).attr("data-page");
				var counter = $(response.data).attr("data-counter");
				var hits = $(response.data).attr("data-hits");
				$(".searchData").append(results);
				$(".searchResults[data-page]").attr("data-page", page);
				$(".searchResults .counter span:first").text(counter);
				$(".searchResults .counter span:last").text(hits);
				
				if (page == undefined || page == "")
				{
					$(".searchResults .loadMore").hide();
				}
			}
			else
			{
				$(".searchResults").replaceWith(response.data);
			}
		}
		
		this._searchError = function(response, ajaxOptions)
		{
		}
		
		this.loadMore = function()
		{
			var search = $(".searchResults[data-submitted]").attr("data-submitted");
			var page = $(".searchResults[data-page]").attr("data-page");
			
			if (search != undefined && search != "" && 
				page != undefined && page != "")
			{
				var aData = {};
				aData['query'] = search;
				aData['page'] = page;
				$.lib.ajax('search',
				{
					data: { searchData: aData }
				}, "custom_search", self);
				
				$(".searchResults .gif").show();
			}
			
			return false;
		}
		
		return init.apply(this, arguments);
	};
	
	$.fn.Search = function(pOptions)
	{
		if ($.lib.Search == undefined)
		{
			$.lib.Search = new Search(this, arguments);
		}
	};
})(jQuery);
