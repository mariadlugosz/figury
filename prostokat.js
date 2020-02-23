function obwod_prostokata (bok_a, bok_b){
    if(bok_a<=0 || bok_b<=0){
       document.write(bok_a + bok_b + "muszą być dodatnie");
    } else{
        var obwod=2*bok_a+2*bok_b;
         document.write("Obwód prostokąta o bokach "+bok_a+" i "+bok_b+" wynosi "+obwod);
    }
}

function pole_prostokata (bok_a, bok_b) {
     if(bok_a<=0||bok_b<=0){
        document.write(bok_a + bok_b + "muszą być dodatnie");
    }  else{
        var pole=bok_a*bok_b;
        document.write("Pole prostokąta o bokach "+bok_a + " i "+bok_b + " wynosi "+pole);
    }
}