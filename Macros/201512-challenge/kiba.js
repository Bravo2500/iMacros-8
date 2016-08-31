var bredMax;

var needString;

for(var i=0;i<1000;i++){

  iimPlay("kibaHeal");

  iimPlay("checkStamina");

  needString=iimGetLastExtract(1);
 
  if (needString.indexOf('スタミナがなくなった')!= -1){
    needString="";
    iimPlay("useStaminaDrink");
  }

  iimPlay("checkBredMax");
  bredMax=iimGetLastExtract(1);

  if (bredMax.indexOf('0140929145413') != -1){
    bredMax="";
    break;
  }

}
