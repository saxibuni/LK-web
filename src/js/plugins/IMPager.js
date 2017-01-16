(function () {
	function IMPager (opt) {
		this.opt            = opt;
		this.id             = this.opt.id;
		this.currentPage    = 1;
		this.totalPage      = 1;
		this.pageRange      = 4;
		this.firstItemValue = 1;
		this.el             = this.initDom();
	}
	IMPager.prototype.initDom = function () {
		var temp;
		
        temp  = '<ul class="im-pager" id="' + this.id + '">' +
					'<li><a class="btn first"    href="#">第一页</a></li>' +
					'<li><a class="btn previous" href="#">上一页</a></li>' +
					'<li><a class="item selected" href="#" data-value="1">1</a></li>' +
					'<li><a class="item"     	 href="#" data-value="2">2</a></li>' +
					'<li><a class="item"     	 href="#" data-value="3">3</a></li>' +
					'<li><a class="item"     	 href="#" data-value="4">4</a></li>' +
					'<li><a class="item more"    href="#">...</a></li>' +
					'<li><a class="btn next"     href="#">下一页</a></li>' +
					'<li><a class="btn last"     href="#">最后一页</a></li>' +
                '</ul>';

		return temp;
	};

	IMPager.prototype.getDom = function () {
		return this.el;
	};

	IMPager.prototype.reloadPageItem = function (start) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < this.pageRange; i++) {
			if (start + i <= this.totalPage) {
				$(items[i]).text(start + i);
				$(items[i]).attr('data-value', start + i);
				$(items[i]).show();
			} else {
				$(items[i]).hide();
			}
		}
	};

	IMPager.prototype.setSelected = function (value) {
		var i;
		var items = this.zone.find('.item');

		for (i = 0; i < 4; i++) {
			if (parseInt($(items[i]).attr('data-value')) === this.currentPage) {
				items.removeClass('selected');
				$(items[i]).addClass('selected');
			}
		}
	};
	IMPager.prototype.isDisable = function(){
		var zone = this.zone;
		if(this.currentPage == 1){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.first').addClass('btn-disabled');
			zone.find('.previous').addClass('btn-disabled');
			if(this.currentPage == this.totalPage){
				zone.find('.more').hide();
			}else{
				zone.find('.more').show();
			}
		}else if(this.currentPage == this.totalPage){
			zone.find('.btn').removeClass('btn-disabled');
			zone.find('.next').addClass('btn-disabled');
			zone.find('.last').addClass('btn-disabled');
			zone.find('.more').hide();
		}else{
			zone.find('.more').show();
			zone.find('.btn').removeClass('btn-disabled');
		}
	};
	IMPager.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('#' + this.id);

		this.reloadPageItem(this.currentPage);

		this.zone.delegate('a', 'click', function () {
			var currentPage = that.currentPage;
			if ($(this).hasClass('first')) {
				that.currentPage = 1;
				that.firstItemValue = 1;
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('last')) {
				that.currentPage = that.totalPage;
				that.firstItemValue = parseInt(that.totalPage/that.pageRange) * that.pageRange;
				if(that.totalPage%that.pageRange != 0){
					that.firstItemValue++
				}
				that.reloadPageItem(that.firstItemValue);
				that.setSelected();
			} else if ($(this).hasClass('previous')) {
				if (that.currentPage > 1) {
					if (that.currentPage === that.firstItemValue) {
						that.firstItemValue -= that.pageRange;
						if(that.firstItemValue == 0){
							that.firstItemValue = 1
						}
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage -= 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('next')) {
				if (that.currentPage < that.totalPage) {
					if (that.currentPage === (that.firstItemValue + (that.pageRange - 1))) {
						that.firstItemValue += that.pageRange;
						that.reloadPageItem(that.firstItemValue);
					}

					that.currentPage += 1;
					that.setSelected();
				}
			} else if ($(this).hasClass('more')) {
				that.zone.find('.item').removeClass('selected');
				that.firstItemValue = parseInt(that.zone.find('.item:first').attr('data-value'));

				if (that.firstItemValue + (that.pageRange - 1) < that.totalPage) {
					that.firstItemValue += that.pageRange;
					that.currentPage = that.firstItemValue;
					that.reloadPageItem(that.firstItemValue);
				}

				that.setSelected();
			} else {
				that.currentPage = parseInt($(this).attr('data-value'));
				that.setSelected();
			}
			if(currentPage != that.currentPage){
				if(typeof(app) != 'undefined'){
					if(app.bettingRecords.type == 1){
						app.bettingRecords.getBetHistory();
					}else{
						app.bettingRecords.getChaseHistory();
					}

				}else{
					if(recordsQuery.type == 1){
						recordsQuery.getBetHistory();
					}else{
						recordsQuery.getChaseHistory();
					}
				}
			}
			that.isDisable()
		});
	};

	window.IMPager = IMPager;
}());

