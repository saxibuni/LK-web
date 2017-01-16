$(function() {
    var placeBetObj = {
        //11x5直选复式
        K3_bet: [
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    };

    var clearDataAndSelect = function(it) {
        clearSelect(it);
        this.removeZoneData(it);
        it.result[0] = [];
        it.serialNo = undefined;
        it.betCount = 0;
        it.betAmount = 0;
        it.setModelZoneData(0, 0, 0, 0, 1);
        it.changeBtnClass();
    };

    var clearSelect = function(it) {
        var plateType = it.ruleData.plateType;
        var currentPlate = app.currentModule.playingNav.currentPlate;
        if (plateType == '12') {
            currentPlate.zone.find('[data-value]').removeClass('selected');
        } else {
            var images = currentPlate.zone.find('img');
            for (var i = 0; i < images.length; i++) {
                currentPlate.setImageDeactive($(images[i]));
            }
            currentPlate.zone.find('li').removeClass('active');
        };
    };

    var K3 = function(bet, state) {
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

    function K3_PlaceBet(){
        this.clearDataAndSelect =   clearDataAndSelect;
        this.K3                 =   K3;
    }

    K3_PlaceBet.prototype = new IPlaceBet(placeBetObj);
    window.K3_PlaceBet = new K3_PlaceBet();
});
