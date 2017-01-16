(function () {

	function IMRangeSlider (id) {
		this.data = {
			0: {
				turnOver: '0%',
				jjz: 1950
			},
			0.5: {
				turnOver: '0.5%',
				jjz: 1940
			},
			1: {
				turnOver: '1%',
				jjz: 1930
			},
			1.5: {
				turnOver: '1.5%',
				jjz: 1920
			},
			2: {
				turnOver: '2%',
				jjz: 1900
			},
			2.5: {
				turnOver: '2.5%',
				jjz: 1890
			},
			3: {
				turnOver: '3%',
				jjz: 1880
			},
			3.5: {
				turnOver: '3.5%',
				jjz: 1870
			},
			4: {
				turnOver: '4%',
				jjz: 1860
			},
			4.5: {
				turnOver: '4.5%',
				jjz: 1850
			},
			5: {
				turnOver: '5%',
				jjz: 1840
			},
			5.5: {
				turnOver: '5.5%',
				jjz: 1830
			},
			6: {
				turnOver: '6%',
				jjz: 1820
			},
			6.5: {
				turnOver: '6.5%',
				jjz: 1810
			},
			7: {
				turnOver: '7%',
				jjz: 1800
			},
			7.5: {
				turnOver: '7.5%',
				jjz: 1790
			},
			8: {
				turnOver: '8%',
				jjz: 1780
			},
			8.5: {
				turnOver: '8.5%',
				jjz: 1770
			},
			9: {
				turnOver: '9%',
				jjz: 1760
			},
			9.5: {
				turnOver: '9.5%',
				jjz: 1750
			},
			10: {
				turnOver: '10%',
				jjz: 1740
			}
		};
		
		this.el = 	'<div class="row im-range-slider">' +
						'<div class="col-md-3 turn-over">' +
							'返点' +
							'<span class="turn-over-value">7.5%</span>' +
						'</div>' +
						'<div class="col-md-6 range-slider-zone">' +
							'<input type="range" min="0" max="10" step="0.5" value="7.5">' +
						'</div>' +
						'<div class="col-md-3 jjz">' +
							'<span class="jjz-value">1800</span>' +
							'奖金组' +
						'</div>' +
					'</div>';
	}

	IMRangeSlider.prototype.getDom = function () {
		return this.el;
	};

	IMRangeSlider.prototype.bindEvents = function () {
		var jjz;
		var turnOver;
		var that = this;

		this.zone   = $('.im-range-slider');
		this.slider = this.zone.find('input[type="range"]');
		jjz         = this.zone.find('.jjz-value');
		turnOver    = this.zone.find('.turn-over-value');

		this.slider.rangeslider({
		    polyfill: false,
		    rangeClass: 'rangeslider',
		    disabledClass: 'rangeslider--disabled',
		    horizontalClass: 'rangeslider--horizontal',
		    verticalClass: 'rangeslider--vertical',
		    fillClass: 'rangeslider__fill',
		    handleClass: 'rangeslider__handle',
		    onInit: function() {},
		    onSlide: function(position, value) {
		    	turnOver.text(that.data[value].turnOver);
		    	jjz.text(that.data[value].jjz);
		    },
		    onSlideEnd: function(position, value) {
		    }
		});
	};

	window.IMRangeSlider = IMRangeSlider;
}());

