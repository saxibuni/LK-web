/*
** 继承自IMDialog
*/

(function () {
	function ChaseOrderDetail (opt) {
		IMDialog.call(this, (opt || {}));
		this.id = this.opt.id;
		this.data =  [];
		this.el   = this.initDom();
	}

	ChaseOrderDetail.prototype = new IMDialog();

	ChaseOrderDetail.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '停止追号',
			className: 'cancel-order',
			imgSrc: '../img/cancel.png',
			id:this.id + 'btnCancel'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button',
			imgSrc: '../img/dash.png'
		});

		temp = 	'<div class="chase-order-detail" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="head">' +
								'<div class="head-text">' +
									'共<span class="total-issue">0</span>期，已完成' +
									'<span class="finished-issue">0</span>期' +
									//'<span>0</span>' +
								'</div>' +
								'<div class="close-dialog">✕</div>' +
							'</div>' +
							
							'<div class="content">' +
								this.createTable() +
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

	ChaseOrderDetail.prototype.createTable = function () {
		var temp = '';
		var px = '20px';
		if(Util.isMobile.ios()){
			px = 0
		}
		temp =	'<table>' +
					'<thead>' +
						'<tr style="padding-right: '+px+'">' +
							'<td class="td-width tdW1">奖期</td>' +
							'<td class="td-width tdW2">追号内容</td>' +
							'<td class="td-width tdW3">追号倍数</td>' +
							'<td class="td-width tdW3">投注金额</td>' +
							'<td class="td-width tdW3">追号状态</td>' +
							'<td class="td-width tdW3">状态</td>' +
							'<td class="td-width tdW3">操作</td>' +
						'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows() +
					'</tbody>' +
				'</table>';

		return temp;
	};

	ChaseOrderDetail.prototype.createRows = function () {
		var i;
		var that = this;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr class="tdW">';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td class="td-width"><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '取消本期'){
					temp += '<td class="td-width"><span class="cancel-current">' + this.data[i][j] + '</span></td>';
				} else if (j === this.data[i].length-1 && this.data[i][j] === '详情'){
					temp += '<td class="td-width"><span class="order-detail">' + this.data[i][j] + '</span></td>';
				} else if(j === 6){
					if( this.data[i][j] == 1){
						temp += '<td class="td-width cancel-order">撤单</td>';
					}else{
						temp += '<td class="td-width cancel-order can-not-cancel" >撤单</td>';
					}

				}else {
					if(j === 5 || j === 4){
						var color = '#cccccc';
						this.data[i][j] = this.data[i][j].replace(/[,]/g,'');
						if(!isNaN(this.data[i][j])) color = '#f86f70';
						if(this.data[i][j] == '用户撤销' || this.data[i][j] == '系统撤销') color = '#cccccc';
						if(this.data[i][j] == '未中奖') color = '#cccccc';
						if(this.data[i][j ]== '待开奖') color = '#a3e2cf';
						temp += '<td class="td-width" style="color: '+color+'">' + this.data[i][j] + '</td>';
					}else if(j=== 1){
						temp += '<td class="td-width" title="'+ this.data[i][j]+'">' + this.data[i][j] + '</td>';
					}else{
						temp += '<td class="td-width">' + this.data[i][j] + '</td>';
					}
				}
			}

			temp += '</tr>';
		}
		return temp;
	};
	ChaseOrderDetail.prototype.getDom = function () {
		return this.el;
	};

	ChaseOrderDetail.prototype.show = function (data) {
		if (!data.canCancel) {
			this.zone.find('.cancel').addClass('can-not-cancel');
		} else {
			this.zone.find('.cancel').removeClass('can-not-cancel');
		}
		this.chaseId = data.dataList.chaseId;
		this.finishedDraw = data.dataList.finishedDraw;
		this.totalDraw  = data.dataList.totalDraw;
		this.zone.find('.total-issue').text(this.totalDraw);
		this.zone.find('.finished-issue').text(this.finishedDraw);
		this.showOverlay();
	};

	ChaseOrderDetail.prototype.hide = function () {
		this.hideOverlay();
	};

	ChaseOrderDetail.prototype.bindEvents = function () {
		var button;
		var table;
		var cancelOrder;
		var that = this;
		this.zone = $('#' + this.id);
		table = this.zone.find('table');
		table.delegate('.cancel-order','click',function(){
			var  data = that.resData.list;
			var index = $(this).parents('tr').index();
			$(this).addClass('btn-disabled can-not-cancel');
			var ticketId = data[index].ticketId;
			service.cancelBetHistory({ticketId:ticketId},function(res){
				if(res.code == 0){
					if(typeof(app) != 'undefined'){
						app.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback: app.bettingRecords.getChaseHistory()
						});
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.noticeDialog.show({
							subTitle : "撤单成功",
							text: '撤单成功',
							buttonName: "确定",
							autoHide: true,
							timeout: 3000,
							okCallback:recordsQuery.getChaseHistory()
						});
						recordsQuery.assignmentChaseModel()
					}
				}else{
					$(this).removeClass('btn-disabled can-not-cancel');
					Util.errorModel(res.code,'撤单失败');
					if(typeof(app) != 'undefined'){
						app.bettingRecords.assignmentChaseModel();
					}else{
						recordsQuery.assignmentChaseModel()
					}
				}
			})
		});
		table.delegate('td', 'click', function () {
			if (!$(this).children('span').hasClass('cancel-current')) {
				return;
			}

			if (!that.confirmDialog) {
				var okCallback = function () {
					that.hide();
				};

				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定取消本期吗？');
		});

		this.zone.find('.close-dialog').click(function () {
			that.hide();
		});

		this.zone.find('.cancel-order').click(function () {
			var okCallback = function () {
				that.confirmDialog.zone.find('.ok').addClass('.btn-disabled');
				service.cancelChaseHistory({'chaseId':that.chaseId},function(res){
					that.hide();
					that.confirmDialog.zone.find('.ok').removeClass('.btn-disabled');
					if(res.code == 0){
						if(typeof(app) != 'undefined'){
							app.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							app.bettingRecords.getChaseHistory();
						}else{
							recordsQuery.noticeDialog.show({
								subTitle : "停止成功",
								text: '停止成功',
								buttonName: "确定",
								autoHide: true,
								timeout: 3000
							});
							recordsQuery.getChaseHistory()
						}

					}else{
						Util.errorModel(res.code,'停止失败');
					}
				})

			};

			if (!that.confirmDialog) {
				that.confirmDialog = new ConfirmDialog({
					text: '',
					okCallback: okCallback.bind(this)
				});

				$('body').append(that.confirmDialog.getDom());
				that.confirmDialog.bindEvents();
			}

			that.confirmDialog.show('确定停止追号吗？');
		});

		this.zone.find('.order-detail').click(function () {
			if (!app.betOrderDetail) {
				app.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
				$('body').append(app.betOrderDetail.getDom());
				app.betOrderDetail.bindEvents();
			}

			app.betOrderDetail.show({'canCancel': true});
		});

		this.zone.find('.ok-button').click(function () {
			that.hide();
		});
		this.bindOverlayEvents();
	};

	window.ChaseOrderDetail = ChaseOrderDetail;
}());
