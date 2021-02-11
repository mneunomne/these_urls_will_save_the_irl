
;(function($) {
	$('.csc-textpic-imagewrap,.ce-textpic,.news-img-wrap,.img-wrap,.image-wrap').each(function() {
		$(this).magnificPopup({
			delegate: 'a:isImageFile',
			tClose: 'Close (Esc)',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: 1,
				preload: [1,2],
				navigateByImgClick: 1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				tPrev: 'Previous (Left arrow key)',
				tNext: 'Next (Right arrow key)',
				tCounter: '%curr% of %total%'
			},
			image: {
				cursor: 'mfp-zoom-out-cur',
				titleSrc: 'title',
				verticalGap: 88,
				verticalFit: 1,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			removalDelay: 0
		});
	});
})(window.jQuery || window.Zepto);