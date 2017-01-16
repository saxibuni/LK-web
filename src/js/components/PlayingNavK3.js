/*
 *  玩法导航区  PlayingNavK3.js
 */

(function () {
	function PlayingNavK3 (opt) {
		this.opt   			 = opt;
		this.id   			 = opt.id;
		this.gameCode 		 = opt.gameCode;
		this.data            = opt.playingNavData;
		this.currentMethodId = this.data[0].methodId;
		this.plateDict       = this.formatPlateDict(this.data);
		parentPlateId        = this.plateDict[this.currentMethodId].plate.parentPlate;
		this.currentPlate    = this.createParentPlate(parentPlateId);
		this.playingDescriptionTip = new PlayingDescriptionTip({id: 'description-tip-' + this.id});
		this.setPlayingIntro(this.currentMethodId);
		this.initDom();
	}

	PlayingNavK3.prototype.setPlayingIntro = function(currentMethodId){
		var that = this;
		var filterData = RULE_CONFIG.filter(function(item,index){
				return item.betType == currentMethodId && that.gameCode == item.gameCode;
			})[0] || {};
		this.playingDescriptionTip.data = {
			methodName:filterData.title,
			selectMethod:filterData.selectMethod,
			winningRule:filterData.winningRule
		};
	};
	PlayingNavK3.prototype.initDom = function () {
		this.el = 	'<div class="container-fluid playing-nav" id="' + this.id + '">' +
						this.createPlayingFamilys() +
						this.currentPlate.getDom() +
					'</div>';
	};

	PlayingNavK3.prototype.getDom = function () {
		return this.el;
	};

	PlayingNavK3.prototype.formatPlateDict = function () {
		var i;
		var dict = {};

		for (i = 0; i < this.data.length; i++) {
			dict[this.data[i].methodId] = {
				methodId: this.data[i].methodId,
				plate: this.data[i].plate
			};
		}

		return dict;
	};

	PlayingNavK3.prototype.createPlayingFamilys = function () {
		var i;
		var temp;

		temp     = 	'<div class="row playing-family">';

		for (i = 0; i < this.data.length; i++) {
			if (i === 0) {
				temp += '<div class="col-md-1 family-item selected" data-value="' + this.data[i].methodId + '"><span>' + this.data[i].familyName + '</span></div>';
			} else {
				temp += '<div class="col-md-1 family-item" data-value="' + this.data[i].methodId + '"><span>' + this.data[i].familyName + '</span></div>';
			}
		}

		temp += 		'<div class="col-md-5 playing-description-k3">' +
							'<div class="tip">' +
								'<img src="../img/tip.png" height=15 width=15></img>' +
								'<span class="text">选号规则</span>' +
							'</div>' +
							
							this.playingDescriptionTip.getDom() +
						'</div>' +

						'<div class="stick"></div>';

		temp +=		'</div>';

		return temp;
	};

	PlayingNavK3.prototype.createParentPlate = function (parentPlateId) {
		var id   = this.id + '-parentPlate' + parentPlateId;
		var data = this.plateDict[this.currentMethodId].plate;

		this['parentPlate' + parentPlateId] = new DicePlate({id: id, data: data});
		return this['parentPlate' + parentPlateId];
	};

	PlayingNavK3.prototype.hideAllPlate = function () {
		var i;
		var arr = ['12', '13-1', '13-2', '13-3', '13-4', '13-5', '14'];

		for (i = 0; i < arr.length; i++) {
			if (this['parentPlate' + arr[i]]) {
				this['parentPlate' + arr[i]].hide();
			}
		}
	};

	PlayingNavK3.prototype.showPlate = function (method) {
		var parentPlateId;

		parentPlateId = this.plateDict[method].plate.parentPlate;

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
	};

	PlayingNavK3.prototype.bindEvents = function () {
		var familyName;
		var playingFamily;
		var method;
		var index;
		var gap = 8.33;
		var stick;
		var parentPlateId;
		var selectedItem;
		var pickRule;
		var that = this;

		this.zone     = $('#' + this.id);
		playingFamily = this.zone.find('.playing-family');
		pickRule      = this.zone.find('.playing-description-k3 .tip');
		stick         = playingFamily.children('.stick');

		playingFamily.delegate('.family-item', 'click', function () {
			if ($(this).hasClass('selected')) {
				return;
			}

			playingFamily.children('.family-item').removeClass('selected');
			$(this).addClass('selected');
			index = $(this).index();
			stick.css('left', index*gap + '%');

			method =  $(this).attr('data-value');
			that.currentMethodId = method;
			that.setPlayingIntro(that.currentMethodId);
			that.showPlate(method);
		});

		if (Util.isMobile.any()) {
			this.zone.find('.playing-description-k3').bind('touchstart', function () {
				if (!that.playingDescriptionTip.isOpen()) {
					that.playingDescriptionTip.show();
				} else {
					that.playingDescriptionTip.hide();
				}
			});
		} else {
			this.zone.find('.playing-description-k3').mouseover(function () {
				that.playingDescriptionTip.show();
			}).mouseout(function () {
				that.playingDescriptionTip.hide();
			});
		}

		this.currentPlate.bindEvents();
	};

	window.PlayingNavK3 = PlayingNavK3;
}());
