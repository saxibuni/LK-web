/*
 *   号码投注盘  NumberPlate.js   parentPlateId: 1, 3, 7, 8
 *   包含了： 普通投注盘， 趣味投注盘， 区间投注盘
 */

(function () {
	function NumberPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = this.opt.data;
		this.el   = this.initDom(this.data);
		this.operationBall = [
			['0','1','2','3','4','5','6','7','8','9'],
			['5','6','7','8','9'],
			['0','1','2','3','4'],
			['1','3','5','7','9'],
			['0','2','4','6','8']
		];
	}

	NumberPlate.prototype.initDom = function (data) {
		if (data.parentPlate === 1) {
			return this.createParentPlate1(data);
		} else if (data.parentPlate === 3){
			return this.createParentPlate3(data);
		} else if (data.parentPlate === 7){
			return this.createParentPlate7(data);
		} else if (data.parentPlate === 8) {
			return this.createParentPlate8(data);
		}
	};

	NumberPlate.prototype.getDom = function () {
		return this.el;
	};

	NumberPlate.prototype.createParentPlate1 = function (data) {
		var i;
		var j;
		var temp = '';

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row" data-index="' + i + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									((data.names && data.names.length >0 )?data.names[i]: '' ) + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
				temp += 			'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' +
									'</div>';
			}
				
			temp +=				'</div>' +
							'</div>' +
						'</div>';
			}

			temp +=	'</div>';


			temp +=	'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row" data-index="' + i + '">';

			for (j = 0; j < data.opes.length; j++) {
				if (j === 5) {
					temp += 	'<div class="col-md-2 operation-item" data-value="' + j + '">' + 
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
				} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
				}
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate3 = function (data) {
		var i;
		var j;
		var temp = '';

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-11 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=			'<div class="col-md-11 center-ball">' +
								'<div class="row">';

			for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
				temp +=		 		'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' + 
									'</div>';
			}
				
			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate7 = function (data) {
		var i;
		var j;
		var temp = '';
		var names = data.names;

		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < names.length; i++) {
			temp +=		'<div class="row' + ((i < 2)? ' funrow': ' nofunrow') + '" data-index="' + i + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									names[i] + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			if (i < 2) {
				temp += 			'<div class="col-md-3 fun-ball-item" data-value="Small">' +
										'<span>' +
											'小(0-4)' +
										'</span>' +
									'</div>' +

									'<div class="col-md-3 fun-ball-item" data-value="Big">' +
										'<span>' +
											'大(5-9)' +
										'</span>' +
									'</div>';
			} else {
				for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
					temp += 		'<div class="col-md-1 ball-item" data-value="' + j + '">' + 
										'<span>' +
											j +
										'</span>' + 
									'</div>';
				}
			}

			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>';
		temp +=		'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)? ' funrow': ' nofunrow') + '" data-index="' + i + '">';

			if (i >= 2) {
				for (j = 0; j < data.opes.length; j++) {
					if (j === 5) {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' + 
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + j + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					}
				}
			} else {
				temp += 		'<div class="col-md-2 operation-item">' + 
									'<span class="blank"></span>' +
								'</div>';
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.createParentPlate8 = function (data) {
		var i;
		var j;
		var temp = '';
		var zoneNames = ['一区(0,1)', '二区(2,3)', '三区(4,5)', '四区(6,7)', '五区(8,9)'];
		var dataIndexValue =['0','1','2','3','4','5'];
		var dataValue = ['R1','R2','R3','R4','R5'];
		temp += '<div class="row number-plate" id="' + this.id + '">' +

					'<div class="col-md-7 betting-number">';

		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)?' zonerow': ' nozonerow') + '" data-index="' + dataIndexValue[i] + '">' +
							'<div class="col-md-2 name-item">' +
								'<span>' +
									data.names[i] + ':' +
								'</span>' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

			if (i < 2) {
				for (j = 0; j < zoneNames.length; j++) {
					temp += 		'<div class="col-md-2 zone-ball-item" data-value="' + dataValue[j] + '">' +
										'<span>' +
											zoneNames[j] +
										'</span>' +
									'</div>';
				}
			} else {
				for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
					temp += 		'<div class="col-md-1 ball-item" data-value="' + j + '">' +
										'<span>' +
											j +
										'</span>' + 
									'</div>';
				}
			}

			temp +=				'</div>' +
							'</div>' +
						'</div>';
		}

		temp +=		'</div>';
		temp +=		'<div class="col-md-5 betting-operation">';
			
		for (i = 0; i < data.numbers.length; i++) {
			temp +=		'<div class="row' + ((i < 2)?' zonerow': ' nozonerow') + '" data-index="' + dataIndexValue[i] + '">';

			if (i >= 2) {
				for (j = 0; j < data.opes.length; j++) {
					if (j === 5) {
						temp += '<div class="col-md-2 operation-item" data-value="' + dataIndexValue[j] + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					} else {
						temp += '<div class="col-md-2 operation-item" data-value="' + dataIndexValue[j] + '">' +
									'<span>' +
										data.opes[j] +
									'</span>' +
								'</div>';
					}
				}
			} else {
				temp += 		'<div class="col-md-2 operation-item">' + 
									'<span class="blank"></span>' +
								'</div>';
			}

			temp += 	'</div>';
		}

		temp +=		'</div>' +
				'</div>';

		return temp;
	};

	NumberPlate.prototype.showOperations = function () {
		this.zone.find('.betting-operation').show();
	};

	NumberPlate.prototype.hideOperations = function () {
		this.zone.find('.betting-operation').hide();
	};

	NumberPlate.prototype.showAllRows = function (opt) {
		this.zone.find('.betting-number .row').show();
		this.zone.find('.betting-operation .row').show();
	};

	NumberPlate.prototype.showPlate = function (opt) {
		var i;
		var start;
		var end;
		var visibleRows;
		var funrows;
		var nofunrows;
		var zonerows;
		var nozonerows;
		var len;
		var len2;
		var names = opt.plate.names;
		var namespans;

		this.methodid = opt.methodid;

		this.zone.show();

		if (this.data.parentPlate === 1) {
			len = names.length;

			this.showAllRows();
			this.zone.children('.betting-number').children('.row:gt(' + (len-1) + ')').hide();
			this.zone.children('.betting-operation').children('.row:gt(' + (len-1) + ')').hide();
			// visibleRows = this.zone.children('.betting-number').children('.row:visible');
			visibleRows = this.zone.children('.betting-number').children('.row:lt(' + len + ')');

			for (i = 0; i < len; i++) {
				if (names[i]) {
					$(visibleRows[i]).find('.name-item span').text(names[i] + ':');
				} else {
					$(visibleRows[i]).find('.name-item span').text('');
				}
			}
		} else if (this.data.parentPlate === 3) {
			start = opt.plate.numbers[0].start;
			end   = opt.plate.numbers[0].end;
			this.zone.find('.betting-number .ball-item').show();
			this.zone.find('.betting-number .ball-item:lt(' + start + ')').hide();
			this.zone.find('.betting-number .ball-item:gt(' + end + ')').hide();
		} else if (this.data.parentPlate === 7) {
			len  = Object.keys(opt.plate.funrow).length;
			len2 = names.length - len;

			this.zone.find('.betting-number .funrow').show();
			this.zone.find('.betting-number .nofunrow').show();
			this.zone.find('.betting-operation .funrow').show();
			this.zone.find('.betting-operation .nofunrow').show();

			this.zone.find('.betting-number .funrow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-number .nofunrow:gt(' + (len2-1) + ')').hide();
			this.zone.find('.betting-operation .funrow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-operation .nofunrow:gt(' + (len2-1) + ')').hide();

			visibleRows = this.zone.children('.betting-number').children('.row:visible');
			namespans = visibleRows.find('.name-item span');

			for (i = 0; i < names.length; i++) {
				$(namespans[i]).text(names[i]);
			}
		} else if (this.data.parentPlate === 8) {
			len  = Object.keys(opt.plate.zonerow).length;
			len2 = names.length - len;

			this.zone.find('.betting-number .zonerow').show();
			this.zone.find('.betting-number .nozonerow').show();
			this.zone.find('.betting-operation .zonerow').show();
			this.zone.find('.betting-operation .nozonerow').show();

			this.zone.find('.betting-number .zonerow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-number .nozonerow:gt(' + (len2-1) + ')').hide();
			this.zone.find('.betting-operation .zonerow:gt(' + (len-1) + ')').hide();
			this.zone.find('.betting-operation .nozonerow:gt(' + (len2-1) + ')').hide();

			visibleRows = this.zone.children('.betting-number').children('.row:visible');
			namespans = visibleRows.find('.name-item span');

			for (i = 0; i < names.length; i++) {
				$(namespans[i]).text(names[i]);
			}
		}
	};

	NumberPlate.prototype.hide = function () {
		$('.number-plate-unit-group').hide();
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};

	NumberPlate.prototype.bindEvents = function () {
		var opeval;
		var rowIndex;
		var numberRows;
		var targetRow;
		var that = this;
		var zone = $('#' + this.id);

		numberRows = zone.find('.betting-number').children('.row');

		this.zone = zone;
		this.rows = numberRows;

        zone.delegate('.ball-item', 'click', function() {
            BetRuleInstance.checkSelect($(this));
			if (app.currentModule.playingNav.currentPlate.zone.find('.betting-operation').length >0)
				that.setOperationBall($(this));
        });

		zone.delegate('.fun-ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});

		zone.delegate('.zone-ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});

		zone.delegate('.operation-item', 'click', function () {
			opeval    = parseInt($(this).attr('data-value'));
			rowIndex  = parseInt($(this).parent('.row').attr('data-index'));
			targetRow = $(numberRows[rowIndex]);

			if (that['randomInterval'+ targetRow.index()]) {
				clearInterval(that['randomInterval'+ targetRow.index()]);
                that['randomInterval'+ targetRow.index()] = undefined;				
				targetRow.find('.ball-item').removeClass('run-item');
			}

			if (targetRow.hasClass('zonerow') || targetRow.hasClass('funrow')) {
				return;
			}

			if ($(this).hasClass('selected') && opeval!== 5) {
				$(this).removeClass('selected');
				targetRow.find('.ball-item').removeClass('selected');
				that.setBetResult(targetRow, opeval);
				return;
			}
			
			$(this).siblings('.operation-item').removeClass('selected');

			if (opeval!== 5) {
				$(this).addClass('selected');
			}

			that.processOperations(targetRow, opeval);
			that.setBetResult(targetRow, opeval);
		});
	};

	NumberPlate.prototype.randomAnimation = function (targetRow) {
		var index;
		var that = this;
		var i = 0;

		if(that['randomInterval'+ targetRow.index()]!= undefined) return false;
		targetRow.find('.ball-item').removeClass('selected');
		index = Math.floor(Math.random() * 10);
		that.index = [index] || [];
		targetRow.find('.ball-item').removeClass('run-item');
		if(index.length == 0) return false;
		this['randomInterval'+ targetRow.index()] = setInterval(function () {
			if (i < index) {
				targetRow.find('.ball-item').removeClass('run-item');
				targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
			} else {
				targetRow.find('.ball-item').removeClass('run-item');
				targetRow.find('.ball-item:eq(' + i + ')').addClass('selected');
				clearInterval(that['randomInterval'+ targetRow.index()]);
				that['randomInterval'+ targetRow.index()] = undefined;
				return;
			}

			i++;
		}, (i+1)*40);
	};

	NumberPlate.prototype.processOperations = function (targetRow, opeval) {
		var i;
		var mid = 5;

		switch (opeval) {
			case 0:
				targetRow.find('.ball-item').addClass('selected');
				break;
			case 1:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:gt(4)').addClass('selected');
				break;
			case 2:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:lt(5)').addClass('selected');
				break;
			case 3:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:odd').addClass('selected');
				break;
			case 4:
				targetRow.find('.ball-item').removeClass('selected');
				targetRow.find('.ball-item:even').addClass('selected');
				break;
			case 5:
				//if (this.randomInterval) {
				//	return;
				//}
				this.mathNum(targetRow);
				//this.randomAnimation(targetRow);
				break;
			default:
				break;
		}
	};

	NumberPlate.prototype.setBetResult = function (targetRow, opeval) {
		var it = BetRuleInstance;
		var that = this;
		var resultIndex = it.fixIndex(targetRow);
		var arr1 = it.result[resultIndex];
		var arr2 = this.operationBall[opeval];
		if (opeval != 5) {
			if (arr1.eqaul(arr2)) 
				it.result[resultIndex] = [];
			else 
				it.result[resultIndex] = arr2.slice(0);
			BetAlgorithm.getCount(it.result, it.betType);				
		}else {
			//随机动画
			it.result[resultIndex] = [];
			for(var i = 0; i < that.index.length;i++){
				it.result[resultIndex].push(that.index[i].toString())
			}
			BetAlgorithm.getCount(it.result, it.betType);
		}
	}

	NumberPlate.prototype.setOperationBall = function (target) {
		var it = BetRuleInstance;
		var rowTarget = target.parent('.row').parent().parent();
		var rowIndex  = parseInt(rowTarget.attr('data-index'));
		var resultIndex = it.fixIndex(rowTarget);
		for(var i = 0; i < 5; i++) {
			var operationTarget = this.zone
					.children('.betting-operation')
					.children('.row:eq(' + rowIndex + ')')
					.children('.operation-item:eq(' + i + ')')
			if (it.result[resultIndex].eqaul(this.operationBall[i])) {
				operationTarget.addClass('selected');
			}else {
				operationTarget.removeClass('selected');
			}
		}

	}

	NumberPlate.prototype.mathNum = function (targetRow) {
		var that = this;
		this.mathFun(targetRow);
		var betType = BetRuleInstance.betType;
		var numList = [
			['G5X120'],//机选5个
			['G4X24','A4G4X24'],//机选4个
			['G3X6F','G3X6M','G3X6L','A3N5','A3G3X6'],//机选3个
			['G4X6','G3X3F','G3X3M','G3X3L','G2L','G2F','A2L3','A2F3','A2M3','A2L4','A2G2','A4G4X6','A2N5','A3G3X3'],//机选2个
			['G5X60'],// 1/3
			['G5X30'],//2/1
			['G4X12','A4G4X12','G5X20'],//1/2
			['G5X10','G5X5','G4X4','A4G4X4']//1/1
		];
		var numIndexType;
		for(var i = 0; i < numList.length; i++){
			if(numList[i].indexOf(betType) >= 0){
				numIndexType = i;
				break;
			}
		}
		switch (numIndexType) {
			case 0:
				that.mathManyRandom(5);
				break;
			case 1:
			    that.mathManyRandom(4);
				break;
			case 2:
				that.mathManyRandom(3);
				break;
			case 3:
				that.mathManyRandom(2);
				break;
			case 4:
				that.mathRandom('1_3');
				break;
			case 5:
				that.mathRandom('2_1');
				break;
			case 6:
				that.mathRandom('1_2');
				break;
			case 7:
				that.mathRandom('1_1');
				break;
			default:
				this.randomAnimation(targetRow);
				break;
		}
	};
	NumberPlate.prototype.mathFun = function(targetRow){
		var that = this;
		this.mathManyRandom = function(typeNum){
			var index = [];
			var manyNum = 0;
			for(var i = 0; ;i++){
				var num = Math.floor(Math.random() * 10);
				if(manyNum == typeNum)break;
				if(index.indexOf(num) < 0){
					index.push(num);
					manyNum++;
				}
			}
			that.addIndexAnimation(index.sort());
		};
		this.mathRandom = function(type){
			var ruleIndex = BetRuleInstance.fixIndex(targetRow);
			var ruleType = type.split('_')[ruleIndex];
			var dataList = BetRuleInstance.result;
			var index = [];
			var manyNum = 0;
			var a;
			if(ruleIndex == 0){
				a = 1;
			}else{
				a = 0;
			}
			for(var i = 0; ;i++){

				var num = Math.floor(Math.random() * 10);
				if(manyNum == ruleType)break;
				if(i > 100){
					if(dataList[ruleIndex].join(' ').indexOf(num) >=0)continue;
					index.push(num);
					manyNum++
				}
				if(dataList[a].join(' ').indexOf(num) >=0)continue;
				if(index.indexOf(num) < 0){
					index.push(num);
					manyNum++;
				}
			}
			that.addIndexAnimation(index.sort());
		};
		this.addIndexAnimation = function (index) {
			var i = 0;
			if(that['randomInterval'+ targetRow.index()] != undefined) return false;
			that.index = index || [];
			targetRow.find('.ball-item').removeClass('selected');
			if(index.length == 0) return false;
			that['randomInterval'+ targetRow.index()] = setInterval(function () {
				if (i < 10) {
					targetRow.find('.ball-item').removeClass('run-item');
					targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
				} else {
					targetRow.find('.ball-item').removeClass('run-item');
						for(var x = 0; x<index.length;x++){
							targetRow.find('.ball-item:eq(' + index[x] + ')').addClass('selected');
						}
						clearInterval(that['randomInterval'+ targetRow.index()]);
						that['randomInterval'+ targetRow.index()] = undefined
				}
				i++;
			}, (i+1)*40);
		}
	};
	window.NumberPlate = NumberPlate;
}());

