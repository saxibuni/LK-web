(function () {

	function IMBettingTimes (opt) {
		var i;

		this.opt = opt;
		this.id  = this.opt.id;
		this.options = [1, 5, 10, 50, 100, 200];

		this.el  = 	'<div class="im-betting-times" id="' + this.id + '">' +
						'<span class="name">投注倍数：</span>' +
						'<div class="control">' +
							'<div class="minus">-</div>' +
							'<div class="select">' +
								'<input type="text" value="1"/>' +
								'<ul class="options">';

		for (i = 0; i < this.options.length; i++) {
			this.el +=     			'<li class="item">' + this.options[i] + '</li>';
		}

		this.el +=				'</ul>' +
							'</div>' +
							'<div class="plus">+</div>' +
						'</div>' +
					'</div>' +

					'<div class="select-overlay"></div>';
	}

	IMBettingTimes.prototype.getDom = function () {
		return this.el;
	};

	IMBettingTimes.prototype.getValue = function () {
		return parseInt(this.zone.find('input').val());
	};

	IMBettingTimes.prototype.bindEvents = function () {
		var ul;
		var input;
		var value;
		var plus;
		var minus;
		var control;
		var select;
		var overlay;
		var that = this;
		var clickOrTouch = Util.isMobile.any()?'touchstart': 'click';

		this.zone = $('#' + this.id);
		control   = this.zone.find('.control');
		select    = this.zone.find('.select');
		ul        = this.zone.find('.options');
		input     = this.zone.find('input');
		plus      = this.zone.find('.plus');
		minus     = this.zone.find('.minus');
		overlay   = this.zone.next('.select-overlay');

		ul.delegate('li', 'click', function (e) {
			value = $(this).text();
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
			ul.hide();
			e.stopPropagation();
		});

		input.focus(function (e) {
			ul.show();
			overlay.show();
			e.stopPropagation();
		}).keyup(function () {
			value = input.val();
			if (isNaN(value)) {
				value = 1;
				input.val(1);
			}
			value = parseInt(value);
			value = that.getCount(value).num;
			input.val(value);
			that.setModelZoneData(BetRuleInstance, value);
		});

		plus.click(function () {
			value = parseInt(input.val());
			if (value >= 0) {
				value++;
				value = that.getCount(value).num;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		minus.click(function () {
			value = parseInt(input.val());

			if (value > 1) {
				value--;
				input.val(value);
				that.setModelZoneData(BetRuleInstance, value);
			}
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});

		this.getCount = function(value){
			var maxCount = 0;
			var num = 0;
			switch (BetRuleInstance.betUnit){
				case 2 :maxCount = BetRuleInstance.maxCount; break;
				case 0.2 : maxCount =  BetRuleInstance.maxCount * 10 ;break;
				case 0.02 : maxCount =  BetRuleInstance.maxCount * 100 ;break;
			}
			num = value < maxCount ? value : maxCount;
			var numers = {
				maxCount : maxCount,
				num :num
			}
			return numers;
		}

		this.setModelZoneData = function(sender, betTimes){
			sender.multiple = betTimes;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, betTimes);
		}
	};

	window.IMBettingTimes = IMBettingTimes;
}());

