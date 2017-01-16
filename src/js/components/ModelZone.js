(function () {
	function ModelZone (opt) {
		this.opt  = opt;
		this.id   = opt.id;
		this.turnoverBonusData=[
			{'text': '', 'value': ''}
		];
		this.el   = this.initDom();

	}

	ModelZone.prototype.initDom = function () {
		var temp;

		this.betNowButton = new IMButton({
			text: '直接投注',
			imgSrc: '../img/select-mark.png',
			className: 'bet-now',
			id: this.id + '-bet-now'
		});

		this.addButton = new IMButton({
			text: '添加',
			imgSrc: '../img/add.png',
			className: 'add-to-table',
			id: this.id + '-add-to-table'
		});

		this.bettingTimes = new IMBettingTimes({id: this.id + 'betting-times'});
		this.moneyModel   = new IMMoneyModel({id: this.id + 'money-model'});
		this.turnoverBonusSelect = new IMSelect({
			id: this.id + 'turnover-bonus-select',
			data: this.turnoverBonusData,
			className: 'turnover-bonus-select',
			type: 1,
			callback: function(OddsGroup) {
			    var oddsGroupData;
				var list = ['TSHM','ZXHZ','LHH','BDW'];
				var specialType = [];
			    var it = BetRuleInstance;
				Global.betSetting.currentOddsGroup[it.gameCode] = OddsGroup;
				if(CalcSpecialOdds[it.gameCode]){
					//获得所有特殊号码
					for(var x = 0; x< list.length ;x++){
						if(CalcSpecialOdds[it.gameCode][list[x]+'_odds']){
							for(var y = 0; y< CalcSpecialOdds[it.gameCode][list[x]+'_odds'].length; y++){
								specialType.push(CalcSpecialOdds[it.gameCode][list[x]+'_odds'][y])
							}
						}
					}
				}
				if(it.gameCode == 'K3' && it.betType == 'N3T'){
					CalcSpecialOdds.K3_getOdds(it.result, it.betType);
				}else if(specialType.indexOf(it.betType) >= 0){
					CalcSpecialOdds.setSpecialOdds(it, it.gameCode);
				}else{
					oddsGroupData = Global.betSetting[it.gameCode][OddsGroup].filter(function(item, index, array) {
							return it.betType == item.betType;
						})[0] || [];
					it.odds = oddsGroupData.odds;
					it.maxCount = oddsGroupData.maxCount;
					it.comm = oddsGroupData.comm;
				}
			    if (it.betCount > 0) {
			        var opt = BetAlgorithm.getModelZoneData(it.betCount, it.multiple);
			        it.setModelZoneData(it.betCount, opt.winMoney, opt.returnMoney, opt.totalMoney, it.multiple);
			    };
			}
		});

		temp = 	'<div class="model-zone" id="' + this.id + '">' +
					'<div class="row">' +
						'<div class="col-md-8 info">' +
							'您选择了<span class="amount highlight">0</span>注，' +
							'最高可赢<span class="win-money highlight">0</span>元，' +
							'返还<span class="return-money highlight">0</span>元，' +
							'共投<span class="total-money highlight">0</span>元' +
						'</div>' +
						'<div class="col-md-4 bet-now-button">' +
							this.betNowButton.getDom() +
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-md-3">' +
							'<span class="bonus-turnover-name">奖金组-返点：</span>' +
							this.turnoverBonusSelect.getDom() +
						'</div>' +
						'<div class="col-md-3 center">' +
							this.bettingTimes.getDom() +
						'</div>' +
						'<div class="col-md-3 center">' +
							this.moneyModel.getDom() +
						'</div>' +
						'<div class="col-md-3 add-to-table-button">' +
							this.addButton.getDom() +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;
	};

	ModelZone.prototype.getDom = function () {
		return this.el;
	};

	ModelZone.prototype.goToBottom = function () {
		$('body').animate({scrollTop: document.body.scrollHeight}, 500);
	};

	ModelZone.prototype.availableButton = function () {
		app.currentModule.chaseNumber.addChaseNumber.enabled();
		app.currentModule.chaseNumber.addChaseNumber2.enabled();
		app.currentModule.chaseNumber.addChaseNumber3.enabled();
		app.currentModule.comfirmBet.confirmBetButton.enabled();
	}

	ModelZone.prototype.clearSelectAndData = function (it) {
		if (app.currentSocket.gameCode == 'K3') 
			K3_PlaceBet.clearDataAndSelect(it);
		else
			LT_PlaceBet.clearDataAndSelect(it);
	}

	ModelZone.prototype.showDot = function(count){
		var timeout;
		var num;
		var dot;
		dot = $('.nav-title .bet-record .dot');
		dot.show();
		num = parseInt(dot.children('span').text());
		num += count;
		dot.children('span').text(num);
		// dot.addClass('dot-zoom');
		// timeout = setTimeout(function () {
		// 	$('.nav-title .bet-record .dot').removeClass('dot-zoom');
		// }, 1000);
	}

	ModelZone.prototype.changeComm = function(data,gameCode){
		var html;
		var oddsGroupIndex;
        var currentOddsGroup = Global.betSetting.currentOddsGroup[gameCode];
        for(var i = 0; i < data.length; i++){
        	if (currentOddsGroup == data[i].oddsGroupName) {
        		oddsGroupIndex = i;
        		break;
        	}
        };
		this.turnoverBonusSelect.opt.data = data;
        html = this.turnoverBonusSelect.generateTypeList();
        this.zone.find('.dropdown-menu').html(html);
        this.zone.find('.buttonName').text(data[oddsGroupIndex].text);
	}

	ModelZone.prototype.setModelZoneData = function(data){
		var $moneyZone = this.zone;
        var $bettingTimesZone = this.bettingTimes.zone;
        var amout = data.amout,
        	winMoney = data.winMoney,
        	returnMoney = data.returnMoney,
        	totalMoney = data.totalMoney,
        	betTimes = data.betTimes;

        $moneyZone.find('.amount').attr('data-value', amout).text(amout);
        $moneyZone.find('.win-money').attr('data-value', winMoney).text(Util.addDotToNumber(winMoney, 4));
        $moneyZone.find('.return-money').attr('data-value', returnMoney).text(Util.addDotToNumber(returnMoney, 4));
        $moneyZone.find('.total-money').attr('data-value', totalMoney).text(Util.addDotToNumber(totalMoney));
		$bettingTimesZone.find('input').val(betTimes);
	}

	ModelZone.prototype.bindEvents = function () {
		var that = this;
		var Confirm = function(){
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						betNowCallback.bind(that)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			that.confirmDialog.showConfirm(app.currentSocket.drawData.drawNumber, BetRuleInstance.betAmount)
		}
		var betNowCallback = function (e) {
			//that.goToBottom();
			var it = BetRuleInstance;
			if(!it.betCount  || it.betAmount > Util.rmoney(app.money)){
				var message;
				if(!it.betCount){
					message = "请选择正确号码";
				}else{
					message = "您的余额已经不足了，请充值";
				}
				app.noticeDialog.show({
					subTitle : '下注失败',
					text: message,
					buttonName: '确定',
					autoHide: true,
					timeout: 3000
				});
				return false;
			}

			if (app.currentSocket.marketStatus){
				if(app.currentSocket.gameCode == 'LT')
					LT_PlaceBet.bet.bind(LT_PlaceBet)(false, it.betType);
				if(app.currentSocket.gameCode == 'HL11x5')
					HL11x5_PlaceBet.bet.bind(HL11x5_PlaceBet)(false, it.betType);
				if(app.currentSocket.gameCode == 'K3')
					K3_PlaceBet.bet.bind(K3_PlaceBet)(false, it.betType);
			}
        	else app.marketCloseNotice(app.currentSocket.market, 3000);
		};

		var addTotableCallback = function (e) {
			if(app.currentModule.playingNav.parentPlate2){
				var isType = app.currentModule.playingNav.parentPlate2.clearErrorModel(function(){
					addTotableCallback(e);
				});
				if(isType == '1') return false;
			}
			var it = BetRuleInstance;
			if(!app.currentSocket.drawData){
				app.marketCloseNotice(app.currentSocket.market,3000);
				return false;
			}
			if(!it.betCount){
				app.noticeDialog.show({
					subTitle : '添加失败',
					text: "请选择正确号码",
					buttonName: '确定',
					autoHide: true,
					timeout: 3000
				});
				return false
			}else{
				that.availableButton();
			}

			BetTrolley.addBetRecord();
			that.clearSelectAndData(it);
		};

		this.zone = $('#' + this.id);
		this.betNowButton.bindEvents(Confirm);
		this.betNowButton.disabled();
		this.addButton.bindEvents(addTotableCallback.bind(this));
		this.addButton.disabled();

		this.turnoverBonusSelect.bindEvents();
		this.bettingTimes.bindEvents();
		this.moneyModel.bindEvents();
	};

	window.ModelZone = ModelZone;
}());

