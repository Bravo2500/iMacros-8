iimPlay("changeKiba");
for(var i=0;i<10000;i++){

// とりあえず走る
    iimPlay("run");

// 回復
    iimPlay("checkStamina");
    var needString=iimGetLastExtract(1);
    if (needString.indexOf('スタミナがなくなった')!= -1){
      needString="";
      iimPlay("useHarfStaminaDrink");
      continue;
    }

// APが5以上なら攻撃
    iimPlay("checkApNumThree");
    var apNumString=iimGetLastExtract(1);
    if (apNumString.indexOf('20141031145439')!= -1){
    
    // ユニット発見優先
    iimPlay("checkLive");
    var appearString=iimGetLastExtract(1);
    if (appearString.indexOf('ドリームLIVE発生中') == -1){
            continue;
    }

// ライブ画面へ移動
        iimPlay("moveLive");

// 攻パワー使用
        iimPlay("selectAtkPower");

// 3APアタック
        iimPlay("attackThree");
    }

}
//          iimPlay("checkMagic");
//      var magicString = iimGetLastExtract(1);
//      if (magicString.indexOf('100') != -1 ){
//        iimPlay("useMagic");
//        iimPlay("kibaRun");
//      }
