(function () {
	function IMDatetimepicker (opt) {
		this.opt = opt;
		this.el  =	'<div class="im-datetimepicker ' + this.opt.className + '">' +
						'<div class="time-label">' + this.opt.text + '</div>' +
	                    '<input type="text"/>' +
	                '</div>';
	}

	IMDatetimepicker.prototype.getDom = function () {
		return this.el;
	};

	window.IMDatetimepicker = IMDatetimepicker;
}());