(function() {
    function Tree(opt) {
        this.data = this.getTreeItemData();
        this.fnQueue = [];
        this.initDom();
        this.drawList();
    }

    Tree.prototype.initDom = function() {
        var i;
        var obj;

        this.el = '';
        this.items = [];

        for (i = 0; i < this.data.length; i++) {
            obj = new TreeItem(this.data[i]);
            this.items.push(obj);
        }

        for (i = 0; i < this.items.length; i++) {
            this.el += this.items[i].getDom();
        }

        this.el += '<div class="arrow"></div>';
    };

    Tree.prototype.getDom = function() {
        return this.el;
    };

    Tree.prototype.setSelectTreeItem = function(li) {
        var i;

        var serialNumber = parseInt(li.attr('serial-number'));
        var that = this;

        var callback = function(beginTimeSerials, closeTimeSerials, endTimeSerials, flag, gameCode, market) {
            that.zone.find('li').removeClass('active');
            li.addClass('active');
            li.addClass('open');
            li.find('.cancel').removeClass('invisible');
            li.find('.time').removeClass('invisible');
            that.setArrowPosition(li);

            for (i = 0; i < that.items.length; i++) {
                that.items[i].deactiveProgress();
            }

            if (flag) { //市场从未激活状态到激活状态
                var serialIndex = that.data.filter(function(item, index) {
                    return item.market == market && item.type == gameCode;
                })[0].serialNumber;
                var activeIndex = that.data.filter(function(item,index){
                    return item.market == app.currentSocket.market && item.type == app.currentSocket.gameCode;
                })[0].serialNumber;
                that.items[activeIndex].activeProgress();
                that.items[serialIndex].startProgress(beginTimeSerials, closeTimeSerials, endTimeSerials, gameCode, market);
            } else { //激活状态下 市场切换
                that.items[serialNumber].activeProgress();
            }
        };

        this.callback = callback;

        this.getCountdownTime(callback, serialNumber);
    };

    Tree.prototype.getCountdownTime = function(callback, serialNumber) {
        callback();
    };

    Tree.prototype.setArrowPosition = function(li) {
        var top = parseInt(li.find('.cancel').offset().top);
        var arrow = this.zone.find('.arrow');

        arrow.css('top', top - 37 + 'px');
    };

    Tree.prototype.bindEvents = function() {
        var i;
        var serialNumber;
        var pageIndex;
        var type;
        var lis;
        var that = this;

        this.zone = $('.bet .tree');
        lis = this.zone.find('li');

        this.zone.delegate('.info, .pre-draw-number', 'click', function(e) {
            var li;
            var timeout;
            var market;

            li = $(this).parent('li');

            if (li.hasClass('can-not-click-info') || li.hasClass('can-not-click-cancel')) {
                return;
            }

            li.addClass('can-not-click-info');

            that.setSelectTreeItem(li);

            timeout = setTimeout(function() {
                li.removeClass('can-not-click-info');
                clearTimeout(timeout);
            }, 1000);

            type = li.attr('lotter-type');
            pageIndex = li.attr('page-index');
            market = li.attr('market');

            PubSub.publish('onTreeItemClick', {
                pageIndex: pageIndex,
                type: type,
                market: market
            });

        });

        this.zone.delegate('.cancel', 'click', function(e) {
            var li;
            var timeout;
            var callback;
            var market;
            var gameCode;

            li = $(this).parent('li');
            market = li.attr('market');
            gameCode = li.attr('lotter-type');

            if (li.hasClass('can-not-click-cancel')) {
                return;
            }

            callback = function() {
                li.removeClass('open');
                li.addClass('can-not-click-cancel');
                serialNumber = parseInt(li.attr('serial-number'));
                li.find('.cancel').addClass('invisible');
                that.clearItemStatus(li);
                timeout = setTimeout(function() {
                    li.removeClass('can-not-click-cancel');
                    clearTimeout(timeout);
                }, 1000);
            }

            pageIndex = li.attr('page-index');

            PubSub.publish('onCancelTreeItemClick', {
                pageIndex: pageIndex,
                callback: callback,
                market: market,
                gameCode: gameCode
            });
        });

        for (i = 0; i < this.items.length; i++) {
            this.items[i].bindEvents();
        }

        this.setSelectTreeItem($(lis[0]));
        this.subscribeEvents();
    };

    Tree.prototype.subscribeEvents = function() {
        var li;
        var that = this;

        this.setActiveItemTopic = PubSub.subscribe('onSetActiveItem', function(msg, data) {
            li = that.zone.find('li[page-index=' + data.pageIndex + ']');
            that.setSelectTreeItem(li);
        });
    };

    Tree.prototype.clearItemStatus = function(li) {
        var serialNumber = parseInt(li.attr('serial-number'));
        li.find('.time').addClass('invisible');
        this.items[serialNumber].cancelProgress();
        li.find('.time').text('');
    }

    Tree.prototype.drawList = function(){
        var that = this;
        var beginTime;
        var closeTime;
        var endTime;
        var serverTime;
        var gameCode;
        var market;
        var lottorySocketName;

        setInterval(function(){
            that.fnQueue.forEach(function(fnObj,index){
                beginTime = fnObj.argument.beginTimeSerials;
                closeTime = fnObj.argument.closeTimeSerials;
                endTime = fnObj.argument.endTimeSerials;
                serverTime = new Date().getTime() + window.jetLag;
                gameCode = fnObj.argument.gameCode;
                market =  fnObj.argument.market;
                lottorySocketName = gameCode + '_' + market + '_' + 'LottorySocket';
                if ($.inArray(lottorySocketName, app.lottorySocketNames) > -1) 
                    fnObj.fn(beginTime, closeTime, endTime, gameCode, market);
            });
        },1000);
    }

    Tree.prototype.getTreeItemData = function() {
        var data = [];
        $.each(Global.marketList, function(index, item) {
        	//treeItem init
            data.push({
                id: item.id,
                type: item.gameCode,
                serialNumber: index,
                active: false,
                name: item.marketCNName,
                iHot: item.iHot,
                iNew: item.iNew,
                progressId: 'progress' + index,
                market: item.market
            });
            //betZoneData init
            Global.betZoneData.push({
                gameCode: item.gameCode,
                market: item.market,
                data: []
            });
        });
        return data;
    }

    window.Tree = Tree;
}());
