(function($) {
	
	$.lib = $.lib || {};
	
	/**
	 * 
	 * @param String
	 *            selector
	 */
	$.lib.formatJSONinput = function(pSelector) {
		var object = $(pSelector);
		var text = $.lib.formatJSON(object.val());
		object.val(text);
	};
	
	/**
	 * 
	 * @param String
	 *            json string
	 */
	$.lib.formatJSON = function(pText) {
		var obj = null;
		var text = pText;
		try {
			obj = JSON.parse(pText);
		} catch (e) {
		}
		if (obj !== null)
		{
			text = JSON.stringify(obj, null, "     ");
		}
		
		return text;
	};
	
	
	/**
	 * can be used on inputs to prevent the typing of letters and special characters. It only
	 * allows numbers comma, point, and the keys for editing (back, ...)
	 */
	$.fn.forceNumeric = function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.which || e.keyCode;
				
				if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
				// numbers   
				key >= 48 && key <= 57 ||
				// Numeric keypad
				key >= 96 && key <= 105 ||
				// comma, period and minus, . on keypad
				key == 190 || key == 188 || key == 109 || key == 110 ||
				// Backspace and Tab and Enter
				key == 8 || key == 9 || key == 13 ||
				// Home and End
				key == 35 || key == 36 ||
				// left and right arrows
				key == 37 || key == 39 ||
				// Del and Ins
				key == 46 || key == 45)
					return true;
				return false;
			});
		});
	}
	
	
})(jQuery);


