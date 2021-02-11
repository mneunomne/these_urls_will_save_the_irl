(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(['buoy'], factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(require('buoy'));
    } else {
        root.layouter = factory(root, root.buoy);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    'use strict';

    //
    // Variables
    //

    var layouter = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var settings; // Placeholder variables

    // Default settings
    var defaults = {
    	dpr: ("devicePixelRatio" in window) ? devicePixelRatio : 1,
        initClass: 'js-layouter',
        callbackBefore: function () {},
        callbackAfter: function () {}
    };


    //
    // Methods
    //

    // @todo add plugin methods here

    /**
     * Handle events
     * @private
     */
    var eventHandler = function (event) {
    	
    	updateLayout();
		/*
		// vanilla JS window width and height
		var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;
		
		var isMobile = false;
		var isFixed = false;
		if(x>1024){
			isMobile = false;
			if(y>640){
				isFixed = true;
			}
		}
		var margin = 0;
		if(isMobile){
			margin = 16;
		}
		else{
			
			var elm = document.getElementById('viewer');
			var h = parseInt(window.getComputedStyle(elm).height);
			
			margin = h - 115;
		}
		var elm = document.getElementById('masthead');
		elm.style['marginBottom'] = margin+'px';
		
		console.log("isMobile: "+isMobile+" / isFixed: "+isFixed + " / margin: "+margin);
		// @todo Do something on event
		*/
    };

    /**
     * Handle events
     * @private
     */
    var updateLayout = function () {
    	
    	/*
    	var elem = document.getElementById("navTablet");
    	if (window.getComputedStyle(elem).display === 'block') {
			//
			var elems = document.querySelectorAll('.nav--tablet .menu__list');
			var h = 0;
			for(var i=0;i<elems.length;i++){
				var elem = elems[i];
				var hElem = window.getComputedStyle(elem).height;
				//console.log(hElem);
				if(parseInt(hElem)>h){
					h = parseInt(hElem);
				}
				
			}
			var elem = document.querySelector('.nav--tablet .menu');
			elem.style.height = h+'px';
		}
		*/
    	
    	var ratio = 1059/703;
		
		// vanilla JS window width and height
		var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;

		var isMobile = true;
		var isFixed = false;
		if(x>=1024){
			isMobile = false;
			if(y>=640){
				isFixed = true;
			}
			/*
			if(x>=1280){
				if(y>=640){
					isFixed = true;
				}
			}
			*/
		}
		
		$('.log').html(x+"/"+y);
		/*
		$('.log').html(x+"/"+y+" / mobile: "+isMobile+" / fixed layout: "+isFixed);
		*/

		var margin = 0;
		if(isMobile){
			margin = 24;
		}
		else{

	
			/* menu height: 260 px */
			
			/*
			var elm = document.getElementById('viewer');
			var h = parseInt(window.getComputedStyle(elm).height);
			*/
			var w = x - 460;
			// fixed layout
			if(y >= 640){
				var offset = 300;
				if(x>=1280){
					offset = 260;
				}
				
				h = y - offset;
				w = ratio*h;
				
				//w -= 20;
				/*w = x - 430;
				w = (0.85*x) - 450;
				if(x>=1280){
					w = (0.85*x) - 450;
					w = (0.8*x) - 400;
				}
				*/
			}
			/*
			var w = x - 560;
			if(y >= 640){
				w = x - 460;
				if(x>=1280){
					w = (0.85*x) - 450;
				}
			}
			*/
			if(w>1059){
				w = 1059;
			}

			var h = Math.round(w/ratio);
			margin = h - 150;
		}
		/*
		var elm = document.getElementById('masthead');
		elm.style['marginBottom'] = margin+'px';
		var elm = document.getElementById('main');
		if(x>=1024){
			elm.style['width'] = w+'px';
		}
		else{
			elm.style['width'] = 'auto';
		}
		if(hasGallery){
			fotorama.resize();
		}
		*/
		//console.log("isMobile: "+isMobile+" / isFixed: "+isFixed + " / margin: "+margin);
		// @todo Do something on event
    };
    
    /**
     * Get device pixel ratio
     * @private
     */    
    /*
    var getDpr = function(){
    	return ("devicePixelRatio" in window) ? devicePixelRatio : 1;
    };
    */
    /**
     * Get device pixel ratio
     * @private
     */ 
    var prepareEnvironment = function(){
    	//
		var c;
		var i;
		var arr;
		var n;
		var len;
		//
		len = Math.max(screen.width,screen.height);
		//
		c = 0;
		arr = settings.breakpoints;
		n = arr.length;
		for(i=0;i<n;i++){
			if(len<=arr[i]){
				c++;
			}
		}
		// target length of image
		settings.len = settings.sizes[c];
		//
		var b;
		//
		b = false;
		if(c==0){
			b = true;
		}
		settings.isOriginal = b;
    };
  	var prepareImages = function(){	
		//
		var sliders;
		//  		
  		sliders = settings.elem;
  		
  		sliders.each(function( index, slider ) {
			//
			var arr;
			var elSlider;
			//
			elSlider = sliders.eq(index);
			
			settings.ratio = elSlider.data("ratio");
			
			arr = elSlider.children();
			arr.each(function( index ) {
				//
				var href;
				var orientation;
				/*
				var w;
				var h;
				*/
				var uri;
				//var ratio;
				
				//
				href = $(this).attr("href");
				/*
				w = $(this).data("w");
				h = $(this).data("h");
				*/
				uri = $(this).data("uri");
				//ratio = $(this).data("ratio");
				orientation = $(this).data("orientation");
				
				href = getSrc(href,uri,orientation);
				
				$(this).attr("href",href);
				
			});
		});

  	};
  	var getSrc = function(href,ref,orientation){
		//
		var isVariant;
		//var ratio;
		//var orientation;
		var len;
		//
		// isVariant = false;
		//
		
		//ratio = (w/h);
		//orientation = (ratio > 1) ? "landscape" : "portrait";
		//
		isVariant = true;	
		if(settings.isOriginal){
			if(settings.dpr>1){
				isVariant = false;
			}
		}
		if(isVariant){	
			len = settings.len;
			if(orientation=="portrait"){
				len = Math.round(len/settings.ratio);
			}
			href = getVariant(ref,len,orientation);
		}
		return href;
	};
	var getVariant = function(ref,len,orientation){
		//
		var n;
		var pt1;
		var pt2;
		var param;
		var str;
		//
		n = ref.lastIndexOf(".");
		pt1 = ref.substr(0,n);
		pt2 = ref.substr(n);
		if(settings.dpr>1){
			len*=2;
		}
		if(orientation=="landscape"){
			param = len+"x0";
		}
		else{
			param = "0x"+len;
		}
		str = settings.base+'/thumbs/'+pt1+"."+param+pt2;
		return str;
	};
	
    /**
     * Destroy the current initialization.
     * @public
     */
    layouter.destroy = function () {

        // If plugin isn't already initialized, stop
        if ( !settings ) return;

        // Remove init class for conditional CSS
        document.documentElement.classList.remove( settings.initClass );

        // @todo Undo any other init functions...

        // Remove event listeners
        /*
        document.removeEventListener('click', eventHandler, false);
		*/
		
        // Reset variables
        settings = null;

    };

    /**
     * Initialize Plugin
     * @public
     * @param {Object} options User settings
     */
    layouter.init = function ( options ) {
    	
    	// feature test
        if ( !supports ) return;

        // Destroy any existing initializations
        layouter.destroy();

        // Merge user options with defaults
        settings = buoy.extend( defaults, options || {} );

        // Add class to HTML element to activate conditional CSS
        document.documentElement.classList.add( settings.initClass );

        // @todo Do stuff...
        /*
        prepareEnvironment();
        prepareImages();
        */
		
        window.addEventListener('resize', eventHandler, false);
        updateLayout();
        /*
        // Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('resize', function ( event ) {
    console.log( 'no debounce' );

    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if ( !timeout ) {
        timeout = setTimeout(function() {

            // Reset timeout
            timeout = null;

            // Run our resize functions
            console.log( 'debounced' );

        }, 66);
    }
}, false);
*/
		/*
		document.addEventListener('resize', eventHandler, false);
		*/
        
        return;

    };


    //
    // Public APIs
    //

    return layouter;

});