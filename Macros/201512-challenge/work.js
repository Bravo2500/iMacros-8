var nonStaminaString;

var needString;

for(var i=0;i<300;i++){
  iimPlay("10nomalWork");

  iimPlay("checkStamina");

  needString=iimGetLastExtract(1);
 
  if (needString.indexOf('スタミナがなくなった')!= -1){
    needString="";
    iimPlay("useStaminaDrink");
  }
}