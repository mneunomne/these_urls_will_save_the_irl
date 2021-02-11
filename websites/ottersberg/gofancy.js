jQuery(document).ready(function($) {
	$("a[rel=fancygroup]").fancybox({
		'titleShow'	: 'true',
		'titlePosition'	: 'over',
		'easingIn'      : 'easeOutBack',
		'easingOut'     : 'easeInBack',
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'speedIn'		: '500',
		'speedOut'		: '500',
		'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title ? ' &nbsp; ' + title : '') + '</span>';
		}

	});
});