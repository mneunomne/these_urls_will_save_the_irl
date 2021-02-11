$(function(){

    var $menu = $('.submenu_container'),
        $menu_ul = $('ul', $menu),
        $colapser = $('.mobile_top-collapser', $menu);

    $colapser.on('click', function(){
        $menu_ul.toggleClass('collapsed');
    })

});