function IBetAlgorithm(BetTypeObj){
	this.BetTypeObj = BetTypeObj
}

IBetAlgorithm.prototype.getCount = function(data,betType){
	var it = BetRuleInstance;
	var count = 0,
		opt;
	var betTimes = parseInt(app.currentModule.modelZone.bettingTimes.zone.find('input').val());
	var functionName = this.createFunction(betType);
	if (this[functionName]){
		count = this[functionName](data, betType);
		it.betCount = count;
	};
	opt = this.getModelZoneData(count, betTimes);
	it.setModelZoneData(count, opt.winMoney, opt.returnMoney, opt.totalMoney, betTimes);
	it.changeBtnClass();
};
IBetAlgorithm.prototype.getModelZoneData = function(count, betTimes) {
	var it = BetRuleInstance;
	var totalMoney = it.betUnit * betTimes * count;
	var returnMoney = totalMoney * it.comm;
	var winMoney = totalMoney == 0 ? 0 : (totalMoney * it.odds / count / 2);
	it.betAmount = totalMoney;
	it.multiple = betTimes;

	return {
		totalMoney: totalMoney,
		returnMoney: returnMoney,
		winMoney: winMoney
	};
};
IBetAlgorithm.prototype.createFunction =  function(betType) {
	var functionName = "";
	for (var i in this.BetTypeObj) {
		if ($.inArray(betType, this.BetTypeObj[i]) > -1) {
			functionName = i;
			break;
		}
	}
	return functionName.replace('_betType', '');
};