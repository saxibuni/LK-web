/*
** 继承自IMDialog  
*/

(function () {
	function ChaseNumberDialog (opt) {
		IMDialog.call(this, (opt || {}));
		this.id      = this.opt.id;
		this.isDataEnd = true;
		this.isChangeMultipleModel = false;//是否有提示框
		this.checkedIndex = [[],[],[]];//取消的投号
		this.lrTitle = ['序号', '追号期数', '倍数', '金额', '奖金', '盈利金额', '盈利率', '操作'];
		this.tbTitle = ['序号', '追号期数', '倍数', '金额', '预计开奖时间', '操作'];
		this.fbTitle = ['序号', '追号期数', '倍数', '金额', '预计开奖时间', '操作'];
		this.tabType = 1;
		this.dataList();
		this.el = this.initDom(this.data);

	}

	ChaseNumberDialog.prototype = new IMDialog();

	ChaseNumberDialog.prototype.initDom = function (data) {
		var temp;
		this.addChaseNumber = new IMButton({
			text: '生成追号计划',
			className: 'chase-dialog-add-chase-number'
		});

		this.stopAfterWinCheckBox = new IMCheckBox({
			text: '中奖后终止',
			checked:true
		});

		this.cancelBet = new IMButton({
			text: '取消投注',
			className: 'cancel-bet-button'
		});

		this.comfirmBet = new IMButton({
			text: '确认投注',
			className: 'comfirm-bet-button',
			id:'comfirm-bet-button'
		});
		temp = 	'<div class="chase-number-dialog"' + (this.id? (' id="' + this.id + '"') : '') + '>' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<ul class="tabs">' +
								'<li class="tab1" data-value="1"><span>利润追号</span></li>' +
								'<li class="tab2" data-value="2"><span>同倍追号</span></li>' +
								'<li class="tab3" data-value="3"><span>翻倍追号</span></li>' +
								'<span class="close">✕</span>' +
							'</ul>' +

							'<div class="stick"></div>' +

							'<div class="cont content1">' +
								'<div class="row row1">' +
									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group col-sm-11">' +
										    '<label class="name">最低收益率:</label>' +
										    '<input type="text" class="form-control zdsyl interest1">' +
										'</div>' +
										'<div class="col-sm-1 sign">%</div>'+
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">追号期数:</label>' +
										    '<input type="text" class="form-control zhqs periods1">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div>' +
											this.addChaseNumber.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone lrData">' +
										this.createTable(this.lrData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="cont content2">' + 
								'<div class="row row1">' +
									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">起始倍数:</label>' +
										    '<input type="text" class="form-control zdsyl startMultiple2">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div class="form-group">' +
										    '<label class="name">追号期数:</label>' +
										    '<input type="text" class="form-control zhqs periods2">' +
										'</div>' +
									'</div>' +

									'<div class="col-sm-4 col-md-4">' +
										'<div>' +
											this.addChaseNumber.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone tbData">' +
										this.createTable(this.tbData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +

							'<div class="cont content3">' +
								'<div class="row1">' +
									'<div class="form-group">' +
									    '<label class="name">起始倍数:</label>' +
									    '<input type="text" class="form-control zdsyl startMultiple3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">隔:</label>' +
									    '<input type="text" class="form-control zhqs interval3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">期倍x</label>' +
									    '<input type="text" class="form-control zhqs multiple3">' +
									'</div>' +

									'<div class="form-group">' +
									    '<label class="name">期数:</label>' +
									    '<input type="text" class="form-control zhqs periods3">' +
									'</div>' +

									'<div class="button-zone">' +
										this.addChaseNumber.getDom() +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="table-zone fbData">' +
										this.createTable(this.fbData) +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="summary">' +
										'共追号' + 
										'<span class="value issue-num">0</span>' +
										'期, ' +
										'<span class="value orders-num">0</span>' +
										'注, 金额￥' +
										'<span class="value amount">0.00</span>' +
										'元' +
									'</div>' +

									'<div class="operations">' +
										this.stopAfterWinCheckBox.getDom() +
										'<div class="clear-chase-number">清除追号</div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="cancel">' +
										this.cancelBet.getDom() +
									'</div>' +

									'<div class="ok">' +
										this.comfirmBet.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay2">' +
				'</div>';

		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	};

	ChaseNumberDialog.prototype.dataList = function(){
		this.lrRowData =[];
		this.tbRowData = [];
		this.fbRowData = [];
		if(!this.lrData)this.lrData = {'title': this.lrTitle,'rowData':this.lrRowData};
		if(!this.tbData)this.tbData = {'title': this.tbTitle,'rowData':this.tbRowData};
		if(!this.fbData)this.fbData = {'title': this.fbTitle,'rowData':this.fbRowData};
		var that = this;
		//app.currentSocket.drawData.drawId
		var market = app.currentSocket.market,
			gameCode = app.currentSocket.gameCode,
			filterData = Global.betZoneData.filter(function(item, index) {
				return item.market == market && item.gameCode == gameCode;
			})[0];
		that.maxCount = filterData.data[0][13];
		for(var i = 0; i< filterData.data.length; i++){
			if(!filterData.data[i+1]) break;
			if(filterData.data[i][13] <= filterData.data[i+1][13]){
				that.maxCount = filterData.data[i][13];
			}else{
				that.maxCount = filterData.data[i+1][13];
			}
		}
		that.lrAmount = 0;
		that.tbAmount = 0;
		that.fbAmount = 0;
		that.checkedIndex = [[],[],[]];
		var allAmount = 0;
		var lrMultiple = 1;//利润倍数
		var totalLrMoney = 0;//利润总投入
		var profitAmount = 0;//利润盈利总金额
		var LrMoney = filterData.data[0][9]* filterData.data[0][10]/2;//利润最大奖金
		var profitMargin = 0;
		var $zone = $('#' +　this.id);
		var content1 = $zone.find('.content1');
		var content2 = $zone.find('.content2');
		var content3 = $zone.find('.content3');
		for(var m = 0;m< filterData.data.length;m++){
			allAmount = allAmount + filterData.data[m][4]/filterData.data[m][3];
		}

		if(that.tabType == 1){
			for(var i = 0;i< parseInt(this.periods1);i++ ){
				if(!that.openDrawList[i])break;
				for(var x = 0;;x++){
					var allM = totalLrMoney + (allAmount*lrMultiple);
					if((LrMoney*lrMultiple - allM)/allM *100 >= parseInt(this.interest1)){
						if(lrMultiple > filterData.data[0][13])
							break;
						totalLrMoney = allM;
						profitAmount = LrMoney*lrMultiple - totalLrMoney;
						profitMargin = ((LrMoney*lrMultiple - totalLrMoney)/totalLrMoney * 100).toFixed(2) + '%';
						break;
					}else{
						if(lrMultiple > filterData.data[0][13])
							break;
						lrMultiple ++;
					}
				}
				if(lrMultiple > filterData.data[0][13])
					break;
				this.lrRowData.push([i+1, that.openDrawList[i].number ,lrMultiple,Util.addDotToNumber(allAmount*lrMultiple),Util.addDotToNumber(LrMoney*lrMultiple,4),Util.addDotToNumber(profitAmount,4),profitMargin]);
			}
			that.lrAmount = totalLrMoney;
			that.setContentVal(this.lrRowData.length,this.lrRowData.length,Util.addDotToNumber(that.lrAmount),1);
			this.lrData.rowData = this.lrRowData;
		}


		if(that.tabType == 2){
			if(this.startMultiple2 == 0){this.startMultiple2 = 1}
			for(var i = 0;i<parseInt(this.periods2);i++){
				if(!that.openDrawList[i])break;
				if(this.startMultiple2 > that.maxCount){
					this.startMultiple2 = that.maxCount;
				}
				this.tbRowData.push([i+1,that.openDrawList[i].number,this.startMultiple2,Util.addDotToNumber(this.startMultiple2*allAmount),that.timeList[that.openDrawList[i].number]]);
				that.tbAmount = that.tbAmount + allAmount*this.startMultiple2
			}
			that.setContentVal(this.tbRowData.length,this.tbRowData.length,Util.addDotToNumber(that.tbAmount),2);
			this.tbData.rowData = this.tbRowData;
		}


		if(that.tabType == 3){
			var multiple3 = parseInt(this.multiple3) || 1;
			var startMultiple3  = parseInt(this.startMultiple3) || 1;//起始倍数
			var Multiple;
			var interval3 = parseInt(this.interval3) || 1;//隔
			for(var i = 0;i<parseInt(this.periods3);i++){
				if(!that.openDrawList[i])break;
				if(i == 0){
					if(startMultiple3  < that.maxCount){
						Multiple = startMultiple3
					}else{
						Multiple = that.maxCount;
					}
				}else if( i%interval3 == 0){
					if(Multiple * multiple3 < that.maxCount){
						Multiple = Multiple * multiple3;
					}else{
						Multiple = that.maxCount;
					}
				}
				this.fbRowData.push([i+1,that.openDrawList[i].number,Multiple,Util.addDotToNumber(allAmount*Multiple),that.timeList[that.openDrawList[i].number]]);
				that.fbAmount = that.fbAmount + allAmount*Multiple;
			}
			that.setContentVal(this.fbRowData.length,this.fbRowData.length,Util.addDotToNumber(that.fbAmount),3);
			this.fbData.rowData = this.fbRowData;
		}
	};
	//自动调整倍数
	ChaseNumberDialog.prototype.changeMultiple = function(){
		var that = this;
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(this.tabType ==  2 && that.maxCount < that.startMultiple2){
			that.isChangeMultipleModel = true;
			app.noticeDialog.show({
				subTitle : '倍数超出',
				text:'您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划',
				buttonName: '确定',
				autoHide: true,
				timeout: 5000,
				okCallback: function(){
					that.isChangeMultipleModel = false;
					that.show({'tab': that.tabType});
					$chaseNumber.find('.startMultiple2').val(that.maxCount);
					$chaseNumberDialog.find('.startMultiple2').val(that.maxCount);
				}
			});
		}else if(this.tabType == 3  && that.maxCount < that.startMultiple3){
			that.isChangeMultipleModel = true;
			app.noticeDialog.show({
				subTitle : '倍数超出',
				text:'您选择的玩法无法实现设置的投注倍数，系统已自动为您调整计划',
				buttonName: '确定',
				autoHide: true,
				timeout: 5000,
				okCallback: function(){
					that.isChangeMultipleModel = false;
					that.show({'tab': that.tabType});
					$chaseNumber.find('.startMultiple3').val(that.maxCount);
					$chaseNumberDialog.find('.startMultiple3').val(that.maxCount);
				}
			});
		}
	};
	ChaseNumberDialog.prototype.changePeriods = function(){
		var that = this;
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(this.tabType ==  1){
			if(this.CustomaryPeriods1 > this.periods1 ){
				app.noticeDialog.show({
					subTitle : '期数超出',
					text:'您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000,
					okCallback: function(){
						that.show({'tab': that.tabType});
						that.periods1 = that.lrRowData.length;
						$chaseNumber.find('.periods1').val(that.periods1);
						$chaseNumberDialog.find('.periods1').val(that.periods1);
					}
				});
			}else if(that.lrRowData.length == 0 && this.CustomaryPeriods1 != 0){
				app.noticeDialog.show({
					subTitle : '收益率过大',
					text:'您设置的最低收益率过大，请重新设置',
					buttonName: '确定',
					autoHide: true,
					timeout: 3000,
					okCallback: function(){
						that.show({'tab': that.tabType});
					}
				});
			}else if(that.lrRowData.length != this.CustomaryPeriods1) {
				var subTitle = '';
				if(this.CustomaryPeriods1 > that.maxPeriods ){
					subTitle = '期数超出'
				}else{
					subTitle = '倍数超出'
				}
				app.noticeDialog.show({
					subTitle : subTitle,
					text:'您选择的玩法无法实现设置的投注期数，系统已自动为您调整计划。',
					buttonName: '确定',
					autoHide: true,
					timeout: 3000,
					okCallback: function(){
						that.show({'tab': that.tabType});
						that.periods1 = that.lrRowData.length;
						$chaseNumber.find('.periods1').val(that.periods1);
						$chaseNumberDialog.find('.periods1').val(that.periods1);
					}
				});
			}else{
				if(!that.isChangeMultipleModel)
					that.show({'tab': that.tabType});
			}
		}else if(this.tabType ==  2){
			if(this.CustomaryPeriods2 > this.periods2 ){
				if(!that.isChangeMultipleModel){
					app.noticeDialog.show({
						subTitle : '期数超出',
						text:'超出最大追号计划数，最大追号'+(that.endId)+'期,将自动调整到最大期数',
						buttonName: '确定',
						autoHide: true,
						timeout: 5000,
						okCallback: function(){
							that.show({'tab': that.tabType});
							$chaseNumber.find('.periods2').val(that.periods2);
							$chaseNumberDialog.find('.periods2').val(that.periods2);
						}
					});
				}else{
					$chaseNumber.find('.periods2').val(that.periods2);
					$chaseNumberDialog.find('.periods2').val(that.periods2);
				}
			}else{
				if(!that.isChangeMultipleModel)
					that.show({'tab': that.tabType});
			}
		}else{
		 if(this.CustomaryPeriods3 != that.fbRowData.length){
			 if(!that.isChangeMultipleModel){
				 app.noticeDialog.show({
					 subTitle : '期数超出',
					 text:'您选择的玩法无法实现设置的期数，系统已自动为您调整计划。',
					 buttonName: '确定',
					 autoHide: true,
					 timeout: 5000,
					 okCallback: function(){
						 that.show({'tab': that.tabType});
						 that.periods3 = that.fbRowData.length;
						 $chaseNumber.find('.periods3').val(that.periods3);
						 $chaseNumberDialog.find('.periods3').val(that.periods3);
					 }
				 });
			 }else{
				 that.periods3 = that.fbRowData.length;
				 $chaseNumber.find('.periods3').val(that.periods3);
				 $chaseNumberDialog.find('.periods3').val(that.periods3);
			 }
			}else if(this.CustomaryPeriods3 > this.periods3 ){
				 if(that.maxCount > that.startMultiple3){
					 app.noticeDialog.show({
						 subTitle : '期数超出',
						 text:'超出最大追号计划数，最大追号'+(that.endId)+'期,将自动调整到最大期数',
						 buttonName: '确定',
						 autoHide: true,
						 timeout: 5000,
						 okCallback: function(){
							 that.show({'tab': that.tabType});
							 $chaseNumber.find('.periods3').val(that.periods3);
							 $chaseNumberDialog.find('.periods3').val(that.periods3);
						 }
					 });
				 }else{
					 if(!that.isChangeMultipleModel)
						 that.show({'tab': that.tabType});
					 $chaseNumber.find('.periods3').val(that.periods3);
					 $chaseNumberDialog.find('.periods3').val(that.periods3);
				 }
			}else{
			 if(!that.isChangeMultipleModel)
			 	that.show({'tab': that.tabType});
			}
		}
	};
	ChaseNumberDialog.prototype.getInpValue = function(){
		//修改--DB
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		this.interest1 = $chaseNumberDialog.find('.interest1').val();//利润-最低收益
		this.periods1 = $chaseNumberDialog.find('.periods1').val();//利润-追号期数
		this.startMultiple2 = $chaseNumberDialog.find('.startMultiple2').val();//同倍-起始倍数
		this.periods2 = $chaseNumberDialog.find('.periods2').val();//同倍-追号期数
		this.startMultiple3 = $chaseNumberDialog.find('.startMultiple3').val();
		this.interval3 = $chaseNumberDialog.find('.interval3').val();
		this.multiple3 = $chaseNumberDialog.find('.multiple3').val();
		this.periods3 = $chaseNumberDialog.find('.periods3').val();

		$chaseNumber.find('.interest1').val(this.interest1);
		$chaseNumber.find('.periods1').val(this.periods1);
		$chaseNumber.find('.startMultiple2').val(this.startMultiple2);
		$chaseNumber.find('.periods2').val(this.periods2);
		$chaseNumber.find('.startMultiple3').val(this.startMultiple3);
		$chaseNumber.find('.interval3').val(this.interval3);
		$chaseNumber.find('.multiple3').val(this.multiple3);
		$chaseNumber.find('.periods3').val(this.periods3);
	};

	ChaseNumberDialog.prototype.inpValue = function(){
		//修改--DB
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		this.interest1 = $chaseNumber.find('.interest1').val();//利润-最低收益
		this.periods1 = $chaseNumber.find('.periods1').val();//利润-追号期数
		this.startMultiple2 = $chaseNumber.find('.startMultiple2').val();//同倍-起始倍数
		this.periods2 = $chaseNumber.find('.periods2').val();//同倍-追号期数
		this.startMultiple3 = $chaseNumber.find('.startMultiple3').val();
		this.interval3 = $chaseNumber.find('.interval3').val();
		this.multiple3 = $chaseNumber.find('.multiple3').val();
		this.periods3 = $chaseNumber.find('.periods3').val();

		$chaseNumberDialog.find('.interest1').val(this.interest1);
		$chaseNumberDialog.find('.periods1').val(this.periods1);
		$chaseNumberDialog.find('.startMultiple2').val(this.startMultiple2);
		$chaseNumberDialog.find('.periods2').val(this.periods2);
		$chaseNumberDialog.find('.startMultiple3').val(this.startMultiple3);
		$chaseNumberDialog.find('.interval3').val(this.interval3);
		$chaseNumberDialog.find('.multiple3').val(this.multiple3);
		$chaseNumberDialog.find('.periods3').val(this.periods3);

	};
	//赋值
	ChaseNumberDialog.prototype.setContentVal = function(val1,val2,val3,type){
		var $zone = $('#' +　this.id);
		var content1 = $zone.find('.content1');
		var content2 = $zone.find('.content2');
		var content3 = $zone.find('.content3');
		if(type == 1){
			//利润
			content1.children().find('.issue-num').text(val1);
			content1.children().find('.orders-num').text(val2);
			content1.children().find('.amount').text(val3);
		}else if(type == 2){
			//同倍
			content2.children().find('.issue-num').text(val1);
			content2.children().find('.orders-num').text(val2);
			content2.children().find('.amount').text(val3);
		}else if(type == 3) {
			//翻倍
			content3.children().find('.issue-num').text(val1);
			content3.children().find('.orders-num').text(val2);
			content3.children().find('.amount').text(val3);
		}
	};
	ChaseNumberDialog.prototype.getDom = function () {
		return this.el;
	};

	ChaseNumberDialog.prototype.createTable = function (data) {
		var i;
		var temp = '';
		var px = '20px';
		if(Util.isMobile.ios()){
			px = 0
		}
		temp =	'<table>' +
					'<thead>' +
						'<tr style="padding-right: '+px+'">';

		for (i = 0; i < data.title.length; i++) {
			if(this.tabType == 1){
				temp +=  		'<td class="td-width td-w'+(i+1)+'">' + data.title[i] + '</td>';
			}else{
				temp +=  		'<td class="td-width">' + data.title[i] + '</td>';
			}
		}

		temp +=			'</tr>' +
					'</thead>' +

					'<tbody>' +
						this.createRows(data.rowData) +
					'</tbody>' +
				'</table>';

		return temp;
	};

	ChaseNumberDialog.prototype.createRows = function (data) {
		var i;
		var temp = '';
		var checkbox;

		for (i = 0; i < data.length; i++) {
			temp +=	'<tr>';

			for (j = 0; j < data[i].length + 1; j++) {
				var cla = this.tabType == 1 ? 'td-w'+(j+1)+'':'';
				if (j === 2) {
					temp += '<td class="td-width '+cla+'"><span class="bs-input">' + data[i][j] + '</span>' + '</td>';
				} else if (j === data[i].length) {
					checkbox = new IMCheckBox({checked: true});
					temp += '<td class="td-width '+cla+' oper-checkbox">' + checkbox.getDom() + '</td>';
				} else {
					temp += '<td class="td-width '+cla+'">' + data[i][j] + '</td>';
				}
			}

			temp += '</tr>';
		}

		return temp;
	};

	ChaseNumberDialog.prototype.show = function (data) {
		var ul       = this.zone.find('ul.tabs');
		var selected = ul.children('li[data-value=' + data.tab + ']'); 

		selected.click();
		this.showOverlay();
	};

	ChaseNumberDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ChaseNumberDialog.prototype.refreshDialog = function(state, tabType){
		var that = this;
		tabType && (that.tabType = tabType);
		if(that.isDataEnd){
			that.isDataEnd = false;
		}else{
			return false;
		}
		var $chaseNumber = app.currentModule.chaseNumber.zone;
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		var req = {
			"gameCode":app.currentSocket.gameCode,
			"market": app.currentSocket.market
		};
		var $chaseNumberDialog = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(that.tabType == 1){
			var interest1 = $chaseNumberDialog.find('.interest1').val();//利润-最低收益
			var periods1 = $chaseNumberDialog.find('.periods1').val();//利润-追号期数
			if(interest1 == '' || periods1 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}else if(that.tabType == 2){
			var startMultiple2 = $chaseNumberDialog.find('.startMultiple2').val();//同倍-起始倍数
			var periods2 = $chaseNumberDialog.find('.periods2').val();//同倍-追号期数
			if(startMultiple2 == '' || periods2 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}else{
			var startMultiple3 = $chaseNumberDialog.find('.startMultiple3').val();
			var interval3 = $chaseNumberDialog.find('.interval3').val();
			var multiple3 = $chaseNumberDialog.find('.multiple3').val();
			var periods3 = $chaseNumberDialog.find('.periods3').val();
			if(startMultiple3 == '' || interval3 == '' || multiple3 == '' || periods3 == ''){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '投注信息不完整',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
		}
		service.openDrawList(req,function(res){
			that.isDataEnd = true;
			if(res.code == 0){
				if( res.list.length == 0){
				app.noticeDialog.show({
						subTitle: "追号失败",
						text: "追号计划暂不支持",
						buttonName: "确定",
						autoHide: true,
						timeout: 3000
					});
					return false;
				}
				if(res.list[0].id < app.currentSocket.drawData.drawId)res.list.splice(0,1);
				that.firstId = parseInt(res.list[0].number);
				that.openDrawList = res.list;
				that.endId = parseInt(res.list[res.list.length -1].number);
				that.maxPeriods = res.list[res.list.length -1].number - res.list[0].number + 1;
				if(!state){
					that.inpValue();
					that.getInpValue();
				}else{
					that.getInpValue();
					that.inpValue();
				}
				that.CustomaryPeriods1 = that.periods1;
				that.CustomaryPeriods2 = that.periods2;
				that.CustomaryPeriods3 = that.periods3;
				if(that.tabType == 1 &&  that.periods1 > (that.endId  - that.firstId + 1)){
					that.periods1 = that.endId  - that.firstId + 1;
				}else if(that.tabType == 2 && that.periods2 > (that.endId  - that.firstId + 1)){
					that.periods2 = that.endId  - that.firstId + 1;
				}else if(that.tabType == 3 && that.periods3 > that.endId  - that.firstId){
					that.periods3 = that.endId  - that.firstId + 1;
				}
				that.timeList = [];
				for(var b = 0; b < res.list.length; b++){
					that.timeList[res.list[b].number] = res.list[b].endTime
				};
				that.changeMultiple();
				that.setHtml();//生成HTML；
				that.changePeriods();//自动调整期数
			}else{
				Util.errorModel(res.code,'追号失败');
			}

		});
	};
	ChaseNumberDialog.prototype.setHtml = function(){
		var that = this;
		that.dataList();
		var hadeHtml = app.currentModule.chaseNumber.chaseNumberDialog.zone;
		if(that.tabType == 1){
			var lrHtml = that.createTable(that.lrData);
			hadeHtml.find('.lrData').empty();
			hadeHtml.find('.lrData').append(lrHtml);
		}else if(that.tabType == 2){
			var tbHtml = that.createTable(that.tbData);
			hadeHtml.find('.tbData').empty();
			hadeHtml.find('.tbData').append(tbHtml);
		}else if(that.tabType == 3){
			var fbHtml = that.createTable(that.fbData);
			hadeHtml.find('.fbData').empty();
			hadeHtml.find('.fbData').append(fbHtml);
		}
	};
	ChaseNumberDialog.prototype.serviceChaseBack = function(res,req,chaseItems){
		var that = this;
		that.comfirmBet.recover();
		that.comfirmBet.enabled();
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
			if(req.batch)modelZone.showDot(chaseItems.length * req.batch.length);
			if(!req.batch)modelZone.showDot(chaseItems.length);
			var okCallback = function () {
				that.hide();
				app.currentModule.comfirmBet.confirmBetButton.disabled();
				app.currentModule.chaseNumber.addChaseNumber.disabled();
				app.currentModule.chaseNumber.addChaseNumber2.disabled();
				app.currentModule.chaseNumber.addChaseNumber3.disabled();
				app.currentModule.bettingOrder.removeAllList();
			};
			app.noticeDialog.show({
				subTitle: '投注成功',
				text: '您可以通过"投注记录"查询您的投注记录!',
				buttonName: '关闭',
				autoHide: true,
				timeout: 5000
			});
			okCallback();
		}else{
			Util.errorModel(res.code,'投注失败');
		}
	}
	ChaseNumberDialog.prototype.bindEvents = function () {
		var ul;
		var stick;
		var left;
		var content;
		var content1;
		var content2;
		var content3;
		var button;
		var inpChange;
		var that = this;
		var table;
		var clearChaseNumberButton;
		that.tabType = 1;
		this.zone = $('#' + this.id);

		ul        = this.zone.find('ul');
		stick     = this.zone.find('.stick');
		inpChange = this.zone.find('.form-control');
		content   = this.zone.find('.cont');
		content1  = this.zone.find('.content1');
		content2  = this.zone.find('.content2');
		content3  = this.zone.find('.content3');
		button    = this.zone.find('.add-chase-number');
		table     = this.zone.find('table');
		clearChaseNumberButton = this.zone.find('.clear-chase-number');

		ul.delegate('li', 'click', function () {
			ul.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();

			if ($(this).hasClass('tab1')) {
				that.tabType = 1;
				left = 0;
				content1.show();
			} else if ($(this).hasClass('tab2')) {
				that.tabType = 2;
				left = '100px';
				content2.show();
			} else {
				that.tabType = 3;
				left = '200px';
				content3.show();
			}

			stick.css('left', left);
		});
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			if($(this).hasClass('startMultiple2') || $(this).hasClass('startMultiple3')){
				if($(this).val() == 0)
					$(this).val('');
				if($(this).val() > that.maxCount)
					$(this).val(that.maxCount)
			}
			if($(this).hasClass('periods1') || $(this).hasClass('periods2') || $(this).hasClass('periods3')){
				if($(this).val() == 0)
					$(this).val('');
			}
		});
		this.zone.delegate('.im-checkbox', 'click', function (e) {
			$(this).toggleClass('checked');
			var Allmoney = parseInt($(this).parents('tr').find('.td-width:nth-child(4)').text().replace(/,/g, ""));
			var $zone = $('#' +　that.id);
			var index = $(this).parents('tr').index();
			if(isNaN(Allmoney)) return false;
			if($(this).hasClass('checked')){
				if(that.tabType == 1){
					that.checkedIndex[0].remove(index)
				}else if(that.tabType == 2){
					that.checkedIndex[1].remove(index)
				}else{
					that.checkedIndex[2].remove(index)
				}
			}else{
				if(that.tabType == 1){
					that.checkedIndex[0].push(index)
				}else if(that.tabType == 2){
					that.checkedIndex[1].push(index)
				}else{
					that.checkedIndex[2].push(index)
				}
			}
			if(that.tabType == 1){
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[0].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[0][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.lrRowData.length - that.checkedIndex[0].length;
				var val2 = that.lrRowData.length - that.checkedIndex[0].length;
				var val3 = Util.addDotToNumber(parseInt(that.lrAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,1);
			}else if(that.tabType == 2){
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[1].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[1][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.tbRowData.length - that.checkedIndex[1].length;
				var val2 = that.tbRowData.length - that.checkedIndex[1].length;
				var val3 = Util.addDotToNumber(parseInt(that.tbAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,2);
			}else{
				var Allmoney = 0;
				for(var i = 0; i < that.checkedIndex[2].length;i++){
					Allmoney += parseInt($(this).parents('tr').parent().children().eq(that.checkedIndex[2][i]).children().eq(3).text().replace(/,/g, ""))
				}
				var val1 = that.fbRowData.length - that.checkedIndex[1].length;
				var val2 = that.fbRowData.length - that.checkedIndex[1].length;
				var val3 = Util.addDotToNumber(parseInt(that.fbAmount) - Allmoney);
				that.setContentVal(val1,val2,val3,3);
			}
		});
		this.zone.find('.chase-dialog-add-chase-number').click(function () {
			that.refreshDialog(true);
		});

		var clickOrtouch = Util.isMobile.any()?'touchstart': 'click';
		
		this.zone.find('.cancel-bet-button').bind(clickOrtouch, function () {
			var okCallback = function () {
				that.hide();
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

		var comfirmBet = function(){
			var stopUtilWin;
			var market = app.currentSocket.market,
				gameCode = app.currentSocket.gameCode,
				filterData = Global.betZoneData.filter(function(item, index) {
					return item.market == market && item.gameCode == gameCode;
				})[0];
			if(filterData.data.length != 1 &&　that.tabType == 1){
				for(var i = 0; i < filterData.data.length - 1; i++){
					if(filterData.data[0][14].betType != filterData.data[i+1][14].betType || filterData.data[0][14].betUnit != filterData.data[i+1][14].betUnit){
						app.noticeDialog.show({
							subTitle : '追号失败',
							text: '利润率追号不支持混投请确保您的投注都为同一玩法类型且元角模式一致',
							buttonName: '确定',
							autoHide: true,
							timeout: 5000
						});
						return false
					}
				}
				//app.noticeDialog.show({
				//	subTitle : '追号失败',
				//	text: '追号计划不支持混投',
				//	buttonName: '确定',
				//	autoHide: true,
				//	timeout: 5000
				//});
				//return false
			}
			var chaseItems = [];
			var idNumberList = {};
			for(var i = 0; i < that.openDrawList.length; i++){
				idNumberList[that.openDrawList[i].number] = that.openDrawList[i].id
			}
			//判断是否选中中奖后停止追号
			if(that.tabType == 1){
				var data = that.lrData.rowData;
				var isRemove = that.checkedIndex[0];
				stopUtilWin = that.zone.find('.content1 .operations .im-checkbox').hasClass('checked')
			}else if(that.tabType == 2){
				var data = that.tbData.rowData;
				var isRemove = that.checkedIndex[1];
				stopUtilWin = that.zone.find('.content2 .operations .im-checkbox').hasClass('checked')
			}else{
				var data = that.fbData.rowData;
				var isRemove = that.checkedIndex[2];
				stopUtilWin = that.zone.find('.content3 .operations .im-checkbox').hasClass('checked')
			}
			//获得追号chaseItem
			for(var i = 0; i< data.length; i++){
				if(isRemove.indexOf(i) < 0){
					chaseItems.push({
						"drawId": idNumberList[data[i][1]], //draw id
						"drawNumber": data[i][1], //draw number
						"multiple": data[i][2],
						"betAmount": data[i][3].replace(/,/g,'')
					})
				}
			}
			if(chaseItems.length == 0){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '追号计划不能为空',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
			var batch = function(){
				var data = [];
				for(var i = 0; i < filterData.data.length; i++){
					data.push({
						"betType": filterData.data[i][5],
						"items": filterData.data[i][11],
						"odds": filterData.data[i][10],
						"comm":  filterData.data[i][6],
						"betCount": filterData.data[i][2],
						"betUnit": filterData.data[i][9],
						"prizeGroup":filterData.data[i][14].prizeGroup,
						"chaseItems": chaseItems
					});
					if(filterData.data[i][14].anyDrawTypes) data[i].anyDrawTypes = filterData.data[0][14].anyDrawTypes;
				}
				return data;
			};


			if(!that.comfirmBet.zone)that.comfirmBet.zone = $('.'+that.comfirmBet.id);
			that.comfirmBet.inProgress();
			that.comfirmBet.disabled();
			if(filterData.data.length == 1){
				//单个追号
				var req ={
					"stopUtilWin":stopUtilWin,
					"gameCode": app.currentSocket.gameCode,
					"market": filterData.market,
					"chaseItems": chaseItems,
					"betType": filterData.data[0][5],
					"items": filterData.data[0][11],
					"odds": filterData.data[0][10],
					"comm":  filterData.data[0][6],
					"betCount": filterData.data[0][2],
					"betUnit": filterData.data[0][9],
					"prizeGroup":filterData.data[0][14].prizeGroup
				};
				if(filterData.data[0][14].anyDrawTypes) req.anyDrawTypes = filterData.data[0][14].anyDrawTypes;
				service.chaseNumber(req,function(res){
					that.serviceChaseBack(res,req,chaseItems);
				})
			}else{
				//多个追号
				var req ={
					"stopUtilWin":stopUtilWin,
					"gameCode": app.currentSocket.gameCode,
					"market": filterData.market,
					'batch':batch()
				};
				service.multipleChase(req,function(res){
					that.serviceChaseBack(res,req,chaseItems);
				})
			}


		};
		//生成追号计划  确定投注
		this.zone.find('.comfirm-bet-button').bind(clickOrtouch, function () {
			if (!that.confirmDialog2) {
				that.confirmDialog2 = new ConfirmDialog({
					okCallback: function () {
						comfirmBet();
					}
				});
				$('body').append(that.confirmDialog2.getDom());
				that.confirmDialog2.bindEvents();
			}
			//判断是否选中中奖后停止追号
			if(that.tabType == 1){
				var data = that.lrData.rowData;
				var isRemove = that.checkedIndex[0];
			}else if(that.tabType == 2){
				var data = that.tbData.rowData;
				var isRemove = that.checkedIndex[1];
			}else{
				var data = that.fbData.rowData;
				var isRemove = that.checkedIndex[2];
			}
			//获得追号chaseItem
			var drawNumber = 0;
			var money = 0;
			var issue = 0;
			for(var i = 0; i< data.length; i++){
				if(isRemove.indexOf(i) < 0){
					if(drawNumber == 0){
						drawNumber = data[i][1];
					}
					money += parseFloat(data[i][3].replace(/,/g, ""));
					issue += 1;
				}
			}
			if(issue == 0){
				app.noticeDialog.show({
					subTitle : '追号失败',
					text: '追号计划不能为空',
					buttonName: '确定',
					autoHide: true,
					timeout: 5000
				});
				return false
			}
			that.confirmDialog2.showConfirm(drawNumber,money,issue)
		});

		clearChaseNumberButton.click(function () {
			that.zone.find('.cont:visible table tbody').html('');
			if(that.tabType == 1){
				that.lrData.rowData = [];
				that.setContentVal(0,0,0,1);
			}else if(that.tabType == 2){
				that.tbData.rowData = [];
				that.setContentVal(0,0,0,2);
			}else{
				that.fbData.rowData = [];
				that.setContentVal(0,0,0,3);
			}
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ChaseNumberDialog = ChaseNumberDialog;
}());
