/*
 *  豹子，对子，顺子 投注盘 BDSPlate.js
 */

(function () {
    function BDSPlate (opt) {
        this.opt = opt;
        this.id  = this.opt.id;
        this.el  = this.initDom();
    }

    BDSPlate.prototype.initDom = function () {
        var temp;

        temp =  '<div class="row bds-plate" id="' + this.id + '">' +
                    '<div class="col-md-3"></div>' +
                    '<div class="col-md-6">' +
                        '<div class="row">' +
                            '<div class="col-md-2 ball-item" data-value="TRI">' +
                                '<span>' +
                                    '豹子' +
                                '</span>' +
                            '</div>' +
                            '<div class="col-md-2 ball-item" data-value="PAIR">' +
                                '<span>' +
                                    '对子' +
                                '</span>' +
                            '</div>' +
                            '<div class="col-md-2 ball-item" data-value="SN">' +
                                '<span>' +
                                    '顺子' +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-md-3"></div>' +
                '</div>';

        return temp;
    };

    BDSPlate.prototype.getDom = function () {
        return this.el;
    };

    BDSPlate.prototype.showPlate = function (opt) {
        this.zone.show();
    };

    BDSPlate.prototype.hide = function () {
        this.zone.find('.selected').removeClass('selected');
        this.zone.hide();
    };

    BDSPlate.prototype.bindEvents = function () {
        this.zone = $('#' + this.id);

        this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
        });
    };

    window.BDSPlate = BDSPlate;
}());

