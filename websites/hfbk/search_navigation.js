var searchDelayTimer;

/*
INIT SEARCH NAVIGATION
 */
$(function () {
    var initialContentId = $('article').attr('data-initial-id'),
        initialPageType = $('article').attr('data-initial-page-type'),
        initialTitle = $('article').attr('data-initial-title');

    /*
    INIT EVENT BINDINGS
    */
    initDynamicItemLoading();
    initNavsearchBar();
    initContentItemClick();
    initEventFilterClick();
    initTagClickToSearch();

    /*
    INIT PAGE
    */
    initContentPage();
    updateNavsearchSpacer();
    tryLoadingForm();

    // if a content page was loaded directly via its URL, update the breadcrumbs accordingly
    // (negative id means that the start page was loaded, which has no breadcrumbs initially)
    if (initialContentId >= 0) {
        updateBreadCrumbsByContentId(initialContentId);
    }

    // open the content item (via AJAX) with the URL that was loaded via history back/forward
    // see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
    window.onpopstate = function (e) {
        var id = -1,
            title = '',
            page_type = '',
            pathString = document.location.pathname.replace('/en/', '').replace('/de/', '');

        // try to get the id from the push state
        if (e.state) {
            if (e.state.id) {
                id = e.state.id;
            }

            if (e.state.title) {
                title = e.state.title;
            }
            if (e.state.page_type) {
                page_type = e.state.page_type;
            }

        // if push state not available (i.e. when navigating back to the start page),
        // get the ID from the article container (which is written on the initial page load via GET request)
        } else {
            id = initialContentId;
            title = initialTitle;
            page_type = initialPageType;
        }

        // check if the first letter of the path string (i.e. the URL part behind the /en/ or /de/) is an uppercase letter
        // and if yes, perform a search for that string instead of trying to open it as content page
        if (pathString && pathString[0] === pathString[0].toUpperCase()) {
            // console.log('Starts with uppercase, is a search string or tag.');
            $('.recent-search').hide();
            $('.search-results').hide();
            $('.search-wrapper input').addClass('prevent-results-dropdown');
            breadcrumbsToSearchInput(decodeURIComponent(pathString));
            $('.startpage-search').blur();
        } else {
            // console.log("pathname: " + document.location.pathname + ", state: " + JSON.stringify(event.state) + ", id:" + id);
            openContentItem(false, id, document.location.pathname, null, title, page_type);
        }

    };
});

// hides the breadcrumbs and displays + focuses the search input field with a given search string
function breadcrumbsToSearchInput (searchString) {
    $('.ancestors').hide().removeClass('active');
    $('.startpage-search').val(searchString).show().trigger('input').focus();
    updateNavsearchSpacer();
}

// hides search results and displays "recent searches" items in the navsearch dropdown
function showRecentSearches () {
    $.ajax({
        url:     '/' + getLanguageCode() + '/search/recent/',
        type:    'get',
        data:    {},
        success: function (response) {
            $('.recent-search').html(response);

            // automatically select the first result item
            $('.search-results li, .recent-search li').removeClass('selected');
            //$('.recent-search li:first-child').addClass('selected');

            updateNavsearchSpacer();
        }
    });

    $('.search-results').hide();
    $('.recent-search').show();
    updateNavsearchSpacer();
}

// resets everything to display the page as it was when it was initially loaded
function showStartPage (pushState) {
    $('article').empty().hide();
    $('.search-result-items').empty().hide();
    $('.jump-navigation').addClass('show')
    $('.home-story-container').show();
    $('.featured-items').hide();
    $('.sidebar.event').hide();
    $('.sidebar.content').show();

    // close navsearch bar (i.e. hide and reset its contents)
    $('.startpage-search').val('').show();
    $('.startpage-search').removeClass('hide-placeholder');
    $('.ancestors').hide().removeClass('active');
    $('.recent-search').hide();
    $('.search-results').hide();
    updateRelatedPagesMasonry();
    updateNavsearchSpacer();

    if (pushState) {
        history.pushState({}, '', '/' + getLanguageCode() + '/');
    }

    document.title = 'HFBK: ' + $('article').attr('data-home-title');

    window.scrollTo(0, 0);
}

// displays the given content on the page
function openContentItem (pushState, id, url, href, title, page_type) {
    // console.log('openContentItem', pushState, id, url, href, title, page_type);
    var otherLanguageUrl = '';

    // if it's a content link, href is set, so we simply open that link in a new tab and that's it
    if (href && ((href.indexOf('http://') === 0) || (href.indexOf('https://') === 0))) {
        window.open(href, '_blank');
        return;
    }

    // open document
    if (href && ((href.indexOf('/documents/') === 0))) {
      window.open(href, '_blank');
      return;
    }

    // update the language toggle link (the DE/EN at the top right of the page)
    // with the link to the other language of the content (i.e. on DE page, it links to EN)
    otherLanguageUrl = '/' + getOtherLanguageCode() + url.substring(3);
    $('.language-toggle').attr('href', otherLanguageUrl);

    // jump to start page instead of loading content with invalid id
    if (id < 0) {
        showStartPage(pushState);
        return;
    }

    // fetch and display the content of the given content item
    $.ajax({
        url:     url + '?onlyContent=1',
        type:    'get',
        success: function (response) {
            // store content id in the state data so that the right
            // content is loaded when navigation back/forward in browser history
            var stateData = {
                id:    id,
                title: title,
                page_type: page_type,
            };

            // make sure the fullscreen background (from hovering over a thumbnail) is reset
            clearTimeout(hoverDelayTimer);
            $('.background').css('background-image', 'none');
            // hide jump navigation and story container
            $('.jump-navigation').removeClass('show');
            $('.home-story-container').hide();
            $('.featured-items').show();

            if (page_type === 'event-overview' || page_type === 'event') {
                $('.sidebar.content').hide();
                $('.sidebar.event').show();
            } else {
                $('.sidebar.content').show();
                $('.sidebar.event').hide();
            }


            // display content item
            $('article').html(response).attr('data-id', id).show();
            window.scrollTo(0, 0);

            // init content, e.g. replace header text
            initContentPage();

            // update the browser's address bar and browser history with the newly loaded content page
            // see https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries
            if (pushState) {
                history.pushState(stateData, '', url);
            }

            // remove background image in case it was visible when clicking on the content item thumbnail
            $('body').css('background-image', 'none');

            showContentAndFeaturedItems();
            tryLoadingForm();

            // update window title
            if (title) {
                document.title = 'HFBK: ' + title;
            } else {
                document.title = 'HFBK: ' + $('article').attr('data-home-title');
            }
        }
    });

    updateBreadCrumbsByContentId(id);
}

// update navsearch bar with the breadcrumbs to the given content item
function updateBreadCrumbsByContentId (id) {
    $.ajax({
        url:  '/' + getLanguageCode() + '/search/get_ancestors/',
        type: 'get',
        data: {
            'id': id,
        },
        success: function (response) {
            $('.ancestors').html(response);
            showBreadCrumbs();
        }
    });
}

function showBreadCrumbs () {
    $('.ancestors').show().addClass('active');
    $('.recent-search').hide();
    $('.startpage-search').hide();
    $('.search-results').empty();
    updateNavsearchSpacer();
}

// replaces search results boxes with featured items
function showContentAndFeaturedItems () {
    $('article').show();
    hideDoubleResults();
    updateRelatedPagesMasonry();
    updateNavsearchSpacer();
}

// searches and displays the search results as boxes below the navsearch bar
function displaySearchResultItems (value) {
    if (typeof value === 'undefined') {
        value = '';
    }

    // if no search query given, hide the search results
    // and show the start page / content again (without masonry animations)
    if (value === '') {
        showContentAndFeaturedItems();
        return;
    }

    // instantly setup container visibilities to prevent race condition errors
    $('article').slideUp();
    $('.search-result-items').show();

    // run search query and display the result items
    $.ajax({
        url:     '/' + getLanguageCode() + '/search/search_result_thumbnails/?query=' + value,
        type:    'get',
        data:    {},
        success: function (response) {
            var relatedPages;

            $('.search-result-items').html(response);

            relatedPages = $('.search-result-items .related-pages');

            // enable pagination as soon as the initial batch of search result items is displayed
            relatedPages.attr('data-paginate', 1);

            // reset paginate value to 1 (so that the next append call appends paginate 2)
            relatedPages.attr('data-paginate-enabled', 1);

            // store query
            relatedPages.attr('data-query', value);

            updateRelatedPagesMasonry();
            updateNavsearchSpacer();

            window.scrollTo(0, 0);

            /*$('html, body').animate({
                scrollTop: 0
            }, 'slow');*/
        }
    });
}

// fetches and appends new result items for the current search query
function appendSearchResultItems () {
    var relatedPages = $('.search-result-items .related-pages'),
        query = relatedPages.attr('data-query'),
        url = '/' + getLanguageCode() + '/search/search_result_thumbnails/?query=' + query;

    appendResponseItems(url, relatedPages);
}

// fetches and appends new descendant items of the current content page
function appendDescendantItems () {
    var relatedPages = $('.related-pages.children'),
        parentId = $('article').attr('data-id'),
        eventFilter = $('.related-pages.children').attr('data-event-filter'),
        url = '/' + getLanguageCode() + '/search/get_descendant_items/?parent_id=' + parentId;
        if (eventFilter) {
            url = url + '&event_filter=' + eventFilter;
        }

    appendResponseItems(url, relatedPages);
}

// appends the items returned by the request to the given related pages container
function appendResponseItems (url, relatedPagesDiv) {
    var paginate = parseInt(relatedPagesDiv.attr('data-paginate'));

    // don't proceed if the related pages div does not exist
    if (relatedPagesDiv.length === 0) {
        return;
    }

    // increase and store paginate value (so we now fetch the next "page" of items)
    paginate += 1;
    relatedPagesDiv.attr('data-paginate', paginate);

    $.ajax({
        url:     url + '&paginate=' + paginate,
        type:    'get',
        data:    {},
        success: function (response) {
            // get the related page (thumbnail) items from the response
            var relatedPages = $(response).find('.related-page').unwrap(),
                currentScrollHeight = $(window).scrollTop();

            // if there are any response items, append them to the existing ones
            if ($(response).find('.related-page').length > 0) {
                relatedPagesDiv.append(relatedPages);

                // re-enable pagination now that the current refresh is finished
                relatedPagesDiv.attr('data-paginate-enabled', 1);
            }

            // refresh page layout
            if (hfbkConfig.getValue('enableMasonry')) {
                relatedPagesDiv.masonry('destroy');
            }
            hideDoubleResults();
            updateRelatedPagesMasonry();
            updateNavsearchSpacer();

            // restore scroll position as destroying masonry also resets it to 0
            window.scrollTo(0, currentScrollHeight);
        }
    });
}

// returns 'en' or 'de' based on the current language (also visible in the URL)
function getLanguageCode () {
    return $('body').data('lang');
}

// like "getLanguageCode()", but returns the other language (the one that's not used right now)
function getOtherLanguageCode () {
    if (getLanguageCode() === 'de') {
        return 'en';
    }

    return 'de';
}

// update height of the navsearch spacer (necessary, because the navsearch bar
// is fixed at the top of the page, but can vary in height)
function updateNavsearchSpacer () {
    var navsearchHeight = $('#startpage-search-form').height();

    $('.navsearch-spacer').height(navsearchHeight);

    var sidebarTop = navsearchHeight + 30;
    // update top from sidebar
    $('.sidebar').css({
        'top': sidebarTop + 'px',
        'height': 'calc(100% - ' + sidebarTop + 'px)',
    });
}

function trackPageSearch (keyword, count) {
    // console.log('Track page search: ', keyword, ' #', count);
    _paq.push(['trackSiteSearch',
    // Search keyword searched for
    keyword,
    // Search category selected in your search engine. If you do not need this, set to false
    false,
    // Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
    count
]);
}

function updateRelatedPagesMasonry () {
    if (hfbkConfig.getValue('enableMasonry')) {
        $('.related-pages').masonry({
            itemSelector:       '.related-page',
            transitionDuration: 0,
            horizontalOrder: true,
        });
        $('.stories').masonry({
            transitionDuration: 0,
            itemSelector: '.story',
            horizontalOrder: true,
        });
    }
}

// the search string must have at least 3 non-special characters to be valid
function isSearchStringLongEnough (searchString) {
    return searchString.length >= 1;
}

// select an adjacent search result item (in the dropdown),
// either the previous or the next one
function selectAdjacentSearchResultRow (directionDown) {
    var currentlySelectedItem = $('.search-results li.selected, .recent-search li.selected'),
        adjacentItem = null;

    // select first result if none is selected, ignore direction
    if (currentlySelectedItem.length === 0) {
        currentlySelectedItem = $('.search-results li:first-child, .recent-search li:first-child');
        currentlySelectedItem.addClass('selected');
        return;
    }

    // set adjacent item based on direction
    if (directionDown) {
        adjacentItem = currentlySelectedItem.next('li');
    } else {
        adjacentItem = currentlySelectedItem.prev('li');
    }

    // if an adjacent item in the given direction has been found,
    // select it and deselect the currently selected item
    if (adjacentItem.length) {
        currentlySelectedItem.removeClass('selected');
        adjacentItem.addClass('selected');
    } else {
        if (!directionDown) {
            // if the user pressed the "up" cursor key with the top item selected, deselect it
            currentlySelectedItem.removeClass('selected');
        }
    }
}

// opens the content item that is currently selected in the search results dropdown (if any)
function openSelectedContentItem () {
    var currentlySelectedItemLink = $('.search-results li.selected a, .recent-search li.selected a').last(),
        id = currentlySelectedItemLink.attr('data-id'),
        url = currentlySelectedItemLink.attr('data-url'),
        page_type = currentlySelectedItemLink.attr('data-page-type'),
        title = currentlySelectedItemLink.attr('data-title'),
        href = currentlySelectedItemLink.attr('href');

    // make sure there is a selected search result item
    if (currentlySelectedItemLink.length) {
        openContentItem(true, id, url, href, title, page_type);
        return true;
    }

    return false;
}

// closes the search results dropdown, called e.g. when pressing enter after having typed in a search string
function confirmSearchInput () {
    $('.recent-search').hide();
    $('.search-results').empty();
    $('.startpage-search').blur();

    if (!$('.startpage-search').val().length) {
        showStartPage();
    }

    updateNavsearchSpacer();

    // push the current search input as a search state
    pushStringAsSearchState($('.startpage-search').val());
}

// setup the content page for display
function initContentPage () {
    $('.block-additional-time').insertAfter('.block-times .block-time');

    // replace the initial page title with the person's headline
    if ($('.block-person').length) {
        $('.page-title').text($('.block-person h1').text());
        $('.block-person h1').first().remove();
    }

    // set the event date as title
    if ($('.block-event').length) {
        $('.page-title').html($('.block-event h1.block-date').html());
        $('.block-event h1.block-date').first().remove();
    }
    // dont initialize if it is an event_page
    var eventFilter = $('.related-pages.children').attr('data-event-filter');
    $('.related-pages.children').attr('data-paginate-enabled', 1);
    if (eventFilter == undefined) {
        $('.related-pages.children').attr('data-paginate', 0);
        appendDescendantItems();
    }
}

// any thumbnails that are displayed as descentant/related pages should be hidden from the
// (last) search result thumbnails that are shown directly below
// IMPORTANT!!!!! make sure to call updateRelatedPagesMasonry() afterwards, because this function destroys masonry!
function hideDoubleResults () {
    var children_and_related_pages = $('.related-pages.children > div, .related-pages.related > div'),
        searchResultItems = $('.search-result-items .related-pages > div'),
        contentId = $('article').attr('data-id'),
        children_and_related_ids = [contentId];

    // obviously, no search results should be hidden if the content page is not visible,
    // e.g. we're currently performing a search
    if (!$('article').is(':visible')) {
        return;
    }

    // make sure all results are displayed and known to masonry before starting to filter them
    searchResultItems.show();
    searchResultItems.addClass('related-page');

    // fetch the page ids of all child page and related page thumbnails
    children_and_related_pages.each(function () {
        var id = $(this).find('a.content-item').attr('data-id');

        children_and_related_ids.push(id);
    });

    // go through the search result items (thumbnails) and hide the items that
    // are already included in the child page and related page thumbnails of the current content
    searchResultItems.each(function () {
        var id = $(this).find('a.content-item').attr('data-id'),
            isDoubleResult = children_and_related_ids.indexOf(id) !== -1;

        // if it's a double result, hide it
        if (isDoubleResult) {
            $(this).remove();

            // remove this class so it's ignored by masonry for now
            $(this).removeClass('related-page');
        }
    });

    if (hfbkConfig.getValue('enableMasonry')) {
        // destroy masonry after filtering, so the next masonry call on this container doesn't bug out
        $('.search-result-items .related-pages').masonry('destroy');
        // $('.search-result-items .related-pages').masonry('destroy');
    }
}

function initDynamicItemLoading () {
    // dynamic reloading/adding of result items when scrolling down
    $(window).on('scroll resize', function () {
        var winH = $(window).height(),
            top = $(window).scrollTop(),
            resultItemsHeight = $('.search-result-items').height(),
            spaceHeight = $('.navsearch-spacer').height(),
            searchResultItems = $('.search-result-items .related-pages');

        if (!hfbkConfig.getValue('appendMoreResultsDynamically')) {
            return;
        }

        // don't proceed if the pagination refresh is currently disabled
        if (parseInt(searchResultItems.attr('data-paginate-enabled')) !== 1) {
            return;
        }

        // don't proceed if there is a content visible (i.e. we're not searching right now)
        if ($('article').is(':visible')) {
            return;
        }

        // if we scrolled far enough down to see the bottom results, load new results (if any) and append them
        if ((resultItemsHeight > 0) && (winH + top > resultItemsHeight + spaceHeight)) {
            appendSearchResultItems();

            // disable pagination refresh until the current refresh is finished
            searchResultItems.attr('data-paginate-enabled', 0);
        }
    });

    // dynamic reloading/adding of descendant items when scrolling down
    $(window).on('scroll resize', function () {
        var winH = $(window).height(),
            top = $(window).scrollTop(),
            spaceHeight = $('.navsearch-spacer').height(),
            descendantPages = $('.related-pages.children');

        if (!hfbkConfig.getValue('appendMoreResultsDynamically')) {
            return;
        }

        // don't proceed if the pagination refresh is currently disabled
        if (parseInt(descendantPages.attr('data-paginate-enabled')) !== 1) {
            return;
        }

        // don't proceed if no content is visible
        if (!$('article').is(':visible')) {
            return;
        }

        if ((descendantPages.height() > 0) && (winH + top > descendantPages.height() + spaceHeight)) {
            appendDescendantItems();

            // disable pagination refresh until the current refresh is finished
            descendantPages.attr('data-paginate-enabled', 0);
        }
    });
}

function initNavsearchBar () {
    /*
    NAVSEARCH BAR FOCUS
     */

    // remove placeholder when focusing the search input field
    $('.startpage-search').on('focusin', function (e) {
        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        $(e.target).addClass('hide-placeholder');
    });

    // close navsearch when focusing out, i.e. when clicking outside of it;
    // the "focusout" event doesn't work as expected, so this is a workaround
    $('html').on('click', function (e) {
        var elem = $(e.target),
            isNavSearchBar = elem.closest('#startpage-search-form').length,
            isHoveringOverLink = $('.content-item:hover').length;

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        if (isNavSearchBar) {
            return;
        }

        // if a content page is open (and we're not clicking on a link),
        // show that content and its breadcrumbs again
        if ($('article').html().trim().length > 0) {
            if (!isHoveringOverLink) {
                showContentAndFeaturedItems();
                showBreadCrumbs();
            }
        // if the start page is open, simply close the navsearch bar and show it
        } else {
            if (!isHoveringOverLink) {
                showStartPage(false);
            }
        }
    });

    /*
    NAVSEARCH BAR INPUT
     */

    $('#startpage-search-form').on('input', function (e) {
        var elem = $(e.target),
            value = elem.val();

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        clearTimeout(searchDelayTimer);

        // only search if nothing was typed in for a short amount of time, to prevent excessive search requests
        searchDelayTimer = setTimeout(function () {
            // show actual search results (both in the dropdown and as
            // item boxes below the navsearch bar)
            if (isSearchStringLongEnough(value)) {
                $.ajax({
                    url:     '/' + getLanguageCode() + '/search/?query=' + value,
                    type:    'get',
                    data:    {},
                    success: function (response) {
                        $('.search-results').html(response);
                        // automatically select the first result item
                        $('.search-results li, .recent-search li').removeClass('selected');
                        //$('.search-results li:first-child').addClass('selected');
                        trackPageSearch(value, $(response).find('li').length);
                        updateNavsearchSpacer();
                    }
                });

                $('.recent-search').hide();

                // the "prevent-results-dropdown" class can be added to prevent the search results dropdown
                // from being shown the next time the input event is triggered; when set, we simply remove
                // that class so on the next input trigger, the search results are shown as usual
                if (elem.hasClass('prevent-results-dropdown')) {
                    elem.removeClass('prevent-results-dropdown');
                } else {
                    $('.search-results').show();
                }

                displaySearchResultItems(value);

            // if not enough characters typed in, display the original page
            } else {
                showRecentSearches();
                showContentAndFeaturedItems();
            }

            updateNavsearchSpacer();
        }, 300); // searchDelayTimer
    });

    $('#startpage-search-form').on('submit', function () {
        return false;
    });

    // select search result items with the up/down keys and open them with the enter key
    $('.search-wrapper').on('keydown', function (e) {
        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        switch (e.which) {
        case 13: // enter
            if (!openSelectedContentItem()) {
                confirmSearchInput();
            }
            break;
        case 38: // up
            selectAdjacentSearchResultRow(false);
            break;
        case 40: // down
            selectAdjacentSearchResultRow(true);
            break;
        default: return;
        }
    });

    /*
    NAVSEARCH BAR / BREADCRUMB CLICKS
     */

    // when clicking on the navsearch bar, show recent searches in the dropdown
    $('.startpage-search').on('mouseup', function (e) {
        var elem = $(e.target),
            value = $(elem).val();

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        if (value === '') {
            showRecentSearches();
        }
    });

    // clicking on a breadcrumb opens that page
    $('body').on('click', '.breadcrumb', function (e) {
        var elem = $(e.target),
            id = elem.attr('data-id'),
            page_type = elem.attr('data-page-type'),
            title = elem.attr('data-title'),
            url = elem.attr('data-url');

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        $('.search-result-items').empty();
        openContentItem(true, id, url, null, title, page_type);
    });

    // handle X-ing of breadcrumb items
    $('body').on('click', '.delete-breadcrumb', function (e) {
        var elem = $(e.target),
            listElement = elem.closest('li'),
            index = $('li').index(listElement),
            previousBreadcrumb = listElement.prev().find('.breadcrumb'),
            text = previousBreadcrumb.html(),
            id = previousBreadcrumb.attr('data-id'),
            page_type = previousBreadcrumb.attr('data-page-type'),
            title = previousBreadcrumb.attr('data-title'),
            url = previousBreadcrumb.attr('data-url');

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        // if x-ing the first breadcrumb, or if the previous breadcrumb isn't
        // long enough to work as a search string, go to the start page
        if (index === 0 || !isSearchStringLongEnough(text)) {
            showStartPage(true);

        // use the breadcrumb before the one that was x-ed as the new content
        } else {
            openContentItem(true, id, url, null, title, page_type);
        }
    });

    // clicking on an empty part of the breadcrumb navsearch bar
    // hides the breadcrumbs and starts a new search using the last breadcrumb as search string
    $('#startpage-search-form').on('click', function (e) {
        var elem = $(e.target),
            lastBreadcrumbText = $('.ancestors ul li:last-child .breadcrumb').text();

        if (!hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        if (!elem.is('a') && $('.ancestors').hasClass('active')) {
            breadcrumbsToSearchInput(lastBreadcrumbText);
        }
    });
}

function initTagClickToSearch () {
    // clicking on a tag starts a new search using the breadcrumb as search string
    $('body').on('click', '.tag', function (e) {
        var elem = $(e.target),
            tagText = elem.text();

        if (!hfbkConfig.getValue('searchClickedTag') || !hfbkConfig.getValue('enableNavSearchBar')) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        // hide previous dropdown results
        $('.recent-search').hide();
        $('.search-results').hide();

        // set the flag that prevents the search results dropdown to open for the next
        // (and ONLY the *next*) search text field input event
        $('.search-wrapper input').addClass('prevent-results-dropdown');

        // finally, search for the tag and unfocus the search text field
        breadcrumbsToSearchInput(tagText);
        $('.startpage-search').blur();

        pushStringAsSearchState(tagText);
    });
}

// push a string to the browser history, transforming the first letter to uppercase
// so it is recognized as a search string (and not a content item path)
function pushStringAsSearchState (text) {
    var url = '';

    if (text) {
        text = text[0].toUpperCase() + text.slice(1);
        url = '/' + getLanguageCode() + '/' + text;

        // make sure we don't push the same state again
        if (url !== decodeURIComponent(document.location.pathname)) {
            history.pushState({}, '', url);
            document.title = 'HFBK: ' + text;
        }
    }
}

// clicking on a content item (e.g. search results, recent searches, content thumbnails)
function initContentItemClick () {
    $('body').on('click', '.content-item', function (e) {
        var elem = $(e.target),
            aTag = elem.closest('a');

        if (!hfbkConfig.getValue('enableDynamicPageLoading')) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        // hide and empty background preview image
        $('.background').css({
            'background-image': 'none',
            'z-index': '-1',
        });
        // hide preview image
        $('.preview-image').css({
            'display': 'none',
            'top': 0,
            'left': 0,
        })

        openContentItemFromLink(aTag);
    });
}

// opens the content page the given <a> tag links to
function openContentItemFromLink (aTag) {
    var id = aTag.attr('data-id'),
        url = aTag.attr('data-url'),
        title = aTag.attr('data-title'),
        page_type = aTag.attr('data-page-type')
        href = aTag.attr('href');

    openContentItem(true, id, url, href, title, page_type);
}

// clicking on a content item (e.g. search results, recent searches, content thumbnails)
function initEventFilterClick () {
    $('body').on('click', '.event-filter', function (e) {
        var elem = $(e.target),
            aTag = elem.closest('a');

        if (!hfbkConfig.getValue('enableDynamicPageLoading')) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        openContentItemFromLink(aTag);
    });
}

// load the content form into the content form page
function loadContentForm () {
    var elem = $('.content-form-container'),
        url = elem.attr('data-url');

    // make sure there actually is a content form container
    if (elem.length) {
        $.ajax({
            url:     url,
            type:    'get',
            success: function (response) {
                // load form into container
                $(elem).html(response);

                formJanitor();
            }
        });
    }
}

function formJanitor () {
    // add headlines above specific form fields
    var i = 0,
        j = 0,
        lehrenden_info_html = '<h2 class="lehrenden_info">Angaben zu dem/der Lehrenden:</h2>',
        teacher_info_html_en = '<h2 class="teachers_info">Teacher information:</h2>',
        semesterapparat_info_html = '<h2 class="semesterapparat_info">Semesterapparat:</h2>',
        semesterapparatus_info_html_en = '<h2 class="semesterapparatus_info">Semesterapparatus:</h2>',
        titelliste_info_html = '<div class="titelliste_info"><h2>Titelliste:</h2><p>Bitte tragen Sie zu jedem Titel das Erscheinungsjahr und die Signatur der HFBK-Bibliothek ein, sonst kann der Auftrag nicht bearbeitet werden!</p></div>',
        titlelist_info_html_en = '<div class="titelliste_info"><h2>Titlelist:</h2><p>Please add release year and signature of the HFBK-Library, else your assignment cannot be processed!</p></div>';

    $('label[for=id_name-desder-lehrenden]').before(lehrenden_info_html);
    $('label[for=id_aufstellung-ab]').before(semesterapparat_info_html);
    $('label[for=id_titel-1]').before(titelliste_info_html);
    $('label[for=id_name-of-teacher]').before(teacher_info_html_en);
    $('label[for=id_available-from]').before(semesterapparatus_info_html_en);
    $('label[for=id_title-1]').before(titlelist_info_html_en);

    // hide all textareas but the first
    for (i = 2; i < 21; i++) {
        $('#id_titel-' + i).hide();
        $('label[for=id_titel-' + i + ']').hide();
        $('#id_title-' + i).hide();
        $('label[for=id_title-' + i + ']').hide();
    }

    // show textareas if they have content and also show next one
    for (i = 1; i < 20; i++) {
        if ($('#id_titel-' + i).val() && $('#id_titel-' + i).val().trim().length > 0) {
            j = i + 1;
            $('#id_titel-' + i).show();
            $('label[for=id_titel-' + i + ']').show();
            $('#id_titel-' + j).show();
            $('label[for=id_titel-' + j + ']').show();
        }

        if ($('#id_title-' + i).val() && $('#id_title-' + i).val().trim().length > 0) {
            j = i + 1;
            $('#id_title-' + i).show();
            $('label[for=id_title-' + i + ']').show();
            $('#id_title-' + j).show();
            $('label[for=id_title-' + j + ']').show();
        }
    }

    // show next text area when typing
    $('textarea').keyup(function () {
        if ($(this).val().trim().length > 0) {
            $(this).next().show();
            $(this).next().next().show();
        }
    });

    // trigger submit button click on submit, to prevent it from doing a default form submit (which opens a new page)
    $('.content-form-container form').on('submit', function (e) {
        e.preventDefault();

        $('.form-submit').click();
    });

    $('.form-submit').on('click', function () {
        var emailInputField = $('#id_e-mail'),
            email = '';

        // if there is an email form field on the current form, send its content to the thank you page;
        // right now this is only needed for the newsletter form, otherwise we'll just send an empty string
        if (emailInputField.length) {
            email = emailInputField.val();
        } else if ($('#id_kontakt').length) {
            email = $('#id_kontakt').val();
        }

        loadContentFormThankYou(email);
    });
}

// replace the form with the thank you text defined in the form
function loadContentFormThankYou (email) {
    var elem = $('.content-form-container'),
        form = $('.form-submit').parent('form'),
        url = form.attr('action'),
        formArray = form.serializeArray(),
        formData = objectifyForm(formArray);

    $.ajax({
        url:     url,
        type:    'post',
        data:    $.param(formData),
        success: function (response) {
            // load thank you text into container
            $(elem).html(response);

            // if the submit button is no longer there, the form was validated correctly and is submitted
            if ($('.form-submit').length === 0) {

                // if this is the newsletter form thank you page, run the actual subscription post request
                // note: "lerchenfeld-form" works for both the German ("lerchenfeld-formular")
                // and English forms ("lerchenfeld-form")
                if ($('.content-form-container').attr('data-url').indexOf('lerchenfeld-form') !== -1) {
                    subscribeToNewsletter(email);
                }
            }

            formJanitor();
        }
    });
}

// convert form data to object
function objectifyForm (formArray) {
    //serialize data function
    var returnArray = {},
        i;

    for (i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }

    return returnArray;
}

// if this is a form page, load the form into the form container
function tryLoadingForm () {
    var contentFormContainer = $('.content-form-container');

    if (contentFormContainer) {
        loadContentForm();
    }
}

// this is copied from the Django docs: https://docs.djangoproject.com/en/1.11/ref/csrf/
function getCookie (name) {
    var cookieValue = null,
        cookies,
        i,
        cookie;

    if (document.cookie && document.cookie !== '') {
        cookies = document.cookie.split(';');

        for (i = 0; i < cookies.length; i++) {
            cookie = jQuery.trim(cookies[i]);

            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }

    return cookieValue;
}

function subscribeToNewsletter (email) {
    // set the CSRF token so we can send POST requests to our server
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
        }
    });

    // request the given email to be added to the newsletter list
    $.post('/en/subscribe_newsletter/', {
        email: email
    });
}
