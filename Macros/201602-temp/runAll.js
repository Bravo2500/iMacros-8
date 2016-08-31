iimPlay("changeKiba");
for(var i=0;i<50000;i++){

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

// とりま通常コミュ
        iimPlay("nomalCommunication");
}
//          iimPlay("checkMagic");
//      var magicString = iimGetLastExtract(1);
//      if (magicString.indexOf('100') != -1 ){
//        iimPlay("useMagic");
//        iimPlay("kibaRun");
//      }
