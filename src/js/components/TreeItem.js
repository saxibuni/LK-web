(function () {
	function TreeItem (opt) {
		this.opt = opt;
		this.progressLine = new ProgressLine({id: this.opt.progressId});

		this.el  = 	'<li class="tree-item' + (opt.active?' active open"': '"') +
								' page-index="' + opt.id + '"' +
								' lotter-type="' + opt.type + '"' +
								' market="' + opt.market + '"' +
								' serial-number="' + opt.serialNumber + '">' +
						'<div class="info">' +
							'<div class="dot"></div>' +
							'<div class="name">' + (opt.name || '') + '</div>' +
							'<div class="status"></div>' +
							'<div class="status"></div>' +
						'</div>' +

						'<div class="cancel' + (opt.active?'': ' invisible') + '">✕</div>' +

						'<div class="pre-draw-number">' +
							'<div class="text">当前期：</div>' +
							'<div class="draw-number"></div>' +
							'<div class="time' + (opt.active?'': ' invisible') + '">' +  '</div>' +
						'</div>' +

						this.progressLine.getDom() +
					'</li>';
	}
TreeItem.prototype.getDom = function() {
    return this.el;
};

TreeItem.prototype.startProgress = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
    this.progressLine.start(beginTimeSerials, closeTimeSerials, endTimeSerials);
    this.startTimeout(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market);
};

TreeItem.prototype.deactiveProgress = function() {
    this.progressLine.deactive();
};

TreeItem.prototype.activeProgress = function() {
    this.progressLine.active();
};

TreeItem.prototype.cancelProgress = function() {
    this.progressLine.stop();
};

TreeItem.prototype.setCountDownTime = function(timeSerials, gameCode, market) {
    //tip: js起始时间为1970-01-01 : 08:00:00
    var now = new Date();
    var timeLeft;
    timeSerials = timeSerials < 0 ? 0 : timeSerials;
    now.setTime(timeSerials - 480 * 60000);

    if (gameCode == 'LT' && market == 'CN3D') {
        timeLeft = now.format("hh:mm:ss");
    } else {
        timeLeft = now.format('mm:ss');
    }
    this.zone.find('.time').text(timeLeft);
};

TreeItem.prototype.startTimeout = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
    var that = this;
    var serverTimeSerials;
    var lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';

    this.currentDrawNo(lottorySocketName);

    var fn = function(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market) {
        serverTimeSerials = (new Date()).getTime() + window.jetLag;
        that.setCountDownTime(closeTimeSerials - serverTimeSerials, gameCode, market);

        // //1.当前时间到彩期停止时间（当前彩期的最后一分钟） 当前市场提示停止下注
        // if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 60 && market == app.currentSocket.market) {
        // 	var title = '下注提示';
        // 	var message = "第" + app.currentSocket.drawData.drawNumber + "期已经停止下注";
        // 	var btnName = '确定';
        // 	app.noticeDialog.show({
        // 		subTitle : title,
        // 		text: message,
        // 		buttonName: btnName,
        // 		autoHide: true,
        // 		timeout: 5000
        // 	});			
        // };

        //2.倒数第三秒 弹出进入下一期提示框  由于弹出框弹出有延时  多加一秒
        if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 4) {
            var nextDraw = app[lottorySocketName].drawData.nextDraw;
            if (nextDraw && Object.getOwnPropertyNames(nextDraw).length > 0) {
                if (market == app.currentSocket.market) {
                    app.countDownDialog.count = 3;
                    app.countDownDialog.currentIssue = app.currentSocket.drawData.drawNumber;
                    app.countDownDialog.nextIssue = nextDraw.drawNumber;
                    app.countDownDialog.show();
                }
            } else {
                if (market == app.currentSocket.market) {
                    app.noticeDialog.show({
                        subTitle: '下注提示',
                        text: '彩期已停止，没有下一彩期数据',
                        buttonName: '确定',
                        autoHide: true,
                        timeout: 5000
                    });
                }
            }
        };

        //3.当前结束  进入下一期
        //4.定时器fix chrome浏览器在最小化时 定时器偶尔会出现时间间隔2秒的情况
        //  就会有 serverTimeSerials > closeTimeSerials 的情况
        if (parseInt((closeTimeSerials - serverTimeSerials) / 1000) == 0 || serverTimeSerials > closeTimeSerials) {
            var nextDraw = app[lottorySocketName].drawData.nextDraw;
            var chaseDialog = app.currentModule.chaseNumber.chaseNumberDialog;
            if (nextDraw && Object.getOwnPropertyNames(nextDraw).length > 0)
                that.nextDraw(lottorySocketName, endTimeSerials - closeTimeSerials);
            if (chaseDialog && chaseDialog.zone.is(':visible'))
                chaseDialog.hide(); //切换到下一期时，追号对话框
        };
    };

    var func = app.tree.fnQueue.filter(function(fnObj, index) {
        return fnObj.argument.gameCode == gameCode && fnObj.argument.market == market;
    });

    if (func.length == 0) {
        app.tree.fnQueue.push({
            fn: fn,
            argument: {
                beginTimeSerials: beginTimeSerials,
                closeTimeSerials: closeTimeSerials,
                endTimeSerials: endTimeSerials,
                gameCode: gameCode,
                market: market
            },
            fnTag: gameCode + '_' + market
        });
    } else {
        func[0].argument = {
            beginTimeSerials: beginTimeSerials,
            closeTimeSerials: closeTimeSerials,
            endTimeSerials: endTimeSerials,
            gameCode: gameCode,
            market: market
        };
    };

};

TreeItem.prototype.bindEvents = function() {
    this.zone = $('#' + this.opt.progressId).parent('.tree-item');
    this.progressLine.bindEvents();
};

TreeItem.prototype.nextDraw = function(lottorySocketName, endtime2closetime) {
    var currentSocket = app[lottorySocketName];
    var nextDrawData = currentSocket.drawData.nextDraw;
    currentSocket.nextDraw(currentSocket.gameCode, currentSocket.market, nextDrawData, true, endtime2closetime);
}

TreeItem.prototype.currentDrawNo = function(lottorySocketName) {
    var currentSocket = app[lottorySocketName];
    this.zone.find('.draw-number').text('(' + currentSocket.drawData.drawNumber + ')');
}

window.TreeItem = TreeItem;
}());
