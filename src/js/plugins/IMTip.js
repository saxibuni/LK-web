(function () {
	function IMTip (opt) {
		this.opt = opt;
		this.el = this.init();
	}

	IMTip.prototype.init = function () {
		var temp = 	'<div class="im-tip">' +
						'<div class="tip-content" id="title"></div>' +'<div class="tip-content" id="method"></div>'+
						'<div class="arrow"></div>' +
					'</div>';
		return temp;
	};

	IMTip.prototype.getDom = function () {
		return this.el;
	};

	IMTip.prototype.show = function (opt) {
		this.zone = $('.im-tip');
		this.zone.find('#title').text(opt.text.methodName);
		this.zone.find('#method').text(opt.text.winningRule);
		
		delete opt.text;
		opt.display = 'inline-block';
		this.zone.css(opt);
	};

	IMTip.prototype.hide = function () {
		this.zone.hide();
	};

	window.IMTip = IMTip;
}());

