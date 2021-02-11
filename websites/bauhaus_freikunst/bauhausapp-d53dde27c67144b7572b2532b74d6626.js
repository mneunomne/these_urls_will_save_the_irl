var app = angular.module('app', ['ngCookies']);

app.controller('ctrl', function($scope, $cookies, $http) {
  // a site object
  $scope.site                                = {};
  // accessibility section
  $scope.site.access                         = {};
  $scope.site.access.tabFocus                = false;
  $scope.site.access.contrast                = false;
  $scope.site.access.darkmode                = false;
  $scope.site.access.showHints               = false;

  $scope.site.access.animation               = true;
  // client possibilities (local storage or cookies)
  $scope.site.client                         = {};
  $scope.site.client.canStoreLocally         = clientHasLocalstorage;
  $scope.site.client.storeIn                 = clientStoreIn;
  $scope.glossar                             = {};
  $scope.quickAccess                         = false;
  $scope.toggleLeftMenu                      = toggleLeftMenu;
  $scope.toggleRightMenu                     = toggleRightMenu;
  $scope.clickContentHideMenus               = clickContentHideMenus;
  $scope.fitMobileContent                    = fitContent;
  // accessibility
  $scope.toggleContrast                      = toggleContrast;
  $scope.toggleClickFeedback                 = toggleClickFeedback;
  $scope.toggleDarkmode                      = toggleDarkmode;
  $scope.toggleAnimation                     = toggleAnimation;
  // Slideshow
  $scope.toggleSlideshowCaption              = toggleSlideshowCaption;
  // Menu Search
  $scope.siteIndexSearchTerm                 = "";
  $scope.siteIndexSearching                  = siteIndexSearching;
  $scope.siteIndexSearch                     = siteIndexSearch;
  $scope.clearSiteIndexSearchTerm            = clearSiteIndexSearchTerm;
  $scope.siteIndexSearchBase                 = "";
  $scope.siteIndexResearch                   = siteIndexResearch;
  $scope.facContext                          = facContext;
  $scope.menuToggle                          = false;
  window.scope                               = $scope;
  // page Setup
  $scope.facultyContext                      = window.scope.facultyContext;
  $scope.site.language                       = "";
  $scope.site.localisation                   = siteLocalisation;
  $scope.site.faculties                      = [];
  $scope.site.humanReadableFacultyContext    = facContextToHumanLanguage;
  $scope.site.searchUrl                      = "";
  $scope.site.facultyContext                 = $scope.facultyContext;
  $scope.site.maxContentWidth                = maxContentWidth;

  // experimaental find phone still undone
  // $scope.site.phoneLinks                = [];



  //
  // PREPARE DOCUMENT FOR FIRST VIEW
  //
  $(document)
  .ready(function() {
    loadAccessibilitySettings();
    accessAndFocusManagement();

    elementIsEmpty("#content_top");
    siteFaculty();
    // run once on load to get the initial VARs
    initializeMicrositeToplevelMenu(true);
    getInitialMenuState();
    topLevelMenu();
    extendCurrentMenuState();

    managesubNavInDisplay();
    if( $(window).width() > 700) {
      desktopHoverMenu();
    }
    // heroHeaderPic();
    // heroHeaderPicHeight();
    adaptFirstColumnContent();
    windowMobilizer();
    mobileSearchbar();
    hideEmptySubPageButton();
    responsiveTables ();
    bannerSliderCheck();
    startSliderShow();
    adaptAnythingWindow();
    setGeneralContext();
    fitContent();
    manageRightColumn();
    // contactFixxer();

    // denkraum bauhaus
    if($("#body-47055").length !== 0){
      $("#page").addClass("contrast");
      $("body").addClass("contrast");
    }
    manageUpLink();
    // get MD5 CheckSum and initialize Search
    getSiteIndexCheckSum();

    sideBoxManager();
    // skipLinks
    // BAUHAUSJOURNAL
    if($(".layout-none").length !== 0) {
      prepJournal();
      adaptBauhausJournal();
    }
    if($(".microsite").length !== 0){
      // micrositemenu overwidth adjustment
      adjustMenu();
    }
    timedOutMasonizeRightMobileMenu();
    nowrapper();
    // AUDIO and VIDEO player
    if($("audio").length !== 0) {
      mediaPlayerFix("audio");
    }
    if($("video").length !== 0) {
      mediaPlayerFix("video");
    }
    // printview pagetype 98
    if ($.getUrlParameter("type") === "98") {
      $.each($("a"),function(index, item){
        if($(this).attr('href') && modifyPrintViewLinks($(this)))
          var newTarget = $(item).attr("href")+"?type=98";
        $(item).attr("href", newTarget);
      });
      if ($("#content_right .col-xs-8").children().length === 0
          || ($("#content_right .col-xs-8").children().length === 1
              && $("#content_right .col-xs-8").children().first().attr("id") === "contentquicklinks")) {

        $("#content_main .col-xs-8").attr("class", "")
            .addClass(".col-xs-12 col-sm-12 col-md-12 col-lg-12");
      }
    }

    showSkipLink();
    // make telefone links active
    // getPhoneLinks();
    siteLocalisation();
    if($("#body-504").length !== 0) {
      addJournalButton();
    }
  });
  //
  // THIS IS WHAT FIRES AFTER DOCUMENT.READY
  //
  $(window)
  .load(function(){
    slideShowResponder();
    setStartSlideByHand();
    nowrapper();
  })
  //
  // WHAT HAPPENS ON RESIZE
  //
  .resize( function() {
    responsiveTables();
    bannerSliderResizeCheck();
    clearMobileViewManipulations();
    if( $(window).width() < 768) {
      fitContent();
      adaptFirstColumnContent();
    }
    else {
      fitContent();
      resetContentAndMenus();
    }
    if( $(window).width() > 700) {
      desktopHoverMenu();
      initializeMicrositeToplevelMenu();
    }
    windowMobilizer();
    mobileMenuAdapter();
    // fixContentTopWithTrippleColContent();
    manageRightColumn();

    // masonize content_right
    if( $(window).width() > 480 && $(window).width() < 769) {
      masonizeRightMobileMenu();
    }
    slideShowResponder(true);
    adaptAnythingWindow();
    responsiveTables ();
    manageUpLink();
    nowrapper();
    // MICROSITE
    if($(".microsite").length !== 0){
      adjustMenu();
    }
    // BAUHAUSJOURNAL
    if($(".layout-none").length !== 0) {
      resizeJournal();
    }
  });


  //
  // IF DOCUMENT CHANGES THE HEIGHT
  //
  function onElementHeightChange(elm, callback){
    var lastHeight = elm.clientHeight
      , newHeight;

    (function run() {
      newHeight = elm.clientHeight;
      var changed = false;
      if (lastHeight !== newHeight) {
        changed = true;
      }
      lastHeight = newHeight;
      if (elm.onElementHeightChangeTimer) {
        clearTimeout(elm.onElementHeightChangeTimer);
      }
      elm.onElementHeightChangeTimer = setTimeout(run, 200);
      if (changed) {
        callback();
      }
    })();
  }
  onElementHeightChange(document.body, function(){
    manageUpLink();
  });
  //
  // on window resize masonry must reorganize
  //
  function resizeJournal(){
    masonizeJournal(true)
    triggerMasonryResize();
  }

  // CHECKS IF CLIENT BROWSER IS IE (gad may have mercy with their poor souls)
  function isIE(){
    var ua = window.navigator.userAgent;

    if (ua.indexOf('Edge/') > 0 ||
        ua.indexOf('Trident/') > 0 ||
        ua.indexOf('MSIE ') > 0){
      return true;
    }
    else{
      return false;
    }
  }
  //
  // CLIENT HAS LOCAL STORAGE
  //
  function clientHasLocalstorage(){
    return typeof(Storage) !== "undefined" ? "true" : "false";
  }
  //
  // WHERE TO STORE DATA
  //
  function clientStoreIn(){
    return $scope.client.canStoreLocally ? "localStorage" : "Cookies";
  }

  // Accesseability and focus management
  // creating clickable great looking links that react with visual indication
  // then the page is navigated by tabbing.
  function accessAndFocusManagement() {
    var $body = $("body");
    var $page = $("#page");

    $(window)
    .on('keydown', function(e) {
      $('#page *').removeClass('feedback');
      if(e.keyCode === 9) {
        // $scope.site.access.tabFocus = true;
        $body.addClass('feedback');
        $page.addClass('feedback');
      }
    })
    .on('mousedown', function() {
      if(!$scope.site.access.tabFocus && !$scope.site.access.feedback === true){
        $body.removeClass('feedback');
        $page.removeClass('feedback');
      }
    });

    $('*').on('focus', function(e) {
      if(e.keyCode === 9) {
        $body.addClass('feedback');
        $page.addClass('feedback');
      }
    });
    // barriere Link / Button
    $body.on("click", ".barriereMenuLink", function(){
      toggleBarriereSettingsCenter();
    })
    .on("click", "#barrierCenter.modal.active", function(ev){
      if($(ev.target).hasClass("active")){
        hideBarriereSettingsCenter();
      }
    })
    .on("click", "#barrierCenter.modal.active a.barriereInfo", function(ev){
      $(ev.target).parent("h3").next("div.infoText").toggleClass("sr-only");
    })
    .on("click", '.modal button[data-dismiss="modal"]', function(){
        hideBarriereSettingsCenter();
      })
    // tab navigation for skiplinks
    .on( "keydown", ".skiplink", function(e) {
      closeMegaMenu();
      closeQuickAccesLinks();
      closeWebmailMenu();
      closeMicrositeMegaMenu();
      var activatableElement  = $(e.target)
        , target              = $(activatableElement.attr("href"))
        , nextElement         = target.find("a").first();

      if(target.find(".active").length !== 0){
        nextElement = target.find(".active").find("a").first();
      }
      if(e.keyCode === 13 && activatableElement.hasClass("goToMenu")) {
        nextElement.focus();
      }
    });
  }
  // show barriere settings center
  function showBarriereSettingsCenter(){
    $("#barrierCenter")
      .addClass("show active")
      .removeClass("fade")
      .attr("aria-hidden", false)
      .focus();
  }
  //hide barriere settings center
  function hideBarriereSettingsCenter(){
    $("#barrierCenter")
    .removeClass("active show")
    .addClass("fade")
    .attr("aria-hidden", true);
    $("#nav-meta-list .barriereMenuLink").focus();
  }
  // toggle barriere settings Center
  function toggleBarriereSettingsCenter(){
    if($("#barrierCenter").hasClass("active")){
      hideBarriereSettingsCenter();
    }
    else {
      showBarriereSettingsCenter();
    }
  }

  //
  // onlineJournal Button
  //
  function addJournalButton(){
    var target     = "/en/university/news/bauhausjournal-online/"
      , text = "know what's up. Read the Bauhausjournal-online."

    if($scope.site.language === "de"){
      target = "/de/universitaet/aktuell/bauhausjournal-online/";
      text   = "Wissen was los ist. Lesen Sie im Bauhausjournal-online.";
    }
    $("#SocialMediaContents").append(
      $("<a id='goToJournalButton' tabindex='0' href='"+target+"' >"+text+"</a>")
    );
  }

  //
  // nowraps
  //
  function nowrapper(){
    var nowrap = $("[class*=nowrap]");
    if(nowrap.length > 0){
      nowrap.addClass("nowraper");
      $(".nowraper").each(function(it, wrap){
        var imageContainer   = $(wrap).find(".csc-textpic-imagewrap")
          , textContainer    = $(wrap).find(".csc-textpic-text")
          , image            = imageContainer.find("img")
          , imageWidth       = image.attr("width")
          , nowrapWidth      = $(wrap).width()
          , textWidth        = nowrapWidth - imageWidth;

        if(imageContainer.find(".csc-textpic-imagerow").length !== 0){
          var imageColsCount = imageContainer.attr("data-csc-cols")
            , imageRow      = imageContainer.find(".csc-textpic-imagerow").first()
            , colImages      = imageRow.find("img")
            // prep to add the spacing between the pics
            , comboWidth     = (imageColsCount - 1)*20;

          colImages.each(function(index, image){
            comboWidth += Number($(image).attr("width"))
          });
          imageWidth = comboWidth;
        }

        var imageNowrapRatio = imageWidth / ( nowrapWidth / 100 );
        var textNowrapRatio  = 100 - imageNowrapRatio;
        var imageSetting = { width: "calc(50% - 10px;)"};
        var textSetting  = { width: "calc(50% - 10px;)"};

        if(textWidth > 250) {
          imageSetting = { minWidth: "calc("+imageNowrapRatio+"% - 10px)", maxWidth: "calc( "+imageNowrapRatio+"% - 10px)"};
          textSetting  = { width: "calc("+textNowrapRatio+"% - 20px)"};
        }
        if($(window).width() < 480) {
          imageSetting = { minWidth: "none", maxWidth: "none"};
          textSetting  = { maxWidth: "none"};
        }

        imageContainer.css(imageSetting);
        textContainer.css(textSetting);
      })
    }
  }

  //
  // SITE SETTINGS, LANGUAGE, BASE TRANSLATIONS
  //
  // create a rough translation environment for the page, stored in $scope.site ->[localisation, language, searchUrl, faculties ]
  //
  //
  // set Sitelanguage according to the HTML LANG ATTRIBUTE
  //
  function siteLocalisation (){
    $language = $("html").attr("lang")
    if ($language === "en-GB") {
      $scope.site.language =  'en';
    } else {
      $scope.site.language =  'de';
    }
    siteFaculty ();
    facContextToHumanLanguage();

    return $language;
  }

  //
  // translate according to the sitelocalisation, some base things like url to sitemap
  //
  function siteFaculty (){
    // english source
    var sourceFallback      = "/fileadmin/fs/sitemap/";
    var source      = "/uploads/tx_buwfeskin/sitemap.en.html";
    var sourceMd5CheckSumUrl = "/uploads/tx_buwfeskin/sitemap.en_md5.txt?";
    // english faculties
    var faculties   = ['University', 'Architecture and Urbanism', 'Civil Engineering', 'Art and Design', 'Media' ]

    // default german source
    $scope.site.indexSearchUrlFallback  = "/de/fs/sitemap/";
    $scope.site.indexSearchUrl          = "/uploads/tx_buwfeskin/sitemap.de.html";
    $scope.site.checkSumMd5Url          = "/uploads/tx_buwfeskin/sitemap.de_md5.txt?";
    // default german Faculties
    $scope.site.faculties = ['Universität', 'Architektur & Urbanistik', 'Bauingenieurwesen', 'Kunst und Gestaltung', 'Medien'];

    // default language setting is german if language set to en_GB we
    // change the resources and nomenclatur of faculties
    if($scope.site.language === 'en') {
      $scope.site.faculties               = faculties;
      $scope.site.indexSearchUrl          = source;
      $scope.site.checkSumMd5Url          = sourceMd5CheckSumUrl;
      $scope.site.indexSearchUrlFallback  = sourceFallback;
    }
  }

  //
  // SITE INDEX SEARCH
  //
  //
  // facContext() returns the current Contextual faculty in human language
  //
  function facContext() {
    var $body = $("body");
    if ($body.hasClass("uni")) {
      context = "uni";
    }
    else if($body.hasClass("bauing")) {
      context = "bauing";
    }
    else if($body.hasClass("medien")) {
      context = "medien";
    }
    else if($body.hasClass("gestaltung")) {
      context = "gestaltung";
    }
    else if($body.hasClass("architektur")) {
      context = "architektur";
    }
    else {
      context = "uni";
    }
    $scope.facContext = context;
    $scope.site.facContext = context;
    return context;
  }
  //
  // faculty to position in array helper function ... return values from 0 - 4
  //
  function facContextToHumanLanguage() {
    $facultyPosition = ""
    switch($scope.facContext) {
      case "architektur":
        $facultyPosition = 1
        break;
      case "bauing":
        $facultyPosition = 2
        break;
      case "gestaltung":
        $facultyPosition = 3
        break;
      case "medien":
        $facultyPosition = 4
        break;
      default:
        $facultyPosition = 0
        break;
    }
    return $scope.site.faculties[$facultyPosition];
  }
  //
  // base searcb gets called if user enters text into searchfield
  //
  function siteIndexSearch(siteIndexSearchTerm){
    if ( $(".search .ym-searchfield").is(":focus") && siteIndexSearching()) {
      $("#bgBarContainer").addClass("active clicked");
      $(".toplevel > li.active").addClass("clicked");
      var facultySelected = clickedPosInList(".toplevel", $(".toplevel > li.clicked.active"));
      facultySelected = clickFaculty(facultySelected);
      setFacultyContext(facultySelected);
      $("#contentCurtain").addClass("down");
      $("#siteIndexSearch").addClass("clicked");
    }
    if(siteIndexSearching() && $scope.siteIndexSearchBase){
      $scope.facultySearchbase = $scope.siteIndexSearchBase[facContext()];
    } else {
      $scope.facultySearchbase = [];
    }
  }

  //
  // function to toggle between search scopes like uni, architektur, bauing etc.
  //
  var oldFacContext = facContext();
  function siteIndexResearch(){
    var searchContext = facContext();
    if(!siteIndexSearching()){
      return;
    }
    else if(!$scope.siteIndexSearchBase ) {
      $scope.siteIndexSearchBase = JSON.parse(localStorage.siteIndexSearchBase)
    }
    if( siteIndexSearching() && oldFacContext !== searchContext){
      oldFacContext = searchContext;
      $scope.facultySearchbase =  $scope.siteIndexSearchBase[searchContext];
    }
  }

  //
  // clear the search by setting the the search to an empty string
  //
  function clearSiteIndexSearchTerm(){
    $scope.siteIndexSearchTerm = "";
  }

  //
  // return whether we are searching or not .... aka the searchterm is longer than 0
  //
  function siteIndexSearching() {
    return $scope.siteIndexSearchTerm.length > 0;
  }

  // get a checksum of the siteIndex,
  // if it deviates from localStorage.lastCheckSum
  // we will pull a new searchBase and put it into local Storage
  function getSiteIndexCheckSum(){
    $http.get($scope.site.checkSumMd5Url)
    .then(function(response){
      var checkSum = response.data.substr(0, 32);
      $scope.site.checkSum = checkSum;
      $scope.site.lastCheckSum = window.localStorage.lastCheckSum;
      // search
      if(!window.localStorage.lastCheckSum || checkSum  !== $scope.site.lastCheckSum) {
        manageSiteIndexSearchData();
      }
    });
  }
  function getSiteIndex(){
    if($scope.getSiteIndexRun){
      $scope.getSiteIndexRun = false;
      return;
    }
    $scope.getSiteIndexRun = true;
    // if nothing changed skip loading the sitemap
    if( window.localStorage.lastCheckSum && $scope.site.checkSum === $scope.site.lastCheckSum ) {}
    else {
      // get data for local storage 1st Attempt
      $http.get($scope.site.indexSearchUrl)
        .then(function(response) {
            var searchData = response.data
            $scope.searchData = searchData;
            $scope.getSiteIndexRun = false;
            sanitizeSiteIndex(searchData, false);
          }
          , function(){
            // if first attempt failed go to falback url
            // GETTING BACKUP DATA, REGULAR LOAD FAILED
            $http.get($scope.site.indexSearchUrlFallback)
              .then(function(response) {
                var searchData = response.data
                $scope.searchData = searchData;
                sanitizeSiteIndex(searchData, true);
              });
          });
    }
  }
  // convert html to json structure
  function sanitizeSiteIndex(siteIndex, fallback){
    if(siteIndex && $(siteIndex).length !== 0 ){
      searchBase      = $(siteIndex).find("body > ul")
      , searchScopes  = {}
      , facs          = ['uni', 'architektur', 'bauing', 'gestaltung', 'medien']
      , searchBase    = $(siteIndex).children("li");

      if(fallback) {
        searchBase = $(siteIndex).find(".csc-sitemap > ul > li");
      }
      $.each($(searchBase), function(index, item){
        if(index < 5){
          searchScopes[facs[index]] = $(item).find("a") ;
        }
      });

      if(searchScopes.length !== 0){
        $.each(facs, function(index, fac){
          var facLinks = $(searchScopes[fac]);
          $scope.jsonLinks = [];
          var jsonLinks = $scope.jsonLinks;

          $.each(facLinks, function(iter, link){
            $url = $(link).attr("href");
            $title = $(link).text();
            if($title !== "+" && $title !== "-") {
              $scope.jsonLinks.push({title : $title , url : $url});
            }
          });
          searchScopes[fac] = jsonLinks;
        });
      }
      $scope.siteIndexSearchBase = searchScopes;
      manageSiteIndexSearchData();
      searchDefined = true;
    }
  }

  //
  // manage SiteIndex Search storage so we don't need to get it every time from the site index
  //
  var updateAfter = (24 * 60 * 60 * 1000); // 24 hrs
  var databaseUpdated = false;
  var searchDefined = false;
  function manageSiteIndexSearchData(){
    // site index search data in place,
    // check data backup
    // confirm searchData is defined
    if($scope.site.client.canStoreLocally && localStorage.siteIndexSearchBase){
      // Can store locally, SEARCHBASE IN SCOPE
      // check if languages are up to date
      if(localStorage.siteLanguage === $scope.site.language){
        // SEARCH DATA CONSISTENT WITH LANGUAGE, parsing to SCOPE
        $scope.siteIndexSearchBase = JSON.parse(localStorage.getItem('siteIndexSearchBase'));
        localStorage.setItem("searchBaseUpdated", new Date().getTime());
        searchDefined = true;
      }
      // make new because language has changed or data is too old
      else if(localStorage.siteLanguage !== $scope.site.language || window.localStorage.lastCheckSum !== $scope.site.checkSum){
        if (databaseUpdated) {
          localStorage.siteIndexSearchBase = undefined;
          localStorage.setItem("siteIndexSearchBase", JSON.stringify($scope.siteIndexSearchBase));
          databaseUpdated = false;
          localStorage.setItem("siteLanguage", $scope.site.language);
          localStorage.setItem("searchBaseUpdated", new Date().getTime());
          localStorage.setItem("lastCheckSum", $scope.site.checkSum);
        }
        else {
          databaseUpdated = true;
          getSiteIndex();
        }
      }
    }
    else if($scope.site.client.canStoreLocally && !localStorage.siteIndexSearchBase){
      if ($scope.siteIndexSearchBase) {
        try {
          localStorage.setItem("siteIndexSearchBase", JSON.stringify($scope.siteIndexSearchBase));
          searchDefined = true;
        }
        catch (e) {
          if(e.name === "NS_ERROR_FILE_CORRUPTED") {
            //   "Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. " +
            //   "This will remove the corrupted browser storage across all sites.");
            // sessionStorage.clear();
            // localStorage.clear();
            // getSiteIndex();
            return null;
          }
        }
        // localStorage.setItem("siteIndexSearchBase", JSON.stringify($scope.siteIndexSearchBase));
        // searchDefined = true;
      }
      else {
        getSiteIndex();
      }
    }
    else {
      getSiteIndex();
    }
  }

  //
  // X VIEW FOR THE X CHALLENGED BARRIERE
  //
  function setX(theX){
    if ($scope.site.client.canStoreLocally) {
      // go 4 localStorage
      localStorageToScopeX(theX);
    }
    else {
      // go 4 Cookies
      cookieToScopeX(theX);
    }
  }
  function storeTheX(theX){
    if($scope.site.client.canStoreLocally) {
      scopeXToLocalStorage(theX);
    }
    else {
      scopeXToCookie(theX)
    }
  }
  function scopeXToLocalStorage(theX){
    try{
      localStorage.setItem(theX, $scope.site.access[theX]);
    }
    catch (e) {
      return null;
    }
  }
  function localStorageToScopeX(theX){
    if(localStorage[theX] !== undefined) {
      $scope.site.access[theX] = (localStorage[theX] === 'true');
    }
  }
  function scopeXToCookie(theX) {
    $cookies.put(theX, $scope.site.access[theX], {'path': '/'});
  }
  // retrieve scope.contrast from cookie
  function cookieToScopeX(theX) {
    $scope.site.access[theX] = ($cookies.get(theX) === 'true');
  }
  function xThePage(theX) {
    if ($scope.site.access[theX]) {
      $("body").addClass(theX);
      $("#page").addClass(theX);
      $("#barrierCenter").addClass(theX);
      $scope.site.access[theX] = true;
    }
    else {
      $("body").removeClass(theX);
      $("#page").removeClass(theX);
      $("#barrierCenter").removeClass(theX);
      $scope.site.access[theX] = false;
    }
  }
  function toggleX(theX){
    $scope.site.access[theX] = !$scope.site.access[theX];
    storeTheX(theX);
    xThePage(theX);
  }
  //
  // CONTRAST VIEW FOR THE VISUALLY CHALLENGED
  //
  // Function toggleContrast changes displayed content to high contrast allowing visually challenged ppl to enjoy our content.
  // Additionally we set a cookie to keep a persistent experience throught the whole page.
  // setContrast checks if contrast info can be saved in localStorage, or
  // if we need cookies for the magic contrast persistent experience.
  // in case of localStorage availability we either set localStorage.contrast from the values provided in scope.contrast or we set scope.contrast to be localeSorage.contrast
  // if we need cookies we set them
  function contrastify(){
    setX("contrast");
    xThePage("contrast");
    setSideBarBGColors($scope.site.access.contrast);
  }
  // Toggle the contrast View on Click
  function toggleContrast(){
    toggleX("contrast");
    setSideBarBGColors($scope.site.access.contrast)
    if($scope.site.access.darkmode){
      toggleX('darkmode');
    }
  }
  // CLICK FEEDBACK
  function feedbackify() {
    setX("feedback");
    xThePage("feedback");
  }
  // Toggle the feedback
  function toggleClickFeedback(){
    toggleX("feedback");
  }
  // CLICK DARKMODE
  function darkmodify() {
    setX("darkmode");
    xThePage("darkmode");
  }
  // Toggle the darkmode
  function toggleDarkmode(){
    toggleX("darkmode");
    if($scope.site.access.contrast){
      toggleX("contrast");
    }
  }
  // CLICK ANIMATIONS
  function animatify() {
    setX("animation");
    xThePage("animation");
  }
  // Toggle the darkmode
  function toggleAnimation(){
    toggleX("animation");
    var startslider = $(".start-slider");
    if($scope.site.access.animation) {
      startslider.removeClass("no-slide");
      startSlide(startslider.first());
    }
    else {
      startslider.addClass("no-slide");
    }
  }
  // loadAccessibilitySettings
  function loadAccessibilitySettings(){
    contrastify();
    feedbackify();
    darkmodify();
    animatify();
    prepMenuTitles();
    // stopTheGifs();
  }
  function stopTheGifs(){
    if($scope.site.access.animation == false ){
      function createElement(type, callback) {
        var element = document.createElement(type);

        callback(element);

        return element;
      }
      function is_gif_image(i) {
        return /^(?!data:).*\.gif/i.test(i.src);
      }
      function freezeGif(img) {
        var width = img.width,
            height = img.height,
            canvas = createElement('canvas', function(clone) {
              clone.width = width;
              clone.height = height;
            }),
            attr,
            i = 0;

        var freeze = function() {
          canvas.getContext('2d').drawImage(img, 0, 0, width, height);

          for (i = 0; i < img.attributes.length; i++) {
            attr = img.attributes[i];

            if (attr.name !== '"') { // test for invalid attributes
              canvas.setAttribute(attr.name, attr.value);
            }
          }

          canvas.style.position = 'absolute';

          img.parentNode.insertBefore(canvas, img);
          // img.style.opacity = 0;
        };

        if (img.complete) {
          freeze();
        } else {
          img.addEventListener('load', freeze, true);
        }
      }
      function freezeAllGifs() {
        return new Array().slice.apply(document.images).filter(is_gif_image).map(freezeGif);
      }
      freezeAllGifs();
    }
  }

  // window Mobilizer sets mobile variable dependent on window.width()
  // this is an attavism but supports legacy scripts still roaming
  // freely in the buw fe skin
  function windowMobilizer() {
    window.mobile = true;
  }

  //
  // SITE ADAPTATIONS AND PRETTIFICATION
  //
  // check if element is empty and hide
  function elementIsEmpty(selector){
    if ( $(selector).text().replace(/\s/g,'').length !== 0 || $(selector).find("img").length !== 0 ) {
      return false;
    } else {
      $(selector).hide();
      return true;
    }
  }

  // hide empty Unterseiten MenuLink
  function hideEmptySubPageButton(){
    if ($("#subPages").children().length !== 0) {
      $("#rwd-subpages").removeClass("hidden");
    }
  }
  var lastContext = "";

  //
  // SKIPLINK
  //
  function showSkipLink(){
    var skipList = $(".skiplinkListItem");
    $.each(skipList, function(index, skipListItem){
      var skiplLink      = $(skipListItem).find("a")
        , skipLinktarget = skiplLink.attr("href")
      if(($(skipLinktarget).length !== 0 && $(skipLinktarget).is(":visible"))||((skipLinktarget === '#nav-main') && $("#micrositeMenu").length === 0 && $(window).width() > 700)){
        $(skipListItem).removeClass("hidden");
      }
    })
  }
  //
  // PDF file Linkes
  //
  function pdfAccessorJuris() {
    // console.log("pdf links count", $('a[href$=".pdf"]').length)

    // $pdfLinks      = $('a[href$=".pdf"]')
    // , $serviceLink = "/pdfToHtml/index.php?pdf='https://www.uni-weimar.de"
    // , $file        = ""
    // , $htmlLink    = '<a href="/pdfToHtml/htmls/index.html"'+$file+'><strong> html version of the pdf</strong></a>'
    // , $pdfCount    = $pdfLinks.length;
    //
    // $.each($pdfLinks, function( index, item ){
    //   // $(item).css({background: "#000"});
    //   $file= $(item).text();
    //   // console.log($file);
    //   $fileLink = $(item).attr("href");
    //   // console.log("getting: ", $serviceLink+$fileLink);
    //
    //   $.get($serviceLink+$fileLink+"'", function(data){
    //   })
    //     .done(function( data ) {
    //       // console.log("SUCCESS DATA: ",data);
    //       $file = data
    //       // console.log("getting", $serviceLink+$fileLink);
    //       // $(item).after($($htmlLink));
    //     });
    //
    // });

  }
  //
  // close Curtains
  //
  function closeCurtain(exempt){
    switch (exempt) {
      case "webMail" :
        closeQuickAccesLinks();
        closeMegaMenu();
        closeMicrositeMegaMenu();
        break;
      case "megaMenu" :
        closeQuickAccesLinks();
        closeMicrositeMegaMenu();
        closeWebmailMenu();
        break;
      case "microSite" :
        closeQuickAccesLinks();
        closeWebmailMenu();
        closeMegaMenu();
        break;
      case "quickAccess" :
        closeWebmailMenu();
        closeMegaMenu();
        closeMicrositeMegaMenu();
      default:
        closeWebmailMenu();
        closeMegaMenu();
        closeMicrositeMegaMenu();
        closeQuickAccesLinks();
        break;
    }
  }

  //
  // Webmail
  //
  function closeWebmailMenu(){
    $("#nav-meta-list .ifsub.first").removeClass("active");
    $("#nav-meta-list .nav-meta-list-quickpane").removeClass("active");
  }
  function openWebmailMenu(){
    $("#nav-meta-list .ifsub.first").addClass("active");
    $("#nav-meta-list .nav-meta-list-quickpane").addClass("active");
  }
  function openWebmail(){
    openWebmailMenu();
    closeCurtain("webMail");
  }

  //
  // Webmail Menu Interaction
  //
  $("#nav-meta")
  .on("click", ".ifsub.first", function(event){
    $("#nav-meta-list .ifsub.first").toggleClass("active");
    $("#nav-meta-list .nav-meta-list-quickpane").toggleClass("active");
    closeCurtain("webMail");
  })
  .on("focus", ".ifsub.first", function(event){
    openWebmail();
  })
  .on("keydown", ".ifsub.first:focus", function(event){
    var activateableElement = $(event.target);
    if(event.keyCode === 9) {
      activateableElement.addClass("active");
    }
    if(activateableElement.hasClass("active")){
      activateableElement.blur();
    }
  })
  .on("focusout", ".ifsub.first li", function() {
    if( !$("#nav-meta .ifsub.first").is(":focus-within") ){
      closeWebmailMenu();
    }
  });

  //
  // QuickLinks Menu
  //
  var globalQuicklinksOpened = false;
  $("#pageHeadSection")
  .on("click", "#globalquicklinks > a", function(ev){
    // ev.preventDefault()
    if($("#globalquicklinksBg").length == 0) {
      var background = $('<div id="globalquicklinksBg" class=""></div>');
      $("#allContents").prepend(background);
    }
    $(this).toggleClass("active");
    $("#quickpane").toggleClass("active").slideToggle('fast');
    $("#globalquicklinksBg").toggleClass("active");
    globalQuicklinksOpened = globalQuicklinksOpened ? false : true;

    if($("#quickpane").hasClass("active")){
      $("#globalquicklinks_hint").attr("aria-expanded", "true");
    }
    else {
      $("#globalquicklinks_hint").attr("aria-expanded", "false");
    }
    closeWebmailMenu();
  })
  .on("keydown", "#globalquicklinks > a", function(ev){
      if(ev.keyCode === 9 && $("#quickpane.active").length === 0) {
        $("#globalquicklinks > a").click();
      }
      if(ev.keyCode === 13) {
        $("#globalquicklinks > a").click();
      }
  });

  $("#quickpane")
  .focusout(function(ev){
    if( !$("#quickpane").is(":focus-within") ){
      closeQuickAccesLinks();
    }
  })
  .on("click","#globalquicklinksBg.active", function(ev){
    closeQuickAccesLinks();
  })
  .on("keydown", '[TabIndex*="0"]', function(ev){
    console.log("keycode", ev.keyCode);
    var thePane             = $("#quickpane")
        , goTo
        , theOptions        = thePane.find('[TabIndex*=\"0\"]:visible')
        , theOptionsCount   = theOptions.length
        , theNow            = $(document.activeElement)
        , exitOption        = $("#topSearchField")
        , exitOptionSm      = $("#mobileLanguageSwitch a").first();

    if(theNow.length != 0){
      var thePos = theOptions.index(theNow);
    }
    else {
      return;
    }
    // up
    if(ev.keyCode === 38 || ev.keyCode === 37) {
      ev.preventDefault();
      var goTo = theOptions[thePos-1];
      if(thePos == 0){
        goTo = theOptions[theOptionsCount-1];
      }
      goTo.focus();
    }
    // down
    if(ev.keyCode === 40 || ev.keyCode === 39) {
      ev.preventDefault();
      var goTo = theOptions[thePos+1];
      if(thePos+1 == theOptionsCount){
        if($(window).width() > 990) {
          goTo = exitOption;
        }
        else {
          goto = exitOptionSm;
        }
      }
      goTo.focus();
    }
    if(ev.keyCode === 27){
      if($(window).width() > 990) {
        goTo = exitOption.focus();
      }
      else {
        goto = exitOptionSm.focus();
      }
    }
  });

  //
  // DESKTOP MEGA MENU
  //
  // get the initial state to reproduce and reinitiate menu later on
  var initialActive = $(".toplevel > li.active");
  var canHover = !(matchMedia('(hover: none)').matches);
  if(canHover) {
    document.body.classList.add('can-hover');
  }

  var lastInMenuFocus     = false;
  $scope.lastInMenuFocus  = lastInMenuFocus;
  function onKeyInputGo(go){
    var lastElement     = $("a").is(":focus") ? $("a:focus") : lastInMenuFocus;
    var link            = lastElement;
    var currentItem     = $(":focus");
    var dropdown        = link.parent("li");
    var isOpen          = $(":focus").hasClass("open") || $(":focus").parent("li").hasClass("active");
    var isToggle        = $(":focus").hasClass("toggle");

    if(go !== "shift"){
      if($(":focus").length !== 0){
        lastInMenuFocus = $(":focus");
      }
    }

    switch(go){
      case "up":
        var nextPos = dropdown.prevAll("li.menu-item").first().find("a").first();
        if(nextPos.length == 0) {
          var nextPos = dropdown.nextAll("li.menu-item").last().find("a").first();
        }
        if(nextPos.length > 0){
          nextPos.parent("li").find("li.active").removeClass("active").removeClass("clicked");
          nextPos.focus();
        }
        break;

      case "right":
        if(dropdown.hasClass("parent")){
          if($(window).width() > 700){
            var nextPos = dropdown.find("ul li.menu-item a");
          }
          else {
            if(isToggle && isOpen){
              console.log("open one list down and on")
              var nextPos = $(":focus").siblings("ul").find("li a");
            }
            else if(isToggle && !isOpen){
              console.log("closed next in list")
              if(dropdown.next("li").length !== 0){
                // next is available go on to next li
                console.log("next is available go on to next li")
                var nextPos = dropdown.next("li").find("a");
              }
              else {
                if(dropdown.parent("ul").parent("li").next("li").find("a").length !== 0){
                  // next li not available check for parents next li
                  console.log("next li not available check for parents next li");
                  var nextPos = dropdown.parent("ul").parent("li").next("li").find("a");
                }
                else if(dropdown.parent("ul").parent("li").parent("ul").find("li a").length !== 0){
                  // next li not available check for parents next li
                  console.log("next li not available check for parents next li")
                  var nextPos = dropdown.parent("ul").parent("li").parent("ul").find("li a");
                }
                else {
                  console.log("else ")
                  var nextPos = dropdown.parent("ul").find("li").first().find("a");
                }
              }
            }
            else if(!isToggle) {
              var nextPos = lastElement.siblings(".toggle");
            }
          }
        }
        else {
          if($(window).width() > 700){
            //onKeyInputGo("down");
          }
          else {
            console.log("no a parent")
            if($(":focus").parent("li").next("li").length !==0){
              var nextPos = dropdown.next("li").find("a");
            }
            else {
              if(dropdown.parent("ul").parent("li").length !== 0){
                var nextPos = dropdown.parent("ul").parent("li").find("a");
              }
              else {
                var nextPos = dropdown.parent("ul").find("li a");
              }
            }
          }
        }
        nextPos.first().focus()
        break;

      case "down":
        var parent = link.parent('li');
        var dropdown = parent.nextAll("li.menu-item").first();
        if(dropdown.length == 0){
          var dropdown = parent.prevAll("li.menu-item").last()
        }
        dropdown.find('a').filter(':visible').first().focus();
        break;

      case "left":
        var sublist = dropdown.parent("ul");
        var nextPos = sublist.siblings(".main-menu-link");

        if($(window).width() > 700) {
          if(nextPos.length != 0){
            dropdown.removeClass(".active").removeClass(".clicked");
            var activeItems = sublist.find(".active").removeClass("active").removeClass("clicked")
          }
        }
        else {
          if(currentItem.hasClass("toggle")){
            console.log("we are on toggle");
            nextPos = link.siblings("a");
          }
          else if(dropdown.prev("li").length === 0){
            console.log("no prev li element");
            if(dropdown.parent("ul").parent("li").prev("li").length !== 0) {
              console.log("seems one up is available");
              nextPos = dropdown.parent("ul").parent("li").find("a")
            }
            else {
              console.log("one up nothing available either");
              nextPos = dropdown.siblings("li").last().find("a");
            }
          }
          else {
            console.log("going one up focus on toggle")
            nextPos = dropdown.prev("li").find("a.toggle");
          }
        }
        nextPos.focus();
        break;

      case "esc":
        if($(window).width() > 700){
          if($("#micrositeMenu").length !== 0 ){
            $(".closeMicrositeMegaMenu").focus();
          }
          else {
            $scope.clearSiteIndexSearchTerm();
            $("#closeMegaMenu").focus();
          }
        }
        else {
          $("#showMainMenuButton").focus();
        }


        break;

      case "shift":
        if(lastInMenuFocus){
          lastInMenuFocus.focus();
        }
        break;

      case "s":
        if($(window).width() > 700){
          $("#siteIndexSearchInput").focus();
        }
        else {

        }
        break;

    }
  }
  // combines the main menu functions into one
  function desktopHoverMenu(){
    if($(window).width() > 700){
      hoverMenuControl();
      hoverSubMenuControl();
      hoverMenuBackgroundControl();
    }
  }
  // expand TOP MOS MENU BAR on click
  function topLevelMenu() {
    $("#main .toplevel").find(".separator").remove();
    if($(window).width() > 700) {
      $("#main")
      .on("click", ".toplevel > li > a", function(event){
        event.preventDefault();
        if(!$(this).parent("li").hasClass("clicked")){
          var parent = $(this).parent("li");
          $(".toplevel > li").removeClass("active clicked");
          parent.addClass("clicked active");
          manageSubMenu();
          $("#siteIndexSearch").addClass("clicked");
          $("#allContents").addClass("relative");
          $("#contentCurtain").addClass("down");
          // color coding
          var facultySelected = clickedPosInList(".toplevel", $(".toplevel > li.clicked.active"));
          facultySelected = clickFaculty(facultySelected);
          setFacultyContext(facultySelected);
          return false;
        }
        else {
          closeMegaMenu();
          reInitialiseMenu();
          window.location = $(this).attr("href");
          return true;
        }
      })
      //
      // key navigation topmost entries
      //
      // key management when SEARCHINPUTFIELD selected
      .on( "keydown", "#siteIndexSearchInput", function(e){
        if ([37,38,39,40,27,13].indexOf(e.keyCode) == -1) {
          return;
        }
        else {
          e.preventDefault();
          e.stopPropagation();
          var futureActiveLink =  $(".siteIndexSearchResultsList a");
          // Store the reference to our top level link
          switch(e.keyCode) {
            case 13:
              if(futureActiveLink.length !== 0){
                futureActiveLink.first().focus();
              }
              else {
                $(".zilchContainer").focus();
              }
              break;
            case 27:
              onKeyInputGo("esc")
              break;
            default:
              e.preventDefault();
              e.stopPropagation();
              $scope.clearSiteIndexSearchTerm();
              onKeyInputGo("shift");
              break;
          }
        }
        // var lastElement = $("a").is(":focus") ? $("a:focus") : false;

      })
      // key management when searchresults selected
      .on( "keydown", "#siteIndexSearchResults a", function(e){
        if ([37,38,39,40,27, 13, 83].indexOf(e.keyCode) == -1) {
          return;
        }
        else {
          e.preventDefault();
          e.stopPropagation();
          var currentResult = $(".siteIndexSearchResultsList a:focus");
          var prev = currentResult.parent("li").prev("li").find("a");
          if(prev.length === 0){
            prev = $("#siteIndexSearchInput");
          }
          var next = currentResult.parent("li").next("li").find("a");
          if(next.length === 0){
            next = $("#siteIndexSearchInput");
          }
          // Store the reference to our top level link
          switch(e.keyCode) {
            case 27:
              $scope.clearSiteIndexSearchTerm();
              onKeyInputGo("esc");
              break;

            case 83: // pressing shift
              $scope.clearSiteIndexSearchTerm();
              onKeyInputGo("s");
              break;

            case 37: // left arrow
              prev.focus();
              break;

            case 38: /// up arrow
              prev.focus();
              break;

            case 39: // right arrow
              next.focus();
              break;

            case 40: // down arrow
              next.focus();
              break;

            default:
              e.preventDefault();
              e.stopPropagation();
              $scope.clearSiteIndexSearchTerm();
              onKeyInputGo("shift");
              break;
          }
        }
      })
      // key management when closeMegamenu selected
      .on( "keydown", "#closeMegaMenu", function(e){
        if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
          return;
        }
        else {
          // Store the reference to our top level link
          switch(e.keyCode) {
            case 16:
              onKeyInputGo("shift");
              break;
            case 83: // pressing shift
              onKeyInputGo("s");
              break;
            default:
              e.preventDefault();
              e.stopPropagation();
              onKeyInputGo("shift");
              break;
          }
        }
        // var lastElement = $("a").is(":focus") ? $("a:focus") : false;

      })
      // key navigation on toplevel
      .on( "keydown", ".toplevel > li > a", function(e){
            if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
              return;
            }
            else {
              e.preventDefault();
              e.stopPropagation();
              var lastElement = lastInMenuFocus;
              // Store the reference to our top level link
              var link = $(this);
              switch(e.keyCode) {
                case 37: // left arrow
                  onKeyInputGo("up");
                  break;
                case 38: /// up arrow
                  onKeyInputGo("s");
                  break;

                case 39: // right arrow
                  onKeyInputGo("down");
                  break;

                case 40: // down arrow
                  onKeyInputGo("right");
                  break;

                case 27:
                  onKeyInputGo("esc");
                  break;
                case 16:
                  onKeyInputGo("shift");
                  if($("#closeMegaMenu").is(":focus")){
                    lastElement.focus();
                  }
                  break;
                case 83: // pressing shift
                  onKeyInputGo("s");
                  break;
              }
            }
            // var lastElement = $("a").is(":focus") ? $("a:focus") : false;

          })
      //
      //  key navigation subentries
      //
      .on( "keydown", ".toplevel > li ul li a", function(e){
        if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
          return;
        }
        else {
          e.preventDefault();
          e.stopPropagation();
          switch(e.keyCode) {
            case 38: /// up arrow
              onKeyInputGo("up");
              break;

            case 37: // left arrow
              onKeyInputGo("left");
              break;

            case 39: // right arrow
              onKeyInputGo("right");
              break;

            case 40: // down arrow
              onKeyInputGo("down");
              break;

            case 27: // pressing escape
              onKeyInputGo("esc");
              break;

            case 16: // pressing shift
              onKeyInputGo("shift");
              break;

            case 83: // pressing shift
              onKeyInputGo("s");
              break;
          }
        }

      });

    }
    else {
      $("#main")
      // .on("click", ".toplevel > li > a", function(event){
      //       event.preventDefault();
      //       if(!$(this).parent("li").hasClass("clicked")){
      //         var parent = $(this).parent("li");
      //         $(".toplevel > li").removeClass("active clicked");
      //         parent.addClass("clicked active");
      //         manageSubMenu();
      //         $("#siteIndexSearch").addClass("clicked");
      //         $("#allContents").addClass("relative");
      //         $("#contentCurtain").addClass("down");
      //         // color coding
      //         var facultySelected = clickedPosInList(".toplevel", $(".toplevel > li.clicked.active"));
      //         facultySelected = clickFaculty(facultySelected);
      //         setFacultyContext(facultySelected);
      //         return false;
      //       }
      //       else {
      //         closeMegaMenu();
      //         reInitialiseMenu();
      //         window.location = $(this).attr("href");
      //         return true;
      //       }
      //     })
      //
      // key navigation topmost entries
      //
      // key management when SEARCHINPUTFIELD selected
      // .on( "keydown", "#siteIndexSearchInput", function(e){
      //   if ([37,38,39,40,27,13].indexOf(e.keyCode) == -1) {
      //     return;
      //   }
      //   else {
      //     e.preventDefault();
      //     e.stopPropagation();
      //     var futureActiveLink =  $(".siteIndexSearchResultsList a");
      //     // Store the reference to our top level link
      //     switch(e.keyCode) {
      //       case 13:
      //         if(futureActiveLink.length !== 0){
      //           futureActiveLink.first().focus();
      //         }
      //         else {
      //           $(".zilchContainer").focus();
      //         }
      //         break;
      //       case 27:
      //         onKeyInputGo("esc")
      //         break;
      //       default:
      //         e.preventDefault();
      //         e.stopPropagation();
      //         $scope.clearSiteIndexSearchTerm();
      //         onKeyInputGo("shift");
      //         break;
      //     }
      //   }
      //   // var lastElement = $("a").is(":focus") ? $("a:focus") : false;
      //
      // })
      // key management when searchresults selected
      // .on( "keydown", "#siteIndexSearchResults a", function(e){
      //   if ([37,38,39,40,27, 13, 83].indexOf(e.keyCode) == -1) {
      //     return;
      //   }
      //   else {
      //     e.preventDefault();
      //     e.stopPropagation();
      //     var currentResult = $(".siteIndexSearchResultsList a:focus");
      //     var prev = currentResult.parent("li").prev("li").find("a");
      //     if(prev.length === 0){
      //       prev = $("#siteIndexSearchInput");
      //     }
      //     var next = currentResult.parent("li").next("li").find("a");
      //     if(next.length === 0){
      //       next = $("#siteIndexSearchInput");
      //     }
      //     // Store the reference to our top level link
      //     switch(e.keyCode) {
      //       case 27:
      //         $scope.clearSiteIndexSearchTerm();
      //         onKeyInputGo("esc");
      //         break;
      //
      //       case 83: // pressing shift
      //         $scope.clearSiteIndexSearchTerm();
      //         onKeyInputGo("s");
      //         break;
      //
      //       case 37: // left arrow
      //         prev.focus();
      //         break;
      //
      //       case 38: /// up arrow
      //         prev.focus();
      //         break;
      //
      //       case 39: // right arrow
      //         next.focus();
      //         break;
      //
      //       case 40: // down arrow
      //         next.focus();
      //         break;
      //
      //       default:
      //         e.preventDefault();
      //         e.stopPropagation();
      //         $scope.clearSiteIndexSearchTerm();
      //         onKeyInputGo("shift");
      //         break;
      //     }
      //   }
      // })
      // key management when closeMegamenu selected
      // .on( "keydown", "#closeMegaMenu", function(e){
      //   if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
      //     return;
      //   }
      //   else {
      //     // Store the reference to our top level link
      //     switch(e.keyCode) {
      //       case 16:
      //         onKeyInputGo("shift");
      //         break;
      //       case 83: // pressing shift
      //         onKeyInputGo("s");
      //         break;
      //       default:
      //         e.preventDefault();
      //         e.stopPropagation();
      //         onKeyInputGo("shift");
      //         break;
      //     }
      //   }
      //   // var lastElement = $("a").is(":focus") ? $("a:focus") : false;
      //
      // })
      // key navigation on toplevel
      .on( "keydown", ".toplevel > li > a", function(e){
            if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
              return;
            }
            else {
              e.preventDefault();
              e.stopPropagation();
              var lastElement = lastInMenuFocus;
              // Store the reference to our top level link
              var link = $(this);
              switch(e.keyCode) {
                case 37: // left arrow
                  onKeyInputGo("left");
                  break;
                case 38: /// up arrow
                  onKeyInputGo("up");
                  break;

                case 39: // right arrow
                  onKeyInputGo("right");
                  break;

                case 40: // down arrow
                  onKeyInputGo("down");
                  break;

                case 27:
                  onKeyInputGo("esc");
                  break;
                // case 16:
                //   onKeyInputGo("shift");
                //   if($("#closeMegaMenu").is(":focus")){
                //     lastElement.focus();
                //   }
                //   break;
                // case 83: // pressing shift
                //   onKeyInputGo("s");
                //   break;
              }
            }
            // var lastElement = $("a").is(":focus") ? $("a:focus") : false;

          })
      //
      //  key navigation subentries
      //
      .on( "keydown", ".toplevel > li ul li a", function(e){
        if ([37,38,39,40,27,16,83].indexOf(e.keyCode) == -1) {
          return;
        }
        else {
          e.preventDefault();
          e.stopPropagation();
          switch(e.keyCode) {
            case 38: /// up arrow
              onKeyInputGo("up");
              break;

            case 37: // left arrow
              onKeyInputGo("left");
              break;

            case 39: // right arrow
              onKeyInputGo("right");
              break;

            case 40: // down arrow
              onKeyInputGo("down");
              break;

            case 27: // pressing escape
              onKeyInputGo("esc");
              break;

            // case 16: // pressing shift
            //   onKeyInputGo("shift");
            //   break;
            //
            // case 83: // pressing shift
            //   onKeyInputGo("s");
            //   break;
          }
        }

      });
    }
  }
  // expand TOP MOST MENU BAR on hover
  var hoverMenuControlTimeout
    , timer;
  function hoverMenuControl() {
    var topMenuFlag = false;
    var delay = 400;
    if($(window).width() > 700){
      $(document)
      .on("mouseenter focus touch", ".toplevel > li", function () {
        clearTimeout(timer);
        clearTimeout(hoverMenuControlTimeout);
        closeCurtain("megaMenu");
        if(!topMenuFlag){
          topMenuFlag = true;
          hoverMenuControlTimeout = setTimeout(function(){ topMenuFlag = false; }, 100);
        }
        if ($(window).width() > 700) {
          $this = $(this)
          timer = setTimeout(function () {
            $(".toplevel > li").removeClass("active clicked");
            $this.addClass("clicked active adapted");
            var facultySelected = clickedPosInList(".toplevel", $(".toplevel > li.clicked.active"));
            facultySelected = clickFaculty(facultySelected);
            setFacultyContext(facultySelected);
            $("#bgBarContainer").addClass("clicked");
            $("#contentCurtain").addClass("down");
            $("#siteIndexSearch").addClass("clicked");
            if (siteIndexSearching() && $scope.siteIndexSearchBase) {
              siteIndexResearch();
            }
            subMenuHeight($(this));
            setMenuLinkTitle($(this));
          }, delay);
        }
      })
      .on("mouseleave", ".toplevel > li", function () {
        clearTimeout(timer);
        clearTimeout(hoverMenuControlTimeout);
      })
      // if the mouse leaves the toplevel faculty list of the main menu
      // check if it ends up hovering the megamenu or siblings of this menu element.
      .on("mouseleave", ".toplevel", function () {
        if ($(window).width() > 700) {
          clearTimeout(hoverMenuControlTimeout);
          clearTimeout(timer);
          mainMenuHoverOutCheck();
        }
      });
    }
    else {
      $(".toplevel > li").unbind("mouseenter touch mouseleave");
      $(".toplevel").unbind("mouseleave");
    }

  }
  // handle the collapsing of the menu
  // giving some weird delaying .... is a rather dubious approach
  var mainMenuHoverOutCheckTimeout
    , secondaryMainMenuHoverOutCheckTimeout
    , tertiaryMainMenuHoverOutCheckTimeout;
  function mainMenuHoverOutCheck(){
    var hovering = false;
    clearTimeout(mainMenuHoverOutCheckTimeout);
    clearTimeout(secondaryMainMenuHoverOutCheckTimeout);
    clearTimeout(tertiaryMainMenuHoverOutCheckTimeout);
    $("#header").mouseenter(function () {
      hovering = false;
    });
    $("#bgBarContainer").mouseenter(function () {
      hovering = true;
    });
    $(document).on("mouseenter", ".toplevel > li", function () {
      hovering = true;
    })
    .on("mouseenter", "#siteIndexSearch", function () {
      hovering = true;
    });
    mainMenuHoverOutCheckTimeout = setTimeout(function(){
      $(document).on("mouseenter", ".toplevel > li", function () {
        hovering = true;
      });

      $("#bgBarContainer").mouseenter(function () {
        hovering = true;
      });
      secondaryMainMenuHoverOutCheckTimeout = setTimeout(function(){
        $("#bgBarContainer").mouseenter(function () {
          hovering = true;
        });
        tertiaryMainMenuHoverOutCheckTimeout = setTimeout(function(){
          $(document).on("mouseenter", "#siteIndexSearch", function () {
            hovering = true;
          });
          $("#bgBarContainer").mouseenter(function () {
            hovering = true;
          });
        },300);
      },200);
      if (hovering) {
        hovering = false;
      }
        // check if the ongoing hovering of the user lead to an ongoing inspection of the submenu
      // else close the megamenu and reset the menu to it's initial state.
      else {
        closeMegaMenu();
        reInitialiseMenu();
      }
    },100);
  }
  // expand SUBMENUS on click
  function manageSubMenu(){
    if($(window).width() > 700) {
      $(".sublevel").on('click','a', function(event) {
        var parent = $(this).parent("li");
        if(!parent.hasClass("clicked")){
          event.preventDefault();
          cleanUpMenu($(this));
          getSubmenu(event, $(this));
        }
        else {
          event.preventDefault();
        }
        setMenuLinkTitle($(this));
      });
    }
  }
  // expand SUBMENUS on mouseenter
  function hoverSubMenuControl() {
    if ($(window).width() > 700) {
      $(".toplevel > li > ul").on("mouseenter focus touch", "li", function (ev) {
        ev.preventDefault();
        var targetUrl = $(this).children("a").attr('href');
        // right mouse click do nothing
        if (ev.which === 3) {
          return
        }
        $(this).siblings("li.active").find(".active").removeClass("active current");
        $(this).siblings("li").removeClass("active current")
        $(this).addClass("active");
        setMenuLinkTitle($(this));
        if ($(this).hasClass("parent") && $(this).children("ul").length == 0) {
          submenuHeightManagement(targetUrl, $(this), function () {
            subMenuHeight($(this));
          });
        } else {
          subMenuHeight($(this));
        }
      });
      $(".toplevel > li > ul li").on("click", "a", function (ev) {
        ev.preventDefault();
        var targetUrl = $(this).attr('href');
        // right mouse click do nothing
        if (ev.which === 3) {
          return
        }
        // if it was clicked and is active go there
        if (ev.which == 1 && $(this).parent().hasClass("active")) {
          window.location = targetUrl;
        }
        else {
          // $(this).siblings("li.active").find(".active").removeClass("active");
          var clickedListItem = $(this).parent("li");
          if (clickedListItem.hasClass("parent") && $(this).children("ul").length == 0) {
            submenuHeightManagement(targetUrl, clickedListItem, function () {
              subMenuHeight(clickedListItem);
            });
          }
          else {
            subMenuHeight(clickedListItem);
          }
          clickedListItem.siblings("li").removeClass("active current");
          clickedListItem.addClass("active");
          setMenuLinkTitle($(this));

        }
      });
    }
    else {
      $(".toplevel > li > ul li").unbind("mouseenter focus touch");
      $(".toplevel > li > ul li a").unbind("click");
    }
  }
  // deferred promise to execute Menubackground height management
  // according to newly visible and inserted submenus
  function submenuHeightManagement(targetUrl, listItem, callback) {
    getTargetSubContents(targetUrl, $(listItem));
  }
  // MANAGE MEGA MENU HEIGHT
  var subMenusLoaded = [];
  var expandedBg, animatingBg = false;
  var lastBgHeight = 501;
  function subMenuHeight(element) {
    $height          = 501;
    $parent          = $(element).parent("ul");
    $parentHeight    = $parent.length != 0 ? $parent.height() : 501 ;
    var openSubmenus = $(".toplevel li.active ul:visible");

    if(openSubmenus.length){
      $height = Math.max.apply(null, openSubmenus.map(function () {
        return $(this).height();
      }).get());
    }
    if(!animatingBg && $height != lastBGHeight){
      $height = $height+80;
      if( $height > lastBgHeight ){
        animatingBg = true;
        $("#bgBarContainer").animate({height: $height}, 400, function(){
          expandedBg = true;
          lastBgHeight = $height;
          animatingBg = false;
        });
      }
      else if ($height == lastBgHeight){
        return;
      }
      else {
        animatingBg = true
        $height = $height < 510 ? 510 : $height;
        $("#bgBarContainer").animate({height: $height}, 400, function(){
          expandedBg = false;
          lastBgHeight = 510;
          animatingBg = false;
        });
      }
    }
    return $height;
  };
  // MANAGE DISPLAY OF MEGA MENU ACCORDING TO MOUSING BEHAVIOUR OVER THE BACKGROUND
  function hoverMenuBackgroundControl() {
    if($("body").width() >  700){
      $(document).on("mouseenter","#bgBarContainer", function () {
        if($(".toplevel > li.active.clicked").length != 0){
          $("#bgBarContainer").addClass("active clicked");
          $(".toplevel > li.active").addClass("clicked");
          var facultySelected = clickedPosInList(".toplevel", $(".toplevel > li.clicked.active"));
          facultySelected = clickFaculty(facultySelected);
          setFacultyContext(facultySelected);
          $("#bgBarContainer").addClass("clicked");
          $("#contentCurtain").addClass("down");
          $("#siteIndexSearch").addClass("clicked");
        }
      });
    }
  }
  // SET TOP-ROW NAVIGATION to InitialState
  function reInitialiseMenu(){
    $("#bgBarContainer").removeClass("clicked");
    $(".toplevel > li").removeClass("active clicked adapted");
    initialActive.addClass("active");
    setFacultyContext(initialFaculty);
    window.scope.clearSiteIndexSearchTerm();
    $("#siteIndexSearch").removeClass("clicked");
  }
  // CLOSE MEGADROPDOWN MENU
  function closeMegaMenu() {
    $("#bgBarContainer").attr('style', '');
    $("#bgBarContainer").removeClass("clicked");
    $("#allContents").removeClass("relative");
    $("#contentCurtain").removeClass("down");
    $("#page").removeClass("greyscale");
    $("#siteIndexSearch").removeClass("clicked");
    $scope.clearSiteIndexSearchTerm();
    reInitialiseMenu();
  }
  // close the megaMenu on user interaction
  $("body")
  .on("click", "#closeMegaMenu" , function(){
    closeMegaMenu();
  })
  .on("click", "#contentCurtain", function(){
    closeMegaMenu();
  });

  //
  // MOBILE MENU EXPANDER HIDES AND SHOWS LOWER SUBMENU ENTRIES AND DYNAMICALLY LOADS THEM IN CASE THE UL IS EMPTY
  //
  $('#nav-main')
  .on('click','.toggle', function(event){
    event.preventDefault();
    var targetUrl = $(this).siblings('a').attr('href');
    var targetSub = $(this).siblings('ul');
    var parent = $(this).parent();
    // manage the menu and its
    if ($(this).text() === '+') {
      //expand menu
      $(this).text('');
      parent.addClass('open').removeClass('closed');
      $(this).addClass('open').removeClass('closed');
      // load additional content
      if ( $(this).siblings('ul').length == 0 || $(this).siblings('ul').length == 0) {
        getTargetSubContents(targetUrl, parent);
      }
      targetSub.show();
      $(this).text('-');
    }
    else {
      //close menu
      $(this).text('');
      parent.addClass('closed').removeClass('open');
      $(this).addClass('closed').removeClass('open');
      targetSub.hide();
      $(this).text('+');
    }
  });
  // dynamically change menu link title tags depending on the current menu state
  function setMenuLinkTitle(elem){
    var linkText  = $(elem).find("a").first().text()
      , linkTitle = ""
      , siteLang  = $scope.site.language;

    if(siteLang == "de"){
      linkTitle = "nochmal klicken um die Seite "+linkText+" anzuzeigen";

      if($(elem).hasClass("clicked")){
        linkTitle = "gehe zu "+linkText;
      }
      if($(elem).hasClass("parent") && !$(elem).find("ul").first().is(":visible")){
        linkTitle = "Unterseiten von "+linkText+" anzeigen"
      }
    }
    else {
      linkTitle = "click to show the page "+linkText;
      if($(elem).hasClass("clicked")){
        linkTitle = "go to "+$(elem).find("a").first().text();
      }
      if($(elem).hasClass("parent") && !$(elem).find("ul").first().is(":visible")){
        linkTitle = "Show subpages of "+linkText;
      }
    }
    $(elem).find("a").first().attr("title", linkTitle);
  }
  // prep all links to contain title values
  function prepMenuTitles(){
    var listItems = $(".toplevel li")
    listItems.each(function(index, listItem){
      setMenuLinkTitle(listItem);
    });
  }
  // get the initial Menu path so we can restore the menu to this state
  // even after heavy user hover interaction
  var initialSublevelActive = $(".sublevel > li.current");
  var startState = [];
  function getInitialMenuState() {
    var topLevel = $(".toplevel > li.active");
    var currentItems = $(".sublevel > li.current");
    currentItems.add($(".sublevel > li.active"));
    if(topLevel.length != 0){
      startState.push(topLevel);
    }
    if (currentItems.length != 0) {
      $.each(currentItems, function (index, content) {
        startState.push(content);
      });
    }
  }
  // go through initial menu state make sure submenus are loaded
  function extendCurrentMenuState() {
    var allActive = initialSublevelActive;
    var minHeight = 501;
    $.each( allActive, function(index, item){
      if( $(item).hasClass("parent") && $(item).children("ul").length == 0 ) {
        var targetUrl = $(item).children(".main-menu-link").attr('href');
        if($(item).height() > minHeight) {
          minHeight = $(item).height();
        }
        if ( targetSubEmpty($(item))) {
          getTargetSubContents(targetUrl, $(item));
        }
      }
    });
    getInitialMenuState();
  }
  // place menu search on smallscreen underneath the faculty entry

  function manageSiteIndexSearch(){
    var searchField = $("#siteIndexSearch");
    if($(window).width() > 700 && $("#nav-main > #siteIndexSearch").length === 0) {
      searchField.before("#nav-main .toplevel");
    }
    else {
      if($("#nav-main > .toplevel.active").length !== 0){
        searchField.remove();
        $("#nav-main > .toplevel.active > ul").prepend(searchField);
      }
    }
  }
  // recursive approach to clean up during user interactions
  // and kep the menu free of former interaction traces
  function cleanUpMenu(item) {
    var parent     = $(item).parent("li");
    var siblings   = parent.siblings("li");
    var current    = $("li.current");
    var currentIOI = siblings.find(".current");
    if( currentIOI.children("ul") && currentIOI.children("ul").children("li").length != 0 ){
      var subCIOI = currentIOI.children("ul").children("li.current");
      if( subCIOI.length != 0 ) {
        subCIOILink = subCIOI.find(".main-menu-link");
        cleanUpMenu(subCIOILink);
      }
    }
    currentIOI.removeClass("current");
    var activeIOI  = siblings.find(".clicked");
    if( activeIOI.children("ul") && activeIOI.children("ul").children("li").length != 0 ){
      var subAIOI = currentIOI.children("ul").children("li.current");
      if( $(subAIOI).length != 0 ) {
        subCIOILink = subAIOI.find(".main-menu-link")
        cleanUpMenu(subCIOILink);
      }
    }
    var active  = $("li.active.clicked");
    siblings.find(current).find("current").children("ul").children(".current").removeClass("current");
    siblings.find(current).removeClass("current");
    siblings.find(active).find("active").children("ul").children(".active").removeClass("active clicked");
    siblings.find(active).removeClass("active");
    parent.addClass("clicked active");
    siblings.removeClass("active clicked current");
  }
  // check if item has subpages and that subpages are empty
  // the call getTargeSubContents()
  function getSubmenu(event, item) {
    if($(item).parent("li").hasClass("parent") && ($(item).siblings("ul").length == 0 || $(item).siblings("ul").children("li").length == 0 )) {
      var targetUrl = $(item).attr('href');
      var targetSub = $(item).siblings('ul');
      var parent = $(item).parent();
      if( targetSubEmpty(targetSub)) {
        getTargetSubContents(targetUrl, parent) ? subMenuHeight(parent) : false;
      }
    }
  }
  // check if some targets sub lists are empty,
  // return false or true
  function targetSubEmpty(item) {
    var isEmpty = false;
    if ($(item).siblings("ul").length == 0 || $(item).siblings("ul").children().length == 0){
      isEmpty = true;
    }
    return isEmpty;
  }
  // get Submenu from route and append to specified position
  function getTargetSubContents(targetUrl, parent){
    var wentWell = true;
    if(!$(parent).hasClass("parent") || $(parent).children("ul").length != 0 || subMenusLoaded.indexOf(targetUrl) != -1) {
      return wentWell;
    }
    if($(parent).hasClass("parent") && $(parent).children("ul").length == 0 && subMenusLoaded.indexOf(targetUrl) == -1) {
      subMenusLoaded.push(targetUrl);
      var targetSubContent = '';
      var delimiter = (targetUrl.indexOf('?') == -1) ? '?' : '&';
      var url = targetUrl + delimiter + 'tx_buwfeskin[loadMenuNode]=1';
      $.ajax( {
        url: url,
        data: null,
        success: function ( data ){
          $(parent).append(data);
          subMenuHeight(parent);
        },
        error: function ( data ){
          wentWell = false;
        },
        dataType: "html"
      });
    }
    return wentWell;
  }
  // helper determines the position of an element within a list
  function clickedPosInList(list, target) {
    var listlis = $(list+" > li");
    var listPos = listlis.index(target);
    return listPos;
  }
  // returns the name of a faculty given a number
  function clickFaculty(facultyTab){
    var faculty;
    switch (facultyTab){
      case 0 :
        faculty = "uni";
        break;
      case 1 :
        faculty = "architektur";
        break;
      case 2 :
        faculty ="bauing";
        break;
      case 3 :
        faculty = "gestaltung";
        break;
      case 4 :
        faculty = "medien";
        break;
      default:
        faculty = "uni";
    }
    return faculty;
  }
  // get the faculty state the page is currently in
  function facultyContext() {
    if ($("body").hasClass("uni")) {
      return "uni"
    }
    else if($("body").hasClass("bauing")) {
      return "bauing"
    }
    else if($("body").hasClass("medien")) {
      return "medien"
    }
    else if($("body").hasClass("gestaltung")) {
      return "gestaltung"
    }
    else if($("body").hasClass("architektur")) {
      return "architektur"
    }
    else {
      return "uni"
    }
  }
  var initialFaculty = facultyContext();
  // reset the page's faculty state to feature an new faculty
  function setFacultyContext(faculty) {
    $("body")
      .removeClass(facultyContext())
      .addClass(faculty);
    window.scope.facultyContext = faculty;
    $scope.facultyContext = faculty;
  }
  // add class to body to remember previous context
  // and help consistently style the content areas beyond the navigation
  function setGeneralContext(){
    var generalContext = facultyContext();
    generalContext = "general-"+generalContext;
    $("body").addClass(generalContext);
  }
  //
  // isFunction checks if a certain function is available
  //
  function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  }
  //
  // RecursionClassCleaner removes classes listed beneath recursively
  //
  function recursionClassCleaner(elem) {
    var classList = "row col-xs-4 col-xs-6 col-xs-12 col-sm-4 col-sm-6 col-sm-12 col-md-4 col-md-6 col-md-12 col-xl-4 col-xl-6 col-xl-12"
    if ( elem.children().length != 0 ) {
      $.each(elem.children(), function(index, source){
        $(source).removeClass(classList)
        if ( $(source).children().length != 0 ) {
          recursionClassCleaner($(source));
        }
      });
    }
  }

  //
  // FIT MOBILE CONTENT DOES CHANGE THE DOM STUCTURE AND COPIES A VARIETY OF ELEMENTS INTO THE RIGHTHAND MENU
  // Function FitContent copies parts of the document to a more appropriate places
  var mobileRightMenuContentInserted = false;
  function fitContent(){
    var copiedElemnt
      , lastSource;
    // add more places to copy content from into this array
    var possibleSources = ['#content_container > div > .content_right','.multicolumnLayout3 .column2', '.content_right', '#content_right.content_right']; //
    if($('.multicolumnLayout3 .column2').length != 0 && $('.multicolumnLayout3 .column2 .columnItems').length != 0){
      $('.multicolumnLayout3 .column2 .columnItems .columnItem > div').addClass("grid");
      $('.multicolumnLayout3 .column2 .columnItems .columnItem > nav').addClass("grid");
      $('.multicolumnLayout3 .column2 .grid')
    }
    // go through all the possible sources
    $.each(possibleSources, function (index, source) {
      if($(source).length != 0 && !mobileRightMenuContentInserted ) {
        if($(source).hasClass("copied")){return;}
        $(source).addClass("copied");
        $('#content_right').children().removeClass("hidden-xs hidden-sm");
        recursionClassCleaner($('#content_right'));

        if($('#content_right > div').hasClass("column")){
          $('#content_right > div').removeAttr('id').addClass("content_right").removeClass("column column2 columnLast listItemLast");
          $("#content_right .columnItem > div").addClass("grid");
          $("#content_right .columnItem > nav").addClass("grid");
          $("#content_right > .content_right").append($("#content_right .grid").clone())
          $("#content_right .columnItems").remove();
        }
        // now we need to check what to do given the screen size
        copiedElemnt = $(source);
        lastSource = source;
        if(index == possibleSources.length-1) {
          mobileRightMenuContentInserted = true;
        }
      }
    });
    if( $(window).width() > 480 && $("#content").children().length == 0 && $(window).width() < 769) {
      manageRightColumn();
      // masonizeRightMobileMenu();
      timedOutMasonizeRightMobileMenu();
    }
    else {
      masonizeRightMobileMenu();
    }
    // if pagetype is not printpreview -> 98
    if($("html.print").length != 0){
      setSideBarBGColors($("#page.contrast").length  != 0);
    }
  }
  // SLIDERIGHT
  // show and hide rightColumn
  function manageRightColumn(){
    var colRightEmpty = $('#content_right').text().replace(/\s/g,'').length === 0 || $(':not(#content_right) .content_right').text().replace(/\s/g,'').length === 0
    if ( $("#body-504").length == 0) {
      timedOutMasonizeRightMobileMenu();
    }
    if(colRightEmpty) {
      $("#rightMobileMenuLink").remove();
      $(".rightMobileMenuLinkLine").remove()
    }
  }

  //
  // MASONIZE #content_right
  //
  var rightColumnWasInited = false
  var timedOutMasonizeRightMobileMenuDelay = null;

  function timedOutMasonizeRightMobileMenu(duration){
    clearTimeout(timedOutMasonizeRightMobileMenuDelay);

    var delay = duration ? duration : 400;
    timedOutMasonizeRightMobileMenuDelay = setTimeout(function(){
      if(rightColumnWasInited){
        masonizeRightMobileMenu()
      }
      else {
        masonizeRightMobileMenu(true);
        rightColumnWasInited = true;
      }
    }, delay)
  }

  var isMasonizing = false;
  function masonizeRightMobileMenu(init){
    var itemWidth = $("#content_right > .grid").width() //$("#rightMobileMenu .content_right .grid").last().width()
      , gridWidth = $("#content_right").width()
      , $grid             = $("#content_right")
      , list          = $("#content_right .grid")
      , viewPortWidth = $(window).width()
      , setting     = {
      itemSelector      : '.grid'
      , columnWidth     : itemWidth
      , gutter          : 20
      , percentPosition : true
      , horizontalOrder : true
      , originLeft      : true
      , initLayout      : false
      , isFitWidth      : false
      , isAnimated: true
      , animationOptions: {
        duration: 700,
        easing: 'linear',
        queue: false
      }
    };

    if( $(window).width() > 480 && $(window).width() < 768) {
      if(!isMasonizing) {
        isMasonizing = true;

        if($('#content_right .innerWrap').length != 0){
          $grid = $("#content_right .innerWrap");
          $("#content_right .innerWrap").removeClass("grid")
          $("#content_right .innerWrap > div").addClass("grid");
          $("#content_right .innerWrap > nav").addClass("grid");
        }

        if(init) {
          setting.initLayout = true;
          $scope.site.rightColumnMazonInited = true;
          $grid.masonry(setting);
        }
        else {
          $grid.masonry(setting);
        }
        isMasonizing = false;
      }
    }
    else {
      $scope.site.rightColumnMazonInited = false;
      clearMobileViewManipulations();
      $("#content_right .grid").css({ "position" : "relative", "left" : "", "top" : "" });
      $("#content_right").attr("style", "");
      $grid.masonry().masonry('destroy')
    }
  }

  //
  // RIGHTHAND SUBMENU, UNTERMENUE expansive behaviour of the quickaccess
  //
  $scope.toggleSubmenu = function(){
    var theBox        = $(".quickaccess")
      , toggleIcon    = theBox.find(".toggleIcon")
      , openIcon      = "&#xe924;"
      , closeIcon     = "&#x2261;"
      , justLoaded    = false;

    if(!theBox.hasClass("closed") && !theBox.hasClass("open") && !theBox.hasClass("justLoaded")){
      justLoaded = true;
      theBox.addClass("justLoaded")
    }
    if(theBox.hasClass("closed")) {
      theBox.addClass("open").removeClass("closed");
      theBox.find("#quickaccess-list").slideDown();
      toggleIcon.text("").html(openIcon);
    }
    else {
      theBox.addClass("closed").removeClass("open");
      theBox.find("#quickaccess-list").slideUp();
      toggleIcon.text("").html(closeIcon);
    }
    if(justLoaded) {
      theBox.addClass("closed");
      timedOutMasonizeRightMobileMenu(1500);
      setTimeout(function(){
        theBox.removeClass("justLoaded");
      }, 3000);
    } else {
      timedOutMasonizeRightMobileMenu();
    }
    // masonizeRightMobileMenu();
  }
  function setSideBarBGColors(black) {
    // if pagetype is not printpreview -> 98
    if($("html.print").length != 0){
      return;
    }
    var context = facContext()
      , colors = {
      uni: ["#d02734","#d02768","#b71a49"]
      , architektur: ["#00b4b4","#0076b4","#009bb4"]
      , bauing: ["#e56623","#f3bb00","#f39100"]
      , gestaltung: ["#3faa47","#cdd32f","#94c11c"]
      , medien: ["#008994","#003994","#006b94"]
      , summaery2020: ["#c9354e","#da3a17","#131970"]
    }
      , animationSetting = {
      duration: black ? 500 : 2500
      , queue : false
    }
      , colorSuspects = [
      "csc-teaser", "contact-box"
      , "csc-user-box", "csc-blank-box"
      , "csc-hasMergedTables-box", "network"
      , "personalia", "students"
      , "contact", "pinboard"
      , "archive", "linktip"
      , "theme", "calendar"
      , "download-element", "contact-element"
      , "category", "csc-frame"
    ]
      , location = ".content_right"
      , places = $(location)
      , palette = colors[context]
      , paletteLength = palette.length
      , List = []
      , counter = 1;
    if($('body').hasClass("summaery2020")) {
      palette = colors["summaery2020"];
      paletteLength = palette.length
    }
    $.each(places, function (index, place) {
      if ($(place).children("div").length != 0 || $(place).children("nav").length != 0) {
        var lesBoxes = $(place).children();

        if($(place).find(".columnItems").length != 0){
          lesBoxes = $(place).find(".columnItem > div")
          lesBoxes = lesBoxes.add($(place).find(".columnItem > nav"))
        }

        $.each(lesBoxes, function (it, box) {
          var dontColorThat = $(box).hasClass("quicklinks")
            || $(box).hasClass("quickaccess")
            || $(box).hasClass("network")
            || $(box).hasClass("linktip")
            || $(box).hasClass("journalSearch")
            || $(box).hasClass("archive")
            || $(box).hasClass("pinboard")
            || $(box).hasClass("theme")
            || ( $(box).is("a") && $(box).attr("href") == undefined )
            || ( $(box).hasClass("csc-blank-box") && !($(box).is("nav")) )
            || $(box).is("p");

          if(!dontColorThat){
            counter =  counter + 1;
            var makeShift = black ? "#000" : palette[ (counter % paletteLength)  ];
            $(box)
              .addClass("colorated")
              .css({borderColor: makeShift})
              .animate({ backgroundColor: makeShift }, animationSetting)
          }
        });
      }
      if(lesBoxes && lesBoxes.length != 0){
        $.each(lesBoxes, function(nr, thing){
          if($(thing).is("a") && $(thing).attr("href") == undefined){

          }
          else {
            $(thing).addClass("grid")
          }
        })
      }
    });
    timedOutMasonizeRightMobileMenu()
  }
  
  //
  // MANAGE DISPLAY OF EMPTY BREADCRUMBS AND SUBPAGES
  //
  function managesubNavInDisplay(){
    if($("#subPages").text().replace(/\s/g, '') == ''){
      $("#subPages").hide();
    }
    if($(".breadcrumbNavigation").text().replace(/\s/g, '') == ''){
      $(".breadcrumbNavigation").hide();
    }
  }
  //
  // close Main QuickaccessLink panel
  //
  function closeQuickAccesLinks(){
    if ( $("#globalquicklinks_hint.active").length != 0){
      $("#globalquicklinks_hint").toggleClass("active");
      $("#quickpane").toggleClass("active").slideToggle('fast');
      $("#globalquicklinksBg").toggleClass("active");
    }
  }
  //
  // CLICK on Quickaccess (RIGHT HAND MENU)
  //
  $scope.toggleSubmenu();

  $("body")
  .on("click", ".quickaccess h2 button", function(event) {
    $(".quickaccess").removeClass("justLoaded");
    $scope.toggleSubmenu();
  })
  // MOUSEENTER
  .on("mouseover mouseenter hover", ".quickaccess.justLoaded", function(event) {
        var theBox        = $(".quickaccess")
            , toggleIcon    = theBox.find(".toggleIcon")
            , openIcon     = "&#xe924;";
        if(theBox.hasClass("justLoaded")){
          theBox.addClass("open").removeClass("closed");
          theBox.find("#quickaccess-list").slideDown();
          toggleIcon.text("").html(openIcon);
          timedOutMasonizeRightMobileMenu();
        }
      })
  // MORE INFOS AND TOTOPLINK
  // CLICK ON UPLINK / toTop Link
  .on("click touch", "#toTopLink", function(ev){
    ev.preventDefault();
    $('html, body').animate({
      scrollTop: $("#pageHeadSection").offset().top -250
    }, 400, 'swing');
  })
  // CLICK ON INFOS AND MORE [DONWLINK]
  .on("click", "#rightMobileMenuLink", function(ev){
    ev.preventDefault();
    var elem = "#content_right";
    if($("#content_right").length == 0){
      elem = "#footer";
    }
    $('html, body').animate({
      scrollTop: $(elem).offset().top -150
    }, 400, 'swing');
  })
  // MANAGE DISPAY OF UPLINNK / toTop Link
  function manageUpLink(){
    var text = "go to top";
    if($scope.site.language == "de"){
      text = "zum Seiten Anfang";
    }
    var topLink = $('<a id="toTopLink" class="hidden" href="#page"><span class="sr-only">'+text+'</span></a>');
    if( $("#toTopLink").length == 0 ){
      $("#footer").prepend(topLink);
    }
  }

  // GET THE SCROLL POSITION ACT ACCORDINGLY
  $(window)
  .on("scroll", function (event) {
    var showMenu      = isScrolledIntoView($("#inViewHook"));
    var windowHeight  = $(window).height();
    var page          = $("#page");
    var pageHeight    = page.height();
    var scroll        = $(window).scrollTop();
    var docTop        = $(window).scrollTop();
    var docBot        = docTop + $(window).height();
    if(scroll < windowHeight/3) {
      $("#toTopLink").addClass("hidden");
    }
    else {
      $("#toTopLink").removeClass("hidden");
    }
    if(showMenu) {
      $("#toTopLink").addClass("absolute");
    }
    else {
      $("#toTopLink").removeClass("absolute");
    }
  });
  // taken from https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom+88 <= docViewBottom));
  }

  //
  // LEFTHAND MENU DISPLAY TOGGLE BUTTON & BEHAVIOUR
  //
  // MOBILE: Hide and show the left hand menu
  var centerScrollPosition = 0;
  var viewState = "";
  var leftScrollPosition = 0;
  function toggleLeftMenu($event){
    $event.preventDefault();
    closeQuickAccesLinks();
    if($('#mainNavigation.slideRight').length !=0){
      closeLeftMenu();
    }
    else {
      openLeftMenu();
    }
  }
  function closeLeftMenu(){
    var ariaLabel  = "Show main menu.";
    if($scope.site.language == "de") {
      ariaLabel  = "Hauptmenu anzeigen.";

    }
    $('#page').removeClass("menuToggled menuToggledOpen");
    $('#mainNavigation').removeClass("slideRight");
    $("#microSiteNav").removeClass("hidden");
    $("#navigationalContents").addClass("hidden");
    $("#navigationalContents").removeClass("hidden");
    $("#content_main").removeClass("hidden");
    $("#content_container").removeClass("hidden");
    $("#content_top").removeClass("hidden");
    // $("#rightMobileMenu").removeClass("hidden");
    $("#col1_col2_col1").removeClass("hidden");
    $("#col1").removeClass("hidden");
    $("#col1_col2").removeClass("hidden");
    $("#col2").removeClass("hidden");
    $("#mainContentSections").removeClass("hidden");
    $("#content_right").removeClass("hidden");
    $("#showMainMenuButton")
      .attr("aria-label", ariaLabel)
      .attr("href", "#content_container")
      .html("&#x2261;").removeClass("open");
    $("#content_container").focus();
    $scope.menuToggle = true;
  }
  function openLeftMenu(){
    var ariaLabel  = "close main menu.";
    if($scope.site.language == "de") {
      ariaLabel  = "Hauptmenu schließen.";
    }
    $('#page').addClass("menuToggled menuToggledOpen");
    $('#mainNavigation').addClass("slideRight");
    $("#microSiteNav").addClass("hidden");
    $("#navigationalContents").removeClass("hidden");
    $("#content_main").addClass("hidden");
    $("#content_container").addClass("hidden");
    $("#content_top").addClass("hidden");
    $("#content_right").addClass("hidden");
    $("#col1_col2_col1").addClass("hidden");
    $("#col2").addClass("hidden");
    $("#col1").addClass("hidden");
    $("#mainContentSections").addClass("hidden");
    $("#col1_col2").addClass("hidden");
    $("#content_right").addClass("hidden");

    $("#showMainMenuButton")
      .attr("aria-label", ariaLabel)
      .attr("href", "#nav")
      .html("&#xe924;").addClass("open");
    $("#nav-main > ul.toplevel li.active > a").first().focus();

    $scope.menuToggle = false;
  }

  // Hide and show the right hand menubar
  var rightScrollPosition = 0;
  function toggleRightMenu(){
    $('#content_right').addClass("slideLeft");
  }
  // ClickContentHideMenus make sure menus vanish when main contentpain is clicked upon.
  function clickContentHideMenus() {
    if (viewState == 'leftMenu' || 'rightMenu' ) {
      resetContentAndMenus ();
    }
  }
  // ResetContentAndMenus resets document to initial state before objects were manipulated
  function resetContentAndMenus() {
    if (viewState == 'rightMenu') {
      toggleRightMenu();
    }
    if (viewState == 'leftMenu') {
      toggleLeftMenu();
    }
  }
  // removes inline style properties left by jquery after toggeling menus
  function clearMobileViewManipulations() {
    $('#mainContentSections').attr("style", "");
    $('#mainNavigation').attr("style","");
    $('#content_right').attr("style", "");
  }
  // make single element in first column full width, instead of 50%
  function adaptFirstColumnContent(){
    var interestContent = $('.multicolumnLayout3 > .columnFirst > .columnItems');
    var contenLength = interestContent.children().length
    if (interestContent && contenLength == 1) {
      interestContent.find('.listItemLast').removeClass('col-xs-6 col-sm-6').addClass('col-xs-12 col-sm-12');
    }
  }
  // check if browser has size above mobile menu and if mobile menu was in view previously
  // than perform adaptations according to the new state....
  function mobileMenuAdapter(){
    if( $(window).width() > 700 ) {
      if (!$scope.menuToggle){
        closeLeftMenu();
      }
    }
  }

  //
  // HERO PIC
  //
  // show BigscreenHeroPic Header
  function setHeroPicHeader () {
    var pageHeroPic = jQuery( "#content_top .csc-textpic" ).first();
    pageHeroPic.show();
    if (hasSlideShow()) {
      showSlideShow();
    }
  }
  // function make HeroHeaderPic combines setHeroPic with setMobileHeroPicHeader
  function heroHeaderPic(){
    if( $(window).width() > 992) {
      setHeroPicHeader();
    }
  }
  // calculating and settign the heroPicContainer height
  var calculatingHeroPicHeight = false;
  function heroHeaderPicHeight(){
    var rwdTopMenu = jQuery( "#rwd-menu" );
    var heroContainer = $( "#rwd-menu .heroPic" );
    if($('#rwd-menu.empty-background').length == 0){
      var heroRatio = 280/990;
      var mobileHeroWidth = rwdTopMenu.width();
      var mobileHeroHeight = mobileHeroWidth * heroRatio;
      heroContainer.animate({ height: mobileHeroHeight+'px' }, 1, function () {
        if(calculatingHeroPicHeight){
          return false;
        }
        else {
          calculatingHeroPicHeight = true;
          heroContainer.animate({ height: ((heroContainer.width() * heroRatio))+'px', opacity: 1 }, 1, function(){
            calculatingHeroPicHeight = false;
            $("#rwd-menu .bottom-bar").css({'margin-top' : '-5px'});
          });
        }
      });
    }
    else {
      heroContainer.height("10px");
      $("#rwd-menu .bottom-bar").css({'margin-top' : '0px'});
    }
  }

  // mobile Searchbar
  function mobileSearchbar() {
    var searchInputField = $( "#rwd-menu  input.ym-searchfield" );
    var subPages = $("#rwd-subpages");
    var $parent = searchInputField.parent();
    var $searchfield = $( "#rwd-menu .ym-searchfield" );
    var searchButton = $( "#rwd-menu  button.ym-searchbutton" );

    searchButton.on( "click", function (){
      if ($( window ).width() < 600) {
        subPages.hide();
        $searchfield.show();
        $searchfield.focus();
        if (!$parent.hasClass( "active" )) {
          $parent.addClass( "active" );
          return false;
        }
      }
    } );
    $( ".ym-searchfield" ).on( "blur", function (){
      setTimeout( function (){
        subPages.show();
        $searchfield.hide();
      }, 5000 );
    });
  }

  //
  // Responsive SLIDESHOW
  //
  function hasSlideShow() {
    if($("#content_top .csc-gallery-slideshow").length != 0 || $("#content_top .tx-jfmulticontent-pi1").length != 0 ){
      return true;
    }
    else {
      return false;
    }
  }
  function hideSlideShow() {
    if($("#content_top .csc-gallery-slideshow").length != 0 ){
      $("#content_top .csc-gallery-slideshow").addClass('hidden');
    }
    if($("#content_top .tx-jfmulticontent-pi1").length != 0 ){
      $("#content_top .tx-jfmulticontent-pi1").addClass('hidden');
    }
  }
  function showSlideShow() {
    if($("#content_top .csc-gallery-slideshow").length != 0 ){
      $("#content_top .csc-gallery-slideshow").removeClass('hidden');
    }
    if($("#content_top .tx-jfmulticontent-pi1").length != 0 ){
      $("#content_top .tx-jfmulticontent-pi1").removeClass('hidden');
    }
  }
  function slideShowResponder(resize) {
    var addOn = 0;
    if($(window).width() < 480) {
      addOn = 20;
    }
    if(!resize){
      var resize = false;
    }
    if ($(".csc-gallery-slideshow").length != 0) {
      $(".csc-gallery-slideshow").each( function( index, slideShow ){
        var slideShowIsVisible = false;
        if ($(slideShow).is(":visible")) {
          slideShowIsVisible = true;
        }
        $(slideShow).attr("isVisible", slideShowIsVisible);

        if ($(slideShow).attr("isVisible")){
          // get the initial slideshow ratio so we can later on compute the correct height
          // given flexible slider widths.
          var slidesContainer = $(slideShow).find(".csc-gallery-slideshow-images")
            , slideShowWidth = maxContentWidth(slideShow) ;

          if($(slideShow).find(".csc-gallery-slideshow-images").length == 0) {
            slidesContainer = $(slideShow).find(".csc-gallery-slideshow-single");
          }
          slidesContainer.addClass("slidesContainer");
          setSildeShowRatio(slideShow, resize);

          if(resize){
            resizeSlideImages(slideShow, resize);
          }
          $(slideShow).find(".csc-ctrl-wrap").css({
            "height": slideShowWidth* $(slideShow).attr("slideshowratio")+addOn+"px"
            , "width": "100%"
          });
          slidesContainer.css({
            "height": slideShowWidth * $(slideShow).attr("slideshowratio")+"px"
            , "width": "100%"
            , "margin": "0px"});
        }
        else {
          return;
        }
      });
    }
  }
  //
  // SLIDESHOW helper functions
  //
  function setSildeShowRatio(slideShow, resize){
    var slidesContainer      = $(slideShow).find(".slidesContainer")
      , slides               = slidesContainer.children()
      , img                  = 0
      , slideShowWidth       = maxContentWidth(slideShow);

    // if we were here before get new dimensions for the images and slideShow
    if($(slideShow).attr("slideshowratio")){
      var slideShowHeight = (slideShowWidth * $(slideShow).attr("slideShowRatio"));
      var slideShowNav = $(slideShow).find(".csc-gallery-nav");

      if(slideShowNav.length != 0 && slideShowNav.is(":visible") ){
        $(slideShow).css({ "height" : slideShowHeight+slideShowNav.height()+"px"});
      }
      else {
        $(slideShow).css({ "height" : slideShowHeight+"px"});
      }
    }
    // else let's note down the ratio of the given slideShow
    else {
      updateSlides(slides, slideShow);
      // recall the function to follow up upon this initialization block
    }
  }
  function updateSlides(slides, slideShow) {
    $.each(slides, function(index,slide){
      $img = $(slide).find("img");

      // if the image has html attributes use the ratio
      if($img.attr("height") !== undefined){
        imgRatio = $img.attr("width") / $img.attr("height");
        $img.attr("imgratio", imgRatio)

        makeSize(slideShow, imgRatio)
      }
      // if the image has no html attributes get the image and compute the ratio
      else {
        getImageSizeOnLoad($img, slideShow);
      }
      // makeSize(slideShow, imgRatio)
    });
  }
  function resizeSlideImages(slideShow, resize){
    if($(slideShow).find(".csc-gallery-slideshow-images").length != 0) {
      var slidesContainer      = $(slideShow).find(".csc-gallery-slideshow-images")
    }
    // all the other galleries
    else {
      var slidesContainer      = $(slideShow).find(".csc-gallery-slideshow-single")
    }
    var slides               = slidesContainer.children();
    var images               = slides.find("img")
    images.each( function(index, image){
      setImageSizePostLoad(image);
    });
  }
  function getImageSizeOnLoad(image, slideShow){
    var imageSrc = $(image).attr("src");
    var ratio = 0;
    var img = new Image();
    if($(image).attr("imgratio")){
      return;
    }
    img.onload = function(event) {
      ratio = this.height / this.width ;
      // set SlideShowRatio according to the first image
      $(slideShow).attr("slideShowRatio", ratio)
      window.imgRatio = ratio;
      $(image).attr("imgratio", ratio);
      makeSize(slideShow, ratio);
      setImageSizePostLoad(image);
    }
    img.src = imageSrc;
  }
  function setImageSizePostLoad(pic){
    var $pic = $(pic)
      , slideShow = $pic.closest(".slidesContainer")
      , slideShowWidth  = maxContentWidth(slideShow)
      , slideShowHeight = slideShow.height();
    // set the pics height
    if($pic.attr("imgratio") != 1 && $pic.attr("imgratio") < 1){
      $pic.css({
        "height" : slideShowWidth*$pic.attr("imgratio")+"px"
        , "width" : "auto"
      });
    }
    if($pic.attr("imgratio") != 1 && $pic.attr("imgratio") > 1){
      $pic.css({
        "height" : slideShowWidth/$pic.attr("imgratio")+"px"
        , "width" : "auto"
      });
    }
  }
  // set size of the slideshow finally
  function makeSize(slideShow, ratio){
    if( ratio < 1 ) {
      $(slideShow).attr("slideShowRatio", ratio);
    }
    else if(ratio > 1 ) {
      console.log("ratio bigger than one ", ratio);
      $(slideShow).attr("slideShowRatio", ratio);
    }
    else {
      // if first pic is higher than wide, set slideShowRatioDefault to 16:9 -> 0.5625
      if($(".vitrine.vitrine-showcase").length != 0){
        $(slideShow).attr("slideShowRatio",  0.5625);
      }
      else {
        $(slideShow).attr("slideShowRatio",  0.667);
      }
    }
    setSildeShowRatio(slideShow);
  }
  // hide an show slideshow captions
  function toggleSlideshowCaption(){
    if ( $(button).text() == '+' ) {
      $(button).siblings(".image-caption").animate({opacity: 1}, 200, function(){
        $(button).text("-");
      });
    } else {
      $(button).siblings(".image-caption").animate({opacity: 0}, 200, function(){
        $(button).text("+");
      });
    }
  }
  // DECO SLIDE SHOW REQUIRES SOME RESPONSIVE ADAPTATIONS
  function adaptAnythingWindow() {
    if($(".tx-jfmulticontent-pi1 > .anythingSlider").length != 0) {
      $.each($(".tx-jfmulticontent-pi1 > .anythingSlider"), function(index, item){
        var width = $(item).parent(".tx-jfmulticontent-pi1").parent().width();

        $(item).wrap($("<div style='width: 100%'></div>"))
        $(item).css({ "minWidth" : "100%"});
      });
    }
  }
  //
  // maxContentWidth
  //
  // helper function to support evaluation of max width for apropriate content
  function maxContentWidth(elem){
    $slideShow = $(elem);
    if(!$slideShow.hasClass("csc-gallery-slideshow")){
      $slideShow = $(elem).closest(".csc-gallery-slideshow")
    }
    var winWidth = $(window).width();
    var maxWidth = winWidth - 20;
    if($(elem).length != 0){
      maxWidth = $slideShow.parent().parent().width();
    }
    if(winWidth < 480){
      maxWidth = 280;
    }
    if(maxWidth > 1020){
      maxWidth = 1000;
    }
    if(maxWidth > winWidth){
      maxWidth = winWidth - 20;
    }
    return maxWidth;
  }

  //
  // MANAGE MICROSITE MENU
  //
  // check if menuentry is in second or first row
  function topLevelOffset(activeEntry){
    var initialTopPos = $("#micrositeMenu > li:first-child").offset().top
      , itemTopPos    = $(activeEntry).offset().top
    return initialTopPos == itemTopPos ? false : true;
  }
  // first level microsite menu functionality
  function enterMicrositeTopLevelMenu(activeEntry){
    $(activeEntry).addClass("active").addClass("clicked").focus();

    var predecessor   = $(activeEntry).prev()
      , initialOffset = 74
      , additionalOffset = initialOffset + 49
      , blur = $("<div id='contentBlur'></div>")
      , posNow = !topLevelOffset(activeEntry) ? initialOffset : additionalOffset
      , offSetting = {"top" : posNow+'px'}
      , subListOffSetting = {"top" : posNow+'px'}
      , classList         = "hovered active clicked current";

    $(activeEntry).siblings().removeClass(classList);

    if ($(activeEntry).hasClass("parent")) {
      if($("#contentBlur").length == 0) {
        $("#page").css("position", "relative").append(blur);
      }
      adjustSubmenuHeightBackground(activeEntry);

      var micrositeMegaMenuBackground          = $(".micrositeMegaMenuBackground")
        , micrositeMegaMenuBackgroundStretcher = $(".micrositeMegaMenuBackgroundStretcher")
        , megaMenucloseButton                  = $(".closeMicrositeMegaMenu")
        , subList = $(activeEntry).children("ul").eq(0);

      subList.css(subListOffSetting);
      micrositeMegaMenuBackgroundStretcher.css(offSetting).addClass("clicked");
      micrositeMegaMenuBackground.css(offSetting).addClass("clicked");

    }
    else {
      var background             = $(".micrositeMegaMenuBackground")
        , backgroundStretcher    = $(".micrositeMegaMenuBackgroundStretcher")
        , closeMicrositeMegaMenu = $(".closeMicrositeMegaMenu");

      background.removeClass("clicked");
      backgroundStretcher.removeClass("clicked");
      $('#contentBlur').remove();
    }
    predecessor.addClass("hovered");
  }
  // lower level microsite menu
  function enterMicrositeSublevels(activeEntry){
    var predecessor   = $(activeEntry).prev()
      , classList     = "hovered active clicked current";
    $(activeEntry).siblings().removeClass(classList);
    $(activeEntry).children("li").removeClass(classList);
    $(activeEntry).addClass("active clicked");
    predecessor.addClass("hovered");
    adjustMenu();
    adjustSubmenuHeightBackground(activeEntry);
  }

  var micrositeMenuBackgroundHeight      = 500
    , lastBGHeight                       = 500
    , expandedMicroBg, animatingMicroBg  = false
    , lastUl                             = $("#micrositeMenu");

  function adjustSubmenuHeightBackground(activeEntry) {

    var newHeight                = micrositeMenuBackgroundHeight
      , activeItem               = $(activeEntry)
      , activeItemParentHeight   = activeItem.parent("ul").height()
      , activeItenChildrenHeight = activeItem.find("ul").first().height()
      , activeMenuStartPoint     = $("#micrositeMenu .menu-item.active")
      , sublist                  = $("#micrositeMenu .menu-item.active  >  ul")
      , offset                   = topLevelOffset(activeEntry)
      , background               = $(".micrositeMegaMenuBackground")
      , backgroundStretcher      = $(".micrositeMegaMenuBackgroundStretcher");

    // get the maximum submenu height
    newHeight = Math.max.apply(null, sublist.map(function () {
      return $(this).height()+100;
    }).get());
    lastBGHeight = newHeight;

    if(lastUl.get(0) === activeItem.parent("ul").get(0) && !animatingMicroBg ){
      if( activeItenChildrenHeight > lastBGHeight){
        $(function () {
          background.animate({
            height : lastBGHeight
          }, {duration: 400, queue: false });
          backgroundStretcher.animate({
            height : lastBGHeight
          }, {duration: 400, queue: false });
        });
      }
      else {
        return
      }
    }
    else {
      lastUl = activeItem.parent("ul");
      animatingMicroBg = true;

      if(  lastBGHeight > background.height()) {
        $(function () {
          background.animate({
            height : lastBGHeight
          }, {duration: 400, queue: false });
          backgroundStretcher.animate({
            height : lastBGHeight
          }, {duration: 400, queue: false });
        });
        animatingMicroBg = false;
      }
      else {
        if(micrositeMenuBackgroundHeight > 500 ){
          $(function () {
            background.animate({
              height : micrositeMenuBackgroundHeight
            }, { duration: 400, queue : false });
            backgroundStretcher.animate({
              height : micrositeMenuBackgroundHeight
            }, { duration: 400, queue : false });
          });
        } else {
          $(function () {
            background.animate({
              height : 500
            }, { duration:  400, queue : false });
            backgroundStretcher.animate({
              height : 500
            }, { duration: 400, queue : false });
          });
          micrositeMenuBackgroundHeight = 500;
          lastBGHeight = micrositeMenuBackgroundHeight;
        }
      }
    }
  }

  // INITIALIZE MICROSITE MENU INITTIAL STATE
  // store initially active element and reset menu to initial load state
  var micrositeInitialActives = $("#micrositeMenu li.active")
    , micrositeInitialCurrent = $("#micrositeMenu li.current")
    , micrositeHovering       = false;

  // set the menu back to its initial state ( adding classes like aciteve and current )
  function initializeMicrositeToplevelMenu(init){
    $("#micrositeMenu li.spacer").remove();
    if(!init){
      $("#micrositeMenu li").removeClass("active")
        .removeClass("hovered")
        .removeClass("clicked");
    }

    $.each(micrositeInitialActives, function(index, item){
      $(item).addClass("active");
      if($(item).parents(".sublevel").length != 0){
        $(item).addClass("clicked");
      }
    });

    if($("#micrositeMenu > li.active").length != 0) {
      $("#micrositeMenu > li.active").prev().addClass("hovered")
    }
    if($("#micrositeMenu > li.current").length != 0) {
      $("#micrositeMenu > li.current").prev().addClass("hovered")
    }

    micrositeInitialActives.addClass("active");
    micrositeInitialCurrent.addClass("current");
    micrositeInitialCurrent.prev().addClass("hovered");
    $(".micrositeMegaMenuBackground").removeClass("clicked");
    $(".micrositeMegaMenuBackgroundStretcher").removeClass("clicked");
    $("#contentBlur").remove();
    lastBGHeight = 500;
  }
  // what happens on click TOPLEVEL MENU MICOSITE MEGA MENU
  var microMenuFlag = false
    , microMenuFlagTimeout;

  // what happens on click SUBLEVEL MENU MICOSITE MEGA MENU
  $("#micrositeMenu > .menu-item > ul ")
  .on("click", " a.main-menu-link", function(event){
    event.preventDefault();
    var theLink =  $(event.target)
      , goto    =  theLink.attr("href");
    if(goto == undefined || !theLink.is("a")){
      theLink = theLink.closest("a");
      goto    = theLink.attr("href");
    }
    if($(window).width() > 700) {
      var activeEntry = $(this).parent("li.menu-item");
      if(!activeEntry.hasClass("clicked")){
        enterMicrositeTopLevelMenu(activeEntry);
        adjustMenu();
      }
      else {
        window.location = goto;
      }
    }
  });

  // click and expand menu and if needed get the subcontents
  function menuToggleExpander(itemOfInterest){
    var toggleTarget = $(itemOfInterest).siblings("a")
        , listEntry    = $(itemOfInterest).parent("li")
        , state        = $(itemOfInterest).text()
        , targetUrl    = toggleTarget.attr("href")
        , submenu      = $(itemOfInterest).siblings("ul");

    if( state === "-" ) {
      listEntry.removeClass("active");
      $(itemOfInterest).text("+");
    }
    else {
      $(itemOfInterest).text("-");
      listEntry.addClass("active");
      if(submenu.length == 0 || submenu.is(':empty')) {
        getTargetSubContents(targetUrl, listEntry);
      }
    }
  }
  $("#micrositeMenu")
  .on("click focus touch", "a.toggle", function(event){
    event.preventDefault();
    menuToggleExpander($(event.target));
  })
  .on("mouseenter", "a.toggle", function(event){
    event.preventDefault();
    if ($(window).width() > 700) {
      menuToggleExpander($(event.target));
    }
  });
  // microsite mega menu is being hovered
  var MicrositeMenuisHovered = function(){
    return $("#micrositeMenu:hover").length != 0 ? true : false;
  }
  // hover Action for desktop menu users
  var microMenuTimeout = null;
  var microMenuDoubleclickTimeout = null;
  var microMenuFlagTwo = false;

  $("#nav-section")
  .off()
  .on("focus", "#micrositeMenu > .menu-item > a.main-menu-link", function(event){
    event.preventDefault();
    clearTimeout(microMenuFlagTimeout);

    if(!microMenuFlag){
      microMenuFlag = true;
      microMenuFlagTimeout = setTimeout(function(){ microMenuFlag = false; }, 100);
    }
    if($(window).width() > 700) {
      var activeEntry = $(this).parent("li.menu-item");
      if(!activeEntry.hasClass("clicked")){
        enterMicrositeTopLevelMenu(activeEntry);
        adjustMenu();
      }
    }
  })
  // toplevel hover action with delay 400ms
  .on("mouseenter", "#micrositeMenu > .menu-item ", function(event){
        event.preventDefault();
        clearTimeout(microMenuTimeout);
        clearTimeout(microMenuDoubleclickTimeout);
        var activeEntry = $(this); //.parent("li");
        if(!microMenuFlagTwo){
          microMenuFlagTwo = true;
          microMenuDoubleclickTimeout = setTimeout(function(){ microMenuFlagTwo = false; }, 100);
        }
        if($(window).width() > 700 && MicrositeMenuisHovered()) {
          // check if it's hovered for some time....
          if($(".micrositeMegaMenuBackground.clicked").length != 0){
            enterMicrositeTopLevelMenu(activeEntry);
            adjustSubmenuHeightBackground(activeEntry)
          }
          else {
            microMenuTimeout = setTimeout( function(){
              enterMicrositeTopLevelMenu(activeEntry);
              adjustSubmenuHeightBackground(activeEntry);
            }, 400 );
          }
        }
      })
  // claer hoveraction and the delay
  .on("mouseleave", "#micrositeMenu > .menu-item ", function(event){
    event.preventDefault();
    if($(window).width() > 700 && MicrositeMenuisHovered()) {
      $(event.target).parent("li").removeClass("active clicked");
      clearTimeout(microMenuTimeout);
      clearTimeout(microMenuDoubleclickTimeout);
    }
  })
  //
  // key navigation topmost entries
  //
  .on( "keydown", "#micrositeMenu > li > a", function(e){
    // Listen for the up, down, left and right arrow keys, otherwise, end here
    if ([37,38,39,40,27,16].indexOf(e.keyCode) == -1) {
      return;
    }
    else {
      e.preventDefault();
      e.stopPropagation();
      var lastElement = $("a").is(":focus") ? $("a:focus") : false;
      // Store the reference to our top level link
      var link = $(this);
      switch(e.keyCode) {
        case 37: // left arrow
          onKeyInputGo("up");
          break;
        case 38: /// up arrow
          onKeyInputGo("up");
          break;

        case 39: // right arrow
          onKeyInputGo("down");
          break;

        case 40: // down arrow
          if( link.parent("li").hasClass("parent")){
            onKeyInputGo("right");
          }
          else {
            onKeyInputGo("down");
          }
          break;

        case 27:
          onKeyInputGo("esc");
          break;

        case 16:
          if($(".closeMicrositeMegaMenu").first().is(":focus") && lastElement);
          lastElement.focus();
          break;
      }
    }
  })
  // subpages
  .on( "mouseover", "#micrositeMenu > .menu-item > ul .menu-item a", function(){
    var activeEntry = $(this).parent("li");
    if($(window).width() > 700) {
      enterMicrositeSublevels(activeEntry);
    }
  })
  .on("mouseleave","#micrositeMenu > .menu-item > ul .menu-item a", function(){
    var activeEntry = $(this).parent("li");
    if($(window).width() > 700) {
      enterMicrositeSublevels(activeEntry);
    }
  })
  // mouse leaving the micrositeMenu section
  .on( "mouseleave", "#micrositeMenu", function(){
    clearTimeout(microMenuDoubleclickTimeout);
    clearTimeout(microMenuTimeout);
    if($(window).width() > 700) {
      setTimeout( function(){
        if(!micrositeHovering) {
          initializeMicrositeToplevelMenu();
        }
      }, 300 );
    }

  })
  .on( "keydown", "#micrositeMenu > li ul li a", function(e){

    if ([37,38,39,40, 27, 16].indexOf(e.keyCode) == -1) {
      return;
    }
    else {
      e.preventDefault();
      e.stopPropagation();
      switch(e.keyCode) {
        case 40: // down
          onKeyInputGo("down");
          break;
        case 38: /// up
          onKeyInputGo("up");
          break;

        case 39: // right
          onKeyInputGo("right");
          break;

        case 37: // left
          onKeyInputGo("left");
          break;

        case 27: // pressing escape
          var lastElement = $("a:focus");
          onKeyInputGo("esc");
          break;

        case 16: // pressing shift
          if($(".closeMicrositeMegaMenu").is(":focus") && lastElement);
          lastElement.focus();
          break;

      }



    }

  });

  // close MicrositeMegaMenu Button Clicked
  $("#mainNavigation")
  .on( "click", ".closeMicrositeMegaMenu", function(){
    closeMicrositeMegaMenu();
  });
  // close the microsite Megamenu
  function closeMicrositeMegaMenu(){
    micrositeHovering = false;
    clearTimeout(microMenuTimeout);
    initializeMicrositeToplevelMenu(false);
  }
  // stop collapse of megamenu if the mouse moves over the close button or the content blurr
  var hoverOutItems = '#contentBlur, '
    + '.closeMicrositeMegaMenu, .micrositeMegaMenuBackground, '
    + '.micrositeMegaMenuBackgroundStretcher ';

  $(".microsite")
  .on("mouseover", hoverOutItems, function(){
    micrositeHovering = true;
  })
  .on("mouseout", hoverOutItems, function(){
    micrositeHovering = false;
  })
  // click on background closes the menu...
  .on("click", "#contentBlur", function(){
    closeMicrositeMegaMenu();
  });

  // position microsite menu if menu width too high
  function adjustMenu() {
    if($("#nav-section ul").length != 0){
      $("#nav-section").removeClass("hidden")
    }
    if($(window).width() > 1200){
      var totalMenuWidth = 0;
      var navWidth = $("#nav-section").width();
      $.each($("#micrositeMenu > li"), function (index, item) {
        totalMenuWidth += $(item).width();
      });
      totalMenuWidth += 50;
      if(navWidth < totalMenuWidth && totalMenuWidth < $(window).width()){
        var menuOffset = (( totalMenuWidth - navWidth )/2)*-1;
        $("#nav-section").css({position: "relative", left: menuOffset, width: totalMenuWidth });
      }
    }
    else {
      $("#nav-section").css({position: "relative", left: 0, width: "100%" });
    }
  }

  //
  // TABLES
  //
  // TABLES SHOULD BE ACCESSIBLE ON MOBILE AND SMALL DEVICES
  function responsiveTables() {
    var tableWrapper = $("<div class='table-responsive'></div>");
    // prepare unstyled tables once

    $('table').each(function(index, table){
      if( !$(table).parent().hasClass("table-responsive")) {
        $(table).addClass("table");
        $(table).wrap(tableWrapper);
      }
      var shouldSlide = function(){
        var largerThanParent = $(table).width() > $(table).parent(".table-responsive").width();
        var largerThanPage   = $(table).width() > $("#page").width() - 70;
        return largerThanParent || largerThanPage ? true : false;
      }
      // hide the extra sm styling
      if (shouldSlide()) {
        $(table).addClass("scrollIndicator");
      }
      else {
        $(table).removeClass("scrollIndicator");
      }
    });
  }
  // make table great again in tabs and accordions
  var tabTimeOut;
  function startTabTimeOut() {
    tabTimeOut = setTimeout( function (){
      responsiveTables();
      nowrapper();
    }, 400 );
  }
  function clearTabtimeout() {
    clearTimeout(tabTimeOut);
  }
  $(document)
  .on("click", ".ui-tabs-nav > li", function(ev){
    clearTabtimeout();
    startTabTimeOut();
  })
  .on("click", ".ui-accordion-header", function(ev){
    clearTabtimeout();
    startTabTimeOut();
  })
  .on("click", ".ui-tabs-nav > li", function(ev){
    // console.log("clicking the tab")
    setTimeout( function (){
      responsiveTables();
      nowrapper();
    }, 500 );
  })
  .on("click", ".ui-accordion-header", function(ev){
    // console.log("clicking the accordion")
    setTimeout( function (){
      responsiveTables();
      nowrapper();
    }, 500 );
  });

  // HTML5 AUDIO VIDEO TAGS
  function mediaPlayerFix(medium) {
    $.each($(medium), function(index, value){
      var pwidth = $(this).parent().width()-20;
      $(this).css({
        "width": "95%"
        , "max-width": pwidth
        , "opacity": "1"
      }).attr("controlsList", "nodownload");
    });
  }

  // IF IN PRINTVIEW STAY IN PRINTVIEW
  $.extend({
    getUrlParameter : function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    }
  });
  // decide wether to change the link or not in printpreview
  function modifyPrintViewLinks(item){
    if($(item).hasClass("ui-tabs-anchor")){
      return false;
    }
    if($(item).attr("href").startsWith("/")){
      return true;
    }
    if($(item).attr("href").indexOf("https://www.uni-weimar.de") >= 0){
      return true;
    }
    else {
      return false;
    }
  }

  //
  // BANNER SLIDER LANDING PAGE
  //
  jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
      url: url,
      dataType: 'script',
      success: callback,
      async: true
    });
  }
  function bannerSliderCheck(){
    // if bannersliders on Page
    if($(".tx-sf-banners").length > 0){
      var potentialBannerSliders = $(".tx-sf-banners");
      $.each(potentialBannerSliders, function(index, item){
        // if we got a slider candidate
        if($(item).parents(".content_right").length == 0) {
          if(!$(item).hasClass("bannerSlider")){
            $(item).addClass("bannerSlider");
            // load a lib for more mobile gestures
            $.loadScript('/typo3conf/ext/buw_fe_skin/Resources/Public/js/libs/jQuery-Touch-Events-master/src/jquery.mobile-events.min.js', function(data){
              //add lib to dom
              var s = document.createElement('script');
              s.type = 'text/javascript';
              var code = data;
              try {
                s.appendChild(document.createTextNode(code));
                document.body.appendChild(s);
              } catch (e) {
                s.text = code;
                document.body.appendChild(s);
              }
            });
            // add all the buttons to each slider
            bannerSliderButtonate(item);
          }
          setTimeout(function(){
            bannerSlider(item);
          }, 3000);
        }
      })
    }
    // no banner sliders on page
  }
  //  prep the bannerslider for action
  function bannerSlider(slider){
    var bannerContainer = $(slider).children("div[id^=banners]")
      , banners         = $(slider).find(".banner");
    if(banners.length){
      banners.find("a").attr("tabindex", "1");
    }
    if(banners.length > minItemsToAnimate()) {
      $(slider).addClass("slideLeft");
    }
    else {
      $(slider).addClass("slideStop");
    }
    if(!$(slider).hasClass("slideStop") && $scope.site.access.animation ) {
      activeShifter(slider);
    }
  }
  // shift the slides according to proposed direction
  function activeShifter(slider) {
    var bannerContainer = $(slider).children("div[id^=banners]")
      , banners         = $(slider).find(".banner")
      , lastSlide       = $(banners[banners.length-1])
      , slideWidth      = $(banners).last().prev().prev().prev().width() * -1
      , slideDirection  = sliderDirection(slider)
      , slideTimeOut    = null;

    if(slideDirection == "slideLeft"){
      bannerSlideLeft(slider, slideTimeOut);
    }
    else if(slideDirection == "slideRight"){
      bannerSlideRight(slider, slideTimeOut);
    }
  }
  // move the banners to left
  function bannerSlideLeft(slider, slideTimeOut, manual){
    var banners = $(slider).find(".banner")
      , lastSlide       = $(banners[banners.length-1])
      , slideWidth      = $(banners).last().prev().prev().prev().width() * -1
      , speed           = manual ? 200 : 666;

    if(manual){
      nextSliderDirection(slider, "slideStop")
    }

    $(banners[0]).animate({ "margin-left": slideWidth+"px" }
      , speed, "linear", function() {
        $(banners[0]).css({"margin-left": 0}).insertAfter(lastSlide);
        if(!manual){
          slideTimeOut = setTimeout(function(){
            activeShifter(slider);
          }, 1800);
        }
      }
    );
  }
  // move banners to the right
  function bannerSlideRight(slider, slideTimeOut, manual){
    var banners = $(slider).find(".banner")
      , lastSlide       = $(banners[banners.length-1])
      , slideWidth      = $(banners).last().prev().prev().prev().width() * -1
      , speed           = manual ? 200 : 666;

    lastSlide.css({"margin-left" : slideWidth+"px"}).insertBefore($(banners[0]));

    if(manual){
      nextSliderDirection(slider, "slideRight")
    }

    clearTimeout(slideTimeOut);
    $(lastSlide).animate({
      "margin-left": "0px"
    }, speed, "linear", function(){
      if(!manual && $scope.site.access.animation){
        slideTimeOut = setTimeout(function(){
          activeShifter(slider);
        }, 1800);
      }
    });
  }
  // check the direction the banners should go
  function sliderDirection(slider){
    var slideDirection = "slideStop";
    if($(slider).hasClass("slideLeft")){
      slideDirection = "slideLeft";
    }
    if($(slider).hasClass("slideRight")){
      slideDirection = "slideRight"
    }
    return slideDirection;
  }
  // if direction of banner has changed
  function bannerSliderDirectionHasChanged(slider, direction){
    return $(slider).hasClass(direction) ? false : true;
  }
  // set next slideDirection
  function nextSliderDirection(slider, direction){
    if(direction != sliderDirection(slider)) {
      $(slider).removeClass("slideLeft slideRight slideStop").addClass(direction)
    }
    else {
      return;
    }
  }
  // add all buttons to the slider
  function bannerSliderButtonate(slider){
    var slideLeft  = "Previous Entry",
      slideRight = "Next Entry",
      expand     = "Show all Entries"
    if($scope.site.language == "de") {
      slideLeft  = "Vorheriger Eintrag";
      slideRight = "Nächster Eintrag";
      expand     = "Alle Einträge anzeigen"
    }
    var buttonLeft = '<button class="bannerSliderButtonLeft  bannerButton icon-pfeilv2 icon-Haken-links" title="'+slideLeft+'" tabindex="0"><span class="sr-only">'+slideLeft+'</span></button>';
    if($(slider).find(".bannerSliderButtonLeft").length == 0) {
      $(slider).prepend($(buttonLeft));
    }
    var buttonRight = '<button class="bannerSliderButtonRight bannerButton icon-pfeilv2 icon-Haken-links" title="'+slideRight+'" tabindex="0"><span class="sr-only">'+slideRight+'</span></button>';
    if($(slider).find(".bannerSliderButtonRight").length == 0){
      $(slider).append($(buttonRight));
    }
    var buttonOpen = '<button class="bannerSliderButtonOpen" title="open" tabindex="0"><span class="sr-only">'+expand+'</span></button>';
    if($(slider).find(".bannerSliderButtonOpen").length == 0){
      $(slider).append($(buttonOpen));
    }
    var buttonStop = '<button class="bannerSliderButtonStop bannerButton" tabindex="0"> stop </button>';
    if($(slider).find(".bannerSliderButtonStop").length == 0){
      // $(slider).append($(buttonStop));
    }
    setTimeout(function(){
      bannerSliderRegisterClicks(slider);
    }, 3000);
  }
  // register clickable items for the banner slider
  var slideTimeOut    = null;
  function bannerSliderRegisterClicks(slider){
    var bannerContainer = $(slider).children("div[id^=banners]")
      , banners         = $(slider).find(".banner")
      , lastSlide       = $(banners[banners.length-1])
      , slideWidth      = $(banners).last().prev().prev().prev().width() * -1
      , slideDirection  = sliderDirection(slider);

    // LEFT HAND BUTTON CAUSING A RIGHT SHIFT
    var clickedRight = 0;
    $(slider).on("click", ".bannerSliderButtonRight", function(){
      clickedRight += 1;
      if(clickedRight > 1) {
        return;
      }
      nextSliderDirection(slider, "slideRight");
      clearTimeout(slideTimeOut);

      var progress = $(lastSlide).css("margin-left");
      progress     = Number(progress.substring(0, progress.length - 2))

      var animationTime = progress === 0 ? .5 : (slideWidth / slideWidth)*-1
      if($scope.site.access.animation){
        if(sliderDirection(slider) == "slideLeft"){
          $(lastSlide).stop(true, true);
          $(banners[0]).stop(true, true);
          $(lastSlide).animate({
            "margin-left": "-"+slideWidth+"px"
          }, 20, "linear", function(){
            lastSlide.css({"margin-left": 0}).insertBefore($(banners[0]));
            bannerSlideRight(slider, slideTimeOut, true)
            clickedLeft = 0;
          });
        }
        else {
          bannerSlideLeft(slider, slideTimeOut, true)
          clickedRight = 0;
        }
      }
    });
    // LEFT HAND BUTTON CAUSING A LEFT SHIFT
    var clickedLeft = 0;
    $(slider).on("click", ".bannerSliderButtonLeft", function () {
      clickedLeft += 1;

      if(clickedLeft > 1) {
        return;
      }

      nextSliderDirection(slider, "slideRight");
      clearTimeout(slideTimeOut);

      var progress = banners[0].style["margin-left"];
      progress     = Number(progress.substring(0, progress.length - 2))
      var animationTime = progress === 0 ? .5 : (slideWidth / slideWidth)*-1

      if(sliderDirection(slider) == "slideLeft"){
        $(lastSlide).stop(true, true);
        $(banners[0]).stop(true, true);

        $(banners[0]).animate({
          "margin-left": "0px"
        }, 20, "linear", function() {
          $(banners[0]).css({"margin-left": 0}).insertAfter(lastSlide);
          bannerSlideRight(slider, slideTimeOut, true)
          clickedLeft = 0;

        });
      }
      else {
        bannerSlideRight(slider, slideTimeOut, true)
        clickedLeft = 0;
      }


    });
    $(slider).on("click", ".bannerSliderButtonOpen", function(){
      var slideHeight     = $(banners).first().height()
        , openHeight      = ((banners.length * slideHeight) + (banners.length * 20)) - 40;

      if($(slider).hasClass("open")) {
        $(slider).removeClass("open slideStop").addClass("slideLeft");
        $(".bannerSliderButtonOpen").removeClass("open");
        $(bannerContainer).animate({ "height": 127}, 800, function(){
          $(bannerContainer).removeClass("open")
        });
        activeShifter(slider);
      }
      else {
        $(slider).removeClass("slideLeft slideRight").addClass("open bannerStop")
        $(".bannerSliderButtonOpen").addClass("open")
        $(bannerContainer).addClass("open")
        $(bannerContainer).animate({ "height": openHeight}, 800, function(){

        })
      }
    });
    // mobile screens may swipe the banners
    if(isFunction($(slider).swiperight)){
      $(slider).swiperight(function(){
        nextSliderDirection(slider, "slideRight");
        bannerSlideRight(slider, slideTimeOut, true)
      });
    }
    if(isFunction($(slider).swipeleft)){
      $(slider).swipeleft(function(){
        nextSliderDirection(slider, "slideLeft");
        bannerSlideLeft(slider, slideTimeOut, true)
      });
    }
  }
  // determine the minimum number of elements in slider to start shifting the banners
  function minItemsToAnimate(){
    var itemNrToAnimate = $(window).width() < 700 ? 2 : 3
    if($(window).width() < 480 ) {
      itemNrToAnimate = 1;
    }
    return itemNrToAnimate
  }
  // hide opened banners on resize
  function bannerSliderResizeCheck() {
    if ($(".bannerSlider").length == 0) {
      return
    }
    if ($(window).width() > 480) {
      $(".bannerSlider").removeClass("open");
      $(".bannerSlider").find(".banner").parent().removeClass("open").removeAttr("style");
      $(".bannerSlider").find(".bannerSliderButtonOpen").removeClass("open");
    }
  }
  //
  // STARTSLIDER DEDICATED CONTENT ELEMENT
  //
  function startSliderShow(){
    if($(".start-slider").length === 0){ return; }

    var menuEntryStart = '<a class="menu-entry menu-item" tabindex="-1" href="no_follow"><span class="sr-only">'
      , menuEntryEnd   = '</span></a>'
      , pauseButton    = "<a class='menu-entry start-sliderPause' href='no_follow' alt='pause'><span class='sr-only'>pause</span></a>";
    if($scope.site.access.animation){
      $(".start-slider").find(".no-slide").removeClass("no-slide")
    }
    $.each( $(".start-slider"), function (index, item) {
      $(item).find(".start-slider-item").removeClass("active");

      $slideList       = $(item).find(".start-slider-item");
      $slideListLength = $slideList.length;
      $linkText        = $scope.site.language == "de" ? "zeige Slide Nr. " : "show Slide ";

      if($slideListLength > 1 && $(item).find(".start-slider-menu a").length == 0 ){
        for(var i=0; i < $slideListLength; i++) {
          $slideMenuText = $linkText+(i+1);
          $(item).find("p.pfeil > a").addClass("icon-Pfeil-rechts");
          $menuItem = menuEntryStart + $slideMenuText + menuEntryEnd;
          $(item).find(".start-slider-menu").append($menuItem);
          if(i==0){
            $(".start-slider-menu a").first().addClass("active");
            $(item).find(".start-slider-item").first().addClass("active");
          }

        }
        $(item).find(".start-slider-item p.pfeil a").attr("tabindex", "-1");
        $(item).find(".start-slider-item figure a").attr("tabindex", "-1");
        $(item).find(".start-slider-menu").prepend(pauseButton);

      }

      startSlide(item);
    });

  }
  function startSlide(startSlider) {
    $activeSlide        = $(startSlider).find(".start-slider-item.active")
    , $slideList        = $(startSlider).find(".start-slider-item")
    , $slideListLength  = $(startSlider).find(".start-slider-item").length
    , $image            = $activeSlide.find(".caption-media")

    if(!$scope.site.access.animation ){
      $(startSlider).addClass("no-slide");
    }

    if($activeSlide.parent().nextAll(".csc-default.layout-topheader").find(".start-slider-item").length != 0){
      $nextSlide = $activeSlide.parent().nextAll(".csc-default.layout-topheader").first().find(".start-slider-item");
    }
    else {
      $nextSlide = $(startSlider).find(".start-slider-item").first();
    }

    $count = $slideList.index($nextSlide);
    if (!$(startSlider).hasClass("no-slide") && $slideListLength > 1) {
      $activeSlide.animate({"z-index": 100}, 7000, function(){
        $activeSlide.removeClass("active").attr("style", "");
        $nextSlide.addClass("active");
        $(startSlider).find(".menu-item").removeClass("active").eq($count).addClass("active");
        startSlide(startSlider);
      });
    }
  }

  var slideTimeout = null;
  function setStartSlideByHand() {
    if($(".start-slider").length == 0) {
      return;
    }
    $(".start-slider").on("click", ".menu-entry", function (event) {
      event.preventDefault();
      clearTimeout(slideTimeout);
      $slideButton = $(event.target);
      $slider = $slideButton.closest(".start-slider");
      $slider.addClass("no-slide");
      var buttonList = $slider.find(".start-slider-menu .menu-item");

      if($slideButton.hasClass("start-sliderPause")){
        if($slideButton.hasClass("stopped")){
          $(".start-sliderPause").removeClass("stopped");
          $slider.removeClass("no-slide");
          startSliderShow();
        }
        else {
          $(".start-sliderPause").addClass("stopped");
        }
      }
      else {
        var listPos = buttonList.index($slideButton);

        frontSlide($slider, listPos);
        slideTimeout = setTimeout(function () {
          startSliderShow();
        }, 30000);
      }
    });
    if(isFunction($(".start-slider").swiperight)){
      $(".start-slider").swiperight(function(ev){
        var $slider = $(ev.target).closest(".start-slider");
        clearTimeout(swipeTimeout);
        $slider.removeClass("left-slide");
        $slider.addClass("no-slide");
        var activeSlide = $slider.find(".start-slider-item.active");
        $slideButton = activeSlide.find(".start-slider-menu .menu-item.active");
        $slider = $(ev.target);
        var buttonList = $slider.find(".start-slider-item.active .start-slider-menu .menu-item");
        var listPos = buttonList.index($slideButton);
        var swipeTimeout = setTimeout(function(){
          if(listPos == 0){
            frontSlide($slider, buttonList.length, "right-slide");
          }
          else {
            frontSlide($slider, listPos-1, "right-slide");
          }
        }, 3000);
      });
    }
    if(isFunction($(".start-slider").swipeleft)){
      $(".start-slider").swipeleft(function(ev){
        clearTimeout(swipeTimeout);
        var $slider = $(ev.target).closest(".start-slider");
        $slider.addClass("no-slide");
        $slider.removeClass("right-slide");

        var activeSlide = $slider.find(".start-slider-item.active");

        $slideButton = activeSlide.find(".start-slider-menu .menu-item.active");
        $slider = $(ev.target);
        var buttonList = $slider.find(".start-slider-menu .menu-item");
        var listPos = buttonList.index($slideButton);
        var swipeTimeout = setTimeout(function(){
          if(listPos == buttonList.length - 1){
            // $slider.addClass("left-slide");
            frontSlide($slider, 0, "left-slide");
          }
          else {
            // $slider.addClass("left-slide");
            frontSlide($slider, listPos+1, "left-slide");
          }
        }, 3000);
      });
    }
  }
  // put a given slide to the front and display
  function frontSlide(slider, number, direction) {
    if(direction){
      $(slider).addClass(direction)
    }
    $(slider).find(".start-slider-item").removeClass("active").attr("style", "");
    $(slider).find(".start-slider-item").eq(number).addClass("active");
    $(slider).find(".menu-item").removeClass("active").eq(number).addClass("active");
  }
  function tabStartSlide(){

  }
  $(".start-slider")
  .on("focusin", ".start-slider-item", function(event){

    var $activeSlide  = $(event.target).parents(".start-slider-item");
    var slider        = $activeSlide.parents(".start-slider");
    var $slideList    = slider.find(".start-slider-item");
    var actives       = slider.find(".active");
    var buttonList    = slider.find(".menu-item");

    slider.addClass("no-slide");
    actives.removeClass("active");
    $activeSlide.addClass("active");

    var number = $slideList.index($activeSlide);

    buttonList.eq(number).addClass("active");
  })
  //
  // END STARTSLIDER DEDICATED CONTENT ELEMENT
  //


  //
  // BAUHAUS.JOURNAL ANPASSUNGEN
  //
  var jumpMarks = [];
  function adaptBauhausJournal (){
    if($("#oCBox").length != 0 ) {
      var viewWidth         = $("body").width()
        , rightColWidth     = $("#content_right").width()
        , mainContentWidth  = viewWidth - (rightColWidth + 135)
        , position          = $("#pageHeadSection").position()
        , marginLeft        = position.left -20
        , $grid             = $("#masonryBox")
        , $jumpTo           = "jumpMark1"
        , $firstPageEntries = [];

      $grid.masonry(responsiveMasonrySettings(true));
      $grid.masonry();
      masonizeJournal();

    }
  }

  // check if an article was aready clicked in the bauhausJournal
  function ojReadList(){
    if(localStorage && localStorage.ojList){
      $scope.site.ojReadList = localStorage.ojList;
    }
    else {
      var list = new Array();
      // list = JSON.parse(JSON.stringify(list))
      localStorage.setItem("ojList", JSON.stringify(list));
    }
    return JSON.parse(localStorage.ojList);
  }
  $scope.articleUnRead = function(dataUid){
    var data  = dataUid
      ,result = true;
    if(localStorage && localStorage.ojList) {
      var checkList = JSON.parse(localStorage.ojList);
      if($.inArray(data, checkList) !== -1){
        result = false;
      }
    }
    return result;
  }
  // adds article to the readList after clicking
  $("#oCBox .listview-421")
  .on("click", "article", function(event){
    event.preventDefault();
    var article = $(this)
      , goTo    = article.find("a").first().attr("href")
      , dataUid = article.attr("data-uid");

    if(!localStorage.ojList){
      ojReadList();
    }
    if($.inArray(dataUid, JSON.parse(localStorage.ojList)) !== -1){ return; }
    else {
      var newList = JSON.parse(localStorage.ojList);

      newList.push(Number(dataUid))
      localStorage.setItem("ojList", JSON.stringify(newList));
    }
    window.location = goTo;
    return JSON.parse(localStorage.ojList);
  });

  //
  // Make expandable rightSidebar elements
  //
  function sideBoxManager(){
    var boxList = ["network", "linktip"]
    $.each(boxList, function (index, item) {
      // if not exists ... get out!
      if( $("."+item).length == 0 ) {
        return;
      }
      else {
        var box = $("."+item)
          , boxToggle = $("<a href='#' id='" + item + "' class='boxToggle' ><i class='sr-only'>ausklappen</i></a>")

        $.each(box, function(nr, instance){
          var list = $(instance).find("li");
          $.each(list, function (iter, li) {
            if(iter > 2) {
              $(li).addClass("toggleItem");
              $(li).slideToggle();
            }
            // if last element
            if(list.length == iter+1){
              // and length of list bigger than 3
              if( list.length > 3 ){
                box.append(boxToggle);
                box.addClass("closed");
              }
              else {
                box.css({"padding-bottom": "10px"})
              }
            }
          });
        });
        // handle clicks on the box expand button
        box.on("click", "a.boxToggle", function(event){
          event.preventDefault();
          if(box.hasClass("open")){
            box.removeClass("open").addClass("closed");
            box.find(".toggleItem").slideToggle();
          }
          else {
            box.removeClass("closed").addClass("open");
            box.find(".toggleItem").slideToggle();
          }
          if($(window).width() > 479) {
            setTimeout(function(){
              masonizeRightMobileMenu();
            }, 400);
          }

        })
      }
    });
  }

  //
  // Load the journal for the first time and perform masonry prep and initiation
  //
  function prepJournal(){
    if($("#onlineJournal").length != 0 && $(".listview-421").length != 0){
      $("#page").addClass("journal");
      $("body").addClass("journalList");
    }
  }
  function masonizeJournal(resize){
    // prepare javascripted content for more styles...
    if($("#onlineJournal").length != 0 && $(".listview-421").length != 0) {
      if($("#LoadMoreJournalButton").length == 0){
        LoadMoreJournalButton();
      }
      var viewWidth         = $("body").width()
        , rightColWidth     = $("#content_right").width()
        , position          = $("#pageHeadSection").position()
        , $grid             = $("#oCBox .listview-421")
        , $jumpTo           = "jumpMark1"
        , $firstPageEntries = [];

      $.each($(".listview-421 article"), function(index, item){
        $firstPageEntries.push(journalEntryCleaner(item));
        if(index == 0) {
          $(item).attr("id", $jumpTo);
        }
        $(item).addClass("jumpMark").addClass($jumpTo);
        // addItemToMasonry(item);
      });

      $grid.append();
      $grid.masonry(responsiveMasonrySettings(true));
      $grid.masonry();
      if(!resize){
        lazyJournalLoader();
      }
    }
  }
  // provide Masonry setting depending wether Call is a load or reload
  var responsiveMasonrySettings = function (isReload){
    viewPortWidth = $(window).width()
      , setting     = {}
      , load        = {
      itemSelector      : '.grid-item'
      , columnWidth     : '.grid-item'
      , itemSelector    : '.grid-item'
      , gutter          :  20
      , percentPosition : true
      , horizontalOrder : true
      , originLeft      : false
      , initLayout      : true
      , isFitWidth      : false
      , isAnimated: true
      , animationOptions: {
        duration: 700,
        easing: 'linear',
        queue: false
      }
    }
      , reload = load
      , reload.isAnimated  = !Modernizr.csstransitions;

    setting = isReload ? reload : load;

    if( 1166 < viewPortWidth ) {
      setting.originLeft = false;
    }
    else if( 1166 > viewPortWidth && viewPortWidth > 990) {
      setting.originLeft = false;
    }
    else if( 990  > viewPortWidth && viewPortWidth > 780) {
      setting.originLeft = false;
    }
    else if( 780  > viewPortWidth && viewPortWidth > 500) {
      setting.originLeft = true;
    }
    else if ( 500  > viewPortWidth && viewPortWidth > 460) {
      setting.originLeft = true;
    }
    return setting;
  }
  // lazy loader for bauhausjournal entries
  var lazyLoaderCount  = 1
    , lazyLoaderLimmit = 2
    , initialScrollPos = $(document).scrollTop()
    , initialDocHeight = $(document).height()
    , pagesLoaded      = []
    , lastJumpMark     = "jumpMark1";

  // LAZY LOAD CONTENTS FROM FOLLOWUP PAGES
  function lazyJournalLoader(url) {

    if($(".pagination").length == 0) { return; }

    var menu              = $(".pagination")
      , currentPage       = menu.find(".active")
      , currentPageNumber = Number(currentPage.clone().find(".sr-only").remove().end().text())
      , sourceAppendage   = "?type=461" // special pagetype for lazyloading / ts: lazyLoader
      , nextPage          = currentPage.next()
      , nextPageNumber    = Number(nextPage.clone().find(".sr-only").remove().end().text())
      , nextUrl           = nextPage.find("a").attr("href") + sourceAppendage
      , addables          = [];

    // check if current Page is already in the Array addables
    if ($.inArray(currentPageNumber, pagesLoaded) == -1) {
      pagesLoaded.push(currentPageNumber);
    }
    // if url was provided augment by static cached appendix / post parameter -> sourceAppendage
    if(url) {
      nextUrl = url+sourceAppendage;
    }

    // GET  NEXT PAGES ENTRY if Pagenumber not already in addables
    if ($.inArray(nextPageNumber, pagesLoaded) != -1) {
      if($.inArray(nextPageNumber+1, pagesLoaded) != -1) {
        lazyJournalLoader();
      }
    }
    else {
      $.get(nextUrl, function(response) {
        if ($.inArray(nextPageNumber, pagesLoaded) != -1) {
          return;
        }
        else {
          pagesLoaded.push(nextPageNumber);
        }
      })
        .done(function (response) {
          // // 2ND NEXT PAGE
          var futurePageMenu = $(response).find(".browsebox")
            , currentPageNr  = $(futurePageMenu).find(".active").first().text()
            , $jumpMark      = "jumpMark"+currentPageNr;

          lastJumpMark      = $jumpMark;
          $(".browsebox").replaceWith(futurePageMenu);
          // long entries
          $.each( $(response).find(".listview-421 article"), function(index, item){
            item = $(journalEntryCleaner(item));
            addables.push(item);
          });

          // compensateDocHeightOnScroll();
          // add all together
          $.each(addables, function (index, item) {
            if(index == 0) {
              item.attr("id", $jumpMark);
            }
            initialHeight = $(".listview-421").height();
            item.addClass("jumpMark").addClass($jumpMark);
            addItemToMasonry(item);
          });
          // compensateDocHeightOnScroll();

          // continue loading
          lazyLoaderCount += 1;
          if(lazyLoaderCount < lazyLoaderLimmit){
            lazyJournalLoader();
          }
          $("#LoadMoreJournalButton").removeClass("clicked");

        });
    }
  }
  // add item to masonry and update ... masonry is behaving strangely at times
  function addItemToMasonry(item) {
    var $grid             = $(".listview-421")
      , $item             = $(item)
      , $menu             = $(".pagination")
      , $currentPageNr    = $($menu).find(".active span").first().text()
      , $jumpMark         = "jumpMark"+$currentPageNr;
    $item.hide();
    // MAKE SURE IMAGES ARE LOADED BEFORE ADDING THEM< WHICH FUCKS UP THE LAYOUT
    // IF WE DON"T DO IT THIS WAY...
    $(".listview-421").imagesLoaded( function() {
      $grid.append($item)
        .masonry("appended", $item)
        // .masonry('destroy')
        .masonry(responsiveMasonrySettings(true))
        .masonry();
      $item.fadeIn(400);
    });

    // TRIGGER REARRANGEMENT OF MASONRY TILES (BAD HACK)
    triggerMasonryResize();
  }
  // REMOVE ANNOYING CLASSES FOR THIS LAUYOUTS CONTENT
  function journalEntryCleaner(item) {
    $(item).addClass("grid-item");
    return $(item)
  }
  // TRIGGER REARRANGEMENT OF MASONRY TILES (BAD HACK)
  function triggerMasonryResize(){
    var boxWidth        = $(".listview-421").width();
    $(".listview-421").width(0).width(boxWidth);
    $(".listview-421").masonry();

  }
  function getMoreJournalEntries(){
    $("#LoadMoreJournalButton").addClass("clicked");
    lazyJournalLoader();
    lazyLoaderLimmit = lazyLoaderLimmit + 1;
  }
  function LoadMoreJournalButton(){
    var container = $('<div id="LoadMoreJournalButton" tabindex="0"><div class="animationContainer"></div><div class="text-center"></div></div>')
      , miniBox   = $('<div class="squareBox"></div>')
      , titleDe   = "mehr laden"
      , titleEN   = "load more"
      , boxCount  = 9
      , title     = titleEN;

    $(".browsebox").after(container);
    // set Title if language is german
    if($scope.site.language == "de") {
      title = titleDe;
    }
    // add the Title
    $("#LoadMoreJournalButton").find(".text-center").text(title);
    // add the blinky boxes (blinks in css bauhaus.journal.less)
    for(var i=0; i < boxCount; i++){
      var newBox = miniBox.clone()
      $("#LoadMoreJournalButton").find(".animationContainer").prepend(newBox)
    }
    $(document)
    .on("click","#LoadMoreJournalButton", function(){
      getMoreJournalEntries();
    })
    .on('keydown', "#LoadMoreJournalButton",function(e) {
      if(e.keyCode === 13) {
        getMoreJournalEntries();
      }
    });
  }

  // right menu conatct fixxer
  function contactFixxer(){
    var checkList = ["#content_right"];
    $.each(checkList, function(index, item){
      var itemList = $(item).find(".csc-info-box");
      $.each(itemList, function (nr , box) {
        var about = $.trim( $(box).find("h2").text());
        var imageAbove = $(box).children(":first").hasClass(".csc-textpic-above");
        if ((about == 'Kontakt' || about == 'Contact') && imageAbove == 0) {
          $(box).addClass("contact-element");
        }
        if ((about == 'Kontakt' || about == 'Contact') && imageAbove == 1) {
          $(box).children(":first").hasClass(".csc-textpic-above");
          $(box).addClass("contact-element");
        }
        $(box).find(".contact-element").removeClass("contact-element");
      })
    });
    // check if we are in contrast view then set color for right infocolumn
    setSideBarBGColors($("#page.contrast").length  != 0);
  }

  // detect if element is in Viewport
  $.fn.isFullyInViewport = function() {
    var elementTop = $(this).offset().top
      , elementBottom = elementTop + $(this).outerHeight()
      , viewportTop = $(window).scrollTop()
      , viewportBottom = viewportTop + $(window).height();
    return elementTop >= viewportTop && elementBottom <= viewportBottom;
  };
  // BAUHAUSJOURNAL PAGE MENU CLICK EVENTS
  $(".journalList .page-navigation")
  .on("click", "a", function(event){
    event.preventDefault();
    var url       = $(this).attr("href")
      , linkText  = $(this).text()
      , jump      = "jumpMark"+linkText
      , jumpTo    = "#"+jump
      , timeOut   = 500;

    if(url.length =! 0){
      if($(jumpTo).length != 0) {
        highLightPageEntries(jump);
        $("html, body").animate({
          scrollTop: $(jumpTo).offset().top-100
        }, 400);
      }
      else {
        lazyLoaderCount = parseInt(linkText);
        lazyLoaderLimmit += 1;
        lazyJournalLoader(url);
        $(this).attr("href", "")
        setTimeout(function(){
          $(this).attr("href", url);
        }, timeOut);
      }
    }
  });

  $(".page-navigation")
  .on("click", ".current", function(event){
    var linkText = $(this).text()
      , jump   = "jumpMark"+linkText
      , jumpTo = "#"+jump;

    if($(jumpTo).length != 0) {
      highLightPageEntries(jump);
      $("html, body").animate({
        scrollTop: $(jumpTo).offset().top-100
      }, 400);
    }
  });

  //color all NEWS Items of one page Red and fadeOut
  function highLightPageEntries(page){
    var entries = $("."+page);
    // console.log("pageSelector: ", page);
    entries.addClass("jumped");
    setTimeout(function(){
      entries.removeClass("jumped")
    }, 2800);
  }
});

