(function () {

	function IMButton (opt) {
		this.id   = opt.id;
		this.opt  = opt;
		this.isPC = !Util.isMobile.any();
		this.el   = this.initDom();
	}

	IMButton.prototype.getDom = function () {
		return this.el;
	};

	IMButton.prototype.initDom = function () {
		var classes         = 'im-button';
		var padClass        = this.isPC?' btn-hover': '';
		var additionalClass = (this.opt.className?(' ' + this.opt.className): '');

		classes += additionalClass + padClass;

		var temp = 	'<a' + (this.id?(' id="' + this.id + '"'): '') + ' class="' + classes + '">' +
						'<div class="im-button-wrapper">' +
							'<div class="button-overturn im-button-row1">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
							'<div class="button-overturn im-button-row2">' +
							'</div>' +
							'<div class="button-overturn im-button-row3">' +
								(this.opt.imgSrc? ('<img src="' + this.opt.imgSrc + '" height=20 width=20></img>'): '') +
								'<span class="text">' + this.opt.text + '</span>' +
							'</div>' +
						'</div>' +
					'</a>';
		return temp;
	};

	IMButton.prototype.disabled = function () {
		if(!this.zone)this.zone = $('#' + this.id);
		this.zone.attr('disabled', 'disabled');
		this.zone.addClass('btn-disabled');
		this.zone.removeClass('btn-hover');
	};

	IMButton.prototype.enabled = function () {
		this.zone.removeAttr('disabled');
		this.zone.addClass('btn-hover');
		this.zone.removeClass('btn-disabled');
	};

	IMButton.prototype.inProgress = function () {
		this.setImage('../img/loading.png');
		this.setText('提交中');
		this.zone.addClass('but-noClick');
		this.zone.addClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.inNormal = function () {
		this.setImage('../img/select-mark.png');
		this.setText('确定');
		this.zone.removeClass('but-noClick');
		this.zone.removeClass('btn-disabled');
		if (this.isPC) {
			this.zone.removeClass('btn-hover');
		}
	};
	IMButton.prototype.recover = function () {
		if (this.opt.imgSrc) {
			this.setImage(this.opt.imgSrc);
		}
		
		this.setText(this.opt.text);

		if (this.isPC) {
			this.zone.addClass('btn-hover');
		}
	};

	IMButton.prototype.setImage = function (src) {
		this.zone.find('img').attr('src', src);
	};

	IMButton.prototype.setText = function (text) {
		this.zone.find('.text').text(text);
	};

	IMButton.prototype.bindEvents = function (callback) {
		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		this.zone = $('#' + this.id);

		this.zone.bind(clickOrtouch, function () {
			if (typeof callback === 'function') {
				callback();
			}
		});
	};

	window.IMButton = IMButton;
}());

