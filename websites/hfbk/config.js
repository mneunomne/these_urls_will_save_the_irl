/**
 * Example: Call hfbkConfig.setValue('enableNavSearchBar', false) anywhere in your magazine's custom JS code to
 * disable the navigation search bar.
 * Note that this only disables the functionality and doesn't hide it, which has to be done separately.
 * You don't have to take care of resetting it to its default value when leaving the magazine,
 * as calling leaveMagazine() already does that (among other things).
 */

/* exported hfbkConfig */
var hfbkConfig = (function () {
    var defaults = {
            appendMoreResultsDynamically: true, // load and append more search results/children on scrolling
            enableNavSearchBar:           true, // enable navigation/search bar functionality
            enableDynamicPageLoading:     true, // enable dynamic loading of content pages when clicking on .content-item links
            searchClickedTag:             true, // only works if enableNavSearchBar is true
            enableFullscreenGallery:      true, // clicking on an gallery thumbnail opens the fullscreen library
            enableThumbnailHoverGallery:  true, // hovering over an gallery thumnail previews the picture
            enableItemHoverBackground:    true, // hovering over content item thumbnails displays its first related image in the background
            enableItemFlyIn:              true, // fly in content item thumbnails on page load
            enableMasonry:                true  // if Masonry should be used for the thumbnail layout
        },
        config = jQuery.extend(true, {}, defaults);

    return {
        setValue: function (key, value) {
            if (config.hasOwnProperty(key)) {
                config[key] = value;
            }
        },
        getValue: function (key) {
            return config[key];
        },
        restoreDefaults: function () {
            config = jQuery.extend(true, {}, defaults);
        }
    };
}());
