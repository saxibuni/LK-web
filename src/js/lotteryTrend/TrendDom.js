TrendDom = {

    createTheadfoot: function(trendView, gameCode, market) {
        var that = trendView;
        var $theadId, $tfootId;
        var colspanValue = 0;
        var betThead = [
            ['万位', '千位', '百位', '十位', '个位'],
            ['千位', '百位', '十位', '个位'],
            ['万位', '千位', '百位'],
            ['千位', '百位', '十位'],
            ['百位', '十位', '个位'],
            ['万位', '千位'],
            ['十位', '个位']
        ];
        var temp = '';
        $theadId = $('#J-chart-table').find('.thead');
        $tfootId = $('#J-chart-table').find('.tfoot');

        trendView.theadfoot = betThead[trendView.betType];

        temp += '<tr class="title-text">';
        temp += '<th colspan="3" rowspan="2" class="right-border">期号</th>';
        temp += '<th class="gap"></th>';
        temp += '<th>开奖号码</th>';
        temp += '<th class="gapRig right-border"></th>';

        if (gameCode == 'LT')
            colspanValue = 12;
        else if (gameCode == 'HL11x5')
            colspanValue = 13;
        else if (gameCode == 'K3')
            colspanValue = 8;

        for (var i = 0; i < that.theadfoot.length; i++) {
            temp += '<th colspan="' + colspanValue + '" class="right-border">' + that.theadfoot[i] + '</th>';
        }

        temp += '<th colspan="' + colspanValue + '" class="right-border">号码分布</th>';

        //快3表头扩展
        if (gameCode == 'K3') {
            ['和值', '三同号', '二同号', '三不同', '三连号'].forEach(function(item, index, array) {
                temp += '<th colspan="3" rowspan="2" class="right-border">' + item + '</th>';
            });
        }

        //福彩3D表头扩展
        if (gameCode == 'LT' && market == 'CN3D') {
            ['大小形态', '单双形态', '质合形态', '012形态', '豹子', '组三', '组六', '跨度', '直选和值', '和值尾数']
            .forEach(function(item, index, array) {
                temp += '<th colspan="3" rowspan="2" class="right-border">' + item + '</th>';
            });
        }

        temp += '</tr>';
        temp += '<tr class="title-number">';
        temp += '<th class="gap"></th>';
        temp += '<th>';
        temp += '<span class="checkbox-all"></span>';
        temp += '</th>';
        temp += '<th class="gapRig right-border"></th>';

        for (var i = 0; i < that.theadfoot.length; i++) {
            temp += '<th class="gap"></th>';
            if (gameCode == 'LT') {
                for (var j = 0; j < 10; j++)
                    temp += '<th><span>' + j + '</span></th>';
            } else if (gameCode == 'HL11x5') {
                for (var j = 1; j < 12; j++)
                    temp += '<th><span>' + j + '</span></th>';
            } else if (gameCode == 'K3') {
                for (var j = 1; j < 7; j++)
                    temp += '<th><span>' + j + '</span></th>';
            }
            temp += '<th class="gapRig right-border"></th>';
        }
        temp += '<th class="gap"></th>';

        if (gameCode == 'LT') {
            for (var j = 0; j < 10; j++)
                temp += '<th><span>' + j + '</span></th>';
        } else if (gameCode == 'HL11x5') {
            for (var j = 1; j < 12; j++)
                temp += '<th><span>' + j + '</span></th>';
        } else if (gameCode == 'K3') {
            for (var j = 1; j < 7; j++)
                temp += '<th><span>' + j + '</span></th>';
        }
        temp += '<th class="gapRig right-border"></th>';
        temp += '</tr>';

        $theadId.empty();
        $theadId.append(temp);

        $tfootId.empty();
        $tfootId.append(temp);

        return temp;
    },

    createTbody: function(trendView, gameCode, market) {
        var i;
        var j;
        var k;
        var x;
        var t;
        var temp = '';
        var bindIndex;
        var scatterIndex;
        var data;
        var scatterResult;
        var k3AnalysisData;
        var cn3dAnalysisData;
        var isRepeatNum;
        var value;
        var startNum = 0;
        var endNum = 0;

        this.bindIdxResult = this.getIndexData(trendView, gameCode, market);
        bindIndex = this.bindIdxResult.startBindIdx;
        FormatLotteryNum.calcRealNum(trendView, gameCode, market);

        trendView.data.push({ issue: '总次数', number: '' });
        trendView.data.push({ issue: '最大连出', number: '' });
        trendView.data.push({ issue: '最大遗漏', number: '' });
        trendView.data.push({ issue: '平均遗漏', number: '' });
        trendView.scatterResult.push('', '', '', '');

        data = trendView.data;
        scatterResult = trendView.scatterResult;

        if (gameCode == 'LT') {
            startNum = 0;
            endNum = 9;
            if (market == 'CN3D') 
                cn3dAnalysisData = trendView.cn3dAnalysisResult;
        } else if (gameCode == 'HL11x5') {
            startNum = 1;
            endNum = 11;
        } else if (gameCode == 'K3') {
            startNum = 1;
            endNum = 6;
            k3AnalysisData = trendView.k3AnalysisResult;
        }

        for (i = 0; i < data.length; i++) {
            //辅助线
            if (((i + 1) % 5 === 0) && (i !== data.length - 1)) {
                temp += '<tr class="gapBot bottom-border">';
            } else {
                if (i >= data.length - 4) {
                    temp += '<tr class="trEval">';
                } else {
                    temp += '<tr>';
                }
            }

            temp += '<td class="gap"></td><td><span>' + data[i].issue + '</span></td><td class="gapRig right-border"></td>';
            temp += '<td class="gap"></td><td><span>' + data[i].number + '</span></td><td class="gapRig right-border"></td>';

            //万、千、百、十、个
            bindIndex = this.bindIdxResult.startBindIdx;
            for (x = 0; x < trendView.theadfoot.length; x++) {
                for (t = startNum; t <= endNum; t++) {
                    if (t === startNum) {
                        if (t === parseInt(scatterResult[i][x])) {
                            temp += '<td class="gap"></td><td class="selected happyNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td>';
                        } else {
                            temp += '<td class="gap"></td><td class="missNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td>';
                        }
                        bindIndex++;
                    } else if (t === endNum) {
                        if (t === parseInt(scatterResult[i][x])) {
                            temp += '<td class="selected happyNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td><td class="gapRig right-border"></td>';
                        } else {
                            temp += '<td class="missNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td><td class="gapRig right-border"></td>';
                        }
                        bindIndex++;
                    } else {
                        if (t === parseInt(scatterResult[i][x])) {
                            temp += '<td class="selected happyNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td>';
                        } else {
                            temp += '<td class="missNum" data-index="' + bindIndex + '"><span>' + trendView.uiResult[bindIndex][i] + '</span></td>';
                        }
                        bindIndex++;
                    }
                }
            }

            //号码分布
            isRepeatNum = this.collectRepeatNum(scatterResult, i);
            if (gameCode == 'LT' && market != 'CN3D')
                scatterIndex = 50;
            else
                scatterIndex = this.bindIdxResult.endBindIdx;

            for (k = startNum; k <= endNum; k++) {
                if (gameCode == 'LT' || gameCode == 'K3')
                    value = k;
                if (gameCode == 'HL11x5')
                    value = k < 10 ? ('0' + k) : k.toString();

                if (k === startNum) {
                    if (scatterResult[i].indexOf(value) >= 0) {
                        if (isRepeatNum.indexOf(value) >= 0) {
                            temp += '<td class="gap"></td><td class="selected" ><span style="background-color: #bd3ed4 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                        } else {
                            temp += '<td class="gap"></td><td class="selected"><span style="background-color:#6cca53 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                        }
                    } else {
                        temp += '<td class="gap"></td><td><span>' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                    }
                    scatterIndex++;
                } else if (k === endNum) {
                    if (scatterResult[i].indexOf(value) >= 0) {
                        if (isRepeatNum.indexOf(k) >= 0) {
                            temp += '<td class="selected" ><span style="background-color: #bd3ed4 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td><td class="gapRig right-border"></td>';
                        } else {
                            temp += '<td class="selected"><span style="background-color:#6cca53 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td><td class="gapRig right-border"></td>';
                        }
                    } else {
                        temp += '<td><span>' + trendView.uiResult[scatterIndex][i] + '</span></td><td class="gapRig right-border"></td>';
                    }
                    scatterIndex++;
                } else {
                    if (scatterResult[i].indexOf(value) >= 0) {
                        if (isRepeatNum.indexOf(value) >= 0) {
                            temp += '<td class="selected" ><span style="background-color: #bd3ed4 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                        } else {
                            temp += '<td class="selected"><span style="background-color:#6cca53 !important;">' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                        }
                    } else {
                        temp += '<td><span>' + trendView.uiResult[scatterIndex][i] + '</span></td>';
                    }
                    scatterIndex++;
                }
            }

            //K3 和值 三同号 二同号 三不同 三连号 统计
            if (gameCode == 'K3') {
                temp += '<td class="gap"></td><td><span>' + k3AnalysisData[0][i] + '</span></td><td class="gapRig right-border"></td>';
                temp += '<td class="gap"></td><td><span>' + k3AnalysisData[1][i] + '</span></td><td class="gapRig right-border"></td>';
                if(k3AnalysisData[2][i] == "bingo"){
                    temp += '<td class="gap"></td><td><img src="../img/bingo.png"/></td><td class="gapRig right-border"></td>';
                }else{
                    temp += '<td class="gap"></td><td><span>' + k3AnalysisData[2][i] + '</span></td><td class="gapRig right-border"></td>';
                }

                if(k3AnalysisData[3][i] == "bingo"){
                    temp += '<td class="gap"></td><td><img src="../img/bingo.png"/></td><td class="gapRig right-border"></td>';
                }else{
                    temp += '<td class="gap"></td><td><span>' + k3AnalysisData[3][i] + '</span></td><td class="gapRig right-border"></td>';
                }
                if(k3AnalysisData[4][i] == "bingo"){
                    temp += '<td class="gap"></td><td><img src="../img/bingo.png"/></td><td class="gapRig right-border"></td>';
                }else{
                    temp += '<td class="gap"></td><td><span>' + k3AnalysisData[4][i] + '</span></td><td class="gapRig right-border"></td>';
                }

            }

            //福彩3d
            if (market == 'CN3D') {//红#F53F00 蓝#00A2FF 绿色#86b2fa
                for(var m = 0; m < 10; m++){
                    if(cn3dAnalysisData[m][i] == "bingo"){
                        temp += '<td class="gap"></td><td><img src="../img/bingo.png"/></td><td class="gapRig right-border"></td>';
                    }else{
                        if(m == 0 || m == 2 || m == 7){
                            temp += '<td class="gap blueTrend"></td><td class="blueTrend"><span>' + cn3dAnalysisData[m][i] + '</span></td><td class="gapRig right-border"></td>';
                        }else if(m == 1 || m == 3){
                            temp += '<td class="gap greenTrend"></td><td class="greenTrend"><span>' + cn3dAnalysisData[m][i] + '</span></td><td class="gapRig right-border"></td>';
                        }else if(m == 8){
                            temp += '<td class="gap redTrend"></td><td class="redTrend"><span>' + cn3dAnalysisData[m][i] + '</span></td><td class="gapRig right-border"></td>';
                        }else{
                            temp += '<td class="gap"></td><td><span>' + cn3dAnalysisData[m][i] + '</span></td><td class="gapRig right-border"></td>';
                        }
                    }
                }
            }

            temp += '</tr>';
        }

        trendView.zone.find('.tbody').empty();
        trendView.zone.find('.tbody').append(temp);
    },

    collectRepeatNum: function(scatterResult, i) {
        var isRepeatNum = [];
        for (var n = 0; n < scatterResult[i].length; n++) {
            for (var m = n + 1; m < scatterResult[i].length; m++) {
                if (scatterResult[i][n] == scatterResult[i][m]) {
                    if (isRepeatNum.indexOf(scatterResult[i][n]) < 0) {
                        isRepeatNum.push(parseInt(scatterResult[i][n]))
                    }
                }
            }
        }
        return isRepeatNum;
    },

    getIndexData: function(trendView, gameCode, market) {
        var startBindIdx = 0,
            endBindIdx = 0;

        if (gameCode == 'HL11x5')
            return {
                startBindIdx: 0,
                endBindIdx: 55
            };
        if (gameCode == 'K3')
            return {
                startBindIdx: 0,
                endBindIdx: 18
            };
        if (market == 'CN3D') {
            return {
                startBindIdx: 0,
                endBindIdx: 30
            };
        }

        switch (trendView.betType) {
            case '0':
                startBindIdx = 0;
                endBindIdx = 50;
                break; //五星
            case '1':
                startBindIdx = 10;
                endBindIdx = 50;
                break; //四星
            case '2':
                startBindIdx = 0;
                endBindIdx = 30;
                break; //前三
            case '3':
                startBindIdx = 10;
                endBindIdx = 40;
                break; //中三
            case '4':
                startBindIdx = 20;
                endBindIdx = 50;
                break; //后三
            case '5':
                startBindIdx = 0;
                endBindIdx = 20;
                break; //前二
            case '6':
                startBindIdx = 30;
                endBindIdx = 50;
                break; //后二
        }
        return {
            startBindIdx: startBindIdx,
            endBindIdx: endBindIdx
        };
    }
};
