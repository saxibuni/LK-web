(function () {
	function UnitGroup (opt) {
		this.opt = opt;
		this.id  = this.opt.id;

		this.wan  = new IMCheckBox({text: '万位', value: '5th'});
		this.qian = new IMCheckBox({text: '千位', value: '4th'});
		this.bai  = new IMCheckBox({text: '百位', value: '3rd'});
		this.shi  = new IMCheckBox({text: '十位', value: '2nd'});
		this.ge   = new IMCheckBox({text: '个位', value: '1st'});

		this.el = 	'<div class="row unit-group" id="' + this.id + '">' +
						'<div class="col-md-1">' +
							this.wan.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.qian.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.bai.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.shi.getDom() +
						'</div>' +
						'<div class="col-md-1">' +
							this.ge.getDom() +
						'</div>' +
					'</div>';
	}

	UnitGroup.prototype.getDom = function () {
		return this.el;
	};

	UnitGroup.prototype.show = function () {
		this.zone.show();
	};

	UnitGroup.prototype.hide = function () {
		this.zone.hide();
	};

	UnitGroup.prototype.clearChecks = function () {
		this.zone.find('.im-checkbox').removeClass('checked');
	};

	UnitGroup.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.delegate('.im-checkbox', 'click', function (e) {
            BetRuleInstance.checkUnitGroup($(this));
		});
	};

	window.UnitGroup = UnitGroup;
}());
