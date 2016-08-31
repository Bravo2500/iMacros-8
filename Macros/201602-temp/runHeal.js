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

// APが5以上なら中断
    iimPlay("checkApNumFive");
    var apNumString=iimGetLastExtract(1);
    if (apNumString.indexOf('20141031145439')!= -1){
        break;
    }
}