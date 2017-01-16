BuildBetSelect = {

    build: function(data, index) {
        var betData = {
            betType: data[5],
            betCount: data[2],
            multiple: data[3],
            totalMoney: data[4],
            betUnit: data[9],
            result: data[7],
            familyName: data[8],
            comm: data[6],
            odds: data[10],
            serialNo: data[12],
            prizeGroup: data[14].prizeGroup
        };

        var anyBetTypeArr = [
            'A2S',
            'A2T',
            'A2G2',
            'A2G2S',
            'A2G2T',
            'A3S',
            'A3T',
            'A3G3X3',
            'A3G3X3S',
            'A3G3X6',
            'A3G3X6S',
            'A3G3MX',
            'A3G3T',
            'A4S',
            'A4G4X24',
            'A4G4X12',
            'A4G4X6',
            'A4G4X4'
        ];

        if (app.currentSocket.gameCode == 'K3')
            this.switchBetPlate_k3(betData.familyName, betData.betType);
        else
            this.switchBetPlate(betData.familyName, betData.betType);

        this.setBallSelect(betData);
        this.setBetRuleInfo(betData);
        BetRuleInstance.changeBtnClass();

        if ($.inArray(betData.betType, anyBetTypeArr) > -1 && app.currentSocket.gameCode == 'LT')
            this.selectUnitGroup(betData);
    },

    switchBetPlate: function(familyName, betType) {
        var gap = 8.33,
            index = 0,
            $playingNav = app.currentModule.playingNav.zone,
            $playingFamily = $playingNav.find('.playing-family'),
            $playingGroups = $playingNav.find('.playing-groups'),
            $stick = $playingFamily.children('.stick'),

            $familyItem = $playingFamily.find('.family-item').filter('[data-value=' + familyName + ']'),
            $methodItem = $playingGroups.find('.method-item').filter('[data-value=' + betType + ']');

        if ($familyItem.hasClass('selected') && $methodItem.hasClass('selected')) {
            app.currentModule.playingNav.showPlate(betType);
            return;
        }

        if (!$familyItem.hasClass('selected')) {
            $playingFamily.children('.family-item').removeClass('selected');
            $familyItem.addClass('selected');
            index = $familyItem.index();
            $stick.css('left', index * gap + '%');
            $playingGroups.html(app.currentModule.playingNav.dict1[familyName]);

            $playingGroups.find('.method-item').removeClass('selected');
            $methodItem = $playingGroups.find('.method-item').filter('[data-value=' + betType + ']');
            $methodItem.addClass('selected');
            app.currentModule.playingNav.showPlate(betType);

        } else {
            if (!$methodItem.hasClass('selected')) {
                $playingGroups.find('.method-item').removeClass('selected');
                $methodItem.addClass('selected');
            }
            app.currentModule.playingNav.showPlate(betType);
        }
    },

    switchBetPlate_k3: function(familyName, betType) {
        var gap = 8.33,
            index = 0,
            $playingNav = app.currentModule.playingNav.zone,
            $playingFamily = $playingNav.find('.playing-family'),
            $stick = $playingFamily.children('.stick'),
            $familyItem = $playingFamily.find('.family-item').filter('[data-value=' + familyName + ']');

        if ($familyItem.hasClass('selected')) {
            app.currentModule.playingNav.showPlate(betType);
            return;
        } else {
            $playingFamily.children('.family-item').removeClass('selected');
            $familyItem.addClass('selected');
            index = $familyItem.index();
            $stick.css('left', index * gap + '%');
            app.currentModule.playingNav.showPlate(betType);
        }
    },

    setBallSelect: function(data) {
        var $currentRowTarge,
            currentRowData,
            currentPlate = app.currentModule.playingNav.currentPlate,
            plateType = currentPlate.id.substring(currentPlate.id.indexOf('parentPlate') + 11);
        switch (plateType) {
            case '1':
            case '5':
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    if (plateType == '1')
                        $currentRowTarge = currentPlate.zone.children('.betting-number').find('[data-index=' + i + ']');
                    else
                        $currentRowTarge = currentPlate.zone.find('[data-index=' + i + ']');

                    $currentRowTarge.find('[data-value]').removeClass('selected');
                    for (var j = 0; j < currentRowData.length; j++) {
                        if ($currentRowTarge.is(":visible"))
                            $currentRowTarge.find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                    }
                };
                break;
            case '2':
                var $textarea = currentPlate.zone.find('textarea');
                $textarea.removeClass('placeholder');
                $textarea.val(data.result[0]);
                break;
            case '3':
                $currentRowTarge = currentPlate.zone.children('.betting-number').find('.row');
                $currentRowTarge.find('[data-value]').removeClass('selected');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++) {
                    if ($currentRowTarge.is(":visible"))
                        $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                }
                break;
            case '4':
            case '6':
                $currentRowTarge = currentPlate.zone.find('.row');
                $currentRowTarge.find('[data-value]').removeClass('selected');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++)
                    $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                break;
            case '7':
            case '8':
                var funRow,
                    normalRow;
                if (plateType == '7') {
                    funRow = currentPlate.zone.children('.betting-number').find('.row.funrow').filter(':visible');
                    normalRow = currentPlate.zone.children('.betting-number').find('.row.nofunrow').filter(':visible');
                } else {
                    funRow = currentPlate.zone.children('.betting-number').find('.row.zonerow').filter(':visible');
                    normalRow = currentPlate.zone.children('.betting-number').find('.row.nozonerow').filter(':visible');
                }
                funRow.find('[data-value]').removeClass('selected');
                normalRow.find('[data-value]').removeClass('selected');
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    if (i < funRow.length) {
                        for (var j = 0; j < currentRowData.length; j++) {
                            $(funRow[i]).find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                        }
                    } else {
                        for (var j = 0; j < currentRowData.length; j++) {
                            $(normalRow[i - funRow.length]).find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                        }
                    }
                }
                break;
            case '9':
                $currentRowTarge = currentPlate.zone.find('ul');
                currentRowData = data.result[0];
                for (var i = 0; i < currentRowData.length; i++)
                    $currentRowTarge.find('[data-value=' + currentRowData[i] + ']').addClass('selected');
                break;
            case '10':
            case '11':
                for (var i = 0; i < data.result.length; i++) {
                    currentRowData = data.result[i];
                    $currentRowTarge = currentPlate.zone.find('[data-index=' + i + ']');
                    $currentRowTarge.find('[data-value]').removeClass('selected');
                    for (var j = 0; j < currentRowData.length; j++) {
                        if ($currentRowTarge.is(":visible"))
                            $currentRowTarge.find('[data-value=' + currentRowData[j] + ']').addClass('selected');
                    }
                }
                break;
            case '12':
                currentPlate.zone.find('[data-value]').removeClass('selected');
                for (var i = 0; i < data.result[0].length; i++) {
                    currentPlate.zone.find('[data-value=' + data.result[0][i] + ']').addClass('selected');
                }
                break;
            case '13-1':
            case '13-2':
            case '13-3':
            case '13-4':
            case '13-5':
            case '14':
                var imgs,    
                    $currentTarget;
                this.resetK3plate(currentPlate);
                for (var i = 0; i < data.result[0].length; i++) {
                    $currentTarget = currentPlate.zone.find('[data-item=' + data.result[0][i] + ']');
                    $currentTarget.addClass('active');
                    imgs = $currentTarget.find('img');
                    for(var j = 0; j < imgs.length; j++){
                        currentPlate.setImageActive($(imgs[j]));
                    }
                    if (plateType == '13-5')
                        currentPlate.setGroupClassStatus($currentTarget);
                }
                break;
        }

        this.setOperationBallSelect(currentPlate, plateType, data.result);
    },

    setOperationBallSelect: function(currentPlate, plateType, result) {
        var lotto_operationBall = [
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            ['5', '6', '7', '8', '9'],
            ['0', '1', '2', '3', '4'],
            ['1', '3', '5', '7', '9'],
            ['0', '2', '4', '6', '8']
        ];

        var hl11x5_operationBall = [
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            ['06', '07', '08', '09', '10', '11'],
            ['01', '02', '03', '04', '05'],
            ['01', '03', '05', '07', '09', '11'],
            ['02', '04', '06', '08', '10']
        ];

        var hl11x5_czw_operationBall = [
            ['03', '04', '05', '06', '07', '08', '09'],
            ['06', '07', '08', '09'],
            ['03', '04', '05'],
            ['03', '05', '07', '09'],
            ['04', '06', '08']
        ];
        switch (plateType) {
            case '1':
                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = currentPlate.zone
                            .children('.betting-operation')
                            .children('.row:eq(' + i + ')')
                            .children('.operation-item:eq(' + j + ')');
                        if (result[i].eqaul(lotto_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                };
                break;
            case '7':
            case '8':
                var funRowLength,
                    operationRow;
                if (plateType == '7') {
                    funRowLength = currentPlate.zone.children('.betting-number').find('.row.funrow').filter(':visible').length;
                    operationRow = currentPlate.zone.children('.betting-operation').find('.row.nofunrow').filter(':visible');
                } else {
                    funRowLength = currentPlate.zone.children('.betting-number').find('.row.zonerow').filter(':visible').length;
                    operationRow = currentPlate.zone.children('.betting-operation').find('.row.nozonerow').filter(':visible');
                }
                for (var i = funRowLength; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = $(operationRow[i - funRowLength]).children('.operation-item:eq(' + j + ')');
                        if (result[i].eqaul(lotto_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                };
                break;
            case '10':
            case '11':
                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < 5; j++) {
                        var operationTarget = currentPlate.zone
                            .children('[data-index=' + i + ']')
                            .children('.plate2-operations')
                            .children('.operation-item:eq(' + j + ')');

                        if (plateType == '10' && result[i].eqaul(hl11x5_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else if (plateType == '11' && result[i].eqaul(hl11x5_czw_operationBall[j])) {
                            operationTarget.addClass('selected');
                        } else {
                            operationTarget.removeClass('selected');
                        }
                    }
                }
                break;
        }
    },

    selectUnitGroup: function(data) {
        var currentData = data.result[data.result.length - 1];
        var $unitGroup = app.currentModule.playingNav.unitGroup.zone;
        $unitGroup.find('.im-checkbox').removeClass('checked');
        for (var i = 0; i < currentData.length; i++) {
            $unitGroup.find('[data-value=' + currentData[i] + ']').addClass('checked');
        }
    },

    resetK3plate: function(currentPlate){
        var images = currentPlate.zone.find('img');
        for (var i = 0; i < images.length; i++) {
            currentPlate.setImageDeactive($(images[i]));
        }
        currentPlate.zone.find('li').removeClass('active');
    },

    setBetRuleInfo: function(data) {
        var it = BetRuleInstance;
        var winMoney;
        var returnMoney;
        var turnoverBonusSelect = app.currentModule.modelZone.turnoverBonusSelect;

        Global.betSetting.currentOddsGroup[it.gameCode] = data.prizeGroup;
        turnoverBonusSelect.zone.find('.buttonName').text(data.prizeGroup + '--' + data.comm);
        it.serialNo = data.serialNo; //标记该下注实例来自投注篮重新构建的
        it.betAmount = data.totalMoney;
        it.multiple = data.multiple;
        it.betCount = data.betCount;
        it.odds = data.odds;
        it.comm = data.comm;
        for (var i = 0; i < data.result.length; i++)
            it.result[i] = data.result[i].slice(0);

        winMoney = data.totalMoney * it.odds / data.betCount / 2;
        returnMoney = data.totalMoney * it.comm;
        it.setModelZoneData(data.betCount, winMoney, returnMoney, it.betAmount, it.multiple);

        var modelIdx = 0,
            left = 0,
            text = "";
        var $moneyModel = app.currentModule.modelZone.moneyModel.zone;
        switch (data.betUnit) {
            case 2:
                text = "元";
                break;
            case 0.2:
                modelIdx = 1;
                text = "角";
                break;
            case 0.02:
                modelIdx = 2;
                text = "分";
                break;
        }
        left = modelIdx * 50;
        $moneyModel.find(".unit").find('.item').removeClass('selected');
        $moneyModel.find(".unit").find(".item").eq(modelIdx).addClass("selected");
        $moneyModel.find(".unit").find(".trick").css('left', left + 'px');
        $moneyModel.find(".unit").find(".trick").text(text);
    }
};
