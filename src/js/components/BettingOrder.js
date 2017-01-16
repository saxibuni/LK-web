(function () {
	function BettingOrder (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = [];
		this.el   = this.initDom(this.data);
	}

	BettingOrder.prototype.initDom = function (data) {
		var i;
		var j;
		var cols;
		var temp;

		temp  =	'<div class="betting-order" id="' + this.id + '">' +
					'<div class="table">' +
						'<div class="thead">' +
							'<div class="tr" style="top:0px">' +
								'<div class="td td0"><span><span>&nbsp</span></span></div>' +
								'<div class="td td1"><span>玩法</span></div>' +
								'<div class="td td2"><span>号码</span></div>' +
								'<div class="td td3"><span>注数</span></div>' +
								'<div class="td td4"><span>倍数</span></div>' +
								'<div class="td td5"><span>金额</span></div>' +
							'</div>' +
						'</div>' +

						'<div class="tbody">';

		for (i = 0; i < data.length; i++) {
			cols = data[i];
			temp += 		'<div class="tr" style="top:' + (i*30 + 'px') + '">';
			temp +=				'<div class="td td0"><span><span class="dot"></span></span></div>';
			temp +=				'<div class="td td1"><span>' + cols[0] + '</span></div>';
			temp +=				'<div class="td td2"><span>' + cols[1] + '</span></div>';
			temp +=				'<div class="td td3"><span>' + cols[2] + '</span></div>';
			temp +=				'<div class="td td4"><span>' + cols[3] + '</span></div>';
			temp +=				'<div class="td td5"><span>' + Util.addDotToNumber(cols[4]) + '</span></div>';
			//temp +=				'<div class="td td6"><span>' + cols[5] + '</span></div>';
			temp +=				'<div class="td td7"><span class="cancel">✕</span></div>';
			temp += 		'</div>';
		}
		
		temp +=			'</div>' +
					'</div>' +

					'<div class="notice">' +
						'<img src="../img/no-bet-records.png" height="109" width="127">' +
					'</div>' +
				'</div>';
		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	};

	BettingOrder.prototype.getDom = function () {
		return this.el;
	};

	BettingOrder.prototype.addList = function(data){
		var cols;
		var temp = '';
		var $demo = $("#" + this.id).find('.tbody');

		$demo.empty();
		for (var i = 0; i < data.length; i++) {
			cols = data[i];
			temp += 		'<div class="tr" style="top:' + (i*30 + 'px') + '">';
			temp +=				'<div class="td td0"><span><span class="dot"></span></span></div>';
			temp +=				'<div class="td td1"><span>' + cols[0] + '</span></div>';
			temp +=				'<div class="td td2" title="'+cols[1]+'"><span>' + cols[1] + '</span></div>';
			temp +=				'<div class="td td3"><span>' + cols[2] + '</span></div>';
			temp +=				'<div class="td td4"><span>' + cols[3] + '</span></div>';
			temp +=				'<div class="td td5"><span>' + Util.addDotToNumber(cols[4]) + '</span></div>';
			//temp +=				'<div class="td td6"><span>' + cols[5] + '</span></div>';
			temp +=				'<div class="td td7"><span class="cancel">✕</span></div>';
			temp += 		'</div>';
		}
		$demo.append(temp);
		this.hideAndShow();
	};

	BettingOrder.prototype.removeList = function(index){
		var comfirmBet = app.currentModule.comfirmBet,
			chaseNumber = app.currentModule.chaseNumber;
		var market = app.currentSocket.market;
		var gameCode = app.currentSocket.gameCode;
		var filterData = Global.betZoneData.filter(function(item, index) {
			return item.market == market && item.gameCode == gameCode;
		})[0];
		filterData.data.splice(index,1); //删除全局变量中的数据

		var betCount = 0;
		var betAmount = 0;
		var betCommAmount = 0;
		for(var i = 0; i < filterData.data.length;i++){
			if( filterData.data[i]){
				betCount +=  filterData.data[i][2];
				betAmount +=  filterData.data[i][4];
				betCommAmount +=  filterData.data[i][4] *  filterData.data[i][6];
			}
		}
		comfirmBet.zone.find('.bet-number').text(betCount + '注');
		comfirmBet.zone.find('.amount').text(Util.addDotToNumber(betAmount) + '元');
		comfirmBet.zone.find('.return').text(Util.addDotToNumber(betCommAmount, 4) + '元');

		if(filterData.data.length == 0){
			comfirmBet.confirmBetButton.disabled();
			chaseNumber.addChaseNumber.disabled();
			chaseNumber.addChaseNumber2.disabled();
			chaseNumber.addChaseNumber3.disabled();
		}
	};

	BettingOrder.prototype.hideAndShow = function(){
		var table;
		var tbody;
		var notice;
		var singleFlag;
		table     = this.zone.children('.table');
		tbody     = table.children('.tbody');
		notice    = this.zone.find('.notice');
		singleFlag = (tbody.find('.tr').length === 0);

		if (singleFlag) {
			table.hide();
			notice.show();
		}else{
			table.show();
			notice.hide();
		}
	};
	
	BettingOrder.prototype.removeAllList = function(){
		var table  = this.zone.children('.table');
		for(var i = table.find('.cancel').length -1 ;i >= 0; i--){
			$(table.find('.cancel')[i]).trigger('click');
		}
		var notice = this.zone.find('.notice');
		table.hide();
		notice.show();

	};
	BettingOrder.prototype.bindEvents = function () {
		var table;
		var tbody;
		var that = this;
		var trs;
		var timeout;
		var index;
		var top;
		var targetTr;
		var i;
		var singleFlag;
		var notice;

		this.zone = $('#' + this.id);
		table     = this.zone.children('.table');
		tbody     = table.children('.tbody');
		trs       = tbody.find('.tr');
		cross     = this.zone.find('.cross');
		notice    = this.zone.find('.notice');

		tbody.delegate('.cancel', 'click', function () {
			targetTr   = $(this).parent().parent();
			index      = targetTr.index();
			top        = parseInt(targetTr.css('top'));
			trs        = tbody.find('.tr:gt(' + index + ')');
			singleFlag = (tbody.find('.tr').length === 1);

			targetTr.css('left', '100%');

			timeout = setTimeout(function () {
				targetTr.remove();

				for (i = 0; i < trs.length; i++) {
					$(trs[i]).css('top', top + i*30 +'px');
				}

				if (singleFlag) {
					table.hide();
					notice.show();
				}

				clearTimeout(timeout);
			}, 500);
			that.removeList(index);
		});

		tbody.delegate('.tr','click',function(e) {
			if ($(e.target).hasClass('cancel')) return false;
			var index = $(this).index();
			var market = app.currentSocket.market;
			var gameCode = app.currentSocket.gameCode;
			var filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
			console.log(filterData.data[index]);
			BuildBetSelect.build(filterData.data[index], index);
		});

		this.hideAndShow();
	};

	window.BettingOrder = BettingOrder;
}());
