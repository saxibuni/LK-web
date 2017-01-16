/*
** 继承自IMDialog  
*/

(function () {
	function CountDownDialog (opt) {
		this.currentIssue = '';
		this.nextIssue = '';
		this.count = 3;

		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
	}

	CountDownDialog.prototype = new IMDialog();

	CountDownDialog.prototype.initDom = function (data) {
		var temp;

		this.sure = new IMButton({
			text: '确定',
			className: 'sure'
		});

		temp = 	'<div class="countdown-dialog">' +
					'<div class="dialog-wrapper">' +
						'<div class="dialog">' +
							'<div class="title">温馨提示</div>' +
							'<div class="image">' +
								'<img src="../img/notice.png">' +
							'</div>' +
							'<div class="content">' +
								'第<span class="current-issue">' +
								this.currentIssue + 
								'</span>' +
								'期已结束，点击确定后切换到' +
								'<span class="next-issue">' +
								this.nextIssue +
								'</span>' +
								'期' +
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

	CountDownDialog.prototype.getDom = function () {
		return this.el;
	};

	CountDownDialog.prototype.start = function () {
		var that = this;
		var button = this.zone.find('.sure .text');

        this.countDownInterval = setInterval(function () {
        	if (that.count === 0) {
        		that.hide();
        		clearInterval(that.countDownInterval);
        	}

        	button.text('确定(' + that.count + 's)');
        	that.count--;
        }, 1000);
	};

	CountDownDialog.prototype.stop = function () {
		clearInterval(this.countDownInterval);
	};

	CountDownDialog.prototype.show = function () {		
		this.showOverlay();
		this.zone = $('.countdown-dialog');
		this.zone.find('.current-issue').text(this.currentIssue);
		this.zone.find('.next-issue').text(this.nextIssue);
		this.start();
	};

	CountDownDialog.prototype.hide = function () {
		this.hideOverlay();
		clearInterval(this.countDownInterval);
	};

	CountDownDialog.prototype.bindEvents = function () {
		var button;
		var that = this;

		this.zone = $('.countdown-dialog');

		button = this.zone.find('.sure').click(function () {
			that.hide();
			that.stop();
		});

		this.bindOverlayEvents();
	};

	window.CountDownDialog = CountDownDialog;
}());
