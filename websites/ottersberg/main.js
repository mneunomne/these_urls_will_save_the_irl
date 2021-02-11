function clearLabel(o,text) {
			if(o.value==text) o.value="";
		}
	
		function insertLabel(o,text) {
			var letters = /[a-z]+/i.test(o.value);
			if (!letters) o.value=text;
		}
	
		function openLink(o) {
			var link = o.getElementsByTagName("a")[0];
			if (!link.onclick) {
				location.href = link.href;
			}
		} 
		
		jQuery(document).ready(function($) {
			
			var $inputControl = $(".labelinside>input, .labelinside>textarea");
			$inputControl.each(function (index, domElement) { /*@cc_on if (document.documentMode && document.documentMode >= 8) @*/ if ($(this).parent().css("display") == "inline") $(this).parent().css("display", "inline-block"); if (!$(this).val()) $(this).parent().children("label").show(); });
			$inputControl.bind("focus", function(event) { $(this).parent().children("label").hide(); }); $inputControl.bind("blur", function(event) { if (!$.trim($(this).val())) $(this).parent().children("label").show(); });
			
			
			$("#imageSlider img, #mainMedia img, .textBlock img").filter(function(){
				thestring = $(this).attr("alt");
				if(thestring) {
					out = thestring.substr(thestring.indexOf("©"));
					$(this).filter("[alt*='©']").after("<div class=\"copyright\"><span>"+out+"</span></div>");
				}
			});
			
			var topSlider = $('#imageSlider').royalSlider({
				arrowsNavHideOnTouch: true,
				autoScaleSlider: true,
				autoScaleSliderWidth: 600,
				autoScaleSliderHeight: 400,
				autoHeight: true,
				transitionSpeed:800,
				easeInOut:"easeInOutQuad",
				imageScalePadding: 0,
		    	fullscreen: {
		    		enabled: true,
		    		nativeFS: false
		    	}
		    }).data('royalSlider'); 
		
			var topSlider = $('.blockSlider').royalSlider({
				arrowsNavHideOnTouch: true,
				autoScaleSlider: true,
				autoScaleSliderWidth: 600,
				autoScaleSliderHeight: 400,
				autoHeight: true,
				transitionSpeed:800,
				easeInOut:"easeInOutQuad",
				imageScalePadding: 0,
		    	fullscreen: {
		    		enabled: true,
		    		nativeFS: false
		    	}
		    }).data('royalSlider'); 
		
		
			var uniSlider = $('.eventSlider').royalSlider({
				arrowsNavHideOnTouch: true,
				autoScaleSlider: false,
				imageScalePadding: 0,
				easeInOut:"easeInOutQuad",
				autoScaleSlider: false,
				transitionSpeed:800,
		    	autoPlay: {
		    		enabled: true,
		    		pauseOnHover: true,
		    	}
		    }).data('royalSlider'); 
		
				
			$("#mainNav").dropmenu({
				openAnimation: "fade",  
				closeAnimation: "fade",  
				openClick: false,  
				openSpeed: 0,
				closeSpeed: 0,
				closeDelay: 200
			});  
		
			
			$("#upLink a").click(function() {
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
					}, {
					duration: 1000,
					easing: "easeInOutQuad"
				});
				return false;
			});
			
			
			var stat = "closed";
			$(".info__icon").click(function(e) {
				if(stat=="closed") { $("#tabhide").animate({ width: 'show' }, { queue:false, duration:200 }, "easeout"); stat = "open"; }else{ $("#tabhide").animate({ width: 'hide' }, { queue:false, duration:200 }, "easeout"); stat = "closed"; }
				e.preventDefault();
			});
			
			window.addEventListener("orientationchange", function() {
    			if($(window).width() >= 1024) { $("#tabhide").animate({ width: 'show' }, { queue:false, duration:200 }, "easeout"); stat = "open"; }else{ $("#tabhide").animate({ width: 'hide' }, { queue:false, duration:200 }, "easeout"); stat = "closed"; }
			}, false);
			
			$(".rightTeaser").click(function(){
			  if($(window).width() < 1024) { $("#tabhide").animate({ width: 'hide' }, { queue:false, duration:200 }, "easeout"); stat = "closed"; }
			});

			$("#finalB").css("display", "block");
			
		});