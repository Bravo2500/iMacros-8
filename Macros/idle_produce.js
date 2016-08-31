var nonStaminaString;

var needString;

var needImage;
for(var i=0;i<1000;i++){
  iimPlay("produce");


  iimPlay("checkStamina");
  needString=iimGetLastExtract(1);

  iimPlay("isAppearCommunication");
  needImage=iimGetLastExtract(1);
 
  if (needString.indexOf('スタミナがなくなった')!= -1){
    needString="";
    iimPlay("useHarfStaminaDrink");
  }

  if (needImage.indexOf('button_normal_03')!= -1){
    needString="";
    iimPlay("nomal_communication");
  }
}