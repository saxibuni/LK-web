/*
 *  单式 投注盘 InputPlate.js
 */

(function() {
    function InputPlate(opt) {
        this.opt = opt;
        this.id = this.opt.id;
        this.el = this.initDom();
    }

    InputPlate.prototype.initDom = function() {
        var temp = '';

        this.imporButton = new IMButton({
            text: '导入注单',
            imgSrc: '../img/import.png',
            className: 'import'
        });

        this.clearErrorButton = new IMButton({
            text: '清除错误与重复',
            imgSrc: '../img/clear-error.png',
            className: 'clear-error'
        });

        this.clearTextButton = new IMButton({
            text: '清除文本框',
            imgSrc: '../img/clear-text.png',
            className: 'clear-text'
        });

        temp += '<div class="input-plate" id="' + this.id + '">' +

                    '<textarea class="placeholder" spellcheck="false">' +
                    this.placeholderText +
                    '</textarea>' +

                    '<div class="opes">' +
                        '<input id="load-file" class="load-txt" type="file" accept=".txt">' +
                        this.imporButton.getDom() +
                        this.clearErrorButton.getDom() +
                        this.clearTextButton.getDom() +
                    '</div>' +
                '</div>';

        return temp;
    };

    InputPlate.prototype.getDom = function() {
        return this.el;
    };

    InputPlate.prototype.showPlate = function(opt) {
        this.zone.show();
    };

    InputPlate.prototype.hide = function() {
        this.zone.hide();
    };

    InputPlate.prototype.fileDraggable = function() {
        var dropZone;
        var textarea = this.zone.children('textarea');
        var fileLoader = this.zone.find('#load-file');

        function handleFileSelect(evt) {
            var file;

            evt.stopPropagation();
            evt.preventDefault();

            function upLoadedFunc(evt) {
                fileString = evt.target.result;
                textarea.val(fileString);
                textarea.removeClass('placeholder');
                fileLoader.val('');
                zone.find("textarea").trigger("input");
            };

            file = evt.dataTransfer.files[0];
            reader = new FileReader();
            reader.readAsText(file);
            reader.onload = upLoadedFunc;
            textarea.removeClass('file-hover');
        }

        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy';
            textarea.addClass('file-hover');
        }

        function handleDragLeave(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            textarea.removeClass('file-hover');
        }

        dropZone = this.zone.children('textarea')[0];
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);
        dropZone.addEventListener('dragleave', handleDragLeave, false);
    };
    InputPlate.prototype.clearErrorModel = function(fun){
        var errorBetText = '';
        var that = this;
        var isType = '0';
        var it = BetRuleInstance;
        for(var i = 1; i<7;i++){
            if(it['errorBetText_'+i]){
                errorBetText += it['errorBetText_'+i] + ' '
            }
            if( i == 6 && errorBetText.length != 0)errorBetText = errorBetText.substring(0,errorBetText.length -1)
        }
        if(errorBetText || (it.errorBetText_1 != undefined && it.flagError)){
            that.clearError(fun);
            isType = '1';
            return isType;
        }
        return isType;
    }

    InputPlate.prototype.bindEvents = function() {
        var input;
        var file;
        var reader;
        var temp;
        var fileString;
        var upLoadedFunc;
        var that = this;
        var zone = $('#' + this.id);
        var textarea = zone.children('textarea');
        var fileLoader = zone.find('#load-file');

        this.zone = zone;
        var clearError = function(fun){
            if (!that.filterDialog) {
                that.filterDialog = new FilterDialog({id: that.id + '-filter-dialog'});
                $('body').append(that.filterDialog.getDom());
                that.filterDialog.bindEvents();
            }
            $('#'+that.id).children('textarea').val(BetRuleInstance.result[0].join('|'));
            var errorBetText = '';
            for(var i = 1; i<7;i++){
                if(BetRuleInstance['errorBetText_'+i]){
                    errorBetText += BetRuleInstance['errorBetText_'+i] + ' '
                }
                if( i == 6 && errorBetText.length != 0)errorBetText = errorBetText.substring(0,errorBetText.length -1)
            }
            if(errorBetText || errorBetText != ''){
                that.filterDialog.zone.find('textarea').val(errorBetText);
                that.filterDialog.show();
                if(typeof  fun == 'function'){
                    that.filterDialog.callback = fun
                }else{
                    that.filterDialog.callback = undefined
                };
                for(var i = 1; i<7;i++){
                    if(BetRuleInstance['errorBetText_'+i]){
                        BetRuleInstance['errorBetText_'+i] = '';
                    }
                }
                BetRuleInstance.flagError = false;
            }else if(BetRuleInstance.flagError){
                that.filterDialog.zone.find('textarea').val('');
                that.filterDialog.show();
                if(typeof  fun == 'function'){
                    that.filterDialog.callback = fun
                }else{
                    that.filterDialog.callback = undefined
                };
                BetRuleInstance.flagError = false;
            }
        };
        this.clearError = clearError;
        textarea.focus(function() {
            if ($(this).hasClass('placeholder')) {
                $(this).val('');
                $(this).removeClass('placeholder');
            }
        });

        textarea.blur(function() {
            if (!$.trim($(this).val())) {
                $(this).val(that.placeholderText);
                $(this).addClass('placeholder');
            }
        });

        fileLoader.change(function(e) {
            input = e.target;
            file = e.target.files[0];

            if (!file) {
                return;
            }

            upLoadedFunc = function(evt) {
                fileString = evt.target.result;
                textarea.val(fileString);
                textarea.removeClass('placeholder');
                fileLoader.val('');
                zone.find("textarea").trigger("input");
                clearError();
            };

            reader = new FileReader();
            reader.readAsText(file);
            reader.onload = upLoadedFunc;
        });

        zone.find('.clear-text').click(function() {
            if (textarea.val() !== that.placeholderText) {
                textarea.val(that.placeholderText);
                textarea.addClass('placeholder');
            }
        });
        zone.find('.clear-error').click(function() {
            clearError()
        });

        zone.on('input', 'textarea', function() {
            var it = BetRuleInstance;
            var type = it.betType;
            var gameCode = app.currentSocket.gameCode;
            it.result[0] = $(this).val();

            if (gameCode == 'LT') 
                BetAlgorithm.getCount(it.result, type);
            else 
                HL11X5_BetAlgorithm.getCount(it.result,type);
        });

        this.fileDraggable();
    };

    window.InputPlate = InputPlate;
}());
