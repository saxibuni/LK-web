(function () {
	function ProgressLine (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = 	'<div class="im-progressline" id="' + this.id + '">' +
						'<div class="progress"></div>' +
					'</div>';
	}

	ProgressLine.prototype.getDom = function () {
		return this.el;
	};

	ProgressLine.prototype.active = function () {
		this.zone.children('.progress').addClass('active');
	};

	ProgressLine.prototype.deactive = function () {
		this.zone.children('.progress').removeClass('active');
	};

	ProgressLine.prototype.start = function (beginTimeSerials, closeTimeSerials, endTimeSerials) {
		var timeout;
		var start = 0;
		var that  = this;
		var serverTimeSerials = (new Date()).getTime() + window.jetLag;
		var totalTime = closeTimeSerials - beginTimeSerials;
		var progress = this.zone.children('.progress');

		progress.css({
			'transition-duration': '0s',
			'width': '0px'
		});

		this.zone.css({
			'opacity': '1'
		});

		if (beginTimeSerials > serverTimeSerials) totalTime = closeTimeSerials - serverTimeSerials;

		timeout = setTimeout(function () {
			that.zone.css('background-color', '#5B6483');
			progress.css({
				'transition-duration': '.3s',
				'width': (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'),
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});
			clearTimeout(timeout);
		}, 100);

		this.timeout = setTimeout(function () {
			progress.attr('style','');
			progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			that.interval && clearInterval(that.interval);
			that.interval = setInterval(function(){
				serverTimeSerials = (new Date()).getTime() + window.jetLag;
				progress.css('width', (((closeTimeSerials - serverTimeSerials) / totalTime) * 100 + '%'));
			},1000);

			clearTimeout(that.timeout);
		}, 600);

	};

	ProgressLine.prototype.stop = function () {
		var timeout1;
		var timeout2;
		var that = this;
		var width;
		var zoneWidth;
		var progress = this.zone.children('.progress');

		width     = parseInt(progress.css('width'));
		zoneWidth = parseInt(this.zone.css('width'));

		clearTimeout(this.timeout);
		clearInterval(this.interval);
		progress.attr('style', '');
		progress.css('width', ((width / zoneWidth)*100 + '%'));
		this.zone.css('background-color', 'transparent');

		timeout1 = setTimeout(function () {
			progress.css({
				'transition-duration': '.3s',
				'width': '0px',
			    '-webkit-transition-timing-function': 'ease-in',
			    'transition-timing-function': 'ease-in'
			});

			clearTimeout(timeout1);
		}, 100);

		timeout2 = setTimeout(function () {
			that.zone.css({
				'opacity': '0'
			});

			clearTimeout(timeout2);
		}, 600);
	};

	ProgressLine.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);
	};

	window.ProgressLine = ProgressLine;
}());

