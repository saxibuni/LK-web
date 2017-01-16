var mm = mm || {};
mm.config = {};

mm.getSerialNo = function() {
    return new Date().format("yyyyMMddhhmmss") + Math.random();
};

mm.isFunction = function(obj) {
    return typeof obj == 'function';
};

mm.getConfig = function(){
    $.ajax({
        url: '../config/service.json',
        async: false,
        success: function(data){
            mm.config['service'] = data.service;
            mm.config['debug'] = data.debug;
        },
        cache:false
    });
}

mm.consoleLog = function(data){
    if (mm.config.debug) {
        console.log(data);
    }
}

mm.Commands = {
    LOGIN: 101,
    DRAWINFO: 20,
    ACCTINFO: 3,
    RESULTLIST: 111,
    GAMESETTING: 106,
    SERVERTIME: 6,
    COMMITBET: 109,
    BETHISTORY: 113,
    CHASEHISTORY: 114,
    OPENDRAWLIST: 102,
    CHASEDETAIL: 115,
    CHASENUNBER: 108,
    MULTIPLECHASE:119,
    CANCELBETHISTORY: 110,
    CANCELCHASEHISTORY: 116,
    BATCHPLACEBET: 107,
    PAPERQUESTION: 121,
    PAPERANSWER: 122,
    MARKETLIST: 103
};

mm.Service = function() {
    var _url = null;
    var _socket = null;
    var _queue = [];
    var _register = [];
    var _session = [];
    var that = this;

    mm.Service.it = this;

    var _connect = function() {
        if (!mm.config["service"]) mm.getConfig();
        _url = mm.config["service"];
        mm.consoleLog("connect:" + _url);
        _socket = new WebSocket(_url);
        _socket.onopen = _onOpen;
        _socket.onclose = _onClose;
        _socket.onerror = _onError;
        _socket.onmessage = _onMessage;
    };

    var _send = function(command, dat, callback, sender, isMask) {
        isMask = isMask == undefined ? true : isMask;

        if (_socket && _socket.readyState == 1) {
            var serialNo = mm.getSerialNo();
            _register[serialNo] = { callback: callback, sender: sender, isMask: isMask };

            dat = dat || {};
            dat.serialNo = serialNo;
            if (command != mm.Commands.LOGIN) {
                dat.sessionId = _session["sessionId"];
                dat.token = _session["token"];
            }

            var jsData = command + "." + JSON.stringify(dat);
            _socket.send(jsData);
            return mm.consoleLog("Send:::::" + jsData);
        }

        _queue.push({
            command: command,
            dat: dat,
            callback: callback,
            sender: sender
        });
        if (!_socket || _socket.readyState == _socket.CLOSED) _connect();
    };

    /******* event ********/
    var _onOpen = function() {
        mm.consoleLog("socket open");
        while (_queue.length > 0) {
            var data = _queue.shift();
            _send(data.command, data.dat, data.callback, data.sender);
        }
    };
    var _onClose = function() {
        mm.consoleLog("socket closed");
        that.onClose();
    };
    var _onError = function() {
        mm.consoleLog("socket err");
        that.onError();
    };
    var _onMessage = function(e) {
        mm.consoleLog("Receive:::::" + e.data);
        var service = mm.Service.it;
        var obj = _getObject(e.data);
        if (!obj) return;

        var command = obj.command,
            dat = obj.dat;
        if (command == mm.Commands.LOGIN) {

            _session["sessionId"] = dat.sessionId;
            _session["token"] = dat.token;
            window.session = dat.sessionId;
            window.token = dat.token;
        }

        if (command > 0) {
            var serialNo = dat.serialNo,
                fns = _register[serialNo];
            if (!fns) return;
            delete _register[serialNo];
            that.deal(dat, fns);

        } else {
            // push message
            var fns = _register[command];
            if (fns && fns.callback && mm.isFunction(fns.callback)) fns.callback.call(fns.sender, dat);
        }
    };

    this.bindPushEvent = function(command, callback, sender) {
        _register[command] = { callback: callback, sender: sender };
    };

    this.unBindPushEvent = function(command, callback, sender) {
        delete _register[command];
    };

    /***** util *****/
    var _getObject = function(str) {
        try {
            var i = str.indexOf("{");
            return { command: parseInt(str.substr(0, i)), dat: JSON.parse(str.substr(i)) };
        } catch (e) {
            mm.consoleLog("parse json err");
            return null;
        }
    };

    /*********** api ************/
    //101
    this.login = function(req, callback, sender) {
        _send(mm.Commands.LOGIN, req, callback, sender);
    };

    //20
    this.queryDrawInfo = function(req, callback, sender) {
        _send(mm.Commands.DRAWINFO, req, callback, sender);
    };

    //3
    this.queryAcctInfo = function(req, callback, sender) {
        _send(mm.Commands.ACCTINFO, req, callback, sender);
    };

    //111
    this.queryResultList = function(req, callback, sender) {
        _send(mm.Commands.RESULTLIST, req, callback, sender);
    };

    //106
    this.queryGameSetting = function(req, callback, sender) {
        _send(mm.Commands.GAMESETTING, req, callback, sender);
    };

    this.queryServerTime = function(req, callback, sender) {
        _send(mm.Commands.SERVERTIME, req, callback, sender);
    };

    //109
    this.placeBet = function(req, callback, sender) {
        _send(mm.Commands.COMMITBET, req, callback, sender);
    };

    //113
    this.betHistory = function(req, callback, sender) {
        _send(mm.Commands.BETHISTORY, req, callback, sender);
    };

    //114
    this.chaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CHASEHISTORY, req, callback, sender);
    };

    //115
    this.chaseDetail = function(req, callback, sender) {
        _send(mm.Commands.CHASEDETAIL, req, callback, sender);
    };

    //102
    this.openDrawList = function(req, callback, sender) {
        _send(mm.Commands.OPENDRAWLIST, req, callback, sender);
    };

    //108
    this.chaseNumber = function(req, callback, sender) {
        _send(mm.Commands.CHASENUNBER, req, callback, sender);
    };

    //119
    this.multipleChase = function(req, callback, sender) {
        _send(mm.Commands.MULTIPLECHASE, req, callback, sender);
    };

    //110
    this.cancelBetHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELBETHISTORY, req, callback, sender);
    };

    //116
    this.cancelChaseHistory = function(req, callback, sender) {
        _send(mm.Commands.CANCELCHASEHISTORY, req, callback, sender);
    };

    //107
    this.betchPlaceBet = function(req, callback, sender) {
        _send(mm.Commands.BATCHPLACEBET, req, callback, sender);
    };

    //121
    this.paperQuestion = function(req, callback, sender) {
        _send(mm.Commands.PAPERQUESTION, req, callback, sender);
    };

    //122
    this.paperAnswer = function(req, callback, sender) {
        _send(mm.Commands.PAPERANSWER, req, callback, sender);
    }

    //103
    this.queryHotAndNew = function(req, callback, sender) {
        _send(mm.Commands.MARKETLIST, req, callback, sender);
    }

    //fix bug firefox < 48
    window.onbeforeunload = function() {
        mm.consoleLog('page refresh');
        _socket.close();
    }

};

mm.Service.prototype.deal = function(dat, fns) {
    delete dat.sessionId;
    delete dat.token;
    delete dat.serialNo;
    var callback = fns.callback,
        sender = fns.sender;
    if (mm.isFunction(callback)) callback.call(sender, dat);
};

mm.Service.prototype.onClose = function() {};
mm.Service.prototype.onError = function() {};

mm.Service.create = function() {
    mm.Service.it = mm.Service.it || new mm.Service();
    return mm.Service.it;
};

var service = mm.Service.create();
