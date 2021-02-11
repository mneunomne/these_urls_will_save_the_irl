function randomColourBS() {
  var colours = new Array(
    '#ab9f81', '#66cef0', '#ec008c', '#f9e004',
    '#36ac9c', '#ed1c24', '#80cc28', '#967e72',
    '#00adef', '#cce310', '#9c1561', '#bdbcbc',
    '#f45fac', '#868693', '#26963c', '#3871c2'
  );
  var tags = 'div.main a, div.main a:hover, div.main a:active, div.main a:visited,div#main a, div#main a:hover, div#main a:active, div#main a:visited, div#col a, div#col a:visited, div#col a:hover, h1, a.active, a.active:hover, #main_menu ul.sf-menu li a:hover, a.sf-with-ul:hover, li.sfHover, h2, .auszeichnung, .sf-menu a:hover';
  var rnd_colour = colours[Math.floor( Math.random() * colours.length )];

  $( tags ).css( 'color', rnd_colour );

  $( 'div#userfilter-callout a' ).css( 'color', '' );
  $( 'div#userfilter-callout a' ).hover( function() {
      $( this ).css( 'color', rnd_colour );
    },
    function() {
      $( this ).css( 'color', '' );
    }
  );

  $( 'ul.f3-widget-paginator li a' ).css( 'color', '' );
  $( 'ul.f3-widget-paginator li a' ).hover( function() {
      $( this ).css( 'color', rnd_colour );
    },
    function() {
      $( this ).css( 'color', '' );
    }
  );

  $( 'ul.section_list li' ).css( 'border-color', rnd_colour );
  $( '.auszeichnung-inverse' ).css( 'background-color', rnd_colour );
  $( 'footer' ).css( 'border-color', rnd_colour );
  $( 'span.pdflabel' ).css( 'background', rnd_colour );

  /** MENU HANDLING / Ricardo Hildebrand **/
  /* set and remove menu link hover random color */
  var menuLink = $( '#cssmenu a' );
  menuLink.on( 'mouseover', function() {
    $( this ).children( 'span.hover-arrow' ).css( 'display', 'block' );
    if( !($( this ).hasClass( 'active' )) ) {
      $( this ).css( 'color', rnd_colour );
    }
  } );
  menuLink.on( 'mouseout', function() {
    $( this ).children( 'span.hover-arrow' ).css( 'display', 'none' );
    if( !($( this ).hasClass( 'active' )) ) {
      $( this ).css( 'color', '#333' );
    }
  } );
  /* set and remove menu link random color on sublist opening */
  var menuList = $( '#cssmenu ul' );
  menuList.on( 'mouseover', function() {
    $( 'span.hover-arrow' ).css( 'color', rnd_colour );
    var parentItem = $( this ).prev( 'a' );
    parentItem.children( 'span.hover-arrow' ).css( 'display', 'block' );
    if( parentItem.length === 1 && !$( parentItem ).hasClass( 'active' ) ) {
      $( parentItem ).css( 'color', rnd_colour );
    }
  } );
  menuList.on( 'mouseout', function() {
    var parentItem = $( this ).prev( 'a' );
    parentItem.children( 'span.hover-arrow' ).css( 'display', 'none' );
    if( parentItem.length === 1 && !$( parentItem ).hasClass( 'active' ) ) {
      $( parentItem ).css( 'color', '#333' );
    }
  } );

  /* sec menu color */
  var menuLinkSec = $( 'ul#sec-nav a' );
  menuLinkSec.on( 'mouseover', function() {
    $( 'span.hover-arrow' ).css( 'color', rnd_colour );
    if( !($( this ).hasClass( 'active' )) ) {
      $( this ).css( 'color', rnd_colour );
    }
  } );
  menuLinkSec.on( 'mouseout', function() {
    if( !($( this ).hasClass( 'active' )) ) {
      $( this ).css( 'color', '#333' );
    }
  } );


  $( '.csc-uploads-fileName a:before' ).css( 'background-color', rnd_colour );
  /* doesn't work for some reason */
  $( 'article.course p a.owner' ).css( 'color', '#333333' );
}

$( document ).ready( function() {
  randomColourBS();
} )