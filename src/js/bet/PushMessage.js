$(function() {

    // Kickout = -1;
    // AcctInfoUpdated = -3;
    // OddsChanged = -5;
    // PushNotice = -7;
    // MarketOpen = -9;
    // MarketClosed = -10;
    // DrawClosed = -11;
    // DrawAward = -12;
    //当市场开启了 才处理它的推送消息

    PushMessage = {

        marketOpen: function() {
            service.bindPushEvent(-9, function(res) {
                if (res.market == app.currentSocket.market) {
                    app.noticeDialog.show({
                        subTitle: '市场开启',
                        text: '当前市场已经重新开启，可以重新下注',
                        buttonName: '确定',
                        autoHide: true,
                        timeout: 5000
                    });

                    //市场开启 请求市场数据
                    app.currentSocket.bindLottoryData();
                } else {
                    var lottorySocketName = res.gameCode + '_' + res.market + '_' + 'LottorySocket';
                    if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1)
                        app[lottorySocketName].bindLottoryData();
                }
            });
            return this;
        },

        marketClose: function() {
            service.bindPushEvent(-10, function(res) {
                if (res.market == app.currentSocket.market) {
                    //激活的当前市场 给市场关闭提示
                    app.marketCloseNotice(res.market, 5000);

                    //清空倒计时状态栏
                    var li = app.tree.zone.find('li[market=' + res.market + ']');
                    app.tree.clearItemStatus(li);
                } else {
                    //激活的市场 如果收到的关闭市场的消息 则将当前市场改为未激活状态
                    var lottorySocketName = res.gameCode + '_' + res.market + '_' + 'LottorySocket';
                    if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) {
                        app.tree.zone
                            .find("li[market=" + res.market + "][lotter-type=" + res.gameCode + "]")
                            .children('.cancel')
                            .trigger('click');
                    }
                }
            });
            return this;
        },

        drawClose: function() {
            service.bindPushEvent(-11, function(res) {


            });
            return this;
        },

        drawAward: function() {
            service.bindPushEvent(-12, function(res) {
                var gameCode = res.gameCode;
                var market = res.market;
                var lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                var length;
                if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) {
                    var $timeLineTarget;
                    var currentLottery = app.getLotteryByMarket(market, gameCode);
                    var timelineLength = currentLottery.timeline.data.length;
                    var timelineFirstDrawNumber;
                    var timelineLastDrawNumber;
                    if (timelineLength > 0) {
                        timelineFirstDrawNumber = currentLottery.timeline.data[0].drawNumber;
                        timelineLastDrawNumber = currentLottery.timeline.data[currentLottery.timeline.data.length - 1].drawNumber;
                    }
                    //新开的中奖号码
                    if (timelineLength == 0 || parseInt(res.drawNumber) > parseInt(timelineFirstDrawNumber)) {
                        if (gameCode == 'LT' || gameCode == 'K3')
                            currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split('');
                        else if (gameCode == 'HL11x5')
                            currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split(',');

                        length = Global.marketList.filter(function(item, index, array) {
                            return item.gameCode == gameCode && item.market == market;
                        })[0].drawNumLength;
                        length = 0 - length;
                        currentLottery.lotteryBall.lastIssue = res.drawNumber.slice(length);
                        currentLottery.lotteryBall.requestLastNumber();

                        var timeLineList = currentLottery.timeline.data;
                        var addObj = {
                            number: currentLottery.lotteryBall.lastIssue.slice(length),
                            result: res.result.replace(/\[|\]/g, '').toString(),
                            drawNumber: res.drawNumber
                        };
                        currentLottery.timeline.data.unshift(addObj); //添加到首位
                        currentLottery.timeline.data = timeLineList = timeLineList.length > 15 ? timeLineList.slice(0, 15) : timeLineList;
                        currentLottery.timeline.evalWidth();
                        $timeLineTarget = $(currentLottery.timeline.createEvents());
                        currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());
                    } else if (parseInt(res.drawNumber) <= parseInt(timelineFirstDrawNumber) && parseInt(res.drawNumber) >= parseInt(timelineLastDrawNumber)) {
                        var timelineData = currentLottery.timeline.data;
                        var rollbackData = timelineData.filter(function(item, index) {
                            return item.drawNumber == res.drawNumber;
                        })[0];

                        if (rollbackData) {
                            rollbackData.result = res.result.replace(/\[|\]/g, '').toString();
                            currentLottery.timeline.evalWidth();
                            $timeLineTarget = $(currentLottery.timeline.createEvents());
                            currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());

                            //如果rollback的彩期是最新的彩期  则更新lotteryball
                            if (res.drawNumber == timelineData[0].drawNumber) {
                                if (gameCode == 'LT' || gameCode == 'K3')
                                    currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split('');
                                else if (gameCode == 'HL11x5')
                                    currentLottery.lotteryBall.data = res.result.replace(/\[|\]/g, '').split(',');

                                length = Global.marketList.filter(function(item, index, array) {
                                    return item.gameCode == gameCode && item.market == market;
                                })[0].drawNumLength;
                                length = 0 - length;
                                currentLottery.lotteryBall.lastIssue = res.drawNumber.slice(length);
                                currentLottery.lotteryBall.requestLastNumber();
                            }
                        }
                    }
                    if (app.bettingRecords && app.bettingRecords.isOpen()) {
                        if (app.bettingRecords.type == 1) {
                            app.bettingRecords.getBetHistory();
                        } else {
                            app.bettingRecords.getChaseHistory();
                        }
                    }

                }
            });
            return this;
        },

        acctInfoUpdate: function() {
            service.bindPushEvent(-3, function(res) {
                var currentLottery = app.currentSocket;
                currentLottery.queryAcctInfo();
            });
            return this;
        },

        kickoutUser: function() {
            service.bindPushEvent(-1, function(res) {

            });
            return this;
        },

        oddsChange: function() {
            service.bindPushEvent(-5, function(res) {

            });
            return this;
        },

        pushNotice: function() {
            service.bindPushEvent(-7, function(res) {

            });
            return this;
        }

    };

    PushMessage
        .marketOpen()
        .marketClose()
        .drawClose()
        .drawAward()
        .acctInfoUpdate();

    //没隔5分钟取一次balance
    setTimeout(function(argument) {
        setInterval(function() {
            var currentLottery = app.currentSocket;
            currentLottery.queryAcctInfo();
        }, 1000 * 60 * 5);
    }, 1000 * 60 * 5);



});
