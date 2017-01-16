/*
** 继承自IMDialog
*/

(function () {
	function BetOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.el = this.initDom();
	}

	BetOrderDetail.prototype = new IMDialog();

	BetOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '撤单',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="bet-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="close-dialog">✕</div>' +
							'<div class="content">' +
								'<table>' +
									'<tbody>' +
										'<tr class="even ">' +
											'<td class="text">注单编号：</td>' +
											'<td class="value singleNumber" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏名称</td>' +
											'<td class="value gameName" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">游戏玩法：</td>' +
											'<td class="value gamePlay" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">游戏期号：</td>' +
											'<td class="value gameSeries" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">投注时间：</td>' +
											'<td class="value betTime"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">开奖号码：</td>' +
											'<td class="value lotteryNumbers" ></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">开奖金额：</td>' +
											'<td class="value amount" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">倍数：</td>' +
											'<td class="value multiple"></td>' +
										'</tr>' +
										//'<tr class="odd">' +
										//	'<td class="text">单位：</td>' +
										//	'<td class="value betUnit"></td>' +
										//'</tr>' +
										'<tr class="odd">' +
											'<td class="text">注数：</td>' +
											'<td class="value betCount"></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">投注金额：</td>' +
											'<td class="value betAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">奖金组及返点：</td>' +
											'<td class="value groupRebates" ></td>' +
										'</tr>' +
										'<tr class="odd">' +
											'<td class="text">下注金额(返水后）：</td>' +
											'<td class="value netAmount"></td>' +
										'</tr>' +
										'<tr class="even">' +
											'<td class="text">状态：</td>' +
											'<td class="value betType" ></td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="number-content">' +
									'投注内容: ' +
								'</div>' +
								'<div class="textarea">' +
									'<textarea></textarea>' +
								'</div>' +
							'</div>' +

							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="overlay overlay2"></div>';

		return temp;
	};

	BetOrderDetail.prototype.getDom = function () {
		return this.el;
	};
	BetOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.ticketId = data.ticketId;
		this.showOverlay();
	};

	BetOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	BetOrderDetail.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			if ($(this).parent('.cancel').hasClass('can-not-cancel')) {
				return;
			}

			var okCallback = function () {
				var req = {
					ticketId:that.ticketId
				};
				var obj = [];
				if(typeof(app) != 'undefined'){
					obj = app;
				}else{
					obj = recordsQuery
				}
				service.cancelBetHistory(req,function(res){
					if(res.code == 0){
						that.hide();
						obj.noticeDialog.show({
							subTitle : "取消成功",
							text: "取消成功",
							buttonName: "确定",
							autoHide: true,
							timeout: 3000
						});
						if(typeof(app) != 'undefined'){
							app.bettingRecords.getBetHistory();
						}else{
							recordsQuery.getBetHistory();
						}
						that.hide();
					}else{
						Util.errorModel(res.code,'取消失败');
					}
				})
			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '确定取消当前投注吗？',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消当前投注吗？');
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.BetOrderDetail = BetOrderDetail;
}());
