/*
 *  RecordQuery页面入口函数
 */

(function () {
	function recordsQuery () {
		var that = this;
		var data = Global.marketList;
		this.marketList = data;
		this.data = [];
		this.obj = {};
		this.betName = {};
		for(var x = 0;x < RULE_CONFIG.length;x++){
			this.obj[RULE_CONFIG[x].betType + RULE_CONFIG[x].gameCode] = RULE_CONFIG[x].name
		}
		for(var x = 0;x < data.length;x++){
			this.betName[data[x].market + '_' + data[x].gameCode] = data[x].marketCNName
		}
		this.el = this.initDom();
		this.creatNoticeDialog();
		$('.records-query-page').html(this.el);
		this.bindEvents();

        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }
		(function init(callback) {
			//var acctId = Util.getQueryString("acctId");
			//acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
			var sessionId = Util.getQueryString("sessionId");
			var token = Util.getQueryString("token");
			var req = {
				acctId: null,
				passwd: null,
				sessionId: sessionId,
				token: token
			};

			service.login(req, function(res) {
				if (res.code == 0) {
					that.getBetHistory();
				}else{
					that.promptModel('温馨提示',res)
				}
			});
		})();

	}
	recordsQuery.prototype.creatNoticeDialog = function () {
		if (!this.noticeDialog) {
			this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
			$('body').append(this.noticeDialog.getDom());
			this.noticeDialog.bindEvents();
		}
	};
	//投注记录
	recordsQuery.prototype.getBetHistory = function () {
		var that = this;
		var req = {
			"page": {
				"pageNo": this.pager1.currentPage || 1,
				"pageSize":20
			},
			"beginDate": $('.' +this.startTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"beginTime": $('.' +this.startTime.opt.className).find('input').val().split(' ')[1] +':00',
			"endDate": $('.' +this.endTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"endTime": $('.' +this.endTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"status": this.statusSelect.value,
			"ticketId": isNaN(parseInt($('.' +this.input.opt.className).find('input').val()))?0:parseInt($('.' +this.input.opt.className).find('input').val()),
			gameCode: this.gameSelect.value.split('_')[0] == undefined ? "":this.gameSelect.value.split('_')[0] ,
			market:this.gameSelect.value.split('_')[1] == undefined ? "":this.gameSelect.value.split('_')[1]
		};
		service.betHistory(req, function(res) {
			if (res.code == 0) {
				that.betData = that.formatBetList(res);
				that.resBet = res;
				if(that.pager1.totalPage != res.page.pageCount){
					that.pager1.totalPage = res.page.pageCount || 1;
					that.pager1.initDom();
					that.zone.find('.content1 .pager-zone ').empty();
					that.zone.find('.content1 .pager-zone ').append(that.pager1.getDom())
					that.pager1.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//投注记录
	recordsQuery.prototype.formatBetList = function (res) {
		var that = this;
		var list = [];
		$.each(res.list,function(index,item){
			list.push([
				that.betName[item.market+'_'+item.gameCode],
				that.obj[item.betType + item.gameCode],
				item.drawNumber,
				item.result == undefined ?'-':item.result,
				OriginalItem.ballNameMap(item.betNumber) ,
				Util.addDotToNumber(item.betAmount) +'元',
				item.multiple+'倍',
				item.oddsGroup+'-'+  ( item.comm * 100 ).toFixed(2) + '%',
				that.getWinAndChaseIsState(item.winState,1,item.wlAmt,item.cancelBy),
				item.winState == 'P' ?1:0,
			])
		});
		return list;
	};
	//追号记录
	recordsQuery.prototype.getChaseHistory = function () {
		var that = this;
		var req = {
			"page": {
				"pageNo": this.pager2.currentPage || 1,
				"pageSize":20
			},
			"beginDate": $('.' +this.startTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"beginTime": $('.' +this.startTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"endDate": $('.' +this.endTime.opt.className).find('input').val().split(' ')[0].replace(/[\\\/]/g,"-"),
			"endTime": $('.' +this.endTime.opt.className).find('input').val().split(' ')[1] + ':00',
			"status": this.statusSelect.value,
			"ticketId": isNaN(parseInt($('.' +this.input.opt.className).find('input').val()))?0:parseInt($('.' +this.input.opt.className).find('input').val()),
			gameCode: this.gameSelect.value.split('_')[0] == undefined ? "":this.gameSelect.value.split('_')[0] ,
			market:this.gameSelect.value.split('_')[1] == undefined ? "":this.gameSelect.value.split('_')[1]
		};
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
					that.zone.find('.content2 .pager-zone ').empty();
					that.zone.find('.content2 .pager-zone ').append(that.pager2.getDom());
					that.pager2.bindEvents();
				}
				that.refreshHtml();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//追号记录
	recordsQuery.prototype.formatChaseList = function (res) {
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



	recordsQuery.prototype.refreshHtml = function(){
		if(this.type == 1){
			this.data = this.betData;
			this.zone.find('.content1 .table-zone tbody').empty();
			this.zone.find('.content1 .table-zone tbody').append(this.createRows(1))
		}else{
			this.data = this.chaseData;
			this.zone.find('.content2 .table-zone tbody').empty();
			this.zone.find('.content2 .table-zone tbody').append(this.createRows(2))
		}

	};

	//投注点击，跟弹框赋值
	recordsQuery.prototype.assignmentModel = function(){
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
		if(modelData[11] == '用户撤销' || modelData[11] == '系统撤销') color = '#cccccc';
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
	recordsQuery.prototype.assignmentChaseModel = function(){
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
				chaseOrder.zone.find('tbody').append(chaseOrder.createRows())
				if(!res.canStop)chaseOrder.cancel.disabled();
			}else{
				that.promptModel('温馨提示',res)
			}
		});
	};
	//type = 1 state = winState,type = 2 state = chaseState
	recordsQuery.prototype.getWinAndChaseIsState = function(state,type,wlAmt,cancelBy){
		var text;
		if(type == 1){
			if(state == 'W') text =  Util.addDotToNumber(wlAmt);
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'L') text = '未中奖';
			if(state == 'P') text = '待开奖';
		}else if(type == 2){
			if(state == 'C') text = cancelBy == '-'?'系统撤销':'用户撤销';
			if(state == 'H') text = '已完成';
			if(state == 'P') text = '未开始';
			if(state == 'L') text = '未中奖';
			if(state == 'W') text = '已中奖';
		}
		return text;
	};
	recordsQuery.prototype.initDom = function () {
		var temp;
		var marketList = this.marketList;
		var gameSelectData = [{text:'所有市场',value:''}];
		for(var i = 0; i < marketList.length; i++){
			gameSelectData.push({
			 	text: marketList[i].marketCNName,
				value: marketList[i].gameCode + '_' + marketList[i].market
			})
		}
		var statusSelectData = [
			{ text: '全部',   value: ''},
			{ text: '已中奖', value: 'W'},
			{ text: '未中奖', value: 'L'},
			{ text: '未开奖', value: 'P '},
			{ text: '已撤消', value: 'C '}
		];

		this.pager1       = new IMPager({id: 'bet-records-query-pager'});
		this.pager2       = new IMPager({id: 'chase-records-query-pager'});
		this.startTime    = new IMDatetimepicker({className: 'starttime', text:'开始'});
		this.endTime      = new IMDatetimepicker({className: 'endtime', text:'结束'});
		this.tip          = new IMTip();

		this.input        = new IMInput({
			className: 'bs-input', 
			text: '编号:', 
			placeHolder: '请输入编号'
		});

		this.gameSelect   = new IMSelect({
			id: 'game-select',
			type: 1,
			className: 'game-select', 
			data: gameSelectData
		});

		this.statusSelect = new IMSelect({
			id: 'status-select', 
			type: 2, 
			className: 'status-select', 
			text: '注单状态:',
			data: statusSelectData
		});

		this.searchButton = new IMButton({
			text: '搜索',
			className: 'search',
			id:'search'
		});

		temp = 	'<div class="records-query">' +
					'<div class="wrapper">' +
						'<div class="headrow">' +
							'<div class="tab-head">' +
								'<ul class="tabs">' +
									'<li class="tab1 active"><span>我的投注</span></li>' +
									'<li class="tab2"><span>追号记录</span></li>' +
								'</ul>' +
								'<div class="stick"></div>' +
							'</div>' +

							'<div class="bar">' +
								this.startTime.getDom() +
								this.endTime.getDom() +
								this.input.getDom() +
								this.gameSelect.getDom() +
								this.statusSelect.getDom() +
								this.searchButton.getDom() +
							'</div>' +
						'</div>' +

						'<div class="cont content1">' +
							'<div class="table-zone">' +
								this.createTable('1') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager1.getDom() +
							'</div>' +
						'</div>' +

						'<div class="cont content2">' +
							'<div class="table-zone">' +
								this.createTable('2') +
							'</div>' +
							'<div class="pager-zone">' +
								this.pager2.getDom() +
							'</div>' +
						'</div>' +

						this.tip.getDom() +
					'</div>' +
				'</div>';

		return temp;
	};
	recordsQuery.prototype.promptModel = function(subTitle,res,text,buttonName){
		buttonName && (buttonName = '确定');
		if(res.code == 0){
			this.noticeDialog.show({
				subTitle : subTitle,
				text: text,
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}else{
			this.noticeDialog.show({
				subTitle : subTitle,
				text: Local[res.code],
				buttonName: buttonName,
				autoHide: true,
				timeout: 3000
			});
		}
	}
	recordsQuery.prototype.getDom = function () {
		return this.el;
	};

	recordsQuery.prototype.show = function () {
		if (!this.zone) {
			$('.main').append(this.el);
			this.zone = $('.betting-records');
			this.bindEvents();
		}

		this.zone.show();
	};

	recordsQuery.prototype.hide = function () {
		this.zone.hide();
	};

	recordsQuery.prototype.bindEvents = function (state) {
		var left;
		var content1;
		var content2;
		var callback;
		var tabs;
		var betTable;
		var chaseTable;
		var temp;
		var that = this;
        var today = new Date();

        this.zone  = $('.records-query');

        today = today.formatDate();
        this.zone.find('.starttime input').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime input').datetimepicker({value: today + ' 23:59', lang: 'en'});
		
		tabs       = this.zone.find('.tabs');
		stick      = this.zone.find('.stick');
		content    = this.zone.find('.cont');
		content1   = this.zone.find('.content1');
		content2   = this.zone.find('.content2');
		betTable   = this.zone.find('.content1 table');
		chaseTable = this.zone.find('.content2 table');
		if(!that.type){
			that.type = 1
		}
		this.zone.find('.close-icon').click(function () {
			that.zone.hide();
			$('.bet-record').removeClass('highlight');
		});
		tabs.delegate('li', 'click', function () {
			tabs.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				content1.show();
				that.type = 1
			} else if ($(this).hasClass('tab2')) {
				left = 120;
				content2.show();
				that.type = 2;
				if(!that.chaseData){
					that.getChaseHistory();
				}
			}

			stick.css('left', left + 'px');
		});

		betTable.delegate('td', 'click', function () {
			temp = $(this).children('span');
			that.dataIndex = parseInt($(this).attr('data-Index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.betOrderDetail) {
					that.betOrderDetail = new BetOrderDetail({id: 'bet-order-detail'});
					$('body').append(that.betOrderDetail.getDom());
					that.betOrderDetail.bindEvents();
					that.assignmentModel()
				}else{
					that.assignmentModel()
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
			that.dataIndex = parseInt($(this).attr('data-Index'));
			if (temp && temp.hasClass('order-detail')) {
				if (!that.chaseOrderDetail) {
					that.chaseOrderDetail = new ChaseOrderDetail({id: 'chase-order-detail'});
					$('body').append(that.chaseOrderDetail.getDom());
					that.chaseOrderDetail.bindEvents();
					that.assignmentChaseModel()
				}else{
					that.assignmentChaseModel()
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
			that.tip.show({
				left: left,
				top: top,
				text: text
			});
		}).delegate('.lottery-number', 'mouseout', function () {
			that.tip.hide();
		});
		//搜索
		callback = function(){
			if(that.type == 1){
				that.getBetHistory();
			}else{
				that.getChaseHistory();
			}
		};
		that.searchButton.bindEvents(callback.bind(this));
		if(!state){
			this.pager1.bindEvents();
			this.pager2.bindEvents();
			this.gameSelect.bindEvents();
			this.statusSelect.bindEvents();
		}
	};

	recordsQuery.prototype.createTable = function (type) {
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

	recordsQuery.prototype.createRows = function (type) {
		var i;
		var temp = '';
		for (i = 0; i < this.data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < this.data[i].length; j++) {
				if (j === 0) {
					temp += '<td><span class="dot"></span>' + this.data[i][j] + '</td>';
				} else if (j === 4 && type == 1 || j === 3 && type == 2) {
					temp += '<td title="' + this.data[i][j] +'"><span>' + this.data[i][j] + '</span></td>';
				}  else if (j === this.data[i].length-1) {
					temp += '<td data-Index ="'+i+'" data-value="' + this.data[i][j] + '"><span class="order-detail">' + '详情' + '</span></td>';
				} else if(j == 8){
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
	window.recordsQuery = new recordsQuery();
}());

