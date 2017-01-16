/*
 *  投注盘 NumberPlate2.js  parentPlateId: 10, 11
 */

(function() {
    function NumberPlate2(opt) {
        this.opt = opt;
        this.id = this.opt.id;
        this.parentPlate = this.opt.data.parentPlate;
        this.data = this.opt.data;
        this.el = this.initDom(this.data);
        this.operationBall = [
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            ['06', '07', '08', '09', '10', '11'],
            ['01', '02', '03', '04', '05'],
            ['01', '03', '05', '07', '09', '11'],
            ['02', '04', '06', '08', '10']
        ];
        this.czw_operationBall = [
            ['03', '04', '05', '06', '07', '08', '09'],
            ['06', '07', '08', '09'],
            ['03', '04', '05'],
            ['03', '05', '07', '09'],
            ['04', '06', '08']
        ];
    }

    NumberPlate2.prototype.initDom = function(data) {
        var i;
        var j;
        var k;
        var value;
        var temp = '';

        temp += '<div class="number-plate2" id="' + this.id + '">';

        for (i = 0; i < data.names.length; i++) {
            temp += '<div class="clearfix plate2-row" data-index="' + i + '">' +
                '<div class="name">' + data.names[i] + '</div>' +

                '<ul class="plate2-balls">';
            for (j = data.numbers[i].start; j <= data.numbers[i].end; j++) {
                // if (this.parentPlate === 10) {
                // 	value = ((j > 9)?j: ('0' + j));
                // } else {
                // 	value = j;
                // }
                value = ((j > 9) ? j : ('0' + j));
                if (this.parentPlate === 11)
                    temp += '<li class="ball-item" data-value="' + value + '"><span>' + j + '</span></li>';
                else
                    temp += '<li class="ball-item" data-value="' + value + '"><span>' + value + '</span></li>';
            }
            temp += '</ul>';

            temp += '<ul class="plate2-operations">';
            for (k = 0; k < data.opes.length; k++) {
                temp += '<li class="operation-item" data-value="' + k + '"><span>' + data.opes[k] + '</span></li>';
            }
            temp += '</ul>';
            temp += '</div>';
        }

        temp += '</div>';

        return temp;
    };

    NumberPlate2.prototype.showPlate = function(data) {
        var i;
        var len;
        var rows;
        var names;
        var operations;

        names = data.plate.names;
        len = names.length;
        operations = data.plate.operations;
        this.methodid = data.methodid;

        this.zone.show();

        if (this.parentPlate === 10) {
            this.zone.find('.plate2-row').show();
            this.zone.find('.plate2-balls').show();
            this.zone.find('.plate2-operations').show();
            this.zone.find('.plate2-row:gt(' + (len - 1) + ')').hide();
            rows = this.zone.find('.plate2-row:lt(' + len + ')');

            for (i = 0; i < len; i++) {
                $(rows[i]).children('.name').text(names[i]);
            }

            if (operations) {
                for (i = 0; i < len; i++) {
                    if (!operations[i]) {
                        $(rows[i]).children('.plate2-operations').hide();
                    }
                };
            }
        }
    };

    NumberPlate2.prototype.getDom = function() {
        return this.el;
    };

    NumberPlate2.prototype.hide = function() {
        this.zone.find('.selected').removeClass('selected');
        this.zone.hide();
    };
    NumberPlate2.prototype.mathNum = function(targetRow) {
        var that = this;
        this.mathFun(targetRow);
        var betType = BetRuleInstance.betType;
        var numList = [
            ['A8'], //机选8个
            ['A7'], //机选7个
            ['A6'], //机选6个
            ['A5'], //机选5个
            ['A4'], //机选4个
            ['G3H', 'A3'], //机选3个
            ['G2H', 'A2'], //机选2个
            ['N3PH'], //1/1/1
            ['N2PH'], //1/1
            ['G2BH', 'A2B'], //胆码+拖码 = 2
            ['G3BH', 'A3B'], //胆码+拖码 = 3
            ['A4B'], //胆码+拖码 = 4
            ['A5B'], //胆码+拖码 = 5
            ['A6B'], //胆码+拖码 = 6
            ['A7B'], //胆码+拖码 = 7
            ['A8B'], //胆码+拖码 = 8
            ['FMN'], //3-9猜中位
        ];
        var numIndexType;
        for (var i = 0; i < numList.length; i++) {
            if (numList[i].indexOf(betType) >= 0) {
                numIndexType = i;
                break;
            }
        }
        switch (numIndexType) {
            case 0:
                that.mathManyRandom(8);
                break;
            case 1:
                that.mathManyRandom(7);
                break;
            case 2:
                that.mathManyRandom(6);
                break;
            case 3:
                that.mathManyRandom(5);
                break;
            case 4:
                that.mathManyRandom(4);
                break;
            case 5:
                that.mathManyRandom(3);
                break;
            case 6:
                that.mathManyRandom(2);
                break;
            case 7:
                that.mathRandom('1_1_1');
                break;
            case 8:
                that.mathRandom('1_1');
                break;
            case 9:
                that.mathDT('1_1', targetRow);
                break;
            case 10:
                that.mathDT('1_2', targetRow);
                break;
            case 11:
                that.mathDT('1_3', targetRow);
                break;
            case 12:
                that.mathDT('1_4', targetRow);
                break;
            case 13:
                that.mathDT('1_5', targetRow);
                break;
            case 14:
                that.mathDT('1_6', targetRow);
                break;
            case 15:
                that.mathDT('1_7', targetRow);
                break;
            case 16:
                that.randomAnimation(targetRow, '3_9');
                break;
            default:
                that.randomAnimation(targetRow);
                break;
        }
    };
    NumberPlate2.prototype.mathFun = function(targetRow) {
        var that = this;
        this.mathManyRandom = function(typeNum) {
            var index = [];
            var manyNum = 0;
            for (var i = 0;; i++) {
                var num = Math.ceil(Math.random() * 11);
                if (manyNum == typeNum) break;
                if (index.indexOf(num) < 0) {
                    index.push(num);
                    manyNum++;
                }
            }
            that.addIndexAnimation(index.sort());
        };
        this.mathRandom = function(type) {
            var ruleIndex = parseInt(targetRow.parent().attr('data-index'));
            var ruleType = type.split('_')[ruleIndex];
            var dataList = BetRuleInstance.result;
            var index = [];
            var manyNum = 0;
            for (var i = 0;; i++) {

                var num = Math.ceil(Math.random() * 11);

                if (num < 10) {
                    num = '0' + num;
                }
                if (manyNum == ruleType) break;
                if (i > 100) {
                    if (dataList[ruleIndex].join(' ').indexOf(num) >= 0) continue;
                    index.push(num);
                    manyNum++
                }
                var isRrepeatNum = false;
                for (var x = 0; x < type.split('_').length; x++) {
                    if (dataList[x].join(' ').indexOf(num) >= 0 && ruleIndex != x) {
                        isRrepeatNum = true;
                        break;
                    }
                }
                if (isRrepeatNum) {
                    continue;
                }
                if (index.indexOf(num) < 0) {
                    index.push(parseInt(num));
                    manyNum++;
                }
            }
            that.addIndexAnimation(index.sort());
        };
        this.addIndexAnimation = function(index) {
            var i = 0;
            var intervalIndex = targetRow.parent('.plate2-row').index();
            that.index = index || [];
            if (that['randomInterval'+ intervalIndex] != undefined) return false;
            targetRow.find('.ball-item').removeClass('selected');
            if (index.length == 0) return false;
            that['randomInterval'+ intervalIndex] = setInterval(function() {
                if (i < 10) {
                    targetRow.find('.ball-item').removeClass('run-item');
                    targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
                } else {
                    targetRow.find('.ball-item').removeClass('run-item');
                    for (var x = 0; x < index.length; x++) {
                        targetRow.find('.ball-item:eq(' + (index[x] - 1) + ')').addClass('selected');
                    }
                    clearInterval(that['randomInterval'+ intervalIndex]);
                    that['randomInterval'+ intervalIndex] = undefined
                }
                i++;
            }, (i + 1) * 40);
        }
    };
    //胆拖
    NumberPlate2.prototype.mathDT = function(type, targetRow) {
        var that = this;
        that.addIndexAnimationDT = function(index, zone,fun) {
            var i = 0;
            var intervalIndex = targetRow.parent('.plate2-row').index();
            that.index = index || [];
            if (that['randomInterval'+ intervalIndex] != undefined) return false;
            zone.find('.ball-item').removeClass('selected');
            if (index.length == 0) return false;
            that['randomInterval'+ intervalIndex] = setInterval(function() {
                if (i < 10) {
                    zone.find('.ball-item').removeClass('run-item');
                    zone.find('.ball-item:eq(' + i + ')').addClass('run-item');
                } else {
                    zone.find('.ball-item').removeClass('run-item');
                    for (var x = 0; x < index.length; x++) {
                        zone.find('.ball-item:eq(' + (index[x] - 1) + ')').addClass('selected');
                    }
                    clearInterval(that['randomInterval'+ intervalIndex]);
                    that['randomInterval'+ intervalIndex] = undefined;
                    if(fun){
                        fun(true);
                    }
                }
                i++;
            }, (i + 1) * 40);
        };

        var a = type.split('_');
        var aIndex = a[0];
        var bIndex = parseInt(a[1]);
        var num1 = [Math.ceil(Math.random() * 11)];
        var num2 = [];
        var number = 0;
        for (var i = 0;; i++) {
            var c = Math.ceil(Math.random() * 11);
            if (num1[0] != c && num2.indexOf(c) < 0) {
                num2.push(c);
                number++;
            }
            if (number == bIndex) break
        }
        var target = targetRow.parent().prev().find('.plate2-balls');
        that.addIndexAnimationDT(num1.sort(), target,function(){
            that.addIndexAnimationDT(num2.sort(), targetRow);
            that.setBetResult(1, 5)
        });
        that.setBetResult(0, 5)

    };
    NumberPlate2.prototype.bindEvents = function() {
        var opeval;
        var rowIndex;
        // var numberRows;
        var targetRow;
        var intervalIndex;
        var that = this;

        this.zone = $('#' + this.id);

        this.zone.delegate('.ball-item', 'click', function() {
        	var target = $(this);
            BetRuleInstance.checkSelect(target);
            that.setOperationBall(target);
            that.setDtOperationBall(target, BetRuleInstance);
        });

        this.zone.delegate('.operation-item', 'click', function() {
            opeval = parseInt($(this).attr('data-value'));
            rowIndex = parseInt($(this).parents('.plate2-row').attr('data-index'));
            targetRow = $(this).parent('.plate2-operations').prev('.plate2-balls');
            intervalIndex = targetRow.parent('.plate2-row').index();

            if (that['randomInterval'+ intervalIndex]) {
                clearInterval(that['randomInterval'+ intervalIndex]);
                that['randomInterval'+ intervalIndex] = undefined;
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.parent().prev().find('.ball-item').removeClass('run-item');
            }

            if ($(this).hasClass('selected') && opeval !== 5) {
                $(this).removeClass('selected');
                targetRow.find('.ball-item').removeClass('selected');
                that.setBetResult(rowIndex, opeval);
                return;
            }

            $(this).siblings('.operation-item').removeClass('selected');

            if (opeval !== 5) {
                $(this).addClass('selected');
            }

            that.processOperations(targetRow, opeval);
            that.setBetResult(rowIndex, opeval, targetRow);
        });
    };

    NumberPlate2.prototype.randomAnimation = function(targetRow, type) {
        var index;
        var intervalIndex = targetRow.parent('.plate2-row').index();
        var that = this;
        var i = 0;

        if (that['randomInterval'+ intervalIndex] != undefined) return false;
        targetRow.find('.ball-item').removeClass('selected');
        if (type) {
            var min = type.split('_')[0];
            var max = type.split('_')[1];
            index = Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            index = Math.ceil(Math.random() * 11);
        }

        that.index = [index] || [];
        targetRow.find('.ball-item').removeClass('run-item');
        if (index.length == 0) return false;
        this['randomInterval'+ intervalIndex] = setInterval(function() {
            if (i < (index - 1)) {
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.find('.ball-item:eq(' + i + ')').addClass('run-item');
            } else {
                targetRow.find('.ball-item').removeClass('run-item');
                targetRow.find('.ball-item:eq(' + i + ')').addClass('selected');
                clearInterval(that['randomInterval'+ intervalIndex]);
                that['randomInterval'+ intervalIndex] = undefined;
                return;
            }

            i++;
        }, (i + 1) * 40);
    };

    NumberPlate2.prototype.processOperations = function(targetRow, opeval) {
        var i;
        var low;
        var high;

        if (this.parentPlate === 10) {
            low = 4;
            high = 5;
        } else {
            low = 2;
            high = 3;
        }

        switch (opeval) {
            case 0:
                targetRow.find('.ball-item').addClass('selected');
                break;
            case 1:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:gt(' + low + ')').addClass('selected');
                break;
            case 2:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:lt(' + high + ')').addClass('selected');
                break;
            case 3:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:even').addClass('selected');
                break;
            case 4:
                targetRow.find('.ball-item').removeClass('selected');
                targetRow.find('.ball-item:odd').addClass('selected');
                break;
            case 5:
                //if (this.randomInterval) {
                //	return;
                //}
                this.mathNum(targetRow);
                //this.randomAnimation(targetRow);
                break;
            default:
                break;
        }
    };

    NumberPlate2.prototype.setBetResult = function(rowIndex, opeval, targetRow) {
        var it = BetRuleInstance;
        var that = this;
        var resultIndex = rowIndex;
        var arr1 = it.result[resultIndex];
        var arr2 = [];
        if (this.parentPlate == 10)
            arr2 = this.operationBall[opeval];
        else
            arr2 = this.czw_operationBall[opeval];

        if (opeval != 5) {
            if (arr1.eqaul(arr2))
                it.result[resultIndex] = [];
            else
                it.result[resultIndex] = arr2.slice(0);

            this.dtRowDataSetting(it.betType, it.result, arr2, targetRow)
            HL11X5_BetAlgorithm.getCount(it.result, it.betType);
        } else {
            //随机动画
            it.result[resultIndex] = [];
            for (var i = 0; i < that.index.length; i++) {
                var numIndex = parseInt(that.index[i].toString());
                if (numIndex < 10) {
                    numIndex = '0' + numIndex;
                } else {
                    numIndex = numIndex.toString();
                }
                it.result[resultIndex].push(numIndex)
            }
            HL11X5_BetAlgorithm.getCount(it.result, it.betType);
        }
    }

    NumberPlate2.prototype.setOperationBall = function(target) {
        var it = BetRuleInstance;
        var rowTarget = target.parents('.plate2-row');
        var rowIndex = parseInt(rowTarget.attr('data-index'));
        var operationRow = this.zone.children('.plate2-row:eq(' + rowIndex + ')').children('.plate2-operations');
        if (operationRow.is(':hidden')) return;
        for (var i = 0; i < 5; i++) {
            var operationTarget = operationRow.children('.operation-item:eq(' + i + ')');

            if (it.result[rowIndex].eqaul(this.operationBall[i]) && this.parentPlate == 10) {
                operationTarget.addClass('selected');
            } else if (it.result[rowIndex].eqaul(this.czw_operationBall[i]) && this.parentPlate == 11) {
                operationTarget.addClass('selected');
            } else {
                operationTarget.removeClass('selected');
            }
        }
    }

    NumberPlate2.prototype.dtRowDataSetting = function(betType, result, arr2, targetRow) {
        var $currentRow;
        var temResult;
        if (!this.isDtPlayMethod(betType) || !targetRow) return;

        $currentRow = targetRow.parent().prev().children('.plate2-balls');
        temResult = result[0].slice(0);
        for (var i = 0; i < temResult.length; i++) {
            var itemValue = temResult[i];
            if ($.inArray(itemValue, arr2) > -1) {
                result[0].remove(itemValue);
                $currentRow.find('[data-value=' + itemValue + ']').removeClass('selected');
            }
        }
    }

    NumberPlate2.prototype.setDtOperationBall = function(target, it) {
        var $operationRow;
        var $operationTarget;
        if (!this.isDtPlayMethod(it.betType)) return;

        $operationRow = target.closest('.plate2-row').next().children('.plate2-operations');
        for (var i = 0; i < 5; i++) {
            $operationTarget = $operationRow.children('.operation-item:eq(' + i + ')');
            if (it.result[1].eqaul(this.operationBall[i])) 
            	$operationTarget.addClass('selected');
            else
            	$operationTarget.removeClass('selected');
        }
    }

    //是否是胆拖玩法
    NumberPlate2.prototype.isDtPlayMethod = function(betType) {
        var dtBetType = [
            'G3BH',
            'G2BH',
            'A2B',
            'A3B',
            'A4B',
            'A5B',
            'A6B',
            'A7B',
            'A8B'
        ];

        if ($.inArray(betType, dtBetType) == -1) return false;
        return true;
    }


    window.NumberPlate2 = NumberPlate2;
}());
