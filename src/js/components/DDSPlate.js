/*
 *  大小单双 投注盘 DDSPlate.js  parentPlateId: 9
 */

(function () {
	function DDSPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.el   = this.initDom(this.data);
	}

	DDSPlate.prototype.initDom = function () {
		var i;
		var value;
		var temp = '';
		var balls = [
			{
				text: '5单0双',
				value: 'O5E0'
			},
			{
				text: '4单1双',
				value: 'O4E1'
			},
			{
				text: '3单2双',
				value: 'O3E2'
			},
			{
				text: '2单3双',
				value: 'O2E3'
			},
			{
				text: '1单4双',
				value: 'O1E4'
			},
			{
				text: '0单5双',
				value: 'O0E5'
			}
		];

		temp += '<div class="dds-plate" id="' + this.id + '">' +
					'<ul>';

		for (i = 0; i < balls.length; i++) {
			temp += 	'<li class="ball-item" data-value="' + balls[i].value + '">' + balls[i].text + '</li>'; 
		}

		temp += 	'</ul>' +
				'</div>';

		return temp;
	};

	DDSPlate.prototype.getDom = function () {
		return this.el;
	};

	DDSPlate.prototype.showPlate = function () {
		this.zone.show();
	};

	DDSPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};
	
	DDSPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
			BetRuleInstance.checkSelect($(this));
		});
	};

	window.DDSPlate = DDSPlate;
}());

