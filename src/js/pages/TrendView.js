/*
 *  走势图页面入口函数
 */

(function() {
    'use strict';

    function TrendView() {
        this.zone = $('.trend-view');
        this.betType = '0';
        this.gameCode = '';
        this.init();
        this.bindEvents();
    }

    TrendView.prototype.init = function() {
        var market = Util.getQueryString("marketCode");
        var gameCode = Util.getQueryString("gameCode");
        var $playingFamily = this.zone.find('.playing-familys');
        this.zone.find(".lotterys").find("span[market=" + market + "][gameCode=" + gameCode + "]").addClass("selected");
        if (gameCode == 'LT' && market != 'CN3D') {
            $playingFamily.find(".family-item[betType='0']").addClass("selected");
            $playingFamily.find(".family-item[betType='4']").text('后三');
        } else if (gameCode == 'HL11x5') {
            $playingFamily.find(".family-item[betType='0']").addClass("selected").parent().show().siblings().hide();
        } else if (gameCode == 'K3' || market == 'CN3D') {
            $playingFamily.find(".family-item[betType='4']").addClass("selected").text('三星').parent().show().siblings().hide();
        }

        this.betType = $playingFamily.find("span.selected").attr("betType");

        this.createBarZone1();
        this.createCheckBoxAll();
        /*this.createDateTimePicker();*/
        /*this.createSearchButton();*/
        this.getTreedsUrl();
        this.queryTrendData();
    };

    TrendView.prototype.getTreedsUrl = function () {
        var that = this;
        $.ajax({
            url: '../config/service.json',
            async: false,
            success: function(data){
                that.trendsUrl = data.trendsUrl;
            },
            cache:false
        })
    }

    TrendView.prototype.createBarZone1 = function() {
        var temp;

        this.checkbox1 = new IMCheckBox({ id: 'feedback-check1', text: '辅助线', value: '1', checked: true });
        this.checkbox2 = new IMCheckBox({ id: 'feedback-check2', text: '遗漏', value: '2', checked: false });
        this.checkbox3 = new IMCheckBox({ id: 'feedback-check3', text: '遗漏条', value: '3', checked: false });
        this.checkbox4 = new IMCheckBox({ id: 'feedback-check4', text: '走势', value: '4', checked: true });
        this.checkbox5 = new IMCheckBox({ id: 'feedback-check5', text: '号温', value: '5', checked: false });

        temp = this.checkbox1.getDom() +
            this.checkbox2.getDom() +
            this.checkbox3.getDom() +
            this.checkbox4.getDom();
            // this.checkbox5.getDom();

        this.zone.find('.zone1').html(temp);
    };

    TrendView.prototype.resetCheckBar = function() {
        $('#feedback-check1').addClass('checked');
        $('#feedback-check2').removeClass('checked');
        $('#feedback-check3').removeClass('checked');
        $('#feedback-check4').addClass('checked');
        $('#feedback-check5').removeClass('checked');
    }

    TrendView.prototype.createCheckBoxAll = function() {
        this.checkbox6 = new IMCheckBox({ id: 'all-check', text: '全部', value: '6' });
        this.zone.find('.checkbox-all').html(this.checkbox6.getDom());
    };

    TrendView.prototype.createSearchButton = function() {
        this.searchButton = new IMButton({
            text: '搜索',
            className: 'search'
        });

        this.zone.find('.zone3').append(this.searchButton.getDom());
    };

    TrendView.prototype.createDateTimePicker = function() {
        var temp;
        var today;

        this.startTime = new IMDatetimepicker({ className: 'starttime', text: '开始' });
        this.endTime = new IMDatetimepicker({ className: 'endtime', text: '结束' });
        temp = this.startTime.getDom() + this.endTime.getDom();
        this.zone.find('.zone3').append(temp);

        today = new Date();
        today = today.formatDate();
        this.zone.find('.zone3 .starttime input').datetimepicker({ value: today + ' 00:00', lang: 'en' });
        this.zone.find('.zone3 .endtime input').datetimepicker({ value: today + ' 23:59', lang: 'en' });
    };

    TrendView.prototype.createTable = function() {
        var $marketTarget = this.zone.find(".lotterys").find(".col-md-2").find("span.selected");
        this.gameCode = $marketTarget.attr("gameCode");
        this.market = $marketTarget.attr('market');
        TrendDom.createTheadfoot(this, this.gameCode, this.market);
        TrendDom.createTbody(this, this.gameCode, this.market);
        this.resetCheckBar();
    };

    TrendView.prototype.createLines = function() {
        var ylist = $(".happyNum").find("span");
        $('canvas').remove();
        var cvs = document.createElement('canvas');
        cvs.style.position = "absolute";
        cvs.style.top = "70px";
        cvs.style.left = "0";
        cvs.width = document.getElementsByClassName("tbody")[0].offsetWidth;
        cvs.height = document.getElementsByClassName("tbody")[0].offsetHeight;

        var that = this;
        var num;
        var list1 = [];
        var list2 = [];
        var list3 = [];
        var list4 = [];
        var list5 = [];
        var betList = [
            [list5, list4, list3, list2, list1],
            [list5, list3, list2, list1],
            [list5, list2, list1],
            [list5, list2, list1],
            [list5, list2, list1],
            [list1, list5],
            [list1, list5]
        ];

        var moduleLineList = betList[this.betType];
        num = moduleLineList.length;
        for (var i = 0; i < ylist.length; i++) {
            if (((i + 1) % num == 1)) {
                list1.push(i);
            } else if ((i + 1) % num == 2) {
                list2.push(i);

            } else if ((i + 1) % num == 3) {
                list3.push(i);

            } else if ((i + 1) % num == 4) {
                list4.push(i);

            } else if ((i + 1) % num == 0) {
                list5.push(i);
            }
        }
        var ctx = cvs.getContext("2d");
        ctx.lineJoin = "round";
        for (var i = 0; i < moduleLineList.length; i++) {
            that.moduleLine(moduleLineList[i], ctx)
        }

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#F14649';
        ctx.stroke();

        var tableZone = this.zone.find('.table');
        tableZone.append(cvs);
    };

    TrendView.prototype.moduleLine = function(list, ctx) {
        $.each(list, function(index, elem) {
            var offset = $(".happyNum").eq(elem).find("span").position();
            var top = offset.top - 70;
            var left = offset.left + 6;
            var width = $(".happyNum").eq(elem).find("span").width();
            var height = $(".happyNum").eq(elem).find("span").height();
            if (index == 0) {
                ctx.moveTo(left, top + width);
            } else {
                ctx.lineTo(left, top);
                ctx.moveTo(left + width / 4 - 1, top + height - 2);
            }
        });
    };

    TrendView.prototype.queryTrendData = function() {
        var that = this;
        var $target = $(".trend-view .lotterys div span.selected");
        var gameCode = $target.attr('gameCode');
        var market = $target.attr("market");
        var timeDuration = $(".zone2 ul li span.selected").attr("data-value");
        var url =  this.trendsUrl + "trendsMap_" + gameCode + '_' + market + '_Ball_' + timeDuration + '.json';
        $.ajax({
            url: url,
            async: false,
            success: function(data) {
                if (data.code == 0) {
                    that.data = [];
                    for (var i = data.list.length - 1; i >= 0; i--) {
                        that.data.push({
                            'issue': data.list[i].drawNo,
                            'number': data.list[i].result
                        });
                    }
                }
                that.createTable();
                that.createLines();
            },
            error: function () {
                that.data = [];
                that.createTable();
            }
        });
    }

    TrendView.prototype.bindEvents = function() {
        var that = this;
        var zone2 = this.zone.find('.zone2');
        var lotterys = this.zone.find('.lotterys');
        var playingFamilys = this.zone.find('.playing-familys');

        this.zone.delegate('.im-checkbox', 'click', function(e) {
            $(this).toggleClass('checked');
            var clickId = $(this).attr('id');
            //辅助线
            if (clickId == 'feedback-check1') {
                if ($('#' + clickId).hasClass('checked')) {
                    $(".gapBot").addClass("bottom-border");
                } else {
                    $(".gapBot").removeClass("bottom-border");
                }
            }
            //遗漏
            if (clickId == 'feedback-check2') {
                if ($('#' + clickId).hasClass('checked')) {
                    for (var i = 0; i < $("#J-chart-table>tbody>tr").length - 6; i++) {
                        $("#J-chart-table>tbody>tr:eq(" + i + ")>td:gt(6):not('.selected')>span").css("visibility", "hidden");
                    }
                } else {
                    for (var i = 0; i < $("#J-chart-table>tbody>tr").length - 6; i++) {
                        $("#J-chart-table>tbody>tr:eq(" + i + ")>td:gt(6):not('.selected')>span").css("visibility", "visible");
                    }
                }
            }
            //遗漏条
            if (clickId == 'feedback-check3') {
                if ($('#' + clickId).hasClass('checked')) {
                    var idxResult = TrendDom.getIndexData(that, that.gameCode, that.market);
                    var startIdx = idxResult.startBindIdx;
                    var endIdx = idxResult.endBindIdx;

                    for (var i = startIdx; i < endIdx; i++) {
                        $('#J-chart-table>tbody>tr>td[data-index=' + (i) + ']').each(function(index, el) {
                            var yltLength = that.uiResult[i].length - that.uiResult[i].yltIndex - 1;
                            if (index > that.uiResult[i].yltIndex) {
                                if (index < that.uiResult[i].length - 4) {
                                    if (yltLength <= 5) {
                                        $(el).addClass('missCurrent').css('backgroundColor', '#dcbda2');
                                    } else if (yltLength >= 12) {
                                        $(el).addClass('missCurrent').css('backgroundColor', '#c2dbea');
                                    } else {
                                        $(el).addClass('missCurrent').css('backgroundColor', '#e7e7e7');
                                    }
                                }
                            }
                        });
                    }
                } else {
                    $(".missCurrent").removeClass("missCurrent").css("background", "#fff");
                }
            }
            //走势
            if (clickId == 'feedback-check4') {
                if ($('#' + clickId).hasClass('checked')) {
                    $('canvas').show();
                } else {
                    $('canvas').hide();
                }
            }

        });

        //地区切换
        lotterys.delegate('.lottery-item', 'click', function(e) {
            lotterys.find('.lottery-item').removeClass('selected');
            $(this).addClass('selected');
            var gameCode = $(this).attr("gameCode");
            var market = $(this).attr("market");

            if (gameCode == 'LT' && market != 'CN3D') {
                playingFamilys.find(".col-md-1").css("display", "block");
                playingFamilys.find(".family-item[betType='0']").addClass("selected").parent().siblings().find(".family-item").removeClass("selected");
                playingFamilys.find(".family-item[betType='4']").text('后三');
                that.betType = playingFamilys.find("span[betType = '0']").attr("betType");
            } else if (gameCode == 'HL11x5') {
                playingFamilys.find(".family-item[betType='0']").parent().show().siblings().hide();
                playingFamilys.find(".family-item[betType='0']").addClass("selected").parent().siblings().find(".family-item").removeClass("selected");
                that.betType = playingFamilys.find("span[betType = '0']").attr("betType");
            } else if (gameCode == 'K3' || market == 'CN3D') {
                playingFamilys.find(".family-item[betType='4']").parent().show().siblings().hide();
                playingFamilys.find(".family-item[betType='4']").addClass("selected").text('三星').parent().siblings().find(".family-item").removeClass("selected");
                that.betType = playingFamilys.find("span[betType = '4']").attr("betType");
            }
            that.zone.find('.zone2')
                .find('.date-item[data-value="30"]')
                .addClass('selected')
                .parent().siblings()
                .find('.date-item')
                .removeClass('selected');
            that.queryTrendData();
        });

        //玩法切换
        playingFamilys.delegate('.family-item', 'click', function(e) {
            playingFamilys.find('.family-item').removeClass('selected');
            $(this).addClass('selected');
            that.betType = $(this).attr('betType');

            that.data.splice(that.data.length - 4, 4);
            that.createTable();
            that.createLines();
        });

        zone2.delegate('.date-item', 'click', function(e) {
            zone2.find('.date-item').removeClass('selected');
            $(this).addClass('selected');

            that.queryTrendData();
        });

        var timeoutId = "";
        $(window).resize(function() {
            if ($(".zone1 div[data-value = 4]").hasClass("checked")) {
                timeoutId && clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    $("canvas").remove();
                    that.createLines();
                }, 100);
            }
        });
    };

    window.TrendView = new TrendView();
})();
