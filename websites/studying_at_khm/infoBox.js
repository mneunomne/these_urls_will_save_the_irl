(function($) {
	$.lib = $.lib || {};

	$.lib.infoBox = function(pInfoBox) {
		var isAdmin = $(".Admin").length > 0;
		var selector =".Admin";
		if(!isAdmin)
		{
			selector =".Page";
		}
		
		$(selector).trigger('infoBox', [ pInfoBox ]);
	}

	function infoBox(pElement, pOptions) {
		var self = this;
		this.element = pElement;
		this.fadeDuration = 400;
		this.defaultDuration = 3000;

		this.init = function() {
			this.bindEventHandler();
		}

		this.bindEventHandler = function() {
			$(".Page, .Admin").bind("infoBox", function(event, pInfoBox) {
				self.displayInfoBox(pInfoBox);
				return false;
			});
		}

		this.displayInfoBox = function(pInfoBox) {
			var type = 'info';
			if (pInfoBox.type != undefined) {
				type = pInfoBox.type;
			}

			var message = "";
			if (pInfoBox.message != undefined) {
				message = pInfoBox.message;
			}

			var duration = self.defaultDuration;
			if (pInfoBox.duration != undefined) {
				pInfoBox.duration = parseInt(pInfoBox.duration);
				if (!isNaN(pInfoBox.duration)) {
					duration = pInfoBox.duration;
				}
			}
			
			if (pInfoBox.template != undefined && pInfoBox.template != "")
			{
				var messageDiv = $(pInfoBox.template).addClass(type);
			}
			else
			{
				var messageDiv = $('#infoBox .message.template').clone();
				messageDiv.removeClass('template').addClass(type);
				messageDiv.html(message);
			}
			
			if (pInfoBox.wrapperClass != undefined && pInfoBox.wrapperClass != "")
			{
				$('#infoBox').addClass(pInfoBox.wrapperClass);
			}
			
			if (pInfoBox.noCloseOnClick == undefined || pInfoBox.noCloseOnClick == false)
			{
				messageDiv.click(function() {
					$(this).animate({
						opacity : "0"
					}, self.fadeDuration, 'swing', function()
					{
						$(this).remove();
						
						if (pInfoBox.wrapperClass != undefined && pInfoBox.wrapperClass != "")
						{
							$('#infoBox').removeClass(pInfoBox.wrapperClass);
						}
					});
				});
			}
			
			$('#infoBox').prepend(messageDiv);
			
			if (pInfoBox.closeClickSelector != undefined)
			{
				$(pInfoBox.closeClickSelector).click(function() {
					messageDiv.animate({
						opacity : "0"
					}, self.fadeDuration, 'swing', function()
					{
						messageDiv.remove();
						
						if (pInfoBox.wrapperClass != undefined && pInfoBox.wrapperClass != "")
						{
							$('#infoBox').removeClass(pInfoBox.wrapperClass);
						}
					});
				});
			}
			
			var divHeight = messageDiv.css('height');
			
			messageDiv.css('height', '0');
			messageDiv.css('display', 'block');
			messageDiv.css('opacity', '0');
			
			messageDiv.animate({
				height : divHeight
			}, 200, 'swing', function()
			{
				$(this).animate({
					opacity : 1
				}, self.fadeDuration, 'swing', function()
				{
					if (pInfoBox.activeClose == undefined || !pInfoBox.activeClose)
					{
						$(this).delay(duration).animate({
							opacity : "0"
						}, self.fadeDuration, 'swing', function()
						{
							$(this).remove();
						});
					}
				});
			});
		}
	};

	$.fn.infoBox = function(method, pOptions) {
		return this.each(function() {
			if (this.infoBox === undefined) {
				this.infoBox = new infoBox(this, pOptions);
				this.infoBox.init();
			}
			if (typeof method !== 'object') {
				if (this.infoBox[method]) {
					this.infoBox[method].apply(this.infoBox, pOptions);
				}
			}
		});
	};
})(jQuery);