/*
 *  投注记录 下拉界面 BettingRecords.js
 *  继承自: IMDialog
 */

(function () {
	var Opt;

	function BettingRecords (opt) {
		IMDialog.call(this, (opt || {}));
		var data = Global.marketList
		this.data = [];
		this.obj = {};
		this.betName = {};
		for(var x = 0;x < RULE_CONFIG.length;x++){
			this.obj[RULE_CONFIG[x].betType + RULE_CONFIG[x].gameCode] = RULE_CONFIG[x].name
		}
		for(var x = 0;x < data.length;x++){
			this.betName[data[x].market+'_'+data[x].gameCode] = data[x].marketCNName
		}
		this.el = this.initDom();
		this.getBetHistory();
	}

	BettingRecords.prototype = new IMDialog();

	//投注记录
	BettingRecords.prototype.getBetHistory = function () {
		var that = this;
		var time = Util.getLocalTime(serverTime);
		var req = {
			"page": {
				"pageNo": this.pager1.currentPage || 1,
				"pageSize":10
			},

			"beginDate": time.split(' ')[0],
			"beginTime": time.split(' ')[1]
		};
		if(	app.bettingRecords){
			app.bettingRecords.zone.find('.content1 .table-zone tbody').empty();
		}
		service.betHistory(req, function(res) {
			if (res.code == 0) {
				that.betData = that.formatBetList(res);
				that.resBet = res;
				if(that.pager1.totalPage != res.page.pageCount){
					that.pager1.totalPage = res.page.pageCount || 1;
					that.pager1.initDom();
					app.bettingRecords.zone.find('.content1 .pager-zone ').empty();
					app.bettingRecords.zone.find('.content1 .pager-zone ').append(that.pager1.getDom());
					that.pager1.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	BettingRecords.prototype.promptModel = function(subTitle,res,text,buttonName){
		buttonName && (buttonName = '确定');
		if(res.code == 0){
			app.noticeDialog.show({
				subTitle : subTitle,
				text: text,
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}else{
			app.noticeDialog.show({
				subTitle : subTitle,
				text: Local[res.code],
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}
	};
	//投注记录
	BettingRecords.prototype.formatBetList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				item.result == undefined ?'-':item.result,
				OriginalItem.ballNameMap(item.betNumber),
				Util.addDotToNumber(item.betAmount) + '元',
				item.multiple+'倍',
				item.oddsGroup+'-'+  ( item.comm * 100 ).toFixed(2) + '%',
				that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
				item.winState == 'P'?1:0
			])
		});
		return list;
	};
	//追号记录
	BettingRecords.prototype.getChaseHistory = function () {
		var that = this;
		var time = Util.getLocalTime(serverTime);
		var req = {
			"page": {
				"pageNo": this.pager2.currentPage || 1,
				"pageSize":10
			},
			"beginDate": time.split(' ')[0],
			"beginTime": time.split(' ')[1]
		};
		if(app.bettingRecords){
			app.bettingRecords.zone.find('.content2 .table-zone tbody').empty();
		}
		service.chaseHistory(req, function(res) {
			if (res.code == 0) {
				that.chaseData = that.formatChaseList(res);

				that.resChase = res;
				var chaseOrder = that.chaseOrderDetail;
				if(chaseOrder){
					var list = that.resChase.list[that.dataIndex];
					chaseOrder.zone.find('.total-issue').text(list.totalDraw);
					chaseOrder.zone.find('.finished-issue').text(list.finishedDraw);
				}
				if(that.pager2.totalPage != res.page.pageCount){
					that.pager2.totalPage = res.page.pageCount || 1;
					that.pager2.initDom();
					app.bettingRecords.zone.find('.content2 .pager-zone ').empty();
					app.bettingRecords.zone.find('.content2 .pager-zone ').append(that.pager2.getDom())
					that.pager2.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//追号记录
	BettingRecords.prototype.formatChaseList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				OriginalItem.ballNameMap(item.betNumber),
				Util.addDotToNumber(item.betAmount) + '元',
				item.oddsGroup+'-'+ ( item.comm * 100 ).toFixed(2) + '%',
				item.stopUtilWin == true?'是':'否',
				item.finishedDraw+'/'+item.totalDraw,
				item.cancelled == false?'1':'0',
			])
		});
		return list;
	};
	BettingRecords.prototype.getWinAndChaseIsState = function(state,type,wlAmt,cancelBy){
		var text;
		if(type == 1){
			if(state == 'W') text =  Util.addDotToNumber(wlAmt);
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'L') text = '未中奖';
			if(state == 'P') text = '待开奖';
		}else if(type == 2){
			if(state == 'C') text =  cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'H') text = '已完成';
			if(state == 'P') text = '未开始';
			if(state == 'L') text = '未中奖';
			if(state == 'W') text = '已中奖';
		}
		return text;
	};
	BettingRecords.prototype.initDom = function () {
		var temp;

		this.pager1 = new IMPager({id: 'betting-records-pager',pageSize:10});
		this.pager2 = new IMPager({id: 'chase-records-pager',pageSize:10});
		this.tip    = new IMTip();

		temp = 	'<div class="betting-records">' +
					'<div class="dialog-wrapper">' +
						'<div class="row">' +
							'<div class="col-md-4 head-height">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span>我的投注</span></li>' +
									'<li class="tab2"><span>追号记录</span></li>' +
								'</ul>' +

								'<div class="stick"></div>' +
							'</div>' +
 
							'<div class="col-md-4 head-height">' +
								'<div class="zone2">' +
									//'<span class="text">总投注</span>' +
									//'<span class="value">20</span>' +
									//'<span class="text">注，返还</span>' +
									//'<span class="value">0.000</span>' +
									//'<span class="text">元，共</span>' +
									//'<span class="value">0.400</span>' +
									//'<span class="text">元</span>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-4 head-height">' +
								'<div class="zone3">' +
									'<span class="text go-to-records-query">查询详细记录</span>' +
									'<span class="close-icon">✕</span>' +
								'</div>' +
							'</div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable(1) +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +
						
						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable(2) +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	BettingRecords.prototype.getDom = function () {
		return this.el;
	};

	BettingRecords.prototype.show = function () {
		this.showContentOverlay();
	};

	BettingRecords.prototype.hide = function (flag, callback) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.bet-record').removeClass('highlight');
				$('.nav-title').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;

				if (typeof callback === 'function') {
					callback();
				}
			}, 300);
		} else {
			$('.bet-record').removeClass('highlight');
		}
	};

	BettingRecords.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	BettingRecords.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};

	BettingRecords.prototype.bindEvents = function (state) {
		var left;
		var content;
		var content1;
		var content2;
		var tabs;
		var betTable;
		var chaseTable;
		var temp;
		var that = this;
		if(!this.type){
			this.type = 1
		}
		this.zone  = $('.betting-records');
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		betTable   = this.zone.find('.content1 table');
		chaseTable = this.zone.find('.content2 table');

		tabs.unbind();
		betTable.unbind();
		chaseTable.unbind();
		betTable.unbind();
		chaseTable.unbind();
		this.zone.find('.go-to-records-query').unbind();
		this.zone.next('.overlay1').unbind();

		this.zone.find('.close-icon').click(function () {
			that.hide();
		});

		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				that.type = 1
				that.getBetHistory();
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				that.type = 2;
				that.getChaseHistory();
			}

			stick.css('left', left + 'px');
		});

		betTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			if (temp && temp.hasClass('order-detail')) {
				//修改处-DB
				that.dataIndex = parseInt($(this).attr('data-index'));
				if (!that.betOrderDetail) {
					that.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
					$('body').append(that.betOrderDetail.getDom());
					that.betOrderDetail.bindEvents();
					that.assignmentModel();
				} else {
					that.assignmentModel();
				}
				var canCancel =  parseInt($(this).attr('data-value'));
				var ticketId = that.resBet.list[that.dataIndex].ticketId;
				that.betOrderDetail.show({'canCancel':canCancel,ticketId:ticketId});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		chaseTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			that.dataIndex = parseInt($(this).attr('data-index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.chaseOrderDetail = new ChaseOrderDetail({id: 'chase-order-detail'});
					$('body').append(that.chaseOrderDetail.getDom());
					that.chaseOrderDetail.bindEvents();
					that.assignmentChaseModel();
				}else{
					that.assignmentChaseModel();
				}
				var list = that.resChase.list[that.dataIndex];
				var canCancel = parseInt($(this).attr('data-value'));
				var dataList = {
					finishedDraw:list.finishedDraw,
					totalDraw:list.totalDraw,
					chaseId:list.chaseId
				};
				that.chaseOrderDetail.show({'canCancel': canCancel,dataList:dataList});
			} else if (temp && temp.hasClass('cancel-order')) {
				if (!that.confirmDialog) {
					that.confirmDialog = new ConfirmDialog({
						text: ''
					});

					$('body').append(that.confirmDialog.getDom());
					that.confirmDialog.bindEvents();
				}

				that.confirmDialog.show('确定撤单吗？');
			}
		});

		betTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({
				left: left, 
				top: top, 
				text: text
			});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();	
		});

		chaseTable.delegate('.lottery-number', 'mouseover', function () {
			var offset;
			var left;
			var top;
			var text;
			var span = $(this).children('span');
			var pos  = span.position();

			left    = pos.left + parseInt(span.width())/2;
			top     = pos.top + parseInt(span.height());
			text    = span.text();
			that.tip.show({left:left, top:top, text:text});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();
		});

		this.zone.find('.go-to-records-query').click(function () {
			//var params = window.location.href.substring(window.location.href.indexOf('?'));
			//window.location.href.indexOf('?') == - 1 && (params = '');
			var params = '?sessionId=' +window.session + '&' +'token=' + window.token;
			window.open('recordsQuery.html' + params);
		});

		if(!state){
			this.pager1.bindEvents();
			this.pager2.bindEvents();
		}

		this.bindOverlayEvents();
	};

	BettingRecords.prototype.createTable = function (type) {
		var temp = '';
		if(type == 1){
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>期号</td>' +
				'<td>开奖号</td>' +
				'<td>投注内容</td>' +
				'<td>投注金额</td>' +
				'<td>倍数</td>' +
				'<td>奖金组/返点</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}else{
			temp =	'<table>' +
				'<thead>' +
				'<tr>' +
				'<td>游戏</td>' +
				'<td>玩法</td>' +
				'<td>起始期号</td>' +
				'<td>投注内容</td>' +
				'<td>追号总金额</td>' +
				'<td>奖金组/返点</td>' +
				'<td>追中即停</td>' +
				'<td>状态</td>' +
				'<td>操作</td>' +
				'</tr>' +
				'</thead>' +

				'<tbody>' +
				this.createRows(type) +
				'</tbody>' +
				'</table>';
		}
		return temp;
	};
	//切换页面数据
	BettingRecords.prototype.refreshHtml = function(){
		if(this.type == 1){
			this.data = this.betData;
			app.bettingRecords.zone.find('.content1 .table-zone tbody').empty();
			app.bettingRecords.zone.find('.content1 .table-zone tbody').append(this.createRows(1))
		}else{
			this.data = this.chaseData;
			app.bettingRecords.zone.find('.content2 .table-zone tbody').empty();
			app.bettingRecords.zone.find('.content2 .table-zone tbody').append(this.createRows(2))
		}

	};
	BettingRecords.prototype.createRows = function (type) {
		var i;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === 4 && type == 1 || j === 3 && type == 2) {
					temp += '<td title="' + this.data[i][j] +'"><span>' + this.data[i][j] + '</span></td>';
				} else if (j === this.data[i].length-1) {
					temp += '<td data-index ="'+i+'" data-value="' + this.data[i][j] + '"><span class="order-detail">' + '详情' + '</span></td>';
				} else if( j === 8 ){
					var state = this.data[i][j].replace(/[,]/g,'');
					var color;
					if(!isNaN(state)) color = '#f86f70';
					if(state == '用户撤销' || state == '系统撤销') color = '#cccccc';
					if(state == '未中奖') color = '#cccccc';
					if(state == '待开奖') color = '#a3e2cf';
					temp += '<td style="color: '+color+'">' + this.data[i][j] + '</td>';
				}else{
					temp += '<td>' + this.data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};
	//投注点击，跟弹框赋值
	BettingRecords.prototype.assignmentModel = function(){
		var that = this;
		var betOrder;
		betOrder = this.betOrderDetail.zone;
		var modelList =  that.resBet.list[that.dataIndex];
		var modelData = [
			modelList.ticketId,
			that.betName[modelList.market+'_'+modelList.gameCode],
			that.obj[modelList.betType + modelList.gameCode],
			modelList.drawNumber,
			modelList.betTime,
			modelList.result == undefined ?'-':modelList.result,
			Util.addDotToNumber((modelList.odds * modelList.betUnit)/2,4),
			modelList.multiple + '倍',
			modelList.oddsGroup+'-'+ ( modelList.comm * 100 ).toFixed(2) + '%',
			modelList.selection,
			Util.addDotToNumber(modelList.betAmount) + '元',
			that.getWinAndChaseIsState(modelList.winState,1,modelList.wlAmt,modelList.cancelBy),
			Util.addDotToNumber(modelList.betUnit),
			modelList.betCount,
			Util.addDotToNumber(modelList.netAmount,4)
		];
		var color;
		if(!isNaN(modelData[11])) color = '#f86f70';
		if(modelData[11] == '系统撤销' || modelData[11] == '用户撤销') color = '#cccccc';
		if(modelData[11] == '未中奖') color = '#cccccc';
		if(modelData[11] == '待开奖') color = '#a3e2cf';
		betOrder.find('.singleNumber').text(modelData[0]);//注单编号
		betOrder.find(".gameName").text(modelData[1]);//游戏名称
		betOrder.find(".gamePlay").text(modelData[2]);
		betOrder.find(".gameSeries").text(modelData[3]);
		betOrder.find(".betTime").text(modelData[4]);
		betOrder.find(".lotteryNumbers").text(modelData[5]);
		betOrder.find(".amount").text(modelData[6]);
		betOrder.find(".multiple").text(modelData[7]);
		betOrder.find(".groupRebates").text(modelData[8]);
		betOrder.find(".betAmount").text(modelData[10]);
		betOrder.find(".betType").text(modelData[11]);
		betOrder.find(".betUnit").text(modelData[12]);
		betOrder.find(".betCount").text(modelData[13]);
		betOrder.find(".netAmount").text(modelData[14]);
		betOrder.find(".betType").css('color',color);
		betOrder.find(".textarea").html(OriginalItem.text(modelList));

	};
	//追号 点击，跟弹框赋值
	BettingRecords.prototype.assignmentChaseModel = function(){
		var that = this;
		var chaseOrder;
		chaseOrder = that.chaseOrderDetail;
		var list = this.resChase.list[this.dataIndex];
		var req = {
			chaseId:list.chaseId
		};
		service.chaseDetail(req,function(res){
			if(res.code == 0){
				var dataList = [];
				$.each(res.list,function(index,item){
					dataList.push([
						item.drawNumber,
						OriginalItem.ballNameMap(item.betNumber),
						item.multiple,
						Util.addDotToNumber(item.betAmount),
						that.getWinAndChaseIsState(item.chaseState,2,item.wlAmt,item.cancelBy),
						that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
						item.chaseState == 'P'?1:0
					])
				});
				chaseOrder.data = dataList;
				chaseOrder.resData = res;
				chaseOrder.zone.find('tbody').empty();
				chaseOrder.zone.find('tbody').append(chaseOrder.createRows());
				if(!res.canStop)chaseOrder.cancel.disabled();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};

	window.BettingRecords = BettingRecords;
}());

