/*
** 继承自IMDialog
*/

(function () {
	function ConfirmDialog (opt) {
		IMDialog.call(this, (opt || {}));

		this.text = this.opt.text;
		this.el   = this.initDom();
	}

	ConfirmDialog.prototype = new IMDialog();

	ConfirmDialog.prototype.initDom = function () {
		var temp;

		this.cancel = new IMButton({
			text: '取消',
			className: 'cancel-button'
		});

		this.ok = new IMButton({
			text: '确定',
			className: 'ok-button'
		});

		temp = 	'<div class="confirm-dialog">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>'+
							'<div class="content">' +
								this.text +
							'</div>' +
							'<div class="button-zone">' +
								'<div class="cancel">' +
									this.cancel.getDom() +
								'</div>' +

								'<div class="ok">' +
									this.ok.getDom() +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	ConfirmDialog.prototype.getDom = function () {
		return this.el;
	};

	ConfirmDialog.prototype.show = function (text) {
		this.zone.find('.content').empty();
		this.zone.find('.content').text(text);
		this.showOverlay();
	};
	ConfirmDialog.prototype.showConfirm = function (text1,text2,text3) {
		this.zone.find('.content').empty();
		var str = '';
		if(text3){
			str +='<div class="diawNumber">当前'
		}else{
			str += '<div class="diawNumber">'
		}
			str += '<span>'+text1+'</span>期';
		if(text3){
			str += '追号<span>'+text3+'</span>期'
		}
		str +='</div><div class="totalMoney">投注总额<span>'+Util.addDotToNumber(text2,2)+'</span></div>';
		this.zone.find('.content').append(str);
		this.showOverlay();
	};
	ConfirmDialog.prototype.hide = function () {
		this.hideOverlay();
	};

	ConfirmDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.confirm-dialog');
		
		this.zone.find('.cancel-button').click(function () {
			if ((that.opt.cancelCallback) && (typeof that.opt.cancelCallback === 'function')) {
				that.opt.cancelCallback();
			}

			that.hide();
		});

		this.zone.find('.ok-button').click(function () {
			if ((that.opt.okCallback) && (typeof that.opt.okCallback === 'function')) {
				that.opt.okCallback();
			}

			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.ConfirmDialog = ConfirmDialog;
}());
