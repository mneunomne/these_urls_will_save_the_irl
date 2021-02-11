(function($) {

	$.lib = $.lib || {};

	/**
	 * Adds the class 'first' to the widgets of given selector, when they're
	 * supposed to be the first in a row. This is used when widgets added with
	 * D&D as page content are floating.
	 * 
	 * @param String
	 *            cssSelector | css selector of the widget (one or several
	 *            class(es), no white spaces, just the classes of the widget
	 *            involved, no classes of its parents! for instance :
	 *            .Widget.CustomBlog)
	 * @param Integer
	 *            numberPerRow | max number of widgets in a row
	 */
	$.lib.applyFirstClass = function(cssSelector, numberPerRow) {

		var editMode = $('#wysiwyg').length > 0;

		var numberOfWidgetInRow = 0;
		var selector = "";

		if (editMode) {
			selector = '.Page .pageItem .pageContentElement > div:first-child';
		} else {
			var selector = '.Page .content > *';
		}

		$(selector).each(function(index) {
			if ($(this).is(cssSelector)) {
				if (numberOfWidgetInRow == 0) {
					$(this).addClass('first');
				}
				numberOfWidgetInRow++;
				if (numberOfWidgetInRow >= numberPerRow) {
					numberOfWidgetInRow = 0;
				}
			} else {
				numberOfWidgetInRow = 0;
			}
		});
	};

})(jQuery);