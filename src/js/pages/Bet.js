/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.money    = '0';
		this.zone     = $('.bet');
		this.features = [];
		this.lottorySocketNames = [];
		this.init();
		this.bindEvents();
		this.subscribeEvents();

        if (Util.isMobile.any() && window.FastClick) {
            FastClick.attach(document.body);
        }

        this.horizonScreen();
	}

	app.prototype.init = function () {
		this.createTree();
		this.createFirstMarket(this.tree.data[0]);
		this.resetTreeHeight();
		this.creatCountdownDialog();
		this.creatNoticeDialog();
		this.createOverlay();
	};

	app.prototype.createTree = function () {
		this.treeArea = this.zone.find('.left-nav .tree');
		this.tree = new Tree();
		this.treeArea.html(this.tree.getDom());
		this.tree.bindEvents();
	};

	app.prototype.createFirstMarket = function (data) {
		this[data.id] = new Lottery({
			id: data.id,
			playingNav: data.type,
			market: data.market
		});

		this.features.push(data.id);
		this.currentModule = this[data.id];
		this.currentModule.show();
	};

	app.prototype.createOverlay = function () {
		var that = this;

		this.overlay = new IMOverlay({position: $('.bet')});
		this.overlay.show();

		var timeout = setTimeout(function () {
			that.overlay.hide();
			clearTimeout(timeout);
		}, 500);
	};

	app.prototype.creatCountdownDialog = function () {
		if (!this.countDownDialog) {
			this.countDownDialog = new CountDownDialog();
			$('body').append(this.countDownDialog.getDom());
			this.countDownDialog.bindEvents();
		}
	};

	app.prototype.horizonScreen = function () {
        var width  = parseInt(screen.width);
        var height = parseInt(screen.height);
        var max    = Math.max(width, height);
        var min    = Math.min(width, height);

        if (Util.isMobile.any() && max >= 1024 && min < 1024) {
			this.noticeDialog.show({
				text: '检测到您的设备尺寸较小， 请横屏显示!',
				buttonName: '确定'
			});
        }
	};

	app.prototype.creatNoticeDialog = function () {
		if (!this.noticeDialog) {
			this.noticeDialog = new NoticeDialog({id: 'app-notice-dialog'});
			$('body').append(this.noticeDialog.getDom());
			this.noticeDialog.bindEvents();
		}
	}

	app.prototype.resetTreeHeight = function (data) {
		var mainHeight;
		var screenHeight;
		var maxHeight;
		var contentHeight;
		var h;
		var that = this;
		var leftTree = this.zone.find('.left-nav');

		var timeout = setTimeout(function () {
			if (data && data.type && data.type === 2) {
				h = that.treeHeight + data.gap + 'px';
				leftTree.css('height', h);
			} else {
				contentHeight = that.zone.find('.main .content').height();

				if (!that.treeHeight) {
					that.treeHeight = contentHeight;
				}

				mainHeight   = contentHeight + 70;
				screenHeight = $('body').height();
				maxHeight    = Math.max(mainHeight, screenHeight);

				if (maxHeight > that.treeHeight) {
					leftTree.css('height', maxHeight + 'px');
				}
			}
		}, 1000);
	};

	app.prototype.bindEvents = function () {
		var left;
		var width;
		var logoarr;
		var biglogo;
		var overlay;
		var that   = this;
		var header = $('.bet .nav-title');
		var leftNavTitle = $('.bet .left-nav .title');

		this.zone = $('.bet');
		logoarr   = header.find('.logo-arr');
		biglogo   = header.find('.big-logo');

		header.find('.bet-record').click(function () {
			if (that.userFeedback && that.userFeedback.hasTimeout() ||
				that.bettingRecords && that.bettingRecords.hasTimeout()) {   //如果userFeedBack的timeout还没有清除掉
				return;
			}

			if (that.userFeedback && that.userFeedback.isOpen()) {
				that.userFeedback.hide(true);
			}

			if (!that.bettingRecords) {
				that.bettingRecords = new BettingRecords();
				$('.main').append(that.bettingRecords.getDom());
				that.bettingRecords.bindEvents();
			}else{
				if (!(that.bettingRecords && that.bettingRecords.isOpen())) {
					if(that.bettingRecords.type ==1){
						that.bettingRecords.getBetHistory();
					}else{
						that.bettingRecords.getChaseHistory();
					}

				}
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {   //如果bettingRecords已经打开
				$(this).children('.dot').hide().find('span').text('0');
				that.bettingRecords.hide();
			} else {
				$(this).children('.dot').hide().find('span').text('0');
				that.bettingRecords.show();
				$('.bet-record').addClass('highlight');
				$('.nav-title').addClass('higher-z-index');
			}
		});

		header.find('.feedback').click(function () {
			if (that.userFeedback && that.userFeedback.hasTimeout() ||
				that.bettingRecords && that.bettingRecords.hasTimeout()) {   //如果userFeedBack的timeout还没有清除掉
				return;
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {
				that.bettingRecords.hide(true);
			}

			if (!that.userFeedback) {
				that.userFeedback = new UserFeedback();
				$('.main').append(that.userFeedback.getDom());
				that.userFeedback.bindEvents();
			}

			if (that.userFeedback && that.userFeedback.isOpen()) {   //如果userFeedback已经打开
				$(this).children('.dot').hide();
				that.userFeedback.hide();
			} else {
				$(this).children('.dot').hide();
				that.userFeedback.show();
				$('.feedback').addClass('highlight');
				$('.nav-title').addClass('higher-z-index');
			}
		});

		header.find('.secret').click(function () {
			if ($(this).children('a').text() === '隐藏') {
				$(this).children('a').text('显示');
				header.find('.money').text('-----');
			} else {
				$(this).children('a').text('隐藏');
				header.find('.money').text(that.money);
			}
		});

		//if (Util.isMobile.any()) {
		//	logoarr.click(function () {
		//		biglogo.toggle();
		//	});
		//} else {
		//	logoarr.mouseover(function () {
		//		biglogo.show();
		//	}).mouseout(function () {
		//		biglogo.hide();
		//	});
		//}

		leftNavTitle.delegate('.subtitle', 'click', function () {
			leftNavTitle.find('.subtitle').removeClass('selected');
			$(this).addClass('selected');
		});

		leftNavTitle.children('.show-hide-arrow-background').click(function () {
			left  = parseInt($('.bet .left-nav').css('left'));
			width = $('.bet .left-nav').css('width');

			if (left >= 0) {
				left = '-' + width;
				$('.bet .left-nav').css('left', left);
				$('.bet .main').css('left', 0);
				$(this).children('.show-hide-arrow').css('transform', 'rotateZ(180deg)');
			} else {
				left = '0';
				$('.bet .left-nav').css('left', 0);
				$('.bet .main').css('left', width);
				$(this).children('.show-hide-arrow').css('transform', 'rotateZ(0deg)');
			}
		});

		$(document).mousemove(function(e){
			left  = parseInt($('.bet .left-nav').css('left'));
			width = parseInt($('.bet .left-nav').css('width'));

			if (parseInt(e.pageX) < 30 && left < 0) {
				left = '0';
				$('.bet .left-nav').css('left', 0);
				$('.bet .main').css('left', width);
				leftNavTitle.find('.show-hide-arrow').css('transform', 'rotateZ(0deg)');
			} 
		});
	};

	app.prototype.subscribeEvents = function () {
		var moduleName;
		var market;
		var gameCode;
		var lottorySocketName;
		var callback;
		var that = this;

		PubSub.subscribe('onTreeItemClick', function (msg, data) {
			moduleName = data.pageIndex;
			market = data.market;
			gameCode = data.type;

			if (that.currentModule.getName() === moduleName) {
				return;
			}

			if (that.bettingRecords && that.bettingRecords.isOpen()) {
				that.bettingRecords.hide(false, function(){});
			} 

			if (that.userFeedback && that.userFeedback.isOpen()) {
				that.userFeedback.hide(false, function (){});
			} 

			cb();

			function cb () {
				var temp;
				lottorySocketName = gameCode + '_' + market + '_' +  'LottorySocket';

				that.currentModule.hide();

				if (!that[moduleName]) {
					that[moduleName] = new Lottery({
						id: moduleName,
						playingNav: data.type,
						market: data.market
					});
				}

				if (!that[lottorySocketName]) {
					that[lottorySocketName] = new lottorySocket(gameCode, market);
					that.currentSocket = that[lottorySocketName];
				}else{
					that.currentSocket = that[lottorySocketName];
				}
				
				temp = setTimeout(function () {
					that.currentModule = that[moduleName];
					that[moduleName].show();
					var famiryItem = that[moduleName].playingNav.zone.find('.playing-family .family-item:eq(0)');
					famiryItem.removeClass('selected').trigger('click');
					that.features.add(moduleName);

					if ($.inArray(lottorySocketName,that.lottorySocketNames) == -1) {
						that.currentSocket.bindLottoryData(market);										
					}else{
						if (!that.currentSocket.marketStatus) 
							that.marketCloseNotice(market, 3000);
					}
					that.lottorySocketNames.add(lottorySocketName);
					
					clearTimeout(temp);

					if (that.features.length > 8) {
						that.resetTreeHeight({
							type: 2,
							gap: 70
						});
					}

				}, 300);
			}
		});

		PubSub.subscribe('onCancelTreeItemClick', function (msg, data) {
			moduleName = data.pageIndex;
			market = data.market;
			gameCode = data.gameCode;
			lottorySocketName = gameCode + '_' + market + '_' +  'LottorySocket';

			if (that.currentModule.getName() === moduleName) {
				if (that.features.length === 1) {
					return;
				} else {
					that.features.remove(moduleName);
					that[moduleName].hide();
					that.currentModule = that[that.features[that.features.length - 1]];
					that.currentModule.show();

					that.lottorySocketNames.remove(lottorySocketName);
					that.currentSocket = that[that.lottorySocketNames[that.lottorySocketNames.length - 1]];

					PubSub.publish( 'onSetActiveItem', {
						pageIndex: that.features[that.features.length - 1]
					});

					if (typeof data.callback === 'function') {
						callback = data.callback;
						callback();
					}
				}
			} else {
				that.features.remove(moduleName);
				that.lottorySocketNames.remove(lottorySocketName);

				if (typeof data.callback === 'function') {
					callback = data.callback;
					callback();
				}
			}

			if (that.features.length <= 8) {
				that.resetTreeHeight({
					type: 2,
					gap: 0
				});
			}
		});

		PubSub.subscribe('onBindCountTime',function(msg, data){
			that.tree.callback(data.beginTimeSerials, data.closeTimeSerials, data.endTimeSerials ,true, data.gameCode, data.market);
		});
	};

	app.prototype.getLotteryByMarket = function(market, gameCode) {
		var moduleName = Global.marketList.filter(function(item, index) {
			return item.gameCode == gameCode && item.market == market;
		})[0].id;
		return this[moduleName];
	}

	app.prototype.marketCloseNotice = function(market, timeout) {
		var that = this;
		var marketCNName = Global.marketList.filter(function(item, index) {
			return item.gameCode == that.currentSocket.gameCode && item.market == market;
		})[0].marketCNName;
        var message = marketCNName + "市场已经关闭，如要继续下注请切换到其他市场。";
        this.noticeDialog.show({
            subTitle: '市场关闭',
            text: message,
            buttonName: '确定',
            autoHide: true,
            timeout: timeout
        });
	}


	window.app = new app();
})();