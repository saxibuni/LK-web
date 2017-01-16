(function () {
	function LotteryBall (opt) {
		this.opt = opt;
		this.id  = opt.id;
		this.gameCode = opt.gameCode;
		this.market = opt.market;
		this.el  = 	'<div class="lottery-ball" id="' + this.id + '">' +
						'<div class="description">' +
							'<span>上期(</span>' +
							'<span class="last-issue"></span>' +
							'<span>)开奖号码</span>' +
						'</div>' +

						'<ul>' +
							this.createLiItem() +
						'</ul>' +
					'</div>';
		this.data = ['-', '-', '-', '-', '-'];
		this.lastIssue = '10000';
	}

	LotteryBall.prototype.getDom = function () {
		return this.el;
	};

	LotteryBall.prototype.createLiItem = function(){
		var html = '';
		var ballCount = 0;
		if (this.gameCode == 'K3' || this.market == 'CN3D') 
			ballCount = 3;
		else ballCount = 5;

		for(var i = 0; i < ballCount; i++){
			html += '<li class="three-d-y"><span>--</span></li>';
		}
		return html;
	}

	LotteryBall.prototype.requestLastNumber = function () {
		var i;
		var lis;
		var count = 0;
		var that = this;

		this.zone = $('#' + this.id);
		lis       = this.zone.find('ul li');
		lastIssue = this.zone.find('.last-issue');

		lastIssue.html(this.lastIssue);

		lis.removeAttr('style');
		setTimeout(function(){
			lis.css('transform', 'rotateZ(0deg)');
			lis.css('transition', '1s');
		},100);

		this.interval = setInterval(function () {
			if (count > lis.length - 1) {
				clearInterval(that.interval);
				that.interval = undefined;
				return;
			}

			$(lis[count]).children('span').text(that.data[count]);
			$(lis[count]).css('transform', 'rotateZ(1080deg)');
			count++;

		}, 1000);
	};

	LotteryBall.prototype.bindEvents = function () {
		// this.requestLastNumber();
	};

	window.LotteryBall = LotteryBall;
}());
