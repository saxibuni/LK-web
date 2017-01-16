(function () {
	function IMInput (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-input ' + this.opt.className + '">' +
						'<div class="input-label">' + this.opt.text + '</div>' +
	                    '<input type="text" placeholder="' + (this.opt.placeHolder || '') + '"/>' +
	                '</div>';
	}

	IMInput.prototype.getDom = function () {
		return this.el;
	};

	window.IMInput = IMInput;
}());
