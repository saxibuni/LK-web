(function () {
	function ChaseNumber (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = [];
		this.tabTypeChaseNum = 1;
		this.el = this.initDom(this.data);
	}

	ChaseNumber.prototype.initDom = function (data) {
		var temp;

		this.addChaseNumber = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number'
		});
		this.addChaseNumber2 = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number2'
		});
		this.addChaseNumber3 = new IMButton({
			text: '生成追号计划',
			className: 'add-chase-number',
			id: this.id + '-add-chase-number3'
		});

		temp = 	'<div class="chase-number" id="' + this.id + '">' +
					'<ul class="tabs">' +
						'<li class="tab1 active" data-value="1"><span>利润追号</span></li>' +
						'<li class="tab2" data-value="2"><span>同倍追号</span></li>' +
						'<li class="tab3" data-value="3"><span>翻倍追号</span></li>' +
					'</ul>' +

					'<div class="stick"></div>' +

					'<div class="cont content1">' + 
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">最低收益率:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control interest1" value="50">' +
								    '</div>' +
									'<label class="col-sm-1 name">%</label>'+
								'</div>' +
							'</div>' +

							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">追号期数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control periods1" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber.getDom() +
						'</div>' +
					'</div>' +
					'<div class="cont content2">' + 
						'<div class="row">' +
							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">起始倍数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control startMultiple2" value="1">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">追号期数:</label>' +
								    '<div class="col-sm-6">' +
								      	'<input type="text" class="form-control periods2" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber2.getDom() +
						'</div>' +
					'</div>' +
					'<div class="cont content3">' +
						'<div class="row row-gap">' +
							'<div class="col-md-6 first">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">起始倍数:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control startMultiple3" value="1">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6 second">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">隔:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control interval3" value="2">' +
								    '</div>' +
								'</div>' +
							'</div>' +

						'</div>' +

						'<div class="row">' +
							'<div class="col-md-6 first">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">期倍x</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control multiple3" value="2">' +
								    '</div>' +
								'</div>' +
							'</div>' +

							'<div class="col-md-6 second">' +
								'<div class="form-group">' +
								    '<label class="col-sm-6 name">期数:</label>' +
								    '<div class="col-sm-5">' +
								      	'<input type="text" class="form-control periods3" value="10">' +
								    '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							this.addChaseNumber3.getDom() +
						'</div>' +
					'</div>' +
				'</div>';

		return temp;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	};

	ChaseNumber.prototype.getDom = function () {
		return this.el;
	};

	ChaseNumber.prototype.bindEvents = function () {
		var ul;
		var stick;
		var left;
		var content;
		var content1;
		var content2;
		var content3;
		var callback;
		var button;
		var tabValue;
		var inpChange;
		var buttonCallback;
		var that = this;

		this.zone = $('#' + this.id);

		ul        = this.zone.children('ul');
		inpChange = this.zone.find('.form-control');
		stick     = this.zone.children('.stick');
		content   = this.zone.children('.cont');
		content1  = this.zone.children('.content1');
		content2  = this.zone.children('.content2');
		content3  = this.zone.children('.content3');
		button    = this.zone.find('.add-chase-number');

		ul.delegate('li', 'click', function () {
			ul.children('li').removeClass('active');
			$(this).addClass('active');
			content.hide();
			
			if ($(this).hasClass('tab1')) {
				left = 0;
				that.tabTypeChaseNum = 1;
				content1.show();
			} else if ($(this).hasClass('tab2')) {
				left = '33.3%';
				that.tabTypeChaseNum = 2;
				content2.show();
			} else {
				left = '66.6%';
				that.tabTypeChaseNum = 3;
				content3.show();
			}

			stick.css('left', left);
		});
		callback = function(){
			var market = app.currentSocket.market,
				gameCode = app.currentSocket.gameCode,
				filterData = Global.betZoneData.filter(function(item, index) {
					return item.market == market && item.gameCode == gameCode;
				})[0];
			if(filterData.data.length  == 0){
				var title = '生成失败';
				var message = "请先添加到投注篮子号码";
				var btnName = '确定';
				app.noticeDialog.show({
					subTitle : title,
					text: message,
					buttonName: btnName,
					autoHide: true,
					timeout: 3000
				});
				return false
			}else if(filterData.data.length != 1 && that.tabTypeChaseNum == 1){
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
			tabValue = parseInt(ul.find('li.active').attr('data-value'));
			var $chaseNumber = app.currentModule.chaseNumber.zone;
			if(tabValue == 1){
				var interest1 = $chaseNumber.find('.interest1').val();//利润-最低收益
				var periods1 = $chaseNumber.find('.periods1').val();//利润-追号期数
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
			}else if(tabValue == 2){
				var startMultiple2 = $chaseNumber.find('.startMultiple2').val();//同倍-起始倍数
				var periods2 = $chaseNumber.find('.periods2').val();//同倍-追号期数
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
				var startMultiple3 = $chaseNumber.find('.startMultiple3').val();
				var interval3 = $chaseNumber.find('.interval3').val();
				var multiple3 = $chaseNumber.find('.multiple3').val();
				var periods3 = $chaseNumber.find('.periods3').val();
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
			if (!that.chaseNumberDialog) {
				that.chaseNumberDialog = new ChaseNumberDialog({id: that.id + '-dialog'});
				$('body').append(that.chaseNumberDialog.getDom());
				that.chaseNumberDialog.bindEvents();
				that.chaseNumberDialog.inpValue();
				that.chaseNumberDialog.refreshDialog(false, tabValue);
			}else{
				that.chaseNumberDialog.refreshDialog(false, tabValue)
			}
			// that.chaseNumberDialog.show({'tab': tabValue});
		};
		inpChange.on('input',function(e){
			if(e.keyCode == 37 || e.keyCode == 38|| e.keyCode == 39 || e.keyCode == 40)return false;
			$(this).val($(this).val().replace(/\D/gi,""));
			if($(this).hasClass('periods1') || $(this).hasClass('periods2') || $(this).hasClass('periods3')){
				if($(this).val() == '')
					$(this).val('');
			}
			if($(this).hasClass('startMultiple2') || $(this).hasClass('startMultiple3')){
				if($(this).val() == '')
					$(this).val('');
			}
		});
		this.addChaseNumber.bindEvents(callback.bind(this));
		this.addChaseNumber2.bindEvents(callback.bind(this));
		this.addChaseNumber3.bindEvents(callback.bind(this));
		this.addChaseNumber.disabled();
		this.addChaseNumber2.disabled();
		this.addChaseNumber3.disabled();

	};

	window.ChaseNumber = ChaseNumber;
}());
