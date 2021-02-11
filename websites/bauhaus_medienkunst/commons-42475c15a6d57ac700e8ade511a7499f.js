/* TYPO3 tx_jfmulticontent pane visibility hack to prevent conent flickering */
jQuery(function($){
    $(".tx-jfmulticontent-pi1").has(".subcolumns").css("visibility","visible").animate({"opacity":1});
});
