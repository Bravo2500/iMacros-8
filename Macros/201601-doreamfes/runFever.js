for(var i=0;i<10000;i++){

// 保存していたURLは破棄
var LiveURL="";

// TopでLive発生中か確認
    iimPlay("moveFesTop");

// 発生中ならLiveへの固有URLを保存
    iimPlay("checkLiveExist");
    var existLiveString=iimGetLastExtract(1);
    if (existLiveString.indexOf('get_raid_boss')!= -1){
        iimPlay("takeLiveURL");
        LiveURL=iimGetLastExtract(1);
        
// 15回まで殴る
        for(var j=0;j<15;j++){

// Live画面へ
            iimSet("url", LiveURL);
            iimPlay("moveLiveWithURL");

// Liveが終わっているか確認
            iimPlay("checkLiveEnd");
            var endLiveString=iimGetLastExtract(1);
            if (endLiveString.indexOf('ドリームLIVE終了')!= -1){
                break;
            }

// 攻パワー使用
            iimPlay("selectAtkPower");
// 3APアタック
            iimPlay("attackThree");

        }
// Liveが無いなら1回仕事
     }else{
         iimPlay("run");
     }
}