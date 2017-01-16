(function () {
	function PlayingDescriptionTip (opt) {
		this.opt = opt;
		this.id = opt.id;
		this.el = this.init();
		this.data = {};
	}

	PlayingDescriptionTip.prototype.init = function () {
		var temp = 	'<div class="playing-description-tip" id="' + this.id + '">' +
						'<div class="method-name"></div>' +
						'<div class="select-method"></div>' +
						'<div class="winning-rule"></div>' +
					'</div>' + 
					'<div class="arrow"></div>';

		return temp;
	};

	PlayingDescriptionTip.prototype.getDom = function () {
		return this.el;
	};

	PlayingDescriptionTip.prototype.show = function () {
		if (!this.zone) {
			this.zone = $('#' + this.id);
		}
		
		this.zone.children('.method-name').text(this.data.methodName);
		this.zone.children('.select-method').text(this.data.selectMethod);
		this.zone.children('.winning-rule').text(this.data.winningRule);

		this.zone.css('display', 'inline-block');
	};

	PlayingDescriptionTip.prototype.hide = function () {
		this.zone.hide();
	};

	PlayingDescriptionTip.prototype.isOpen = function (opt) {
		if (!this.zone) {
			this.zone = $('#' + this.id);
			return false;
		}

		if (this.zone.css('display') === 'none') {
			return false;
		}

		return true;
	};

	window.PlayingDescriptionTip = PlayingDescriptionTip;
}());

