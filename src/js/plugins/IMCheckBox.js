(function () {

	function IMCheckBox (opt) {
		this.opt = opt || {};
		this.el = this.initDom();
	}

	IMCheckBox.prototype.getDom = function () {
		return this.el;
	};

	IMCheckBox.prototype.initDom = function () {
		var temp = 	'<div class="im-checkbox' +
							(this.opt.checked? ' checked': '')  + '"' + 
							(this.opt.id?(' id="' + this.opt.id + '"'): '') + 
							(this.opt.value?(' data-value="' + this.opt.value + '"'): '') +
							'>' +
						'<div class="circle"></div>' +
						(this.opt.text? ('<span class="text">' + this.opt.text + '</span>'): '') +
					'</div>';

		return temp;
	};

	IMCheckBox.prototype.bindEvents = function () {
	};

	window.IMCheckBox = IMCheckBox;
}());

