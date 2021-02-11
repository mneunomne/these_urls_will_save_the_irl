/* cookie workaround for see view back link action */
function setLocationCookie( cname, cvalue, exdays ) {
    document.cookie = cname + "=" + cvalue + "; expires=Sun, 06 Nov 2022 21:43:15 GMT; path=/";
}

function getLocationCookie( cname ) {
  var name = cname + "=";
  var ca = document.cookie.split( ';' );
  for( var i = 0; i < ca.length; i++ ) {
    var c = ca[i].trim();
    if( c.indexOf( name ) == 0 ) return c.substring( name.length, c.length );
  }
  return "";
}

/*handle link clicks which refer to project see mode pages*/
function projectLinkClickHandler(e, link){
  e.preventDefault();
  var url = document.location.pathname;
  setTimeout( function() {
    setLocationCookie( 'lastPage', url, 'test' );
  }, 700 );
  document.location.href = $( link ).attr( 'href' );
}
/* end of cookie workaround*/

$( document ).ready( function() {
  /* second navigation contact link handling */
  var links = $('ul#sec-nav a');
  links.each(function(){
    if(this.pathname == '/impressum.html'){
      $(this ).on('hover', function(){
          $('.contact-info' ).fadeIn();
      });
      $(this ).on('mouseout', function(){
        $('.contact-info' ).fadeOut();
      });
    }
  });


  $( 'span.hover-arrow' ).css( 'color', '#fe0000'  );
  /* set and remove menu link random color on sublist opening */
  var menuList = $( '#cssmenu ul' );
  menuList.on( 'mouseover', function() {
    $( 'span.hover-arrow' ).css( 'color', '#fe0000' );
    var parentItem = $( this ).prev( 'a' );
    parentItem.children( 'span.hover-arrow' ).css( 'display', 'block' );
    if( parentItem.length === 1 && !$( parentItem ).hasClass( 'active' ) ) {
      $( parentItem ).css( 'color', '#fe0000' );
    }
  } );

  menuList.on( 'mouseout', function() {
    var parentItem = $( this ).prev( 'a' );
    parentItem.children( 'span.hover-arrow' ).css( 'display', 'none' );
    if( parentItem.length === 1 && !$( parentItem ).hasClass( 'active' ) ) {
      $( parentItem ).css( 'color', '#333' );
    }
  } );


  /*check project link clicks and handle with cookies*/
  $( 'a.loadProject' ).on( 'click', function( event ) {
    projectLinkClickHandler(event, this);
  } );
  $( 'a.project.rollover' ).on( 'click', function( event ) {
    projectLinkClickHandler(event, this);
  } );

  /**** project detail see backlink ****/
  var seeLink = $( '.see_exit a' );
  seeLink.on( 'click', function( e ) {
    e.preventDefault();
    var lastUrl = getLocationCookie( 'lastPage' );
    document.location.href = lastUrl;
  } );

  $( 'a.project.rollover' ).hover(
    function() {
      $( this ).find( 'div.project-box' ).hide();
      $( this ).find( 'div.project-thumb' ).show();
    },
    function() {
      $( this ).find( 'div.project-thumb' ).hide();
      $( this ).find( 'div.project-box' ).show();
    }

  );

  /** HERE SOME WORKAROUND BEGINS / Ricardo Hildebrand **/

  /* footer margin in list view with full border */
  var footer = $('footer' ),
      searchList = $('ul.search_list');
  if( $( 'section.page.one-col .col.full' ).length > 0 || $( 'section.page.one-col .section_list' ).length > 0 || searchList.length > 0 ) {
    /* remove second pagination if there */
    var pager = $( '.page-navigation' );
    if( pager.length === 2 ) {
      $( pager[1] ).remove();
    }
    $( 'div.csc-default ul' ).css( 'padding-bottom', '0' );
    footer.css( 'padding-top', '7px' );
    footer.css( 'border', 'none' );
  }

  if($('article.vevent' ).length > 0){
    footer.css( 'padding-top', '18px' );
    footer.css( 'margin-top', '18px' );
    footer.css( 'border-top', '1px dotted' );
  }

  if( searchList.length > 0 ) {
    $( '.headline' ).css( 'height', '218px' );
  }


  /**** breadcrumb stuff ****/
  var breadcrumb = $( '#main-breadcrumb' ),
    innerBreadcrumb = breadcrumb.find( 'p' ),
    nav = $( 'nav#main_menu' ),
    activeLinks = $( 'nav#main_menu a.active' ),
    path = document.location.pathname,
    splittedPath = path.split( '/' );

  /* remove arrow spans if there */
  activeLinks.each( function() {
    var spans = $( this ).find( 'span' );
    spans.remove();
  } );

  if( activeLinks.length > 0 || splittedPath[1] === 'personen' || splittedPath[1] === 'lehrangebote' ) {
    var breadcrumbOut = '',
      breadcrumbOutput = '',
      headline = $( '.headline h1' ).text();

    if( headline === '' ) {
      headline = document.title;
    }

    for( var i = 0; i < activeLinks.length; i++ ) {
      breadcrumbOutput += '<span class="crumb-divider">/</span>' + (breadcrumbOut.concat( $( activeLinks[i] ).text() ));
      if( $( activeLinks[i] ).text() == 'Kalender' || $( activeLinks[i] ).text() == 'Calender' ) {
        breadcrumbOutput += '<span class="crumb-divider">/</span>' + (breadcrumbOut.concat( headline ));
      }
    }

    if( splittedPath[1] == 'personen' || splittedPath[2] == 'people' || splittedPath[1] == 'lehrangebote' ) {
      breadcrumbOutput = '<span class="crumb-divider">/</span>' + splittedPath[1] + '<span class="crumb-divider">/</span>' + headline;
    }
    innerBreadcrumb.html( breadcrumbOutput );

    breadcrumb.fadeIn( 5000 );
    breadcrumb.on( 'mouseenter', function() {
      breadcrumb.stop().fadeIn( 2000 );
      breadcrumb.fadeOut( 'fast' );
    } );
    nav.on( 'mouseleave', function() {
      breadcrumb.fadeIn( 5000 );
    } );
    $( '#main' ).on( 'mouseenter', function() {
      breadcrumb.fadeIn( 5000 );
    } );

  }

  /** end of workaround / Ricardo Hildebrand **/

  /* CSS MENUBUILDER */
  $( '#cssmenu' ).prepend( '<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>' );
  var activeElement = $( '#cssmenu>ul>li:first' );

  $( '#cssmenu>ul>li' ).each( function() {
    if( $( this ).hasClass( 'active' ) ) {
      activeElement = $( this );
    }
  } );

  if( activeElement.length > 0 ) {
    var posLeft = activeElement.position().left;
    var elementWidth = activeElement.width();
    posLeft = posLeft + elementWidth / 2 - 6;
    if( activeElement.hasClass( 'has-sub' ) ) {
      posLeft -= 6;
    }
    var menuIndicator = $( '#cssmenu #pIndicator' );
    menuIndicator.css( 'left', posLeft );
    var element, leftPos, indicator = menuIndicator;
    $( "#cssmenu>ul>li" ).hover( function() {
        element = $( this );
        var w = element.width();
        if( $( this ).hasClass( 'has-sub' ) ) {
          leftPos = element.position().left + w / 2 - 12;
        }
        else {
          leftPos = element.position().left + w / 2 - 6;
        }

        menuIndicator.css( 'left', leftPos );
      }
      , function() {
        menuIndicator.css( 'left', posLeft );
      } );
  }
} );

function removeUserFromProject( property, user, projectUid ) {
  $.ajax( {
    url: "index.php?type=200",
    type: "POST",
    dataType: "json",
    beforeSend: function( x ) {
      if( x && x.overrideMimeType ) {
        x.overrideMimeType( "application/json;charset=UTF-8" );
      }
    },
    data: {
      tx_khberlin_projects: {
        user: user,
        project: projectUid,
        method: 'remove',
        property: property
      }
    },
    success: function() {
      $( '.' + property + user ).hide();
    },
    error: function() {
      $( '#project-' + property ).append( '<li><span style="color:red">An error is occured. </span></li>' );
    }
  } )
}

function removeUserFromCourse( property, user, courseUid ) {
  $.ajax( {
    url: "index.php?type=300",
    type: "POST",
    dataType: "json",
    beforeSend: function( x ) {
      if( x && x.overrideMimeType ) {
        x.overrideMimeType( "application/json;charset=UTF-8" );
      }
    },
    data: {
      tx_khberlin_courses: {
        user: user,
        course: courseUid,
        method: 'remove',
        property: property
      }
    },
    success: function() {
      $( '.' + property + user ).hide();
    },
    error: function() {
      $( '#course-' + property ).append( '<li><span style="color:red">An error is occured. </span></li>' );
    }
  } )
}

function tabs() {
  $( '.tabbed div' ).hide();
  $( '.tabbed div:first' ).show();
  $( '.tabbed ul li:first' ).addClass( 'active' );
  $( '.tabbed ul li a:not(".no-js")' ).click( function() {
    $( '.tabbed ul li' ).removeClass( 'active' );
    $( this ).parent().addClass( 'active' );
    var currentTab = this.getAttribute( 'data-tab' );
    $( '.tabbed div' ).hide();
    $( currentTab ).show();
    return false;
  } );
}

function videoThumbnails( width, height, overlay_img ) {

  width = typeof  width !== 'undefined' ? width : 231;
  height = typeof height !== 'undefined' ? height : 224;
  overlay_img = typeof overlay_img !== 'undefined' ? overlay_img : '/typo3conf/ext/vtm_basic/img/video-overlay.png';

  $( '.video-thumbnail' ).each( function() {

    var src = this.getAttribute( 'data-src' );
    if( src ) {
      var img_url = false;
      var parser = document.createElement( 'a' );
      parser.href = src;
      if( parser.host == 'www.youtube.com' || parser.host == 'youtube.com' || parser.host == 'youtu.be' ) {
        var id
        if( parser.host != 'youtu.be' ) {
          id = src.match( "[\\?&]v=([^&#]*)" );
          if( id.length > 1 ) {
            id = id[1];
            img_url = 'http://img.youtube.com/vi/' + id + '/0.jpg';
          }
        }
        else { // youtu.be different format
          img_url = 'http://img.youtube.com/vi' + parser.pathname + '/0.jpg';
        }

        if( img_url ) {
          //console.log(img_url);
          this.setAttribute( 'src', img_url );
          if( overlay_img ) {
            $( this ).after( '<img src="' + overlay_img + '" width="' + width + '" height="' + height + '" alt="overlay" class="overlay" />' );
          }
        }
      } // end youtube


      if( parser.host == 'vimeo.com' || parser.host == 'www.vimeo.com' ) {
        var id = new String( parser.pathname );
        if( id.charAt( 0 ) == '/' ) {
          id = id.slice( 1 ); // remove leading /
        }
        id = id.split( '/' );
        id = id[0];
        var el = $( this );
        $.ajax( {
          type: 'GET',
          url: 'http://vimeo.com/api/v2/video/' + id + '.json',
          jsonp: 'callback',
          dataType: 'jsonp',
          success: function( data ) {
            var video = data[0];
            el.attr( 'src', video.thumbnail_small );
            if( overlay_img ) {
              el.after( '<img src="' + overlay_img + '" width="' + width + '" height="' + height + '" alt="overlay" class="overlay" />' );
            }
          }
        } ); // end ajax
      }// end vimeo


    } // end if src
  } ); //end each
}

$( document ).ready( function() {
  var search = $( '#search-callout' ),
    userFilter = $( '#userfilter-callout' );
  search.css( 'display', 'none' );
  userFilter.css( 'display', 'none' );
  $( 'a[data-pageid=159]' ).click( function() {
    search.toggle();
    userFilter.toggle();
    $( '#eventcat-callout' ).toggle();
    document.search.s_query.focus();
    return false;
  } );
} );

/***
 * Excerpted from "HTML5 and CSS3",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/bhh5 for more book information.
 ***/
// Some from http://www.morethannothing.co.uk/wp-content/uploads/2010/01/placeholder.js
// some from http://plugins.jquery.com/files/jquery-placeholder-0.1.js.txt

(function( $ ) {

  $.fn.placeholder = function() {

    function valueIsPlaceholder( input ) {
      return ($( input ).val() == $( input ).attr( "placeholder" ));
    }

    return this.each( function() {

      $( this ).find( ":input" ).each( function() {

        if( $( this ).attr( "type" ) == "password" ) {

          var new_field = $( "<input type='text'>" );
          new_field.attr( "rel", $( this ).attr( "id" ) );
          new_field.attr( "value", $( this ).attr( "placeholder" ) );
          $( this ).parent().append( new_field );
          new_field.hide();

          function showPasswordPlaceHolder( input ) {
            if( $( input ).val() == "" || valueIsPlaceholder( input ) ) {
              $( input ).hide();
              $( 'input[rel=' + $( input ).attr( "id" ) + ']' ).show();
            }

          }

          new_field.focus( function() {
            $( this ).hide();
            $( 'input#' + $( this ).attr( "rel" ) ).show().focus();
          } );

          $( this ).blur( function() {
            showPasswordPlaceHolder( this, false );
          } );

          showPasswordPlaceHolder( this );

        } else {

          // Replace the value with the placeholder text.
          // optional reload parameter solves FF and
          // IE caching values on fields.
          function showPlaceholder( input, reload ) {
            if( $( input ).val() == "" ||
              ( reload && valueIsPlaceholder( input ) ) ) {
              $( input ).val( $( input ).attr( "placeholder" ) );
            }
          }

          $( this ).focus( function() {
            if( $( this ).val() == $( this ).attr( "placeholder" ) ) {
              $( this ).val( "" );
            }

          } );

          $( this ).blur( function() {
            showPlaceholder( $( this ), false )
          } );


          showPlaceholder( this, true );
        }
      } );

      // Prevent forms from submitting default values
      $( this ).submit( function() {
        $( this ).find( ":input" ).each( function() {
          if( $( this ).val() == $( this ).attr( "placeholder" ) ) {
            $( this ).val( "" );
          }
        } );
      } );

    } );
  };

})( jQuery );

$( function() {
  function hasPlaceholderSupport() {
    var i = document.createElement( 'input' );
    return 'placeholder' in i;
  }

  if( !hasPlaceholderSupport() ) {
    $( ".tx-khberlin form" ).placeholder();
    //END placeholder_fallback
  }
} );


function formatFancyboxTitle( title, currentArray, currentIndex, currentOpts ) {
  return '<div class="fancybox-title-custom">' + title + '</div>';
}


/** Project box animation... */
var projectBoxChangeSpeed = 1500; //time in millisecs
var projectBoxes = Array();

function projectBoxRandomChange() {
  box = $( projectBoxes[Math.floor( Math.random() * projectBoxes.length )] );
  if( box.hasClass( 'x-animated' ) ) { //already swapped so reset
    box.removeClass( 'x-animated' );
    box.find( 'div.project-thumb' ).hide();
    box.find( 'div.project-box' ).show();
    box.hover(
      function() {
        $( this ).find( 'div.project-box' ).hide();
        $( this ).find( 'div.project-thumb' ).show();

      },
      function() {
        $( this ).find( 'div.project-thumb' ).hide();
        $( this ).find( 'div.project-box' ).show();
      }
    );
  }
  else {
    box.addClass( 'x-animated' );
    box.find( 'div.project-box' ).hide();
    box.find( 'div.project-thumb' ).show();
    box.hover(
      function() {
        $( this ).find( 'div.project-thumb' ).hide();
        $( this ).find( 'div.project-box' ).show();

      },
      function() {
        $( this ).find( 'div.project-box' ).hide();
        $( this ).find( 'div.project-thumb' ).show();
      }
    );
  }
}

function projectBoxAnimate() {
  window.setInterval( projectBoxRandomChange, projectBoxChangeSpeed );
}

function startProjectBoxAnimation() {
  window.setTimeout( projectBoxAnimate, projectBoxChangeSpeed );
}