FormatLotteryNum = {

    //11选5中奖数据format
    HL11x5_calcRealNum: function(trendView, gameCode,market) {
        var happyData = trendView.data;
        var result = [
            [],
            [],
            [],
            [],
            []
        ];
        trendView.scatterResult = [];

        for (var i = 0; i < happyData.length; i++) {
            var numArr = happyData[i].number.split(',');

            result[0].push(numArr[0]);
            result[1].push(numArr[1]);
            result[2].push(numArr[2]);
            result[3].push(numArr[3]);
            result[4].push(numArr[4]);

            trendView.scatterResult.push(numArr);
        }

        this.formatBindingData(result, trendView, gameCode,market);
    },
    //快3中奖数据format
    K3_calcRealNum: function(trendView, gameCode,market) {
        var happyData = trendView.data;
        var result = [
            [],
            [],
            []
        ];
        trendView.scatterResult = [];

        for (var i = 0; i < happyData.length; i++) {
            var numArr = happyData[i].number.split('');

            result[0].push(numArr[0]);
            result[1].push(numArr[1]);
            result[2].push(numArr[2]);
            trendView.scatterResult.push(numArr.join(''));
        }

        this.formatBindingData(result, trendView, gameCode,market);
    },

    //时时彩中奖数据format
    LT_calcRealNum: function(trendView, gameCode) {
        var happyData = trendView.data;
        var result = [
            [],
            [],
            [],
            [],
            []
        ];
        trendView.scatterResult = [];

        for (var i = 0; i < happyData.length; i++) {
            var numArr = happyData[i].number.split('');

            result[0].push(numArr[0]);
            result[1].push(numArr[1]);
            result[2].push(numArr[2]);
            result[3].push(numArr[3]);
            result[4].push(numArr[4]);

            if (trendView.betType == '0') trendView.scatterResult.push(numArr.join(''));
            if (trendView.betType == '1') trendView.scatterResult.push(numArr.join('').substring(1, 5));
            if (trendView.betType == '2') trendView.scatterResult.push(numArr.join('').substring(0, 3));
            if (trendView.betType == '3') trendView.scatterResult.push(numArr.join('').substring(1, 4));
            if (trendView.betType == '4') trendView.scatterResult.push(numArr.join('').substring(2, 5));
            if (trendView.betType == '5') trendView.scatterResult.push(numArr.join('').substring(0, 2));
            if (trendView.betType == '6') trendView.scatterResult.push(numArr.join('').substring(3, 5));
        }

        this.formatBindingData(result, trendView, gameCode);
    },

    calcRealNum: function(trendView, gameCode, market) {
        if (gameCode == 'LT' && market != 'CN3D')
            this.LT_calcRealNum(trendView,gameCode,market);
        else if (gameCode == 'HL11x5')
            this.HL11x5_calcRealNum(trendView,gameCode,market);
        else if (gameCode == 'K3' || market == 'CN3D')
            this.K3_calcRealNum(trendView, gameCode,market);
    },

    //格式化绑定在table的数据
    formatBindingData: function(result, trendView, gameCode,market) {
        var dataLength = trendView.data.length;
        var it = TrendAlgorithm;
        var digitScratter;

        trendView.uiResult = [];
        trendView.k3AnalysisResult = [];
        it.gameCode = gameCode;
        for (var i = 0; i < result.length; i++) {
            var digit = it.yltAlgorithm(it.numAppeared(result[i]), dataLength);
            for (var j = 0; j < digit.length; j++) {
                trendView.uiResult.push(digit[j]);
            }
        }
        //位数中奖号码分布
        digitScratter = it.yltAlgorithm(it.numScatter(trendView.scatterResult), dataLength);
        for (var k = 0; k < digitScratter.length; k++) {
            trendView.uiResult.push(digitScratter[k]);
        }

        //K3特殊处理
        if (gameCode == 'K3') {
            trendView.k3AnalysisResult = it.k3NumberAnalysis(trendView.scatterResult);
            // console.log(trendView.k3AnalysisResult);
        }

        //福彩3D特殊处理
        if (gameCode == 'LT'&& market == 'CN3D') {
            trendView.cn3dAnalysisResult = it.cn3dNumberAnalysis(trendView.scatterResult);
        }

        // console.log(trendView.uiResult);
    }
};
