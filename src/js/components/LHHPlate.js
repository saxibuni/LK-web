/*
 *  龙虎和 投注盘 LHHPlate.js
 */

(function () {
	function LHHPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {name: '万:千'};
		this.el   = this.initDom(this.data);
	}

	LHHPlate.prototype.initDom = function (data) {
		var temp;

		temp = 	'<div class="row lhh-plate" id="' + this.id + '">' +
					'<div class="col-md-1">' +
						'<span class="name">' +
							data.name +
						'</span>' +
					'</div>' +

					'<div class="col-md-6">' +
						'<div class="row">' +
							'<div class="col-md-1 ball-item" data-value="L">' +
								'<span>' +
									'龙' +
								'</span>' +
							'</div>' +
							'<div class="col-md-1 ball-item" data-value="H">' +
								'<span>' +
									'虎' +
								'</span>' +
							'</div>' +
							'<div class="col-md-1 ball-item" data-value="T">' +
								'<span>' +
									'和' +
								'</span>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;
	};

	LHHPlate.prototype.getDom = function () {
		return this.el;
	};

	LHHPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};

	LHHPlate.prototype.showPlate = function (opt) {
		this.zone.show();
		this.methodId = opt.methodId;
		this.changeName(opt.plate.names[0]);
	};

	LHHPlate.prototype.changeName = function (name, value) {
		this.zone.find('.name').text(name);
	};

	LHHPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});
	};

	window.LHHPlate = LHHPlate;
}());

