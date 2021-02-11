(function($){
  $(window).load(function() {
    $('.imagecycle-container').each(function(){
      var container = $(this);
      var imageContainer = $('.csc-textpic-imagewrap', container);
      var images = $(".imagecycle", imageContainer);
      if(!images.length){ return; }
      var heights = new Array();
      var widths = new Array();
      $("img",images).each(function(){
        var img = $(this);
        var height = img.height();
        var width = img.width();
        if (height == 0){
          var attr = img.attr('height');
          if (typeof attr !== typeof undefined && attr !== false) {
            height = parseInt(attr);
          }else{
            height = 999999;
          }
        }
        if (width == 0){
          var attr = img.attr('width');
          if (typeof attr !== typeof undefined && attr !== false) {
            width = parseInt(attr);
          }else{
            width = 999999;
          }
        }
        heights.push(height);
        widths.push(width);
      });
      var minHeight = Math.min.apply(Math, heights);
      var minWidth = Math.min.apply(Math, widths);
      if (minHeight == 999999){
        minHeight = "auto";
      }else{
        minHeight = minHeight + "px";
      }
      if (minWidth == 999999){
        minWidth = "auto";
      }else{
        minWidth = minWidth + "px";
      }
      if(container.hasClass('imagecycle-rnd')){
        var rnd = (Math.random() * 100 + 50) % 100;
        var rndSlice = 100/images.length;
        var rndSection = Math.round(rnd / rndSlice);
        var displayIndex = rndSection % images.length;
        imageContainer.empty();
        imageContainer.css({'height':minHeight,'width':minWidth,'overflow':'hidden'});
        imageContainer.append(images[displayIndex]);
      }else if(container.hasClass('imagecycle-seq')){
        imageContainer.empty();
        imageContainer.css({'overflow':'hidden', 'margin-right': '10px', 'padding-right': '0px'}); // 'height':minHeight,'width':minWidth,
        imageContainer.append(images);
        // expect jquery.cycle2 plugin loaded
        imageContainer.cycle({ 'slides': '> figure', });
      }
    });
  })
})(jQuery)
