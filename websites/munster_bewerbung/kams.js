if (jQuery(".toggle .toggle-title").hasClass('active')) {
    console.log('step 1');
    jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
}
jQuery(".toggle .toggle-title").click(function () {
    console.log('step 2');
    if (jQuery(this).hasClass('active')) {
        console.log('step 3');
        jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
    } else {
        console.log('step 4');
        jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
    }
});

$(document).ready(function () {
    // Get hash from query string
    var hash = window.location.hash;

    if (hash) {
        // Get panel header element
        var requestedPanel = $(hash);
        if (requestedPanel.length) {
            //console.log('gefunden....');
            // Show requested panel
            requestedPanel.children().first().addClass("in");
            requestedPanel.children().first().children().first().next().addClass("in");
        }
        else {
            //console.log('nicht gefunden....');
        }
    }

});

/*
$(document).ready(function () {

    var h = $(window).height() - 570;
    $('#contentContainer').css('min-height', h);

    $('.accordion-toggle').click(function () {

//        $('#content').children('.col-sm-12').children('.panel-group').children('.panel').css('background-color', 'green');
//        $('#content').children('.col-sm-12').children('.panel-group').children('.panel').css('background-color', 'red');

        // Dies sind Hochschulleitung, Verwltung, Qualitätsverbesserungen, Organe, .....
        $('#content').children('.col-sm-12').children('.panel-group').children('.panel').each(function () {
            // Dies sind z.B. Rektorat, Senat, ...
            $(this).children('.panel-collapse').children('.panel-body').children('.panel-group').children('.panel').each(function () {
                $(this).children('.panel-collapse').children('.panel-body').children('.panel-group').children('.panel').each(function () {
                    //console.info(this);
                    $(this).children('.panel-collapse').children('.panel-body').slideUp('fast');
                });
            });
        });

        //e.preventDefault();

    });
});
*/
