(function($)
{
	$.lib = $.lib || {};
	$.lib.hash = $.lib.hash || {};
	
	$.lib.hash.getHashParam = function(pParameterName)
	{
		var url = window.location.href;
		// replace %23 with #, because of safari
		url = url.replace(/\%23/g, "#");
		
		var parts = url.split("#");
		for (var i = 1; i < parts.length; i++)
		{
			var key_value = parts[i].split(".");
			if (key_value.length >= 2)
			{
				if (key_value[0] == pParameterName)
				{
					return key_value[1];
				}
			}
		}
		return null;
	};
	
	$.lib.hash.setHashParam = function(pParameterName, pParameterValue, pParameterComment, pDeleteParameters, pLocationReplace)
	{
		var url = window.location.href;
		// replace %23 with #, because of safari
		url = url.replace(/\%23/g, "#");
		url = url.replace(/(#\/)+$/,'#');
		url = url.replace(/#+$/,'');
		
		var matchPattern = new RegExp('.*#' + pParameterName + '\\.[^\\.]+\\.?[^#]*.*', 'g');
		
		if (!!pParameterValue)
		{
			if (url.match(matchPattern))
			{
				// var replacePattern = new RegExp('#' + pParameterName + '\\.[^\\.]+\\.?[^#]*', 'g');
				var replacePattern = new RegExp('#' + pParameterName + '\\.[^#]*', 'g');
				var replaceString = "#" + pParameterName + "." + pParameterValue;
				if (pParameterComment != undefined)
				{
					replaceString += "." + pParameterComment;
				}
				url = url.replace(replacePattern, replaceString);
			}
			else
			{
				url = url + "#" + pParameterName + "." + pParameterValue;
				if (pParameterComment != undefined)
				{
					url += "." + pParameterComment;
				}
			}
		} else {
			// remove pParameterName if the value is undefined or null
			if (url.match(matchPattern))
			{
				// var replacePattern = new RegExp('#' + pParameterName + '\\.[^\\.]+\\.?[^#]*', 'g');
				var replacePattern = new RegExp('#' + pParameterName + '\\.[^#]*', 'g');
				url = url.replace(replacePattern, "");
			}
		}
		
		// if window.location.href contains # and url do not, the page will be reloaded
		if((window.location.href.indexOf("#") > -1) && (url.indexOf("#") < 0)) {
			url = url + "#";
		}
		
		if (!!pDeleteParameters)
		{
			// var replacePattern = new RegExp('#(' + pDeleteParameters + ')\\.[^\\.]+\\.?[^#]*', 'g');
			var replacePattern = new RegExp('#(' + pDeleteParameters + ')\\.[^#]*', 'g');
			url = url.replace(replacePattern, "");
		}
		
		// the url ends with an empty hash, we make sure the page doesn't jump around with adding
		// a "/"
		if (url.slice(-1) == "#")
		{
			url = url + "/";
		}
		
		if (window.location.href != url) {
			if(!!pLocationReplace) {
				window.location.replace(url);
			} else {
				window.location.href = url;
			}
		}

		
	};
})(jQuery);