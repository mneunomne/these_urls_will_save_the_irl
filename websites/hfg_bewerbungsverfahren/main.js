var elm;
//elm = $("html");
//elm.removeClass("no-js");
//elm.addClass("js");

new CircleType(document.getElementById('splash__note')).radius(90);
$('#splash').addClass("splash--active");
arr = $('.splash__note span');
  		/*arr.each(function( index ) {
  			$(this).addClass('animate');
  			$(this).addClass('fadeIn');
		});*/
function onNavigationAction(b){
}
var fotorama;
var hasGallery = false;
function setupGallery(){	
	
	return;
	
	if($('.fotorama').length>0){
		
		hasGallery = true;
  /* slider */
 
	elem = $('.fotorama');
	
	
	
		var $fotoramaDiv = $('.fotorama').on('fotorama:showend', function (e, fotorama) {
		//
		var inst;
		var arr;
		//
		/*
		inst = $('.captions').eq(fotorama.index);
  		arr = inst.children();
  		*/
  		arr = $('.fotorama__nav__frame--dot');
  		arr.each(function( index ) {
  			$(this).removeClass('fotorama__active');
		});
		arr.eq(fotorama.activeIndex).addClass('fotorama__active');
		arr = $('.captions__item');
  		arr.each(function( index ) {
  			$(this).removeClass('captions__item--active');
		});
		arr.eq(fotorama.activeIndex).addClass('captions__item--active');
	

	}).fotorama({
  		spinner: {
    		lines: 13,
    		color: 'rgba(0, 0, 0, .75)'
  		}
	});
	
	fotorama = elem.fotorama().data('fotorama');
	
	}
}
	
	

	// old IE
	if (!document.addEventListener) {

		setupGallery();
		/*return;*/
	}
	else{

	/* responsive navigation */
	/*
	*/
	/*var nav = responsiveNav(".nav-collapse", { // Selector
  		animate: false, // Boolean: Use CSS3 transitions, true or false
  		transition: 284, // Integer: Speed of the transition, in milliseconds
  		label: "Menu", // String: Label for the navigation toggle
  		insert: "before", // String: Insert the toggle before or after the navigation
  		customToggle: "nav-toggle", // Selector: Specify the ID of a custom toggle
  		closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  		openPos: "relative", // String: Position of the opened nav, relative or static
  		navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
  		navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
  		jsClass: "js", // String: 'JS enabled' class which is added to element
  		init: function(){}, // Function: Init callback
  		open: function(){onNavigationAction(false)}, // Function: Open callback
  		close: function(){onNavigationAction(true)} // Function: Close callback
	});*/
setupGallery();

  /* layout */
	layouter.init();
	
	/*
	$('#btn-navigation-chapter').on('click', function() {
  		$.smoothScroll({
    		scrollTarget: '#navigation-chapter'
  		});
  	return false;
});*/
	
}