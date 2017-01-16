function IPlaceBet(placeBetObj) {
    this.placeBetObj = placeBetObj;
}

//下注OR添加到投注篮
IPlaceBet.prototype.bet = function(state, betType) {
    var functionName;
    var it = BetRuleInstance;
    functionName = this.createFunction(betType);
    if (state) {
        return this[functionName](betType, state)
    } else {
        this[functionName](betType, state);
    }
}

//获取下注方法
IPlaceBet.prototype.createFunction = function(betType) {
    var functionName = "";
    for (var i in this.placeBetObj) {
        if ($.inArray(betType, this.placeBetObj[i]) > -1) {
            functionName = i;
            break;
        }
    }
    return functionName.replace('_bet', '');
}

//移除投注篮对应数据
IPlaceBet.prototype.removeZoneData = function(it) {
    var serialNo = it.serialNo;
    if (serialNo) {
        var gameCode = app.currentSocket.gameCode;
        var market = app.currentSocket.market;
        var $bettingOrder = app.currentModule.bettingOrder.zone;
        var trolleyZoneData = Global.betZoneData.filter(function(item, index) {
            return market == item.market && gameCode == item.gameCode;
        })[0];
        var index = 0;
        for (var i = 0; i < trolleyZoneData.data.length; i++) {
            if (trolleyZoneData.data[i][12] == serialNo) {
                index = i;
                break;
            }
        }
        $bettingOrder.find('.cancel:eq(' + index + ')').trigger('click');
    }
};

//投注
IPlaceBet.prototype.commitBet = function(data) {
    var that = this;
    var it = BetRuleInstance;
    var modelZone = app.currentModule.modelZone;
    if(app.currentModule.playingNav.parentPlate2){
        var isType = app.currentModule.playingNav.parentPlate2.clearErrorModel(function(){
            that.commitBet(data);
        });
        if(isType == '1') return false;
    }
    modelZone.betNowButton.inProgress();
    service.placeBet(data, function(res) {
        if (res.code == 0) {
            app.money = Util.addDotToNumber(res.balance, 4);
            var header = $('.bet .nav-title');
            if(header.find('.secret').children('a').text() == '隐藏'){
                header.find('.money').text(app.money);
            }
            app.features.forEach(function(name, index){
                app[name].comfirmBet.zone.find('.balance').text(app.money);
            });
            app.noticeDialog.show({
                subTitle: "投注成功",
                text: "投注成功",
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
            that.clearDataAndSelect(it);
            modelZone.showDot(1);
        } else {
            app.noticeDialog.show({
                subTitle: "投注失败",
                text: Local[res.code],
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
        }
        modelZone.betNowButton.recover();
    });
}

//清空数据和选择状态  仅适合时时彩和11选5
IPlaceBet.prototype.clearDataAndSelect = function(it) {
    var playingNav = app.currentModule.playingNav;
    playingNav.zone.find('.ball-item').removeClass('selected');
    playingNav.zone.find('.operation-item').removeClass('selected');
    playingNav.zone.find('.fun-ball-item').removeClass('selected');
    playingNav.zone.find('.zone-ball-item').removeClass('selected');
    playingNav.zone.find('.input-plate').children('textarea').val("");
    for (var i = 0; i < it.result.length; i++) {
        it.result[i] = [];
    }
    playingNav.showUnitGroup();
    this.removeZoneData(it);
    it.serialNo = undefined;
    it.betCount = 0;
    it.betAmount = 0;
    it.setModelZoneData(0, 0, 0, 0, 1);
    it.changeBtnClass();
}

//获得Data 其它通用的参数
IPlaceBet.prototype.getCommonData = function() {
    var it = BetRuleInstance;
    var commonBetData = {
        "betType": it.betType,
        "market": app.currentSocket.market,
        "gameCode": app.currentSocket.gameCode,
        "drawId": app.currentSocket.drawData.drawId,
        "betAmount": it.betAmount,
        "odds": it.odds,
        "comm": it.comm,
        "multiple": it.multiple,
        "betCount": it.betCount,
        "betUnit": it.betUnit,
        "prizeGroup": Global.betSetting.currentOddsGroup[it.gameCode]
    };
    return commonBetData;
}
