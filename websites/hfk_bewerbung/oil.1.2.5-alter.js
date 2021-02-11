(function () {
  // Cross browser event handler definition
  var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
  var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
  var eventer = window[eventMethod];

  function hfkOilReadCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }

  // Callback to be executed when event is fired.
  function hfkOilJsReceiveMessage(event) {
    function eventDataContains(str) {
      return JSON.stringify(event.data).indexOf(str) !== -1;
    }

    if (event && event.data && eventDataContains('oil_shown')) {
      // Find optin-button.
      var $optin = $('button.as-js-optin');
      if (!$optin.length) {
        return;
      }
      $optin.addClass('as-oil__btn');
      var $optout = $('<button>')
              .addClass('as-oil__btn')
              .addClass('as-oil__btn-optout')
              .addClass('as-js-optout')
              .data('data-context', 'NO')
              .data('data-qa', 'oil-NoButton')
              .html(Drupal.settings.oilBtnDecline);

      $optout.click(function (event) {
        var date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();

        var cookie_value = {
          opt_in: false,
          version: "1.2.5-RELEASE"
        };

        // Set cookie.
        document.cookie = encodeURIComponent('oil_data') + "=" + encodeURIComponent(JSON.stringify(cookie_value)) + expires + "; path=/";

        // Remove oiljs layer.
        $('.as-oil').remove();

        event.preventDefault();
        event.stopPropagation();
      });

      var $wrapper = $('<div>')
              .addClass('as-oil-l-item');
      $optout.appendTo($wrapper);
      $wrapper.insertBefore($optin.parent());
    }
  }

  // Conditionally load oil.js.
  var cookie_value = JSON.parse(hfkOilReadCookie('oil_data'));
  if (!cookie_value || !cookie_value.hasOwnProperty('opt_in')) {
    var oiljs_banner_src = Drupal.settings.themePath + '/javascript/oiljs/oil.1.2.5-RELEASE.min.js';
    // Load oil.js.
    $.getScript(oiljs_banner_src);
  }

  // Register event handler
  eventer(messageEvent, hfkOilJsReceiveMessage, false);
})($, Drupal);
