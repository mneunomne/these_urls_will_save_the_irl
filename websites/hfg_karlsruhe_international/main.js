/*
  HFGK
  Copyright (C) 2015 by Systemantics, Bureau for Informatics

  Systemantics GmbH
  Bleichstr. 11
  41747 Viersen
  GERMANY

  Web:    www.systemantics.net
  Email:  hello@systemantics.net

  Permission granted to use the files associated with this
  website only on your webserver.

  Changes to these files are PROHIBITED due to license restrictions.
*/

function isMobile() {
	if (!$('#bp').length) {
		$("<div id=bp></div>").appendTo("body");
	}
	return $('#bp').width() == 1;
}

function carouselHeight(){

	if(isMobile()){
		$('.homecarousel').css('height', '');
	}else{
		$('.homecarousel').css('height', $(window).height() - $('#nav-main').height());
	}
}

function carousleArrowWidth(){

	$(".flik-container").each(function(){
		var carousel = $(this),
			arrows = carousel.closest('.homecarousel').find('.flik-arrow'),
			arrowWidth = carousel.width() - carousel.find('.carousel-cell.is-selected').outerWidth(true) - 5;

		if(isMobile()){
			arrows.css('width', '38px');
		}else{
			arrows.css('width', arrowWidth / 2);
		}
	});
}

function beforeInitCarousel(){
	$(".flik-container").each(function(){
		var carousel = $(this),
			cellwidth = carousel.closest('.homecarousel').find('.flik-placeholde-cell');


		if(isMobile()){
			carousel.find('.carousel-cell').css('width', carousel.width() - 76 );
		}else{
			carousel.find('.carousel-cell').css('width', cellwidth.width());
		}

		carousel.find('.carousel-cell').each(function(){
			var cell = $(this),
				cellRatio = cell.width() / cell.height(),
				image = cell.find('.cell-image'),
				imageRatio = image.data('ratio');

			if(cellRatio < imageRatio){
				image.removeClass('cell-image-contain').addClass('cell-image-cover');
			}else{

				image.removeClass('cell-image-cover').addClass('cell-image-contain');

			}
		});

		// if(carousel.find('.carousel__cell').length < 2){
		// 	container.find('.carousel__prev_next_button').remove();
		// 	container.find('.carousel__pagination').remove();
		// }

		if(!carousel.hasClass("flickity-enabled")){

			carousel.closest('.homecarousel').find('.flik-pagination-total').text(carousel.find('.carousel-cell').length);

			setTimeout(function(){
				initCarousel();
			}, 150);
		}
	});
}

function initCarousel(){
	$(".flik-container").each(function(){
		var flkty = $(this).flickity({
			setGallerySize: false,
			prevNextButtons: false,
			pageDots: false,
			groupCells: 1,
			cellAlign: 'center',
			draggable: isMobile(),
			wrapAround: true,
		}).on('select.flickity', function(event, progress){
			var getData = flkty.data('flickity');

			if(getData){
				selected = getData.selectedElement;
				var container = $(selected).closest(".homecarousel");

				container.find(".flik-pagination-current").text($(selected).index() + 1);
				container.find('.flik-mobile-caption').html($(selected).find('.cell-caption').html());

			}
		});

		carousleArrowWidth();
	});
}

$(function() {

	moment.locale('de');
	var limitMonth = moment().subtract(1, 'months');

	var block = $('<li class="group-news-month hide-newsitem"></li>');

	//5if($('.js-newsarchive-group').length){

	//5	var lastMonth = false,
	//5		hideBehind = false;
	//5	$('.js-newsarchive-group').each(function(){
	//5		var item = $(this),
	//5			itemMonth = item.data('date').substr(0, 7);

	//5		if(moment(item.data('date')).isBefore(limitMonth) && (lastMonth == false || lastMonth != itemMonth)){

	//5			block.clone().text(moment(item.data('date')).format('MMMM YYYY')).insertBefore(item);
	//5			lastMonth = itemMonth;
	//5			hideBehind = true;
	//5		}

	//5		if(hideBehind){
	//5			item.addClass('hide-newsitem');
	//5		}

	//5		if(hideBehind && !$('.load-more-newsitems').length){
	//5			$('<div class="load-more-newsitems">Weitere Inhalte laden</div>').insertAfter(item.closest('.generic-list'));

	//5			item.closest('.block-object-group').addClass('with-load-more-button');
	//5			$('html').addClass('shrink-space-bottom');
	//5		};
	//5	});
	//5}


	//5$(document).on('click', '.load-more-newsitems', function(){
	//5	$(this).hide();
	//5	$('.hide-newsitem').removeClass('hide-newsitem');
	//5	$('html').removeClass('shrink-space-bottom');
	//5});

	$(document).on('click', '.nav-main-touch .logo', function(){
		$('.nav-main-touch .open-close-container .toggle').trigger('click');
		$('html').addClass('menu-is-open');
	});

	$(document).on('click', '.menu-is-open .slidebar .logo', function(){
		$('.menu-is-open .slidebar .open-close-container .toggle').trigger('click');
		$('html').removeClass('menu-is-open');
	});

	$(document).on('click', '.flik-arrow-prev', function(){
		var el = $(this),
			container = el.closest('.homecarousel');

		container.find('.flik-container').flickity('previous');

		setTimeout(function(){
			el.trigger('mouseleave');
			el.trigger('mouseenter');
		}, 250);
	});

	$(document).on('click', '.flik-arrow-next', function(){
		var el = $(this)
			container = el.closest('.homecarousel');

		container.find('.flik-container').flickity('next');

		setTimeout(function(){
			el.trigger('mouseleave');
			el.trigger('mouseenter');
		}, 250);
	});

	$(document).on('click', '.cell-image', function(e){
		if($(e.target).hasClass('cell-image')){
			$(this).closest('.flik-container').flickity('next');
		}
	});

	$(document).on('mouseenter', '.flik-arrow', function(){
		var el = $(this),
			carousel = el.closest('.homecarousel').find('.flik-container'),
			current = carousel.find('.carousel-cell.is-selected');

		if(isMobile()){
			return;
		}

		if(el.hasClass('flik-arrow-prev')){

			var cellPrev = current.prev();
			if(!cellPrev.length){
				cellPrev = carousel.find('.carousel-cell').last();
			}

			cellPrev.addClass('flik-hover');

		}else{
			var cellNext = current.next();
			if(!cellNext.length){
				cellNext = carousel.find('.carousel-cell').first();
			}

			cellNext.addClass('flik-hover');
		}
	});

	$(document).on('mouseleave', '.flik-arrow', function(){
		var el = $(this),
			carousel = el.closest('.homecarousel').find('.flik-container');

		carousel.find('.carousel-cell').removeClass('flik-hover');
	});

	$(window).on('load', function(){
		carouselHeight();
		beforeInitCarousel();
	});

	$(window).on('resize', function(){
		carouselHeight();
		beforeInitCarousel();
		carousleArrowWidth();
	});
});
