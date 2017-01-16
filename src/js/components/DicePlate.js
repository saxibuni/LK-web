/*
 *   骰子投注盘  DicePlate.js
 */

(function () {
	function DicePlate (opt) {
		this.opt  = opt;
		this.id   = this.opt.id;
		this.data = this.opt.data;

		this.el   = this.initDom(this.data);
	}

	DicePlate.prototype.initDom = function (data) {
		if (this.data.parentPlate.indexOf('13') !== -1) {
			return this.createParentPlate13(data);
		} else {
			return this['createParentPlate' + this.data.parentPlate](data);
		}
	};

	DicePlate.prototype.getDom = function () {
		return this.el;
	};

	DicePlate.prototype.createParentPlate12 = function (data) {
		var i;
		var value;
		var numbers = data.numbers;

		var temp =	'<div class="dice-plate" id="' + this.id + '">';

		temp +=			'<ul class="sum-ul">';
		for (i = numbers.start; i <= 10; i++) {
			value = ((i >= 10)?i: ('0' + i));
			temp += 		'<li class="sum-ul-item" data-value="' + value + '">' + value + '</li>';
		}
		temp +=			'</ul>';

		temp +=			'<ul class="sum-ul">';
		for (i = 11; i <= numbers.end; i++) {
			value = ((i >= 10)?i: ('0' + i));
			temp += 		'<li class="sum-ul-item" data-value="' + value + '">' + value + '</li>';
		}
		temp +=			'</ul>';

		temp +=		'</div>';

		return temp;
	};

	DicePlate.prototype.createParentPlate13 = function (data) {
		var i;
		var j;
		var k;
		var arr = data.data;
		var arr1;
		var diceStr;
		var temp =	'<div class="dice-plate" id="' + this.id + '">';

		for (i = 0; i < arr.length; i++) {
			arr1 = arr[i];
			temp += 	'<ul class="big-ul">';

			for (j = 0; j < arr1.length; j++) {
				diceStr = arr1[j];
				temp +=		'<li class="big-ul-item" data-item="' + diceStr + '">' +
								'<ul class="dice-col-' + j + ' small-ul">';

				for (k = 0; k < diceStr.length; k++) {
					temp += 		'<li class="small-ul-item" data-value="' + diceStr[k] + '">' +
										'<img src="../img/s-dice-' + (diceStr[k]) + '.png" />' +
									'</li>';
				}

				temp +=			'</ul>' +
							'</li>';
			}

			temp += 	'</ul>';
		}

		temp += 	'</div>';

		return temp;
	};

	DicePlate.prototype.createParentPlate14 = function (data) {
		var i;
		var arr  = data.data;
		var temp =	'<div class="dice-plate" id="' + this.id + '">' +
						'<ul class="dtyt-ul">';
		
		for (i = 0; i < arr.length; i++) {
			temp += 		'<li class="dice-item" data-item="' + (i + 1) + '">' +
								'<img src="../img/b-dice-' + (i + 1) + '.png" />' +
							'</li>';
		}

		temp +=			'</ul>' +
					'</div>';

		return temp;
	};

	DicePlate.prototype.showPlate = function () {
		this.zone.show();
	};

	DicePlate.prototype.hide = function () {
		var i;
		var src;
		var images = this.zone.find('img');

		if (parseInt(this.data.parentPlate) === 12) {
			this.zone.find('li').removeClass('selected');
		} else {
			for (i = 0; i < images.length; i++) {
				this.setImageDeactive($(images[i]));
			}
			this.zone.find('li').removeClass('active');
		}

		this.zone.hide();
	};

	DicePlate.prototype.bindEvents = function () {
		var img;
		var smallUl;
		var lis;
		var i;
		var j;
		var that = this;
		
		this.zone = $('#' + this.id);

		if (this.data.parentPlate === '12') {
			this.zone.delegate('.sum-ul-item', 'click', function () {
				BetRuleInstance.checkK3BallSelect($(this));
			});
		} else if (this.data.parentPlate.indexOf('13') !== -1) {
			this.zone.delegate('.big-ul-item', 'click', function () {
				smallUl = $(this).children('.small-ul');
				lis     = smallUl.children('.small-ul-item');

				if (that.data.parentPlate === '13-5' && 
					$(this).parent('.big-ul').index() === 5) {
					that.groupSelect($(this));
				} else {
					for (i = 0; i < lis.length; i++) {
						img = $(lis[i]).children('img');
						that.toggleImageStatus(img);
					}
					BetRuleInstance.checkK3DiceSelect($(this));

					if (that.data.parentPlate === '13-5') 
						that.setGroupClassStatus($(this));
				}
			});
		} else if (this.data.parentPlate === '14') {
			this.zone.delegate('.dice-item', 'click', function () {
				img    = $(this).children('img');
				that.toggleImageStatus(img);
				BetRuleInstance.checkK3DiceSelect($(this));
			});
		}
	};

	DicePlate.prototype.groupSelect = function ($target) {
		var temp;
		var itemValue;
		var $itemTarget;
		var it = BetRuleInstance;
		var colClass = '.dice-col-' + $target.index();
		var cols = this.zone.find(colClass);

		for (var i = 0; i < cols.length - 1; i++) {
			$itemTarget = $(cols[i]).parent();
			itemValue = $itemTarget.attr('data-item');

			if ($target.hasClass('active')) {
				if (it.result[0].indexOf(itemValue) > -1) {
					it.result[0].remove(itemValue);
					$itemTarget.removeClass('active');
				}
			}else{
				if (it.result[0].indexOf(itemValue) == -1){
					it.result[0].push(itemValue);
					$itemTarget.addClass('active');
				}
			}

			temp = $(cols[i]).children('.small-ul-item');
			for (var j = 0; j < temp.length; j++) {
				img = $(temp[j]).children('img');
				if ($target.hasClass('active')) {
					this.setImageDeactive(img);
				} else {
					this.setImageActive(img);
				}
			}
		}
		$target.toggleClass('active');
		K3_BetAlgorithm.getCount(it.result, it.betType);
	}

	DicePlate.prototype.setGroupClassStatus = function($target){
		var colClass = '.dice-col-' + $target.index();
		var cols = this.zone.find(colClass);
		var activeItemCount = 0;
		for (var i = 0; i < cols.length - 1; i++) {
			if ($(cols[i]).parent().hasClass('active')) 
				activeItemCount++;
		}
		if (activeItemCount == 5) 
			$(cols[5]).parent().addClass('active');
		else
			$(cols[5]).parent().removeClass('active');
	}

	DicePlate.prototype.setImageActive = function (img) {
		var pos1;
		var pos2;

		imgSrc  = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 !== -1) {
			return;
		}

		imgSrc = imgSrc.substring(0, pos2);
		imgSrc += '-active' + '.png';
		img.attr('src', imgSrc);
	};

	DicePlate.prototype.setImageDeactive = function (img) {
		var pos1;
		var pos2;

		imgSrc = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 === -1) {
			return;
		}

		imgSrc = imgSrc.substring(0, pos1) + '.png';
		img.attr('src', imgSrc);
	};

	DicePlate.prototype.toggleImageStatus = function (img) {
		var pos1;
		var pos2;

		imgSrc = img.attr('src');
		pos1    = imgSrc.indexOf('-active');
		pos2    = imgSrc.indexOf('.png');

		if (pos1 === -1) {
			imgSrc = imgSrc.substring(0, pos2);
			imgSrc += '-active' + '.png';
		} else {
			imgSrc = imgSrc.substring(0, pos1) + '.png';
		}

		img.attr('src', imgSrc);
	};

	window.DicePlate = DicePlate;
}());

