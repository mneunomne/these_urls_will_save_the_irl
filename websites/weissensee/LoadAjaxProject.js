function loadAjaxProject(uid) {
  var titleColor = $('.headline h1' ).attr('style');

    if(!$('.project-item_'+ uid).hasClass('loaded')) {
        $('.project-item_'+ uid ).addClass('open');
        
        $.ajax({
            type: 'GET',
            url: "index.php?type=100",
            data: {
                 tx_khberlin_projects:{project: uid}
            },
            success: function(data) {
                $('.project-item_'+ uid ).addClass('loaded')
                $('.project-item_'+ uid + ' .static').hide();
                $('.project-item_'+ uid + ' .dynamic').html(data);
                $('li.project-item_'+uid+' div.dynamic div.see_menu').click(function(event){ loadAjaxProject(uid); event.stopPropagation();});
                $('.project-item_'+ uid + ' span.color-change' ).attr('style', titleColor);
            },
            error: function() {
                $('.project-item_'+ uid ).html('');
            }
        })
    } else if ($('.project-item_'+ uid).hasClass('loaded') && $('.project-item_'+ uid).hasClass('open')) {
        $('.project-item_'+ uid ).removeClass('open');
        $('.project-item_'+ uid + ' .dynamic').hide();
        $('.project-item_'+ uid + ' .static').show();
    } else if ($('.project-item_'+ uid).hasClass('loaded') && !$('.project-item_'+ uid).hasClass('open')) {
        $('.project-item_'+ uid ).addClass('open');
        $('.project-item_'+ uid + ' .dynamic').show();
        $('.project-item_'+ uid + ' .static').hide();
    }
}