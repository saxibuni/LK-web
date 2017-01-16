(function () {
	function IMSelect (opt) {
		this.opt = opt;
		this.id  = this.opt.id;
		this.el  = this['initType' + this.opt.type]() + '<div class="select-overlay"></div>';
	}

	IMSelect.prototype.getDom = function () {
		return this.el;
	};

	IMSelect.prototype.initType1 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +
						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.initType2 = function () {
		var temp = 	'<div class="im-select' + (this.opt.className? (' ' + this.opt.className) : '') + '" id="' + this.id + '">' +
						  	'<button id="' + this.id + '-button' + '">' +
								'<div class="select-label">' +
									this.opt.text +
								'</div>' +
						    	'<span class="buttonName">' +
						    		this.opt.data[0].text +
						    	'</span>' +
						    	'<div class="select-down-arrow"></div>' +
						 	'</button>' +

						  	'<ul class="dropdown-menu">' +
						    	this.generateTypeList() +
						  	'</ul>' +
					'</div>';

		return temp;
	};

	IMSelect.prototype.generateTypeList = function () {
		var i;
		var temp = '';
		var data = this.opt.data;

		for (i = 0; i < data.length; i++) {
			temp += ' <li><a href="#" data-value="' + data[i].value + '">' + data[i].text + '</a></li>'
		}

		return temp;
	};

	IMSelect.prototype.getValue = function () {
		return this.value;
	};

	IMSelect.prototype.bindEvents = function () {
		var ul;
		var value;
		var text;
		var buttonName;
		var button;
		var overlay;
		var that = this;
		that.value = that.opt.data[0].value;
		this.zone  = $('#' + this.id);
		overlay    = this.zone.next('.select-overlay');
		ul         = this.zone.find('ul.dropdown-menu');
		button     = this.zone.find('button');
		buttonName = this.zone.find('.buttonName');

		button.click(function (e) {
			e.preventDefault();
			ul.toggle();
			overlay.toggle();
		});

		ul.delegate('li', 'click', function (e) {
			e.preventDefault();
	    	text       = $(this).children('a').text();
			value      = $(this).children('a').attr('data-value');
			that.value = value;
			buttonName.text(text);
			if (that.opt.callback && typeof that.opt.callback == 'function') {
				that.opt.callback(that.value.split('--')[0]);
			};
			ul.hide();
			overlay.hide();
		});

		overlay.click(function (){
			ul.hide();
			overlay.hide();
		});
	};

	window.IMSelect = IMSelect;
}());

