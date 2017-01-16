$(function() {

    (function init(callback) {
        var acctId = Util.getQueryString("acctId");
        var sessionId = Util.getQueryString("sid");
        var token = Util.getQueryString("token");
        acctId = (acctId == null || acctId == "") ? "test_player" : acctId;
        var req = {
            /* acctId: "TESTPLAYER17@TEST",*/
            acctId: sessionId == null ?acctId:null,
            passwd: sessionId == null ?"000000":null,
            sessionId: sessionId,
            token: token
        };
        app.overlay.show();
        app.overlay.showImg();
        service.login(req, function(res) {
            if (res.code == 0) {
                var marketInfo = Global.marketList[0],
                    gameCode = marketInfo.gameCode,
                    market = marketInfo.market,
                    lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                app[lottorySocketName] = new lottorySocket(marketInfo.gameCode, marketInfo.market);
                app.lottorySocketNames.add(lottorySocketName);
                app.currentSocket = app[lottorySocketName];
                app.currentSocket.prepare();
            }
        });
    })();

    function lottorySocket(gameCode, market) {
        this.gameCode = gameCode;
        this.market = market;
    }

    //所有非交互性的socket请求放在此处
    lottorySocket.prototype.prepare = function() {
        window.req2resTimeArr = [];
        this.queryAcctInfo();
        this.queryHotAndNewMarket();
        this.queryServerTimeAndMarket(this.gameCode, this.market, 5);
        this.queryLotteryTimeLine(this.gameCode, this.market);
        this.queryGameSetting(this.gameCode);
    }

    //获取用户信息
    lottorySocket.prototype.queryAcctInfo = function() {
        var that = this;
        var lotteryModule;
        service.queryAcctInfo({}, function(res) {
            if (res.code == 0) {
                var acct = res.acct;
                var header = $('.bet .nav-title');
                header.find('.user').attr('title', acct.acctName);
                app.money = Util.addDotToNumber(acct.balance, 4);
                header.find('.money').text(app.money);
                header.find('.name').text(acct.acctName);
                app.features.forEach(function(name, index){
                    app[name].comfirmBet.zone.find('.balance').text(app.money);
                });
            }
        });
    }

    //获取市场状态
    lottorySocket.prototype.queryHotAndNewMarket = function(){
        var that = this;
        var list;

        service.queryHotAndNew({},function(res){
            var marketObj;
            if (res.code == 0) {
                list = res.list;
                list.forEach(function(item, index) {
                    marketObj = app.tree.items.filter(function(treeItem, index) {
                        return treeItem.opt.type == item.gameCode && treeItem.opt.market == item.market;
                    });

                    if (marketObj.length > 0) {
                        if (item.iHot) marketObj[0].zone.find('.status:eq(0)').addClass('hot');
                        if (item.iNew) marketObj[0].zone.find('.status:eq(1)').addClass('new');
                    }
                });
            }    
        });
    }

    //获取服务器时间和市场信息
    lottorySocket.prototype.queryServerTimeAndMarket = function(gameCode, market, requstTimes) {
        var that = this;
        var t1 = (new Date()).getTime(),
            t2 = 0;
        service.queryServerTime({}, function(res) {
            t2 = (new Date()).getTime();
            if (res.code == 0) {
                if (requstTimes > 0) {
                    window.req2resTimeArr.push(t2 - t1);
                    requstTimes--;
                    that.queryServerTimeAndMarket(gameCode,market,requstTimes);
                }else{
                    window.req2resTimeArr.push(t2 - t1);
                    var serverTime = window.req2resTimeArr.reduce(function(prev, cur) {
                        return prev + cur; }) / (2 * 6) + res.timeMillis;
                    window.serverTime = serverTime;
                    window.jetLag = serverTime - t2; //服务器与本地时间差
                    that.queryMarket(gameCode, market, false);
                                      
                }
            }
        });
    }

    //获取市场信息
    lottorySocket.prototype.queryMarket = function(gameCode, market, isNextDraw) {
        var that = this;
        var req = { gameCode: gameCode, market: market };
        service.queryDrawInfo(req, function(res) {
            if (res.code == 0) {
                var data = res.list;
                if (data[0] && !data[0].marketClosed) {
                    that.drawData = data[0];
                    if (that.isPrevDraw(data[0])) that.drawData = data[0].nextDraw;
                    that.marketStatus = true;
                    if (!isNextDraw)
                        that.startCountDownTime(gameCode, market, that.drawData);
                } else {
                    //没有数据 市场关闭
                    this.marketStatus = false;
                    app.marketCloseNotice(market, 5000);
                }
            }
        });
    }

    //判断刚进来时是不是取的上一期draw的数据
    lottorySocket.prototype.isPrevDraw = function(data){
        var that = this;
        var beginTimeSerials = Util.getDateByDateString(data.beginTime).getTime(),
            closeTimeSerials = Util.getDateByDateString(data.closeTime).getTime(),
            endTimeSerials = Util.getDateByDateString(data.endTime).getTime();
            currentTimeSerials = new Date().getTime() + window.jetLag;

        var flag = (closeTimeSerials < currentTimeSerials) ? true : false;

        if (flag) {
            var timeoutId = setInterval(function(){
                currentTimeSerials = new Date().getTime() + window.jetLag;
                if (currentTimeSerials > endTimeSerials) {
                    that.queryMarket(that.gameCode, that.market, true);
                    clearInterval(timeoutId);
                }
            },1000);   
        }

        return flag;
    }

    //启动倒计时
    lottorySocket.prototype.startCountDownTime = function(gameCode, market, data) {
        this.drawData = data;

        var beginTimeSerials = Util.getDateByDateString(data.beginTime).getTime(),
            closeTimeSerials = Util.getDateByDateString(data.closeTime).getTime(),
            endTimeSerials = Util.getDateByDateString(data.endTime).getTime();

        var countdownTimeData = {
            beginTimeSerials: beginTimeSerials,
            closeTimeSerials: closeTimeSerials,
            endTimeSerials: endTimeSerials,
            market: market,
            gameCode: gameCode
        }
        PubSub.publish('onBindCountTime', countdownTimeData);
    }

    //启动倒计时 同时看是否需要获取下一期彩期
    lottorySocket.prototype.nextDraw = function(gameCode, market, data, isNextDraw, endtime2closetime) {
        var that = this;
        this.startCountDownTime(gameCode, market, data);

        if (isNextDraw) {
            //endtime结束 10秒后取下一期数据
            setTimeout(function() {
                that.queryMarket(gameCode, market, isNextDraw);
            }, 10000 + endtime2closetime);
        }
    }

    lottorySocket.prototype.queryLotteryTimeLine = function(gameCode, market) {
        var req = { gameCode: gameCode, market: market };
        var $timeLineTarget = null;
        var currentLottery = app.getLotteryByMarket(market, gameCode);
        service.queryResultList(req, function(res) {
            if (res.code == 0) {
                var data = res.list;
                currentLottery.timeline.data = data;
                currentLottery.timeline.dataFormatter(gameCode, market);
                currentLottery.timeline.evalWidth();
                $timeLineTarget = $(currentLottery.timeline.createEvents());
                currentLottery.timeline.zone.find(".events-wrapper").html($timeLineTarget.html());

                //当前中奖号码
                if (data.length > 0) {
                    if (gameCode == 'LT' || gameCode == 'K3')
                        currentLottery.lotteryBall.data = data[0].result.replace(/\[|\]/g, '').split('');
                    else if (gameCode == 'HL11x5')
                        currentLottery.lotteryBall.data = data[0].result.replace(/\[|\]/g, '').split(',');

                    currentLottery.lotteryBall.lastIssue = data[0].number;
                    currentLottery.lotteryBall.requestLastNumber();
                }
            }
        });
    }

    lottorySocket.prototype.queryGameSetting = function(gameCode) {
        service.queryGameSetting({}, function(res) {
            if (res.code == 0) {
                $('.bet').css('visibility', 'visible');
                app.overlay.hide();
                app.overlay.hideImg();
                Global.betSetting = res.map;
                Global.betSetting.oddsGroups = res.availableGroup;
                Global.betSetting.currentOddsGroup = {
                    LT: res.availableGroup['LT'][0],
                    HL11x5: res.availableGroup['HL11x5'][0],
                    K3: res.availableGroup['K3'][0]
                };
                window.BetRuleInstance = new BetRule(app.currentModule.playingNav.currentMethodId, gameCode);
            }
        });
    }

    lottorySocket.prototype.bindLottoryData = function() {
        var gameCode = this.gameCode;
        var market = this.market;
        var lotteryModule;
        this.queryMarket(gameCode, market, false);
        this.queryLotteryTimeLine(gameCode, market);
        lotteryModule = app.getLotteryByMarket(market, gameCode);
        lotteryModule.comfirmBet.zone.find('.balance').text(app.money);
    }

    window.lottorySocket = lottorySocket;

});
