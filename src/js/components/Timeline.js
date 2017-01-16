(function() {
    var ITEM_WIDTH = 44;
    var TIMELINE_ITEM_COUNT = 7;
    var TIMELINE_RATIO = 0.8;
    var ARROW_WIDTH = ITEM_WIDTH;
    var TIMELINE_ITEM_WIDTH = ITEM_WIDTH;

    function Timeline(opt) {
        this.opt = opt;
        this.issueWidth = (this.opt.gameCode == 'HL11x5') ? 80 : 44;
        this.id = opt.id;
        this.data = [];


        this.evalWidth();
        this.el = '<div class="timeline-wrapper" id="' + this.id + '">' +
            '<div class="timeline">' +
            this.createEvents() +
            this.createNavigator() +
            '</div>' +
            this.trendItem() +
            '</div>';
    }
    Timeline.prototype.evalWidth = function() {
        this.itemGap = 54.3;
        this.eventsWidth = this.data.length * TIMELINE_ITEM_WIDTH + (this.data.length + 1) * this.itemGap;
        this.transformWidth = TIMELINE_ITEM_COUNT * (TIMELINE_ITEM_WIDTH + this.itemGap);
        this.eventsWidth = this.eventsWidth * 2; //加长是为了在某些情况下不出现断线的情况。
    }
    Timeline.prototype.getDom = function() {
        return this.el;
    };

    Timeline.prototype.createEvents = function(gameCode, market) {
        var i;
        var temp = '';
        var left = this.itemGap;

        temp += '<div class="events-wrapper">' +
            '<div class="events" style="width: ' + 5000 + 'px; transform: translateX(0px)">' +
            '<ol>';

        for (i = 0; i < this.data.length; i++) {
            temp += this.createItem(this.data[i], left);
            left += (this.itemGap + TIMELINE_ITEM_WIDTH);
        }

        temp += '</ol>' +
            '</div>' +
            '</div>';

        return temp;
    };

    Timeline.prototype.createItem = function(data, left) {
        var temp = '<li>' +
            '<a class="number" href="#0" style="left: ' + left + 'px;">' +
            data.result.replace("[", "").replace("]", "") +
            '</a>' +

            '<a class="issue" href="#0" style="left: ' + left + 'px;width: ' + this.issueWidth + 'px;">' +
            data.number + '期' +
            '</a>' +
            '</li>';
        return temp;
    };

    Timeline.prototype.createNavigator = function(data) {
        var temp = '<ul class="cd-timeline-navigation">' +
            '<li><a href="#0" class="prev inactive">Prev</a></li>' +
            '<li><a href="#0" class="next">Next</a></li>' +
            '</ul>';
        return temp;
    };

    Timeline.prototype.trendItem = function() {
        var temp = '<div class="trend">' +
            '<div class="line"></div>' +
            '<div class="text">' +
            '<div class="up">开奖</div>' +
            '<div class="down">走势</div>' +
            '</div>' +
            '</div>';

        return temp;
    };

    Timeline.prototype.reInitTimeline = function() {
        var screenWidth = parseInt($(window).width());
        this.count = 0;

        if (screenWidth > 1730) {
            this.transformWidth = 7 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 7;
        } else if (screenWidth > 1550 && screenWidth <= 1730) {
            this.transformWidth = 6 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 6;
        } else if (screenWidth > 1440 && screenWidth <= 1550) {
            this.transformWidth = 5 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 5;
        } else if (screenWidth > 1230 && screenWidth <= 1440) {
            this.transformWidth = 4 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 4;
        } else if (screenWidth <= 1230) {
            this.transformWidth = 3 * (TIMELINE_ITEM_WIDTH + this.itemGap);
            this.maxCount = 3;
        }
        this.allNum = {
            transformWidth: this.transformWidth,
            maxCount: this.maxCount,
            count: this.count
        };
        return this.allNum;
    };

    Timeline.prototype.dataFormatter = function(gameCode, market) {
        var length = Global.marketList.filter(function(item, index, array) {
            return item.gameCode == gameCode && item.market == market;
        })[0].drawNumLength;
        length = 0 - length;
        this.data.forEach(function(item, index) {
            item.drawNumber = item.number;
            item.number = item.number.slice(length);
        });
    };

    Timeline.prototype.bindEvents = function() {
        var eventsEle;
        var eventsPos;
        var timelineWidth;
        var that = this;

        this.zone = $('#' + this.id);
        eventsEle = this.zone.find('.events');
        eventsPos = this.getTransformX(eventsEle.css('transform')) || 0;

        var allNum = this.reInitTimeline();

        $(window).resize(function() {
            allNum = that.reInitTimeline();
            eventsPos = that.getTransformX(eventsEle.css('transform')) || 0;
        });
        this.zone.find('a.next').click(function() {
            if (Math.abs(allNum.count) != Math.ceil(that.data.length / allNum.maxCount) - 1) {
                allNum.count += 1;
                eventsPos -= allNum.transformWidth;

                that.zone.find('.events').css('transform', 'translateX(' + eventsPos + 'px)');
            }
        });

        this.zone.find('a.prev').click(function() {
            if (Math.abs(allNum.count) != Math.ceil(that.data.length / allNum.maxCount) && allNum.count != 0) {
                allNum.count -= 1;
                eventsPos += allNum.transformWidth;

                that.zone.find('.events').css('transform', 'translateX(' + eventsPos + 'px)');
            }
        });

        this.zone.find('.trend .text').click(function() {
            var gameCode = app.currentSocket.gameCode;
            var marketCode = app.currentSocket.market;
            window.open ('trendView.html?gameCode=' + gameCode + '&marketCode=' + marketCode);
        });
    };

    Timeline.prototype.getTransformX = function(matrix) {
        var pos1 = matrix.indexOf('(');
        var pos2 = matrix.indexOf(')');
        var temp = matrix.substring(pos1 + 1, pos2);
        var arr = temp.split(',')

        return parseFloat(arr[4]);
    };

    window.Timeline = Timeline;
}());
