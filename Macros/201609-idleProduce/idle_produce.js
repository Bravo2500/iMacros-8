var nonStaminaString;

var needString="";

var needImage="";
for(var i=0;i<100000;i++){
    iimPlay("produce");

    iimPlay("isAppearCommunication");
    needImage = iimGetLastExtract(1);

    if (needImage.indexOf('button_normal_03')!= -1){
        needString="";
        iimPlay("nomal_communication");
        continue;
    }

    iimPlay("checkStamina");
    needString=iimGetLastExtract(1);

    if (needString.indexOf('スタミナがなくなった')!= -1){
        needString="";
        iimPlay("useHarfStaminaDrink");
        continue;
    }
}