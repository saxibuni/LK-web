$(function() {
    var placeBetObj = {
        //复式
        ZSFS_bet: [
            'N5P',
            'N4P',
            'N3PF',
            'N3PM',
            'N3PL',
            'N2PL',
            'N2PF',
            'N5C',
            'N4C',
            'N3CF',
            'N3CM',
            'N3CL',
            'N1'
        ],

        RXZXDS_bet: [
            'A2S',
            'A2G2S',
            'A3S',
            'A3G3X3S',
            'A3G3X6S',
            'A3G3MX',
            'A4S'
        ],

        RXZX_bet: [
            'A4G4X12',
            'A4G4X24',
            'A4G4X6',
            'A4G4X4'
        ],

        RXFS_bet: [
            'A2P',
            'A3P',
            'A4P'
        ],

        DXDS_bet: [
            ////大小单双
            'BSOEL2',
            'BSOEL3',
            'BSOEF2',
            'BSOEF3',
            'BSOEM3'
        ],

        //五星直选单式
        ZXDS_bet: [
            'N5S',
            'N4S',

            'N3SF',
            'G3MXF',
            'G3X3SF',
            'G3X6SF',

            'N3SM',
            'G3MXM',
            'G3X3SM',
            'G3X6SM',

            'N3SL',
            'G3MXL',
            'G3X3SL',
            'G3X6SL',

            'N2SL',
            'N2SF',
            'G2SL',
            'G2SF'
        ],

        //五星组选120
        ZX120_bet: [
            'G5X120',
            'G4X24',

            'N3TF',
            'N3DF',
            'G3X3F',
            'G3X6F',
            'G3TF',
            'G3BF',
            'S3TDF',

            'N3TM',
            'N3DM',
            'G3X3M',
            'G3X6M',
            'G3TM',
            'G3BM',
            'S3TDM',

            'N3TL',
            'N3DL',
            'G3X3L',
            'G3X6L',
            'G3TL',
            'G3BL',
            'S3TDL',

            'N2TL',
            'N2DL',
            'N2TF',
            'N2DF',

            'G2L',
            'G2TL',
            'G2BL',
            'G2F',
            'G2TF',
            'G2BF',

            'A1L3',
            'A2L3',
            'A1F3',
            'A2F3',
            'A1M3',
            'A2M3',
            'A1L4',
            'A2L4',
            'A1N5',
            'A2N5',
            'A3N5',

            'SA1',
            'SA2',
            'SA3',
            'SA4'
        ],

        //五星组选60
        ZX60_bet: [
            'G5X60',
            'G5X30',
            'G5X20',
            'G5X10',
            'G5X5',
            'G4X12',
            'G4X6',
            'G4X4'
        ],

        //前三特殊号码
        QSTX_bet: [
            'S3SF',
            'S3SM',
            'S3SL',
            'LH54',
            'LH53',
            'LH52',
            'LH51',
            'LH43',
            'LH42',
            'LH41',
            'LH32',
            'LH31',
            'LH21'
        ],

        //五码趣味三星
        WMQWSX_bet: [
            'F5N3',
            'F4N3',
            'F3N2L',
            'F3N2F',
            'F3N2M',
            'R5N3',
            'R4N3',
            'R3N2L',
            'R3N2F',
            'R3N2M'
        ],

        //任意选二--直选合值
        RXEZXHZ_bet: [
            'A2T',
            'A2G2',
            'A2G2T',
            'A3T',
            'A3G3X3',
            'A3G3X6',
            'A3G3T',
            'A4G4X6'
        ]
    };

    //万，千，百，十，个 items赋值
    var getBetItem = function(betType) {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var betTypeArr = [
            ['N5P', 'N1', 'N5C', 'F5N3', 'R5N3'], //五星
            ['N4P', 'N4C', 'F4N3', 'R4N3'], //四星
            ['N3PF', 'N3CF', 'F3N2F', 'R3N2F'], //前三
            ['N3PM', 'N3CM', 'F3N2M', 'R3N2M'], //中三
            ['N3PL', 'N3CL', 'F3N2L', 'R3N2L'], //后三
            ['N2PL'], //后二
            ['N2PF'] //前二
        ];
        var drawTypeArr = [
            ['5th', '4th', '3rd', '2nd', '1st'],
            ['4th', '3rd', '2nd', '1st'],
            ['5th', '4th', '3rd'],
            ['4th', '3rd', '2nd'],
            ['3rd', '2nd', '1st'],
            ['2nd', '1st'],
            ['5th', '4th']
        ];
        var drawTypeArr_3D = [['3rd','2nd'],['3rd','2nd','1st']];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;

            for (var j = 0; j < drawTypeArr.length; j++) {
                if (betTypeArr[j].indexOf(betType) > -1) {
                    //3D特殊判断
                    if(app.currentSocket.market == 'CN3D'&& betType == 'N2PF'){
                        drawType = drawTypeArr_3D[0][i]
                    }else if(app.currentSocket.market == 'CN3D'&& betType == 'N1'){
                        drawType = drawTypeArr_3D[1][i]
                    }else{
                        drawType = drawTypeArr[j][i];
                    }
                    break;
                }
            }
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            })
        }
        return betResult;
    };

    //大小单双 items赋值
    var getBigSmellOddEvenBetItem = function(betType) {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var betTypeArr = ['BSOEL2', 'BSOEL3', 'BSOEF2', 'BSOEF3', 'BSOEM3'];
        var drawTypeArr = [
            ['2nd', '1st'],
            ['3rd', '2nd', '1st'],
            ['5th', '4th'],
            ['5th', '4th', '3rd'],
            ['4th', '3rd', '2nd']
        ];
        var drawTypeArr_3D = ['3rd','2nd'];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;
            for (var j = 0; j < drawTypeArr.length; j++) {
                if (betTypeArr[j] == betType) {
                    if(app.currentSocket.market == 'CN3D'&& betType == 'BSOEF2'){
                        drawType = drawTypeArr_3D[i]
                    }else{
                        drawType = drawTypeArr[j][i];
                    }
                    break;
                }
            }
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            })
        }
        return betResult;
    };

    //任选复式 items赋值
    var getRXFSBetItem = function() {
        var it = BetRuleInstance;
        var betResult = [];
        var drawType = null;
        var drawTypeArr = ['5th', '4th', '3rd', '2nd', '1st'];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length == 0) continue;
            drawType = drawTypeArr[i];
            betResult.push({
                betItem: it.result[i],
                drawType: drawType
            });
        }
        return betResult;
    };

    //五星直选
    var ZSFS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选复式
    var RXFS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getRXFSBetItem();
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选直选单式
    var RXZXDS = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        data.anyDrawTypes = it.result[1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //大小单双
    var DXDS = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBigSmellOddEvenBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星直选单式
    var ZXDS = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        var list = it.result[0];
        var betItem = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i] != '')
                betItem.push(list[i])
        }
        data.items = [{
            "betItem": betItem,
            "drawType": it.betType
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星组选120
    var ZX120 = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五星组选60
    var ZX60 = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length > 0) {
                data.items.push({
                    "betItem": it.result[i] || '',
                    "drawType": i == 0 ? 'Banker' : 'Ball'
                })
            }
        }
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //前三特殊号码
    var QSTX = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType,
        }];
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //五码趣味三星
    var WMQWSX = function(bet, state) {
        var data = this.getCommonData();
        data.items = this.getBetItem(bet);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    //任选二--直选合值
    var RXEZXHZ = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [{
            "betItem": it.result[0],
            "drawType": it.betType
        }];
        data.anyDrawTypes = it.result[1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    var RXZX = function(bet, state) {
        var it = BetRuleInstance;
        var data = this.getCommonData();
        data.items = [];
        for (var i = 0; i < it.result.length; i++) {
            if (it.result[i].length > 0 && i != it.result.length - 1) {
                data.items.push({
                    "betItem": it.result[i] || '',
                    "drawType": i == 0 ? 'Banker' : 'Ball'
                })
            }
        }
        data.anyDrawTypes = it.result[it.result.length - 1].slice(0);
        if (state) {
            return data;
        } else {
            this.commitBet(data);
        }
    };

    function LT_PlaceBet() {
        this.getBetItem                 =   getBetItem;
        this.getBigSmellOddEvenBetItem  =   getBigSmellOddEvenBetItem;
        this.getRXFSBetItem             =   getRXFSBetItem;
        this.ZSFS                       =   ZSFS;
        this.RXFS                       =   RXFS;
        this.RXZXDS                     =   RXZXDS;
        this.DXDS                       =   DXDS;
        this.ZXDS                       =   ZXDS;
        this.ZX120                      =   ZX120;
        this.ZX60                       =   ZX60;
        this.QSTX                       =   QSTX;
        this.WMQWSX                     =   WMQWSX;
        this.RXEZXHZ                    =   RXEZXHZ;
        this.RXZX                       =   RXZX;
    }

    LT_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.LT_PlaceBet = new LT_PlaceBet();
});
