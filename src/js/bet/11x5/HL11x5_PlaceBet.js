$(function() {
    var placeBetObj = {
        //11x5直选复式
        ZXFS11x5_bet: [
            'N3PH',
            'N2PH',
            'P3'
        ],
        //胆拖
        DS11x5_bet: [
            'N3SH',
            'G3SH',
            'N2SH',
            'G2SH',
            'A1S',
            'A2S',
            'A3S',
            'A4S',
            'A5S',
            'A6S',
            'A7S',
            'A8S'
        ],

        //胆拖
        DT11x5_bet: [
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ],

        //猜中位,任选复式，前三复式
        RXFS11x5_bet: [
            'FMN',
            'FOEC',
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8',
            'G3H',
            'G2H',
            'A1H3',
        ]
    }

    //11x5 复式
    var getBet11x5Item = function(bet) {
        var list = BetRuleInstance.result;
        var item = [];
        var a = '';
        for (var i = 0; i < list.length; i++) {
            if(list[i].length != 0){
                if (i == 0) a = '1';
                if (i == 1) a = '2';
                if (i == 2) a = '3';
                item.push({
                    betItem: list[i],
                    drawType: a
                });
            }
        }
        return item;
    }

    //复式
    var ZXFS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBet11x5Item(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //单式
    var DS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": bet
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //胆拖
    var DT11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": 'Banker'
        }, {
            "betItem": BetRuleInstance.result[1],
            "drawType": 'Ball'
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    //猜中位,任选复式，前三复式
    var RXFS11x5 = function(bet, state) {
        var data = this.getCommonData();
        data.items = [{
            "betItem": BetRuleInstance.result[0],
            "drawType": bet
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    }

    function HL11x5_PlaceBet() {
        this.getBet11x5Item     =   getBet11x5Item;
        this.ZXFS11x5           =   ZXFS11x5;
        this.DS11x5             =   DS11x5;
        this.DT11x5             =   DT11x5;
        this.RXFS11x5           =   RXFS11x5;
    }

    HL11x5_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.HL11x5_PlaceBet = new HL11x5_PlaceBet();
});
