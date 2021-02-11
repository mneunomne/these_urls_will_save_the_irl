/*!
 *  BLOG
 *  (js/src/blog.js)
 *
 *  @desc			manage and animate blog-items
 *
 *  @project  HDK Essen
 *  @author 	Ansgar Hiller <ansgar@weigelstein.de>
 *  @since		01-2019
 *  @client		m.i.r.media <www.mir.de>
*/

// globals - defined and set in 'js/src/general.js'
var
WS = WS || {},
APP,
DEBUG;

jQuery(document).ready(function ($) { 'use strict';

  // init hook
  $(window).on('APP-INIT', function(e,app) {
    if (DEBUG) console.log('BLOG (blog.js) on: APP-INIT');
    APP = app;
  });

  // start hook
  $(window).on('APP-START',function(e,app) {
    if (DEBUG) console.log('BLOG (blog.js) on: APP-START');
    APP = app;

    WS.BLOG.init($('.blog-featured'),{
      type: 'masonry'
    });
  });

  // BLOG
  WS.BLOG = {

    CONTAINER: false,
    TRIGGER: false,

    init: function(parent, options)
    {
      if (typeof parent !== 'object') return false;

      options = options || {};

      var
      ITEMS   = false,
      _that   = this,
      _parent = parent,
      opt = {
				// callbacks
				before: options.beforeInserItems || false,
        after:  options.afterInserItems || false,
        type:   options.type || 'default'
      },
      _events   = $.Callbacks(),
			_dispatch = function ( fn, params, string ) {
				if ( typeof fn === 'function' ) {
					_events
						.add(fn)
						.fire( params, string )
						.remove(fn);
				}
			};

      _that.CONTAINER = _parent.find('.js-item-container') || false;
      _that.TRIGGER   = _parent.find('.js-load-more-link') || false;

      var grid = _that.CONTAINER.masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.item',
        percentPosition: true,
        stagger: 60
      });

      if (opt.type === 'masonry') {
        grid.imagesLoaded().progress( function() {
          grid.masonry('layout');
        });
      }

      if (_that.TRIGGER && _that.CONTAINER)
      {
        _that.TRIGGER.on('click',function(e){
          e.preventDefault();
          $.ajax({
              url: _that.TRIGGER.attr('href')
          }).done(function(data){
            if (data) {
              var
              _obj = $(data),
              _nexturl = _obj.data('next_url') || false;

              ITEMS = _obj.find('.item');

              if (_nexturl) {
                _that.TRIGGER.attr({ href:_nexturl});
              } else {
                _that.TRIGGER.remove();
                _that.TRIGGER = false;
              }

              _dispatch(opt.before, ITEMS);

              if (opt.type === 'masonry')
              {
                grid.append(ITEMS);
                grid.masonry('appended', ITEMS);
                grid.imagesLoaded()
                  .progress( function() {
                    grid.masonry('layout');
                  }
                );
              }

              _dispatch(opt.after, ITEMS);
            }
          });
        });
      }
    }, // end :: init

    show: function(_items)
    {
      TweenMax.staggerFromTo(_items, .75, { opacity: 0 }, { opacity: 1 }, 0.15);
    }, // end :: show

  };

});
