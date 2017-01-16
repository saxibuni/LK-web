(function () {

	function IMMoneyModel (opt) {
		this.opt = opt;
		this.id  = opt.id;

		this.el  =	'<div class="im-money-model" id="' + this.id + '">' +
						'<div class="name">资金模式：</div>' +
						'<div class="unit">' +
							'<div class="item yuan selected"><span>元</span></div>' +
							'<div class="item jiao"><span>角</span></div>' +
							'<div class="item fen"><span>分</span></div>' +
							'<div class="trick">元</div>' +
						'</div>' +
					'</div>';
	}

	IMMoneyModel.prototype.getDom = function () {
		return this.el;
	};

	IMMoneyModel.prototype.bindEvents = function () {
		var left;
		var trick;
		var gap;
		var yuan;
		var unit = 0;
		var that = this;

		this.zone = $('#' + this.id);
		trick     = this.zone.find('.trick');
		yuan      = this.zone.find('.yuan');

		this.zone.delegate('.item', 'click', function () {
			trick.text('');

			that.zone.find('.item').removeClass('selected');
			$(this).addClass('selected');

			gap = parseInt(yuan.width());

			if ($(this).hasClass('yuan')) {
				left = 0;
			} else if ($(this).hasClass('jiao')) {
				left = gap;
			} else {
				left = gap*2;
			}

			trick.css('left', left + 'px');

			it = BetRuleInstance;
			if ($(this).hasClass('yuan')) {
				trick.text('元');
				it.betUnit = 2;
			} else if ($(this).hasClass('jiao')) {
				trick.text('角');
				it.betUnit = 0.2;	
			} else {
				trick.text('分');
				it.betUnit = 0.02;	
			}
			that.setModelZoneData(it);	
		});

		this.setModelZoneData = function(sender){
			var it = BetRuleInstance;
			var currentNum =  it.multiple == undefined ? 1 : it.multiple ;
			var max = app.currentModule.modelZone.bettingTimes.getCount(currentNum).maxCount;
			var inputVal = currentNum < max ? currentNum : max;
			app.currentModule.modelZone.bettingTimes.zone.find('input').val(inputVal);
			it.multiple = inputVal;
			var opt = BetAlgorithm.getModelZoneData(sender.betCount, sender.multiple);
			sender.setModelZoneData(sender.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, inputVal);
		}

		this.getBetUnit = function(target){
			var unit = this.zone.find('.item.selected');
	        if (unit.hasClass('yuan')) {
	            target.betUnit = 2;
	        } else if (unit.hasClass('jiao')) {
	            target.betUnit = 0.2;
	        } else {
	            target.betUnit = 0.02;
	        }
		}

	};

	window.IMMoneyModel = IMMoneyModel;
}());

