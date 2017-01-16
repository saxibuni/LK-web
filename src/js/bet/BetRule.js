(function() {
    function BetRule(betType, gameCode) {
        this.ruleData = RULE_CONFIG.filter(function(item, index, array) {
            return item.betType == betType && item.gameCode == gameCode;
        })[0];

        //临时处理 没数据的情况下防止错误  后面删掉
        if (!this.ruleData) {
            this.ruleData = {
                dataFormatter: [
                    []
                ]
            };
        }

        this.result = this.copyResult(this.ruleData.dataFormatter);
        this.betType = betType;
        this.gameCode = gameCode;
        this.betCount = 0;

        this.getBetUnit();
        this.changeComms(betType, this.gameCode);
        this.setModelZoneData(0, 0, 0, 0, 1);
        this.changePlaceholder();
        this.changeBtnClass();
    };

    //普通号码球
    BetRule.prototype.checkSelect = function($target) {
        var gameCode = this.gameCode;
        var rowData = this.getRowData($target, this.ruleData);
        var rowIndex = rowData.rowIndex;
        var $selectBall = rowData.selectBall;
        var num = $target.attr('data-value');
        if ($.inArray(num, this.result[rowIndex]) > -1) {
            $target.removeClass('selected');
            this.result[rowIndex].remove(num);
        } else {
            var selectDataLengthArr = this.ruleData.selectDataLength;
            if (selectDataLengthArr && selectDataLengthArr[rowIndex]) {
                if ($selectBall.length < selectDataLengthArr[rowIndex]) {
                    $target.addClass('selected');
                    this.result[rowIndex].push(num);
                } else {
                    var ballValue = this.result[rowIndex].pop();
                    $selectBall.filter('[data-value=' + ballValue + ']').removeClass('selected');
                    $target.addClass('selected');
                    this.result[rowIndex].push(num);
                }
            } else {
                $target.addClass('selected');
                this.result[rowIndex].push(num);
            }
        }
        this.dtSelectLimit(this.result, $target, rowIndex, num)
        CalcSpecialOdds.setSpecialOdds(this, gameCode);
        if (gameCode == 'LT')
            BetAlgorithm.getCount(this.result, this.betType);
        else if (gameCode == 'HL11x5')
            HL11X5_BetAlgorithm.getCount(this.result, this.betType);
    };

    //万，千，百，十，个 位数多选
    BetRule.prototype.checkUnitGroup = function($target) {
        var num = $target.attr('data-value');
        var arr = this.result[this.result.length - 1];
        if ($.inArray(num, arr) > -1) {
            $target.removeClass('checked');
            arr.remove(num);
        } else {
            $target.addClass('checked');
            arr.push(num);
        }

        BetAlgorithm.getCount(this.result, this.betType);
    }

    //K3号码球
    BetRule.prototype.checkK3BallSelect = function($target) {
        var $plateTarget = $target.closest('.dice-plate');
        var $selectBall = $plateTarget.find('.sum-ul-item.selected');
        var num = $target.attr('data-value');
        if ($.inArray(num, this.result[0]) > -1) {
            $target.removeClass('selected');
            this.result[0].remove(num);
        } else {
            $target.addClass('selected');
            this.result[0].push(num);
        }
        CalcSpecialOdds.K3_getOdds(this.result, this.betType);
        K3_BetAlgorithm.getCount(this.result, this.betType);

    }

    //K3骰子
    BetRule.prototype.checkK3DiceSelect = function($target) {
        var $plateTarget = $target.closest('.dice-plate');
        var $selectBall;
        var num = $target.attr('data-item');
        if (this.ruleData.plateType.indexOf('13') > -1) {
            $selectBall = $plateTarget.find('.big-ul-item.active');
        } else {
            $selectBall = $plateTarget.find('.dice-item.active');
        }
        if ($.inArray(num, this.result[0]) > -1) {
            $target.removeClass('active');
            this.result[0].remove(num);
        } else {
            $target.addClass('active');
            this.result[0].push(num);
        }
        K3_BetAlgorithm.getCount(this.result, this.betType);
    }

    //胆码和拖码的限制
    BetRule.prototype.dtSelectLimit = function(result, $target, rowIndex, num) {
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
        if ($.inArray(this.betType, dtBetType) == -1 || this.gameCode != 'HL11x5') return;

        if (rowIndex == 0) { //胆码
            if ($.inArray(num, result[1]) > -1) { //拖码中有号码与刚选择的胆码相同
                result[1].remove(num);
                $target.parents('.plate2-row').next().find('[data-value=' + num + ']').removeClass('selected')
            }
        } else {
            if ($.inArray(num, result[0]) > -1) { //胆码中有号码与刚选择的拖码相同
                result[0].remove(num);
                $target.parents('.plate2-row').prev().find('[data-value=' + num + ']').removeClass('selected')
            }
        }
    };

    //获取选中行的数据
    BetRule.prototype.getRowData = function($target, ruleData) {
        var $rowTarget,
            rowIndex,
            $selectBall;
        switch (ruleData.plateType) {
            case 1:
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 3:
            case 4:
            case 6:
                $rowTarget = $target.parent('.row');
                rowIndex = 0;
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 5:
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
            case 7:
            case 8:
                var funRow = ruleData.funRow;
                $rowTarget = $target.parent('.row').parent().parent();
                rowIndex = this.fixIndex($rowTarget);
                if (rowIndex < funRow.length) { //趣味下注区
                    $selectBall = $rowTarget.find('.fun-ball-item.selected');
                } else {
                    $selectBall = $rowTarget.find('.ball-item.selected');
                }
                break;
            case 9:
                $rowTarget = $target.parent('ul');
                rowIndex = 0;
                $selectBall = $rowTarget.find('.ball-item.selected')
                break;
            case 10:
            case 11:
                $rowTarget = $target.parents('.plate2-row');
                rowIndex = parseInt($rowTarget.attr('data-index'));
                $selectBall = $rowTarget.find('.ball-item.selected');
                break;
        }
        return {
            rowIndex: rowIndex,
            selectBall: $selectBall
        }
    }

    //修复索引  类似’任选‘等玩法  索引不对
    BetRule.prototype.fixIndex = function($rowTarget) {
        var hideNodeCount = $rowTarget.prevAll(":hidden").length;
        var index = parseInt($rowTarget.attr('data-index')) - hideNodeCount;
        return index;
    }

    //normal array deepcopy
    BetRule.prototype.copyResult = function(data) {
        var result = [];
        for (var i = 0; i < data.length; i++)
            result[i] = data[i].slice(0);
        return result;
    }

    //获取返点率
    BetRule.prototype.changeComms = function(type, gameCode) {
        var currentOddsGroup = Global.betSetting.currentOddsGroup[gameCode];
        var oddsGroupData = Global.betSetting[gameCode][currentOddsGroup].filter(function(item, index, array){
            return type == item.betType;
        })[0] || [];
        var data = [];
        this.odds = oddsGroupData.odds;
        this.maxCount = oddsGroupData.maxCount;
        this.comm = oddsGroupData.comm;

        for(var i = 0; i < Global.betSetting.oddsGroups[gameCode].length; i++){
            var oddsGroupName = Global.betSetting.oddsGroups[gameCode][i];
            var tempOddsGroupData = Global.betSetting[gameCode][currentOddsGroup].filter(function(item, index, array){
                return type == item.betType;
            })[0] || [];
            data.push({
                'text': oddsGroupName + '--' + tempOddsGroupData.comm,
                'value': oddsGroupName + '--' + tempOddsGroupData.comm,
                'oddsGroupName': oddsGroupName
            });
        }
        app.currentModule.modelZone.changeComm(data,gameCode);
    }

    //设置modelZone和betRuleIntance的数据
    BetRule.prototype.setModelZoneData = function(amout, winMoney, returnMoney, totalMoney, betTimes) {
        var opt = {
            amout: amout,
            winMoney: winMoney,
            returnMoney: returnMoney,
            totalMoney: totalMoney,
            betTimes: betTimes
        };
        app.currentModule.modelZone.setModelZoneData(opt);
    }

    //获取资金模式
    BetRule.prototype.getBetUnit = function() {
        var target = this;
        app.currentModule.modelZone.moneyModel.getBetUnit(target);
    }

    //获取单式的placeholder
    BetRule.prototype.changePlaceholder = function() {
        var betRuleTip = this.ruleData.betRuleTip == undefined ? "" : this.ruleData.betRuleTip;
        var currentPlate = app.currentModule.playingNav.currentPlate;
        if (currentPlate instanceof InputPlate) {
            currentPlate.placeholderText = '说明:\n' +
                '1. 支持常见的各种单式格式, 间隔符如： 换行符 回车 逗号 分号等\n' +
                '2. 上传文件后缀名必须是TXT格式，支持拖拽文件到文本框进行上传\n' +
                '3. 文件较大时会导致上传时间较长，请耐心等待!\n\n' + betRuleTip;
            currentPlate.zone.find("textarea").val(currentPlate.placeholderText);
            currentPlate.zone.find("textarea").addClass('placeholder');
        }
    }

    //改变’直接投注‘和’添加‘的数据
    BetRule.prototype.changeBtnClass = function() {
        if (this.betCount) {
            app.currentModule.modelZone.betNowButton.enabled();
            app.currentModule.modelZone.addButton.enabled();
        } else {
            app.currentModule.modelZone.betNowButton.disabled();
            app.currentModule.modelZone.addButton.disabled()
        }
    }


    window.BetRule = BetRule;


}());
