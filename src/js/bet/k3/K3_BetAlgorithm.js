$(function(){
    var K3_BetTypeObj = {
        //前三 前二 直选复式
        K3_betType:[
            'N3T',
            'N3D',
            'N3TRI',
            'N3SN',
            'N3PAIR',
            'N2D',
            'N1'
        ]
    };
    var K3 = function(data,betTyep){
        return data[0].length;
    };
    function K3_BetAlgorithm(){
        this.K3 = K3;
    }
    K3_BetAlgorithm.prototype = new IBetAlgorithm(K3_BetTypeObj);
    window.K3_BetAlgorithm = new K3_BetAlgorithm();
})
