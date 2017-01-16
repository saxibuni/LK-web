TrendAlgorithm = {

    //最终结果
    yltAlgorithm: function(resultIndex, datalength) {
        var ballValue = '';
        var result = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        if (this.gameCode == 'HL11x5') result.push([]);
        if (this.gameCode == 'K3') result = result.slice(0, 6);

        for (var i = 0; i < resultIndex.length; i++) {
            var currentIndexArr = resultIndex[i];
            var resultItem = result[i];
            if (this.gameCode == 'HL11x5') {
                ballValue = (i < 9) ? ('0' + (i + 1)) : (i + 1).toString();
            } else if (this.gameCode == 'K3') {
                ballValue = i + 1;
            } else {
                ballValue = i;
            }
            this.fillData(currentIndexArr, resultItem, ballValue, datalength);
        }
        return result;
    },

    //填充数据算法
    fillData: function(currentIndexArr, result, ballValue, datalength) {
        var totalTime = 0,
            maxMissTime = 0,
            averageMissTime = 0,
            continuousLenght = 0;
        var starIndex = 0;
        for (var i = 0; i < currentIndexArr.length; i++) {
            result.push(ballValue);
        }
        totalTime = currentIndexArr.length; //总次数
        continuousLenght = this.continuousLenght(currentIndexArr); //最大连出

        if (currentIndexArr[0] == 0) {
            starIndex = 1;
            currentIndexArr.splice(0, 1);
        }

        for (var i = 0; i < currentIndexArr.length; i++) {
            var preIndex = currentIndexArr[i];
            for (var j = starIndex; j < preIndex; j++) {
                result.splice(j, 0, j + 1 - starIndex);
            }
            starIndex = preIndex + 1;
        }
        result.yltIndex = result.length - 1;

        if (result.length < datalength) {
            var j = result.length;
            for (var index = j; index < datalength; index++) {
                result.push(index - j + 1);
            }
        }
        if (result.length == 0) maxMissTime = 0;
        else maxMissTime = Math.max.apply(null, result); //最大遗漏

        averageMissTime = Math.round(datalength / (currentIndexArr.length + 1)); //平均遗漏
        result.push(totalTime, continuousLenght, maxMissTime, averageMissTime);
    },

    //中奖号码索引
    numAppeared: function(data) {
        var result = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        if (this.gameCode == 'HL11x5') result.push([]);
        if (this.gameCode == 'K3') result = result.slice(0, 6);

        for (var j = 0; j < data.length; j++) {
            if (this.gameCode == 'HL11x5') //HL11x5
                result[parseInt(data[j]) - 1].push(j);
            else if (this.gameCode == 'LT') //LT
                result[data[j]].push(j);
            else result[parseInt(data[j]) - 1].push(j); //K3

        }
        return result;
    },

    //号码分布索引
    numScatter: function(data) {
        var result = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        var value;

        if (this.gameCode == 'HL11x5') result.push([]);
        if (this.gameCode == 'K3') result = result.slice(0, 6);

        for (var i = 0; i < data.length; i++) {
            if (this.gameCode == 'LT') {
                for (var j = 0; j < 10; j++) {
                    if (data[i].indexOf(j) > -1)
                        result[j].push(i);
                }
            } else if (this.gameCode == 'K3') {
                for (var j = 0; j < 6; j++) {
                    if (data[i].indexOf(j + 1) > -1)
                        result[j].push(i);
                }
            } else { //HL11x5
                for (var j = 0; j < 11; j++) {
                    value = j < 9 ? ('0' + (j + 1)) : (j + 1).toString();
                    if (data[i].indexOf(value) > -1)
                        result[j].push(i);
                }
            }
        }
        return result;
    },

    //最大连出算法
    continuousLenght: function(data) {
        var countArr = {},
            countArrLength,
            arrIndex = 0;
        var continuousLenght = 0;
        for (var i = 1; i < data.length; i++) {
            if (data[i] - data[i - 1] == 1) {
                if (!countArr[arrIndex])
                    countArr[arrIndex] = 2;
                else
                    countArr[arrIndex]++;
            } else {
                arrIndex++;
            }
        }
        if (data.length == 0)
            return 0;

        countArrLength = Object.getOwnPropertyNames(countArr).length;
        if (countArrLength == 0)
            return 1;

        for (var i in countArr) {
            if (countArr[i] > continuousLenght)
                continuousLenght = countArr[i];
        }
        return continuousLenght;
    },

    //K3 多重号 
    k3NumberAnalysis: function(data) {
        var result = [
            [], //和值
            [], //三同号
            [], //二同号
            [], //三不同
            [] //三连号
        ];
        var val1;
        var val2;
        var val3;

        for (var i = 0; i < data.length; i++) {
            val1 = parseInt(data[i][0]);
            val2 = parseInt(data[i][1]);
            val3 = parseInt(data[i][2]);
            //和值
            result[0].push(val1 + val2 + val3);
            //三同号
            if (val1 === val2 === val3) result[1].push('bingo');
            else this.MissCount(result[1]);
            //二同号
            if ((val1 === val2 || val1 === val3 || val2 === val3)) result[2].push('bingo');
            else this.MissCount(result[2]);
            //三不同
            if (val1 != val2 && val2 != val3 && val1 != val3) result[3].push('bingo');
            else this.MissCount(result[3]);
            //三连号
            if (val3 - val2 == 1 && val2 - val1 == 1) result[4].push('bingo');
            else this.MissCount(result[4]);
        }
        result[0].push(0, 0, 0, 0); //和值
        this.k3StatisticsData(result, 1, result.length);
        return result;
    },

    //K3遗漏数
    MissCount: function(result) {
        if (result.length > 0) {
            if (isNaN(result[result.length - 1])) result.push(1);
            else result.push(parseInt(result[result.length - 1]) + 1);
        } else {
            result.push(1);
        }
    },

    //k3统计  cn3d统计
    k3StatisticsData: function(result, startIndex, endIndex) {
        var totalIndexArr = this.bingoIndexArr(result, startIndex, endIndex);
        var indexArr;
        var totalTime = 0; //总次数
        var continuousLenght = 0; //最大连出
        var maxMissTime = 0; //最大遗漏
        var averageMissTime = 0; //平均遗漏
        for (var i = startIndex; i < endIndex; i++) {
            indexArr = totalIndexArr[i - startIndex];
            totalTime = indexArr.length;
            continuousLenght = this.continuousLenght(indexArr);
            maxMissTime = indexArr.length == 0 ? result[i].length : this.getMaxValue(result[i]);
            averageMissTime = Math.round(result[i].length / (totalTime + 1));
            result[i].push(totalTime, continuousLenght, maxMissTime, averageMissTime);
        }
    },

    //k3命中号码类型的索引
    bingoIndexArr: function(result, startIndex, endIndex) {
        var indexLength = endIndex - startIndex;
        var indexArr = [];
        for (var i = 0; i < indexLength; i++) {
            indexArr.push([]);
        };

        for (var i = startIndex; i < endIndex; i++) {
            for (var j = 0; j < result[i].length; j++) {
                if (result[i][j] == 'bingo')
                    indexArr[i - startIndex].push(j);
            }
        }

        return indexArr;
    },

    //获取数组中最大值
    getMaxValue: function(array) {
        var value = 0;
        for (var i in array) {
            if (!isNaN(array[i]))
                if (parseInt(array[i]) > value)
                    value = parseInt(array[i]);
        }
        return value;
    },

    //福彩3D 号码分析
    cn3dNumberAnalysis: function(data) {
        var result = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        var val1;
        var val2;
        var val3;

        for (var i = 0; i < data.length; i++) {
            val1 = parseInt(data[i][0]);
            val2 = parseInt(data[i][1]);
            val3 = parseInt(data[i][2]);
            //大小形态
            result[0].push(this.cn3dBigOrSmall(data[i]));
            //单双形态
            result[1].push(this.cn3dEvenOrOdd(data[i]));
            //质合形态
            result[2].push(this.cn3dPrimesOrComposite(data[i]));
            //012形态
            result[3].push(this.cn3dZeroOneTwo([val1, val2, val3]));
            //豹子
            if (val1 === val2 === val3) result[4].push('bingo');
            else this.MissCount(result[4]);
            //组三
            if ((val1 === val2 || val1 === val3 || val2 === val3)) result[5].push('bingo');
            else this.MissCount(result[5]);
            //组六
            if (val1 != val2 && val2 != val3 && val1 != val3) result[6].push('bingo');
            else this.MissCount(result[6]);
            //跨度
            result[7].push(this.cn3dSpan([val1, val2, val3]));
            //直选和值
            result[8].push(val1 + val2 + val3);
            //和值尾数
            result[9].push(this.cn3dSumTail([val1, val2, val3]));
        }
        result[0].push('', '', '', '');
        result[1].push('', '', '', '');
        result[2].push('', '', '', '');
        result[3].push('', '', '', '');
        this.k3StatisticsData(result, 4, 7);
        result[7].push('', '', '', '');
        result[8].push('', '', '', '');
        result[9].push('', '', '', '');
        return result;
    },

    //大小
    cn3dBigOrSmall: function(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push((array[i] > 4) ? '大' : '小');
        }
        return result.join('');
    },

    //单双
    cn3dEvenOrOdd: function(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push((array[i] % 2 == 0) ? '双' : '单');
        }
        return result.join('');
    },

    //质数合数
    cn3dPrimesOrComposite: function(array) {
        var temp = [1, 3, 5, 7];
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(([1, 3, 5, 7].indexOf(array[i]) > -1) ? '质' : '合');
        }
        return result.join('');
    },

    cn3dZeroOneTwo: function(array) {
        var zoreArr = [0, 3, 6, 9];
        var oneArr = [1, 4, 7];
        var twoArr = [2, 5, 8];
        var result = '';
        for (var i = 0; i < array.length; i++) {
            if (zoreArr.indexOf(array[i]) != -1) result += '0';
            if (oneArr.indexOf(array[i]) != -1) result += '1';
            if (twoArr.indexOf(array[i]) != -1) result += '2';
        }
        return result;
    },

    //跨度
    cn3dSpan: function(array) {
        // Math.max.apply(null, result); //最大遗漏
        var max = Math.max.apply(null, array);
        var min = Math.min.apply(null, array);
        return (max - min);
    },

    //和值尾数
    cn3dSumTail: function(array) {
        var sum = array[0] + array[1] + array[2];
        return (sum % 10);
    }

};
