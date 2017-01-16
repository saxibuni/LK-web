/*
** 继承自IMDialog  
*/

(function () {
	function FilterDialog (opt) {
		IMDialog.call(this, (opt || {}));
		
		this.opt = opt;
		this.id  = opt.id;
		this.el  = this.initDom();
	}

	FilterDialog.prototype = new IMDialog();

	FilterDialog.prototype.initDom = function (data) {
		var temp;

		this.close = new IMButton({
			text: '关闭',
			className: 'close-filter'
		});

		temp = 	'<div class="filter-dialog" id="' + this.id + '">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>' +
							'<div class="content">' +
								'以下号码错误，已进行自动过滤' +
							'</div>' +

							'<div class="textarea">' +
								'<textarea disabled="disabled"></textarea>' +
							'</div>' +

							'<div class="button-zone">' +
								this.close.getDom() +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay3"></div>';

		return temp;
	};

	FilterDialog.prototype.getDom = function () {
		return this.el;
	};

	FilterDialog.prototype.show = function () {
		this.showOverlay();
	};

	FilterDialog.prototype.hide = function () {
		this.hideOverlay();
	};
	FilterDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('#' + this.id);

		this.zone.find('.close-filter').on('click touchstart', function () {
			that.hide();
			if(that.callback)that.callback(true)
		});

		this.bindOverlayEvents();
	};

	window.FilterDialog = FilterDialog;
}());
