/*
 *  玩法导航区  PlayingNav.js
 */

(function () {
	function PlayingNav (opt) {
		var parentPlateId;

		this.opt   		= opt;
		this.id    		= opt.id;
		this.gameCode 	= opt.gameCode;
		this.market   = opt.market;
		this.data  		= opt.playingNavData;
		this.dict1 		= {};  //玩法群所对应的玩法组
		this.dict2 		= {};  //玩法所对应的投注盘

		this.plateDict       = this.formatPlateDict(this.data);
		this.currentMethodId = this.data[0].playingGroups[0].playingMethods[0].methodId;
		parentPlateId        = this.plateDict[this.currentMethodId].plate.parentPlate;
		this.currentPlate    = this.createParentPlate(parentPlateId, this.currentMethodId);
		this.unitGroup       = new UnitGroup({id: this.id + 'unit-group'});
		this.createPlayingGroups();

		this.playingDescriptionTip = new PlayingDescriptionTip({id: 'description-tip-' + this.id});
		this.setPlayingIntro(this.currentMethodId);

		this.el = 	'<div class="container-fluid playing-nav" id="' + this.id + '">' +

						this.createPlayingFamilys() +

						'<div class="row top-gap">' +
							'<div class="col-md-9 playing-groups">' +
								this.dict1[Object.keys(this.dict1)[0]] +
							'</div>' +
							'<div class="col-md-2 playing-description">' +
								'<span class="tip"></span>' +
								'<span class="text">选号规则</span>' +
								this.playingDescriptionTip.getDom() +
							'</div>' +
						'</div>' +

						'<hr class="divider">' +

						'<div class="unit-group-wrapper">' +
							this.unitGroup.getDom() +
						'</div>' +

						this.currentPlate.getDom() +

					'</div>';
	}

	PlayingNav.prototype.getDom = function () {
		return this.el;
	};

	PlayingNav.prototype.createPlayingFamilys = function () {
		var i;
		var temp = 	'<div class="row playing-family">';

		for (i = 0; i < this.data.length; i++) {
			if (i === 0) {
				temp += '<div class="col-md-1 family-item selected" data-value="' + this.data[i].familyName + '"><span>' + this.data[i].familyName + '</span></div>';
			} else {
				temp += '<div class="col-md-1 family-item" data-value="' + this.data[i].familyName + '"><span>' + this.data[i].familyName + '</span></div>';
			}
		}

		temp +=     	'<div class="stick"></div>';
		temp +=		'</div>';

		return temp;
	};

	PlayingNav.prototype.createPlayingGroups = function () {
		var i;
		var j;
		var k;
		var temp;
		var groupName;
		var colRatio;
		var playingGroups;
		var playingMethods;

		for (i = 0; i < this.data.length; i++) {
			temp = '';
			colRatio = this.data[i].colRatio;
			playingGroups = this.data[i].playingGroups;

			for (j = 0; j < playingGroups.length; j++) {
				playingMethods = playingGroups[j].playingMethods;

				temp += '<div class="row playing-group">' +
							'<div class="col-md-2 group-name">' +
								playingGroups[j].groupName + ': ' +
							'</div>' +

							'<div class="col-md-10">' +
								'<div class="row">';

				for (k = 0; k < playingMethods.length; k++) {
					temp += 		'<div class="col-md-' + colRatio + ' method-item' + (j===0&&k===0 ? ' selected': '') + '" data-value="' + playingMethods[k].methodId + '">' +
										'<span class="method-item-name">' +
											playingMethods[k].methodName +
										'</span>' +
									'</div>';
				}

				temp += 		'</div>' +
							'</div>' +
						'</div>';
			}

			this.dict1[this.data[i].familyName] = temp;
		}

		return temp;
	};

	PlayingNav.prototype.formatPlateDict = function () {
		var i;
		var j;
		var k;
		var temp1;
		var temp2;
		var temp3;
		var dict = {};

		for (i = 0; i < this.data.length; i++) {
			temp1 = this.data[i].playingGroups;

			for (j = 0; j < temp1.length; j++) {
				temp2 = temp1[j].playingMethods;

				for (k = 0; k < temp2.length; k++) {
					dict[temp2[k].methodId] = {
						methodId: temp2[k].methodId,
						plate: temp2[k].plate
					};
				}
			}
		}

		return dict;
	};

	PlayingNav.prototype.bindEvents = function () {
		var familyName;
		var playingGroups;
		var playingFamily;
		var method;
		var index;
		var gap = 8.33;
		var stick;
		var parentPlateId;
		var selectedItem;
		var that = this;


		this.zone     = $('#' + this.id);
		playingFamily = this.zone.find('.playing-family');
		playingGroups = this.zone.find('.playing-groups');
		stick         = playingFamily.children('.stick');

		playingFamily.delegate('.family-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			familyName = $(this).attr('data-value');
			playingFamily.children('.family-item').removeClass('selected');
			$(this).addClass('selected');
			index = $(this).index();
			stick.css('left', index*gap + '%');

			playingGroups.html(that.dict1[familyName]);
			selectedItem = playingGroups.children('.playing-group:eq(0)').find('.method-item:eq(0)');
			method = selectedItem.attr('data-value');
			that.showPlate(method);

			app.resetTreeHeight();
		});

		playingGroups.delegate('.method-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			method = $(this).attr('data-value');
			playingGroups.find('.method-item').removeClass('selected');
			$(this).addClass('selected');
			that.showPlate(method);

			app.resetTreeHeight();
		});

		if (Util.isMobile.any()) {
			this.zone.find('.playing-description').bind('touchstart', function () {
				if (!that.playingDescriptionTip.isOpen()) {
					that.playingDescriptionTip.show();
				} else {
					that.playingDescriptionTip.hide();
				}
			});
		} else {
			this.zone.find('.playing-description').mouseover(function () {
				that.playingDescriptionTip.show();
			}).mouseout(function () {
				that.playingDescriptionTip.hide();
			});
		}

		this.currentPlate.bindEvents();
		this.unitGroup.bindEvents();

		if (this.plateDict[this.currentMethodId].plate.unitGroup) {
			this.showUnitGroup();
		} else {
			this.hideUnitGroup();
		}
	};

	PlayingNav.prototype.showPlate = function (method) {
		var parentPlateId;

		parentPlateId = this.plateDict[method].plate.parentPlate;
		this.setPlayingIntro(method);
		if (!this['parentPlate' + parentPlateId]) {
			this.currentPlate = this.createParentPlate(parentPlateId);
			this.zone.append(this.currentPlate.getDom());
			this.currentPlate.bindEvents();
		} else {
			this.currentPlate = this['parentPlate' + parentPlateId];
		}

		this.hideAllPlate();
		this.currentPlate.showPlate(this.plateDict[method]);

		//下注盘切换 重新定义规则
		window.BetRuleInstance = new BetRule(method, this.gameCode);

		if (this.plateDict[method].plate.unitGroup) {
			this.showUnitGroup();
		} else {
			this.hideUnitGroup();
		}
	};

	PlayingNav.prototype.setPlayingIntro = function(method){
		var that = this;
		var title;
		var selectMethod;
		var winningRule;
		var filterData = RULE_CONFIG.filter(function(item,index){
			return item.betType == method && item.gameCode == that.gameCode ;
		})[0] || {};
		title = filterData.title;
		selectMethod = filterData.selectMethod;
		winningRule = filterData.winningRule;
		if(this.market == 'CN3D'&& method == 'N2PF'){
			title = "二星-直选-前二直选";
			selectMethod = selectMethod.replace(/千/g, '十').replace(/万/g, '百');
			winningRule = winningRule.replace(/千/g, '十').replace(/万/g, '百')
		}
		if(this.market == 'CN3D'&& method == 'N1'){
			selectMethod = selectMethod.replace('万位，', '').replace('千位，', '');
			winningRule = winningRule.replace(/万位、/g, '').replace(/千位、/g, '')
		}
		if(this.market == 'CN3D'&& (method == 'BSOEF2' || method == 'G2F' || method == 'N2SF')){
			selectMethod = selectMethod.replace(/千/g, '十').replace(/万/g, '百');
			winningRule = winningRule.replace(/千/g, '十').replace(/万/g, '百')
		}
		if(this.market == 'CN3D' && title.indexOf('后三') >= 0){
			title = title.replace(/后三/g, '三星')
		}
		this.playingDescriptionTip.data = {
			methodName:title,
			selectMethod:selectMethod,
			winningRule:winningRule
		};
	};

	PlayingNav.prototype.showUnitGroup = function () {
		var it = BetRuleInstance;
		this.unitGroup.clearChecks();
		var checkArray = ["A2S","A2T","A2G2","A2G2S","A2G2T","A3S","A3T","A3G3X3","A3G3X3S","A3G3X6","A3G3X6S","A3G3MX","A3G3T","A4S","A4G4X24","A4G4X12","A4G4X6","A4G4X4"]
		if($.inArray(it.betType,checkArray) > -1 && this.gameCode == 'LT'){
			var checkLength = it.betType.substr(1,1);
			for(var i=0 ;i<checkLength;i++){
				it.checkUnitGroup(this.unitGroup.zone.children("div").eq(4-i).children("div"));
			}
			this.zone.find('.unit-group-wrapper').show();
		}

	};

	PlayingNav.prototype.hideUnitGroup = function () {
		this.unitGroup.clearChecks();
		this.zone.find('.unit-group-wrapper').hide();
	};

	PlayingNav.prototype.hideAllPlate = function () {
		var i;

		for (i = 1; i <= 11; i++) {
			if (this['parentPlate' + i]) {
				this['parentPlate' + i].hide();
			}
		}
	};

	PlayingNav.prototype.createParentPlate = function (parentPlateId, betType) {
		var data;
		var id = this.id + '-parentPlate' + parentPlateId;

		if (parentPlateId === 1) {
			data = {
				parentPlate: 1,
				names: ['万位', '千位','百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};
			if (betType == 'N3PL') {  //福彩3D第一次创建表盘
				data = {
					parentPlate: 1,
					names: ['百位', '十位', '个位'],
					opes: ['全', '大', '小', '奇', '偶', '机选'],
					numbers: [
						{start:0 , end: 9},
						{start:0 , end: 9},
						{start:0 , end: 9}
					]
				};
			}

			this.parentPlate1 = new NumberPlate({id: id, data: data});
			return this.parentPlate1;
		} else if (parentPlateId === 2) {
			this.parentPlate2 = new InputPlate({id: id});
			return this.parentPlate2;
		} else if (parentPlateId === 3) {
			data = {
				parentPlate: 3,
				names: [''],
				numbers: [{start:0 , end: 27}]
			};

			this.parentPlate3 = new NumberPlate({id: id, data: data});
			return this.parentPlate3;
		} else if (parentPlateId === 4) {
			this.parentPlate4 = new BDSPlate({id: id});
			return this.parentPlate4;
		} else if (parentPlateId === 5) {
			this.parentPlate5 = new DXDSPlate({id: id});
			return this.parentPlate5;
		} else if (parentPlateId === 6) {
			this.parentPlate6 = new LHHPlate({id: id});
			return this.parentPlate6;
		} else if (parentPlateId === 7) {
			data = {
				parentPlate: 7,
				names: ['万位', '千位', '百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};

			this.parentPlate7 = new NumberPlate({id: id, data: data});
			return this.parentPlate7;
		} else if (parentPlateId === 8) {
			data = {
				parentPlate: 8,
				names: ['万位', '千位','百位', '十位', '个位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9},
					{start:0 , end: 9}
				]
			};

			this.parentPlate8 = new NumberPlate({id: id, data: data});
			return this.parentPlate8;
		} else if (parentPlateId === 9) {
			this.parentPlate9 = new DDSPlate({id: id});
			return this.parentPlate9;
		} else if (parentPlateId === 10) {
			data = {
				parentPlate: 10,
				names: ['一位', '二位','三位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start:1 , end: 11},
					{start:1 , end: 11},
					{start:1 , end: 11}
				]
			};

			this.parentPlate10 = new NumberPlate2({id: id, data: data});
			return this.parentPlate10;
		} else if (parentPlateId === 11) {
			data = {
				parentPlate: 11,
				names: ['猜中位'],
				opes: ['全', '大', '小', '奇', '偶', '机选'],
				numbers: [
					{start: 3 , end: 9}
				]
			};

			this.parentPlate11 = new NumberPlate2({id: id, data: data});
			return this.parentPlate11;
		}
	};

	window.PlayingNav = PlayingNav;
}());
