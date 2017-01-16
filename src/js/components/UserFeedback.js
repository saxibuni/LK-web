/*
 *  用户反馈 下拉界面 UserFeedback.js
 */

(function () {
	function UserFeedback (opt) {
		IMDialog.call(this, (opt || {}));
		this.el = this.initDom();
		this.getFeedBackQeustion();
	}

	UserFeedback.prototype = new IMDialog();
	
	UserFeedback.prototype.initDom = function () {
		var temp;

		this.submit     = new IMButton({
			text: '提交反馈',
			className: 'submit-feedback'
		});

		this.sure = new IMButton({
			text: '确定',
			className: 'sure'
		});

		temp = 	'<div class="user-feedback">' +
					'<div class="dialog-wrapper">' +
						'<div class="page1">' +
							// '<div class="introduction">' +
							// 	'用30秒，让我们为您更好的服务!' +
							// '</div>' +

							// '<div class="survey survey1">' +
							// 	'<div class="title">' +
							// 		'<div class="number">1</div>' +
							// 		'<div class="text">您觉得这次改版最满意的地方是?</div>' +
							// 	'</div>' +

							// 	'<ul>' +
							// 		'<li>' +
							// 			this.checkbox1.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox2.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox3.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox4.getDom() +
							// 		'</li>' +
							// 	'</ul>' +
							// '</div>' +

							// '<div class="survey survey2">' +
							// 	'<div class="title">' +
							// 		'<div class="number">2</div>' +
							// 		'<div class="text">您觉得还需要改进的地方是?</div>' +
							// 	'</div>' +

							// 	'<ul>' +
							// 		'<li>' +
							// 			this.checkbox5.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox6.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox7.getDom() +
							// 		'</li>' +
							// 		'<li>' +
							// 			this.checkbox8.getDom() +
							// 		'</li>' +
							// 	'</ul>' +
							// '</div>' +

							this.submit.getDom() +
						'</div>' +

						'<div class="page2">' +
							'<div class="smile">' +
								'<img src="../img/smile.png">' +
							'</div>' +

							'<div class="text1">' +
								'提交成功' +
							'</div>' +

							'<div class="text2">' +
								'谢谢您宝贵的意见，我们会做的更好' +
							'</div>' +
							
							this.sure.getDom() +
						'</div>' +
					'</div>' +
				'</div>' +

				'<div class="overlay overlay1"></div>';

		return temp;
	};

	UserFeedback.prototype.getDom = function () {
		return this.el;
	};

	UserFeedback.prototype.show = function () {
		this.showContentOverlay();
	};

	UserFeedback.prototype.hide = function (flag, callback) {
		var that = this;

		this.hideContentOverlay();

		//flag用来标明是否是在是直接切换投注记录与用户反馈,
		//如果是就不用清除higher-z-index, 在bet.js中调用。
		if (!flag) {
			this.timeout = setTimeout(function () {
				$('.feedback').removeClass('highlight');
				$('.nav-title').removeClass('higher-z-index');
				clearTimeout(that.timeout);
				that.timeout = undefined;

				if (typeof callback === 'function') {
					callback();
				}
			}, 300);
		} else {
			$('.feedback').removeClass('highlight');
		}
	};

	UserFeedback.prototype.hasTimeout = function () {
		if (this.timeout) {
			return true;
		}

		return false;
	};

	UserFeedback.prototype.isOpen = function () {
		return this.zone.hasClass('content-dialog-active');
	};
	
	UserFeedback.prototype.bindEvents = function () {
		var submit;
		var sure;
		var page1;
		var page2;
		var that = this;

		this.zone = $('.user-feedback');
		
		submit = this.zone.find('.submit-feedback');
		sure   = this.zone.find('.sure');
		page1  = this.zone.find('.page1');
		page2  = this.zone.find('.page2');

		submit.click(function () {
			that.commitFeedBack(page1, page2);
		});

		sure.click(function () {
			clearTimeout(that.timeout);
			page1.show();
			page2.hide();
			that.hide();
		});

		this.zone.delegate('.im-checkbox', 'click', function (e) {
			$(this).toggleClass('checked');
		});

		this.bindOverlayEvents();
	};

	UserFeedback.prototype.getFeedBackQeustion = function() {
	    var html = '';
	    var that = this;
	    var checkboxObj = {};
	    var groupName;

	    service.paperQuestion({}, function(res) {
	    	if (res.code == 0) {	    		
		    	var questions = res.paper.questions;
		    	if (questions.length > 0) {
			    	that.paperId = res.paper.id;
			        for (var i = 0; i < questions.length; i++) {
			            groupName = questions[i].id;
			            for (var key in questions[i]) {
			                if (key != 'id' && key != 'content') {
			                    if (!checkboxObj[groupName]) {
			                        checkboxObj[groupName] = [];
			                    }
			                    if (questions[i][key]!="") {
			                    	checkboxObj[groupName].push(new IMCheckBox({ id: key, text: questions[i][key], value: key.replace('selection','') }));		                    	
			                    }
			                }
			            }
			        }

			        html += '<div class="introduction">' + res.paper.title + '</div>';
			        for(var j = 0; j < questions.length; j++){
			        	groupName = questions[j].id;
			        	html += '<div class="survey survey'+ (j + 1) +'" questionsId = '+res.paper.questions[j].id+'>';
			        	html += '<div class="title">' + 
			        				'<div class="number">' + (j + 1) + '</div>' +
			        				'<div class="text">' + questions[j].content + '</div>' + 
			        			'</div>';
			        	html += '<ul>';
			        	for(var k = 0; k < checkboxObj[groupName].length; k++){
			        		html += '<li>'+
			        					checkboxObj[groupName][k].getDom() +
			        				'</li>';
			        	}
			        	html += '</ul>';
			        	html += '</div>';
			        }
			        $(html).insertBefore(that.zone.find('.submit-feedback'));
		    	}

	    	}else{
				Util.errorModel(res.code);
			}
	    });
	};

	UserFeedback.prototype.commitFeedBack = function(page1, page2) {
		var that = this;
		var req = {
			paperId: that.paperId,
			answer: []
		};
		var $survey = $('.survey');
		$survey.each(function(index, item){
			var imCheck = $(item).find('.im-checkbox.checked');
			var questionId =  $(item).attr('questionsId');
			if (imCheck.length > 0) {
				req.answer.push({
					questionId: questionId,
					selection: []
				});
				$.each(imCheck,function(index, el){
					if ($(el).hasClass('checked')) {
						req.answer[req.answer.length - 1].selection.push($(el).attr('data-value'))
					}
				});
			}
		});
		if (req.answer.length == 0) return;
	    service.paperAnswer(req, function(res) {
	    	if (res.code == 0) {
				//清除
				$('.survey').find('.im-checkbox').removeClass('checked');
				page1.hide();
				page2.show();

				that.timeout = setTimeout(function(){
					page1.show();
					page2.hide();
				},5000);
	    	}else{
				Util.errorModel(res.code);
			}
	    });
	}


	window.UserFeedback = UserFeedback;
}());
