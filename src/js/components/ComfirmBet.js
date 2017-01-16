(function () {
	function ComfirmBet (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {
			balance: 0,
			return: 0,
			betNumber: 0,
			amount: 0
		};

		this.el = this.initDom(this.data);
	}

	ComfirmBet.prototype.initDom = function (data) {
		var temp;

		this.confirmBetButton = new IMButton({
			text: '确认投注',
			imgSrc: '../img/select-mark.png',
			className: 'confirm-bet-button',
			id: this.id + '-confirm-bet-button'
		});

		this.betFinishButton = new IMButton({
			text: '确定',
			className: 'bet-finish-button',
			id: this.id + '-bet-finish-button'
		});

		this.betFailedButton = new IMButton({
			text: '投注失败',
			imgSrc: '../img/error-cross.png',
			className: 'bet-failed-button',
			id: this.id + '-bet-failed-button'
		});

		temp = 	'<div class="confirm-bet" id="' + this.id + '">' +
					'<div class="page1">' +
						'<div class="row info-zone">' +
							'<div class="col-md-6 left">' +
								'<div class="name">' +
									'钱包余额' +
								'</div>' +
								'<div class="value balance">' +
									data.balance + '元' +
								'</div>' +
								'<div class="name">' +
									'总投注' +
								'</div>' +
								'<div class="value bet-number">' +
									data.betNumber + '注' +
								'</div>' +
							'</div>' +
							'<div class="col-md-6 right">' +
								'<div class="name">' +
									'返还金额' +
								'</div>' +
								'<div class="value return">' +
									data.return + '元' +
								'</div>' +
								'<div class="name">' +
									'总金额' +
								'</div>' +
								'<div class="value amount">' +
									data.amount + '元' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="button-zone">' +
							this.confirmBetButton.getDom() +
						'</div>' +
					'</div>' +

					'<div class="page2">' +
						'<div class="error-info">' +
							'<div class="cry">' +
								'<img src="../img/cry.png">' +
							'</div>' +
							'<p class="info">' +
								'<span>请检查您的网络是否正常，如果问题继续存在请刷新页面。</span>' +
							'</p>' +
						'</div>' +

						'<div class="button-zone">' +
							this.betFailedButton.getDom() +
						'</div>' +
					'</div>' +

					'<div class="page3">' +
						'<div class="success-info">' +
							'<img src="../img/bet-success.png">' +
						'</div>' +

						'<div class="button-zone">' +
							this.betFinishButton.getDom() +
						'</div>' +
					'</div>' +
				'</div>';
				
		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	};

	ComfirmBet.prototype.getDom = function () {
		return this.el;
	};

	ComfirmBet.prototype.bindEvents = function () {
		var page1;
		var page2;
		var page3;
		var timeout;
		var callback3;
		var callback2;
		var callback1;
		var that = this;

		this.zone = $('#' + this.id);
		page1     = this.zone.find('.page1'); //提交中
		page2     = this.zone.find('.page2');//投注失败
		page3     = this.zone.find('.page3');//投注成功
		var Confirm = function(){
			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					okCallback: function () {
						callback1.bind(this)();
					}
				});
				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}
			var amount = that.zone.find('.amount').text().substring(0,that.zone.find('.amount').text().length-1);
			that.confirmDialog.showConfirm(app.currentSocket.drawData.drawNumber,amount)
		};
		callback1 = function () {
			var callback = function () {
				page1.hide();
				page3.show();
			};

			that.confirmBetButton.inProgress();
			that.commit(page1,page2,page3,callback2,callback3);
		};

		callback2 = function () {
			page3.hide();
			page1.show();
			that.confirmBetButton.recover();
			that.confirmBetButton.inNormal()
		};
		callback3 = function () {
			page2.hide();
			page1.show();
			that.confirmBetButton.inNormal()
		};
		//确认提交
		this.confirmBetButton.bindEvents(Confirm);
		this.confirmBetButton.disabled();
		//提交中
		this.betFinishButton.bindEvents(callback2.bind(this));

		this.betFailedButton.bindEvents(callback3.bind(this));
	};
	ComfirmBet.prototype.dataList = function(){
		var data;
		var market = app.currentSocket.market,
			gameCode = app.currentSocket.gameCode,
			filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
		var list = filterData;
			if(list.data.length > 0){
				data = {
					"market": list.data[0][14].market,
					"gameCode": list.data[0][14].gameCode,
					"drawId":  app.currentSocket.drawData.drawId,
					"batch":[]
				};
				for(var i = 0; i < list.data.length;i++){
					var item = list.data[i][14];
					data.batch.push({
						"betType": item.betType,
						"items":item.items,
						"betAmount": item.betAmount,
						"odds": item.odds,
						"comm": item.comm,
						"multiple": item.multiple,
						"betCount": item.betCount,
						"betUnit": item.betUnit,
						"prizeGroup":item.prizeGroup
					});
					if(item.anyDrawTypes){
						data.batch[i]["anyDrawTypes"] = item.anyDrawTypes;
					}
				}
			}
		return data;
	};
	ComfirmBet.prototype.commit = function (page1,page2,page3,callback2,callback3) {
		var that = this;
		if(!app.currentSocket.drawData){
			app.marketCloseNotice(app.currentSocket.market,3000);
			return false;
		}
		var data = this.dataList();
		if(!data){
			app.noticeDialog.show({
				subTitle: '温馨提示',
				text: '请先添加号码到投注篮',
				buttonName: '确定',
				autoHide: true,
				timeout: timeout
			});
		}
		service.betchPlaceBet(data,function(res){
			var timeCancel;
			if(res.code == 0){

				app.money = Util.addDotToNumber(res.balance, 4);
				var header = $('.bet .nav-title');
				if(header.find('.secret').children('a').text() == '隐藏'){
					header.find('.money').text(app.money);
				}
				app.features.forEach(function(name, index){
					app[name].comfirmBet.zone.find('.balance').text(app.money);
				});

				var modelZone = app.currentModule.modelZone;
				modelZone.showDot(data.batch.length);
				app.currentModule.bettingOrder.removeAllList();
				page1.hide();
				page3.show();
				timeCancel = setTimeout(function(){
					callback2()
				},3000);
				app.currentModule.comfirmBet.confirmBetButton.disabled();
				app.currentModule.chaseNumber.addChaseNumber.disabled();
				app.currentModule.chaseNumber.addChaseNumber2.disabled();
				app.currentModule.chaseNumber.addChaseNumber3.disabled();
			}else{
				var text = Local[res.code];
				page2.find('.info').children().text(text);
				page1.hide();
				page2.show();
				timeCancel = setTimeout(function(){
					callback3()
				},3000);
			}
		});
	};

	window.ComfirmBet = ComfirmBet;
}());
