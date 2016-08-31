iimPlay("changeAtsumi");
iimPlay("tabStart");
for(var i=0;i<10000;i++){

// SP探し
    iimPlay("run");
    iimPlay("checkDiff");
    var meetString = iimGetLastExtract(1);
    if (meetString.indexOf('難易度') != -1){
      meedString="";

    }
    iimPlay("checkStamina");
    var needString=iimGetLastExtract(1);
    if (needString.indexOf('スタミナがなくなった')!= -1){
      needString="";
      iimPlay("useStaminaDrink");
      continue;
    }

// 以下SPかAで連続なら
  iimPlay("checkLv");
  var Lv = iimGetLastExtract(1);
  var ATKflug=0;
  
  if (Lv.indexOf('SP') != -1){


// 3CPアタック
    iimPlay("risaAtackThree");
    ATKflug=1;
    iimPlay("run");
  }else if(Lv.indexOf('A') != -1){
    // 連続チャレンジなら3CP
    iimPlay("checkDoubleAtack");
    var continueString=iimGetLastExtract(1);
    if (continueString.indexOf('連続チャレンジ')!= -1){
      iimPlay("checkBredMax");
      var bredA = iimGetLastExtract(1);
      if (bredA.indexOf('0140929145413') != -1){
        iimPlay("risaAtackThree");
        iimPlay("run");
        ATKflug = 1;
      }
    }
  }

//追撃判定、追撃じゃなければ放流
  iimPlay("checkContinue");
  var continueString = iimGetLastExtract(1);

  if (continueString.indexOf('再挑戦') != -1){
    iimPlay("playContinue");
  }else if (ATKflug){
    iimPlay("run");
  }else{
    iimPlay("atsumiHeal");
  }
}
//          iimPlay("checkMagic");
//      var magicString = iimGetLastExtract(1);
//      if (magicString.indexOf('100') != -1 ){
//        iimPlay("useMagic");
//        iimPlay("risaRun");
//      }
