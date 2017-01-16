(function () {
	function IMOverlay (opt) {
		this.opt = opt;
		this.el = '<div class="im-overlay"></div>';

		opt.position.append(this.el);
		this.zone = opt.position.children('.im-overlay');
	}

	IMOverlay.prototype.show = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.css('height', height);
		this.zone.show();
	};
	IMOverlay.prototype.showImg = function () {
		var str = '<div class="overlay-loading"></div>';
		$('body').append(str);
	};
	IMOverlay.prototype.hideImg = function () {
		$('.overlay-loading').remove()
	};
	IMOverlay.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMOverlay = IMOverlay;
}());

