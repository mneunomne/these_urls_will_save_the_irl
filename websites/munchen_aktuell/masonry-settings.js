(function($) {

$(document).ready(function() {

	var $boxes = $('.grid-item');
	$boxes.hide();

	var $container = $('#container');
	$container.imagesLoaded( function() {
		$boxes.fadeIn();

		$container.masonry({
				itemSelector : '.grid-item',
				columnwidth: '.grid-sizer',
				gutter: '.gutter-sizer',
				percentPosition: true
		});
	});
});
	
})(jQuery);