;(function(window) {

	'use strict';



//Esc Key 
$.fn.escape = function(callback) {
    return this.each(function() {
        jQuery(document).on("keydown", this, function(e) {
            var keycode = ((typeof e.keyCode != 'undefined' && e.keyCode) ? e.keyCode : e.which);
            if (keycode === 27) {
                callback.call(this, e);
            };
        });
    });
};

//Menu Navigation Hamburger
var navigationRight = jQuery('.menu-wrap');

function Navigation() {
    var bodyEl = document.body,
        content = document.querySelector('#close-button'),
        openbtn = document.getElementById('open-button'),
        closebtn = document.getElementById('close-button'),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener('click', function(ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        } else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    navigationRight.escape(function() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
            classie.remove(openbtn, 'active')
        }
        isOpen = !isOpen;
    });

    init();
};

//Tabs
function Tabs() {
    [].slice.call(document.querySelectorAll('.ef-tabs')).forEach(function(el) {
        new CBPFWTabs(el);
    });
};

//Dribble 
function getDribbbleThumbs() {
    jQuery.jribbble.setToken(dribbbleToken);
    jQuery.jribbble.users(dribbbleName).shots({
        per_page: numberOfItems
    }).then(function(shots) {
        var html = [];
        shots.forEach(function(shot) {
            html.push('<div class="col-md-4 col-sm-4 col-xs-12 mix">');
            html.push('<div class="img dribbble-shot">');
            html.push('<img src="' + shot.images.normal + '">');
            html.push('<div class="overlay-thumb">');
            html.push('<div class="details">');
            html.push('<span class="title">' + shot.title + '</span>');
            html.push('</div>');
            html.push('<span class="btnBefore"></span><span class="btnAfter"></span>');
            html.push('<a class="main-portfolio-link" href="' + shot.html_url + '" target="_blank">');
            html.push('</div>');
            html.push('</div>');
            html.push('</div>');
        });
        jQuery('#work-grid').html(html.join(''));
    });
};

//Social Share Buttons
function getSocialButtons() {
    var socialButtonsEx = jQuery('.social-buttons');
    if (socialButtonsEx.length > 0) {
        jQuery('[data-social]').socialButtons();
    }
};

//Scroll Top 
$.fn.scrollToTop = function() {
    jQuery(this).hide().removeAttr('href');
    if (jQuery(window).scrollTop() != '0') {
        jQuery(this).fadeIn('slow')
    }
    var scrollDiv = jQuery(this);
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() == '0') {
            jQuery(scrollDiv).fadeOut('slow')
        } else {
            jQuery(scrollDiv).fadeIn('slow')
        }
    });
    jQuery(this).on('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'slow')
    })
};

//Detect Mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//Parallax Scroll
function parallaxScroll() {
    var scrolledY = jQuery(window).scrollTop();
    var headerImage = jQuery('.ef-parallax-bg');
    headerImage.css('background-position', 'center -' + ((scrolledY * 0.4)) + 'px');
};

//History Slider
function historySlider() {
    //History Images slide
    var historyimages = jQuery('#history-images');
    if (historyimages.length > 0) {
        historyimages.owlCarousel({
            singleItem: true,
            pagination: false,
            autoPlay: 2000,
            slideSpeed: 300
        });
    }
};


//Like
function likeEf() {
    jQuery('.like-product').on('click',  function() {
        jQuery(this).find('i').toggleClass('press');
        jQuery(this).find('i').removeClass('ion-ios-heart-outline');
        jQuery(this).find('span.like-product').toggleClass('press');
        if (jQuery(this).find('i').hasClass('press') || jQuery(this).find('i').hasClass('ion-ios-heart-outline')) {
            jQuery(this).find('.output').html(function(i, val) {
                return val * 1 + 1
            });
            jQuery(this).find('i').addClass('ion-ios-heart');
            jQuery(this).find('i').removeClass('ion-ios-heart-outline');
        } else {
            jQuery(this).find('.output').html(function(i, val) {
                return val * 1 - 1
            });
            jQuery(this).find('i').removeClass('ion-ios-heart');
            jQuery(this).find('i').addClass('ion-ios-heart-outline');

        }
    });
};




(function($) {
      function getWindowWidth() {
        return Math.max(document.documentElement.clientWidth, innerWidth || 0)
      }
	  
	  var breite = "";
	  var abstand = "";
	  if ( $( "#wookmark-filter" ).is( ".personen" ) ) {
	      breite = 177;
		  abstand = 5;
	  }
	  if ( $( "#wookmark-filter" ).is( ".vorlesungen" ) ) {
		  
	  	/*if(innerWidth > 1200){
	  			breite = 1170;
		  	}else{
		  		breite = innerWidth-40;
		  		}
		  abstand = 5;
	  	*/
	  	breite = 450;
	  	abstand = 10;
	  	if(innerWidth < 700){
	  		breite = 250;
	  		abstand = 5;
	  	}
	  	if(innerWidth < 300){
	  			breite = 290;
	  			abstand = 5;
	  		}
	  }
	  if ( $( "#wookmark-filter" ).is( ".projekte" ) ) {
	      breite = 300;
		  abstand = 10;
	  }
	  if ( $( "#wookmark-filter" ).is( ".publikationen" ) ) {
	      breite = 300;
	  	  abstand = 10;
	  }
	  if ( $( "#wookmark-filter" ).is( ".auszeichnungen" ) ) {
	      breite = 300;
	  	  abstand = 10;
	  }
	  if ( $( "#wookmark-filter" ).is( ".newslist" ) ) {
		 	abstand = 20;
	  }
	  var wookmarkcheck = jQuery("#wookmark-filter");
	  if (wookmarkcheck.length > 0) {
			  var wookmark;
		      imagesLoaded('#wookmark-filter', function() {
//		        wookmark = new Wookmark('#wookmark-filter', {
//		          fillEmptySpace: true 
//				});

			wookmark = new Wookmark('#wookmark-filter', {
				  	//itemWidth: breite, // Optional min width of a grid item
				  	
				  	//itemWidth: "50%",
				  	itemWidth: function () {
					  		if ( $( "#wookmark-filter" ).is( ".newslist" ) ) {
					  			return getWindowWidth() < 1024 ? '35%' : '20%';
					  		}else{
					  			return breite;
					  		}
					  		if ($("body").hasClass("unknown")) {
					  		    return '50%';
					  		}
				  		},
				  	outerOffset: 0,
				 	offset: abstand,
				 	autoResize: true,	// Optional the distance from grid to parent
				 	ignoreInactiveItems: true,
				 	flexibleWidth: function () {
				 		// Return a maximum width depending on the viewport
				    	return getWindowWidth() < 1400 ? '100%' : '50%';
				 	}
				});
		    });
			
		      var $filters = $('#filters li');
		      function onClickFilter(e) {
				
					wookmark.initItems();
					wookmark.updateFilterClasses();
					
					
		        var $item = $(e.currentTarget),
		            activeFilters = [],
		            filterType = $item.data('filter');
		
		        if (filterType === 'all') {
		          $filters.removeClass('active');
		        } else {
		          $item.toggleClass('active');
		
		          // Collect active filter strings
		          $filters.filter('.active').each(function() {
		            activeFilters.push($(this).data('filter'));
		          });
				  //alert(activeFilters);
		        }
		        wookmark.filter(activeFilters, 'and');
		      }
			  
		      $('#filters').on('click.wookmark-filter', 'li', onClickFilter);
			  
      }
      


                            var wookmarkcheck2 = jQuery("#wookmark-filter2");
                            if (wookmarkcheck2.length > 0) {
                                    var wookmark2;
                                    imagesLoaded('#wookmark-filter', function() {
                        //		        wookmark = new Wookmark('#wookmark-filter', {
                        //		          fillEmptySpace: true 
                        //				});

                                    wookmark2 = new Wookmark('#wookmark-filter2', {
                                            //itemWidth: breite, // Optional min width of a grid item
                                            
                                            //itemWidth: "50%",
                                            itemWidth: function () {
                                                    if ( $( "#wookmark-filter2" ).is( ".newslist" ) ) {
                                                        return getWindowWidth() < 1024 ? '35%' : '20%';
                                                    }else{
                                                        return breite;
                                                    }
                                                    if ($("body").hasClass("unknown")) {
                                                        return '50%';
                                                    }
                                                },
                                            outerOffset: 0,
                                            offset: abstand,
                                            autoResize: true,	// Optional the distance from grid to parent
                                            ignoreInactiveItems: true,
                                            flexibleWidth: function () {
                                                // Return a maximum width depending on the viewport
                                                return getWindowWidth() < 1400 ? '100%' : '50%';
                                            }
                                        });
                                    });
                                    
                                    var $filters = $('#filters2 li');
                                    function onClickFilter(e) {
                                        
                                            wookmark.initItems();
                                            wookmark.updateFilterClasses();
                                            
                                            
                                        var $item = $(e.currentTarget),
                                            activeFilters = [],
                                            filterType = $item.data('filter');
                                
                                        if (filterType === 'all') {
                                        $filters.removeClass('active');
                                        } else {
                                        $item.toggleClass('active');
                                
                                        // Collect active filter strings
                                        $filters.filter('.active').each(function() {
                                            activeFilters.push($(this).data('filter'));
                                        });
                                        //alert(activeFilters);
                                        }
                                        wookmark.filter(activeFilters, 'and');
                                    }
                                    
                                    $('#filters2').on('click.wookmark-filter2', 'li', onClickFilter);
                                    
                            }
    })(jQuery);
	
	
//Document Ready
jQuery(document).ready(function($) {
		
    jQuery('a.avoid_click').attr("href","javascript:void(0);");
        
    //jQuery('.noedit').prop('disabled', true); 
    
     
    //Navigation Sub Menu Triggering
    jQuery('.submenu, .page_item_has_children').hover(function() {
        jQuery(this).children('.level_2').stop().slideDown(200);
    }, 
    function() {
        jQuery(this).children('.level_2').stop().slideUp(200);
    });

    //Mobile Menu Open/Close 
    jQuery('#open-mobile-menu').on('click', function() {
        var self = jQuery(this);
        var mobileMenu = jQuery('.menu-wrap-2');

        if (mobileMenu.hasClass('is-open')) {
            self.removeClass('active');
            mobileMenu.removeClass('is-open');
        } else {
            mobileMenu.addClass('is-open');
            self.addClass('active');
        }
    });

    //bei personen-listings nach klick einblenden
    jQuery('.semester').on('click', function() {
        $( this ).nextUntil( ".semester", ".vorlesung" ).toggle();
    });
    jQuery('.projekte').on('click', function() {
        $( ".projekt" ).toggle();
    });


    //Dribbble
    if (jQuery('.dribble-grid').length > 0) {
        getDribbbleThumbs();
    };

    //Menu Right Side
    if (navigationRight.length > 0) {
        Navigation();
    };

    //Parallax Background on Desktop
    if (!isMobile.any()) {
        jQuery(window).on('scroll', function() {
            parallaxScroll();
        });
    };

    // Switch class on filter
    var showfilter = jQuery('.works-filter');
    jQuery('button.nav').on('click', function() {
        var self = jQuery(this);
        jQuery('button.nav').toggleClass('hidden');
        showfilter.toggleClass('open');
    });
	
	var showmenu = jQuery('.menu-wrap');
	jQuery('.close-menu').on('click', function() {
	    var self = jQuery(this);
	    showmenu.toggleClass('open');
	});
	
	jQuery('a.loginbutton').attr("href","javascript:void(0);");
	
	    	jQuery(".loginbutton").click(function(){
	        	jQuery(".mod_login").addClass("show");
	    	});
	    	
	    	jQuery(".close-login").click(function(){
	        	jQuery(".mod_login").removeClass("show");
	    	});
	    	jQuery(document).keyup(function(e) {
	    		if (e.keyCode === 27) jQuery(".top-login").removeClass("show");
	    	});
	
	
	jQuery('.close-filter').on('click', function() {
	    var self = jQuery(this);
	    jQuery('button.nav').toggleClass('hidden');
	    showfilter.toggleClass('open');
	});
	
	
    //Architecure Slider
    var archSlider = jQuery('#arch-slider');
    var prev = jQuery('.prev-slide');
    var next = jQuery('.next-slide');
    //Arch slider
    if (archSlider.length > 0) {
        archSlider.owlCarousel({
            singleItem: true,
            pagination: false,
            autoPlay: 5000,
            slideSpeed: 300,

        });
        prev.on('click', function() {
            archSlider.trigger('owl.prev');
        });
        next.on('click', function() {
            archSlider.trigger('owl.next');
        });
    };

    //Single Project Slider
    var singleProjectSlider = jQuery('.single-slider');
    if (singleProjectSlider.length > 0) {
        singleProjectSlider.owlCarousel({
            singleItem: true,
            pagination: false,
            autoPlay: 5000,
            slideSpeed: 300,

        });
        prev.on('click', function() {
            singleProjectSlider.trigger('owl.prev');
        });
        next.on('click', function() {
            singleProjectSlider.trigger('owl.next');
        });
    };

    //Team Slider
    var teamMembers = jQuery('.team');
    if (teamMembers.length > 0) {
        teamMembers.owlCarousel({
            pagination: true,
            items: 3,
            margin: 20,
            autoHeight: true,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1]
        });
    };

    //Tabs Slider
    var tabsSlider = jQuery('.owl-carousel');
    if (tabsSlider.length > 0) {
        tabsSlider.owlCarousel({
            singleItem: true,
			autoplayHoverPause: true,
            pagination: false,
            autoPlay: 18000,
            slideSpeed: 200,
        });
    };

    //Search
    var wrap = jQuery('.js-ui-search');
    var close = jQuery('.js-ui-close');
    var input = jQuery('.js-ui-text');
    close.on('click', function() {
        wrap.toggleClass('open');
    });
    input.on('transitionend webkitTransitionEnd oTransitionEnd', function() {
        if (wrap.hasClass('open')) {
            input.focus();
        } else {
            return;
        }
    });

    //Finished loader
    /*
    Pace.on("done", function() {
        jQuery(".cover").addClass('animated fadeOutRight').fadeOut(1000);
    });
    */

    
    //Magnific Popup  
    jQuery('.popup-video').magnificPopup({
        type: 'iframe',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    //Kenburnsy Slides
    jQuery('#slider-ef').kenburnsy();

    //Scroll Top
    jQuery('#scroll-top').scrollToTop();

    //Like
    likeEf();

    //Slider 
    historySlider();

    //Get social sharing
    getSocialButtons();

    //Init Tabs
    Tabs();

    //WOW Animation init 
    new WOW().init();
    
    
    
	
	jQuery('.button-group').on( 'click', '.typ', function() {
	  var thiss = jQuery(this);
	  var buttonGroup = thiss.closest('.button-group').find('.button').toggle();
	});
	
	
	

	
		
	
	
	
	
    jQuery('.button').toggle();
   
});

//Window Load
jQuery(window).on('load', function($) {
    
});


// flatten object by concatting values
function concatValues(obj) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
};



})();
		
	


