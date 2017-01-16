/*
 *  大小单双 投注盘 DXDSPlate.js
 */

(function () {
	function DXDSPlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = {
			names: ['百位', '十位', '个位']
		};
		this.el   = this.initDom(this.data);
	}

	DXDSPlate.prototype.initDom = function (data) {
		var i;
		var temp;

		temp = 	'<div class="dxds-plate" id="' + this.id + '">';

		for (i = 0; i < data.names.length; i++) {
			temp += '<div class="row" data-index='+ i +'>' +
						'<div class="col-md-1">' +
							'<span class="name">' +
								data.names[i] +
							'</span>' +
						'</div>' +

						'<div class="col-md-4">' +
							'<div class="row">' +
								'<div class="col-md-1 ball-item" data-value="Big">' +
									'<span>' +
										'大' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Small">' +
									'<span>' +
										'小' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Odd">' +
									'<span>' +
										'单' +
									'</span>' +
								'</div>' +
								'<div class="col-md-1 ball-item" data-value="Even">' +
									'<span>' +
										'双' +
									'</span>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		}

		temp += '</div>';

		return temp;
	};

	DXDSPlate.prototype.getDom = function () {
		return this.el;
	};

	DXDSPlate.prototype.showPlate = function (opt) {
		var i;
		var len;
		var rows;
		var visibleRows;
		var nameSpans;
		var names = opt.plate.names;

		this.zone.show();
		this.methodId = opt.methodId;
		rows          = this.zone.children('.row');
		len           = names.length;

		rows.show();
		this.zone.children('.row:gt(' + (len-1) + ')').hide();
		visibleRows = this.zone.children('.row:visible');
		nameSpans   = this.zone.find('span.name');

		for (i = 0; i < len; i++) {
			$(nameSpans[i]).text(names[i]);
		}
	};

	DXDSPlate.prototype.hide = function () {
		this.zone.find('.selected').removeClass('selected');
		this.zone.hide();
	};
	
	DXDSPlate.prototype.bindEvents = function () {
		this.zone = $('#' + this.id);

		this.zone.delegate('.ball-item', 'click', function () {
            BetRuleInstance.checkSelect($(this));
		});
	};

	window.DXDSPlate = DXDSPlate;
}());

