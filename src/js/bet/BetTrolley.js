
BetTrolley = {

    //添加注单
    addBetRecord: function() {
        var it = BetRuleInstance;
        var items;
        var data;

        var market = app.currentSocket.market,
            gameCode = app.currentSocket.gameCode,
            list = [],
            resultItem = [],
            trolleyZoneData = Global.betZoneData.filter(function(item, index) {
                return market == item.market && gameCode == item.gameCode;
            })[0];
        var betUIContent = this.getBetUIContent(it);
        if(app.currentSocket.gameCode == 'LT')
            data = LT_PlaceBet.bet.bind(LT_PlaceBet)(true, it.betType);
        if(app.currentSocket.gameCode == 'HL11x5')
            data = HL11x5_PlaceBet.bet.bind(HL11x5_PlaceBet)(true, it.betType);
        if(app.currentSocket.gameCode == 'K3')
            data = K3_PlaceBet.bet.bind(K3_PlaceBet)(true, it.betType);
        items = data.items;
        //var items = '';
        var betFamilyName = app.currentModule.playingNav.zone.find('.family-item.selected').attr('data-value');
        var serialNo = it.serialNo;
        serialNo = serialNo ? serialNo : (new Date().format('yyyyMMddhhmmss') + Math.random());

        list = [
            it.ruleData.name,
            betUIContent,
            it.betCount,
            it.multiple,
            it.betAmount,
            it.betType,
            it.comm,
            it.result.slice(0),
            betFamilyName,
            it.betUnit,
            it.odds,
            items,
            serialNo,
            it.maxCount,
            data
        ];

        this.addTrolleyZoneData(trolleyZoneData, list, serialNo, it, betUIContent);
        this.setConfirmZoneData(trolleyZoneData);
        it.serialNo = undefined;
        app.currentModule.bettingOrder.addList(trolleyZoneData.data);
    },

    getBetUIContent: function(betRule) {
        var selectStr = ["Big", "Small", "Odd", "Even", "L", "H", "T", "TRI", "PAIR", "SN", "5th", "4th", "3rd", "2nd", "1st", "R1", "R2", "R3", "R4", "R5","O5E0","O4E1","O3E2","O2E3","O1E4","O0E5","FMN"],
            convertStr = ["大", "小", "单", "双", "龙", "虎", "和", "豹子", "对子", "顺子", "万", "千", "百", "十", "个", "一区", "二区", "三区", "四区", "五区","5单0双","4单1双","3单2双","2单3双","1单4双","0单5双","猜中位"],
            betTypeStr = ["G5X60", "G5X30", "G5X20", "G5X10", "G5X5", "G4X12", "G4X6", "G4X4", "A4G4X4", "A4G4X12","G3BH","G2BH","A2B","A3B","A4B","A5B","A6B","A7B","A8B"]; //G4X6
        var betUIConent = '',
            ballName = '';

        for (var i = 0; i < betRule.result.length; i++) {
            if(app.currentSocket.market == 'CN3D' && betRule.betType == 'N1' && i>2)break;
            var result = betRule.result[i],
                rowResultContent = '';
            for (var j = 0; j < result.length; j++) {
                if ($.inArray(result[j], selectStr) > -1)
                    ballName = convertStr[$.inArray(result[j], selectStr)];
                else
                    ballName = result[j];

                rowResultContent += ballName + ',';
                if (j == result.length - 1) rowResultContent = rowResultContent.substring(0, rowResultContent.length - 1);
            }

            if ($.inArray(betRule.betType, betTypeStr) > -1)
                betUIConent += rowResultContent + '*';
            else
                betUIConent += rowResultContent + '|';
        }

        betUIConent = betUIConent.substring(0, betUIConent.length - 1);
        if (betUIConent.indexOf('*') > -1) {
            var arr = betUIConent.split("*");
            var length = arr.length;
            if (length > 2) {
                if($.inArray(betRule.betType, betTypeStr) < 10){
                    betUIConent = arr[2] + "|" + arr[0] + ">" + arr[1];
                }else{
                    betUIConent = arr[0] + "|" + arr[1] + ">" + arr[2];
                }

            } else {
                betUIConent = arr[0] + ">" + arr[1];
            }
        }

        return betUIConent;
    },

    sameSetBet: function(trolleyZoneData, list) {
        var sameSetArr = trolleyZoneData.data.filter(function(item, index) {
            return item[0] == list[0] &&
                item[1] == list[1] &&
                item[2] == list[2] &&
                item[5] == list[5] &&
                item[9] == list[9] &&
                item[14]['prizeGroup'] == list[14]['prizeGroup']
        })[0];

        return sameSetArr;
    },

    updateBet: function(trolleyZoneData, list, serialNo) {
        var updateBetArr = trolleyZoneData.data.filter(function(item, index) {
            return serialNo == item[12];
        })[0];

        return updateBetArr;
    },

    addTrolleyZoneData: function(trolleyZoneData, list, serialNo, betRule, betUIContent) {
        var updateBetArr = this.updateBet(trolleyZoneData, list, serialNo);
        var sameSetBetArr = this.sameSetBet(trolleyZoneData, list);
        if (updateBetArr) {
            updateBetArr[1] = betUIContent;
            updateBetArr[2] = list[2];
            updateBetArr[3] = list[3];
            updateBetArr[4] = list[4];
            updateBetArr[6] = list[6];
            updateBetArr[10] = list[10];
            updateBetArr[7] = list[7].slice(0);
            updateBetArr[9] = list[9];
            updateBetArr[11] = list[11];
            updateBetArr[14] = list[14];
        } else if (sameSetBetArr) {
            sameSetBetArr[3] += list[3];
            sameSetBetArr[4] = sameSetBetArr[3] *  list[9];
            app.noticeDialog.show({
                subTitle: "温馨提示",
                text: "您选择的号码在号码篮已存在，将直接进行倍数累加返点以第一单为准",
                buttonName: "确定",
                autoHide: true,
                timeout: 3000
            });
            if (sameSetBetArr[3] > betRule.maxCount) {
                sameSetBetArr[3] = betRule.maxCount;
                sameSetBetArr[4] = betRule.maxCount * list[9];
                app.noticeDialog.show({
                    subTitle: "温馨提示",
                    text: "该组号码倍数已经超过最大限制(" + betRule.maxCount + "倍),将调整为系统支持的最大倍数进行添加",
                    buttonName: "确定",
                    autoHide: true,
                    timeout: 3000
                });
            }
        } else {
            trolleyZoneData.data.splice(0, 0, list);
        }
    },

    setConfirmZoneData: function(trolleyZoneData) {
        var betCount = 0,
            betAmount = 0,
            betCommAmount = 0;
        var $comfirmBet = app.currentModule.comfirmBet.zone;

        for (var i = 0; i < trolleyZoneData.data.length; i++) {
            betCount += trolleyZoneData.data[i][2];
            betAmount += trolleyZoneData.data[i][4];
            betCommAmount += trolleyZoneData.data[i][4] * trolleyZoneData.data[i][6];
        }

        $comfirmBet.find('.bet-number').text(betCount + '注');
        $comfirmBet.find('.amount').text(Util.addDotToNumber(betAmount) + '元');
        $comfirmBet.find('.return').text(Util.addDotToNumber(betCommAmount, 4) + '元');
    }

}
