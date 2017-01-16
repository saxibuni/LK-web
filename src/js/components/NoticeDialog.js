/*
** 继承自IMDialog
*/

(function () {
	function NoticeDialog (opt) {
		IMDialog.call(this, opt || {});
		this.id  = this.opt.id;
		this.opt = opt || {};
		this.el  = this.initDom();
	}

	NoticeDialog.prototype = new IMDialog();
	
	NoticeDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: '确定',
			className: 'sure',
			id: this.id + '-sure'
		});

		temp = 	'<div class="notice-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog' + (this.opt.subTitle?'': ' no-sub-title') + '">' +
							'<div class="title">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="sub-title">' +
								(this.opt.subTitle || '') +
							'</div>' +
							'<div class="content">' +
								(this.opt.text || '') +
							'</div>' +

							'<div class="button-zone">' +
								this.sure.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' + 

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	NoticeDialog.prototype.getDom = function () {
		return this.el;
	};

	NoticeDialog.prototype.show = function (data) {
		var that = this;

		if (data.okCallback) {
			this.okCallback = data.okCallback;
		} else {
			this.okCallback = null;
		}

		if (data.subTitle) {
			this.zone.find('.sub-title').show();
			this.zone.find('.sub-title').text(data.subTitle);
		} else {
			this.zone.find('.dialog').addClass('no-sub-title');
		}

		this.zone.find('.content').text(data.text);
		this.zone.find('.button-zone .im-button .text').text(data.buttonName);
		this.showOverlay();

		if (data.autoHide) {
			this.timeout = setTimeout(function () {
				that.hide();
			}, data.timeout || 3000);
		}
	};

	NoticeDialog.prototype.hide = function () {
		if (this.okCallback) this.okCallback();
		clearTimeout(this.timeout);
		this.hideOverlay();
	};

	NoticeDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);
		button = this.zone.find('.sure');

		button.click(function (e) {
			e.preventDefault();
			
			if (typeof that.okCallback === 'function') {
				that.okCallback();
			}
			clearTimeout(this.timeout);
			that.hide();
		});

		this.bindOverlayEvents();
	};

	window.NoticeDialog = NoticeDialog;
}());
