(function($){
  $(document).ready(function(){
    function isImageUrl(url) {
      return url.match(/[^/]+(jpg|jpeg|png|gif)$/);
    }
    $('.imageurl-placeholder-src').each(function(){
      var placeholder = $(this);
      var srcUrl = placeholder.attr('src');
      if(isImageUrl(srcUrl)) {
        var parent = placeholder.parent();
        $('figure img', parent).first().fadeOut(500,function(){
          $(this).attr('src',srcUrl);
          $(this).load(function(){
            $(this).fadeIn(500);
            placeholder.remove();
          });
        });
      }
    });
  })
})(jQuery)

