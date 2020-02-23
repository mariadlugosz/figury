function obwod_trapezu (bok_a, bok_b, bok_c, bok_d){
    if(bok_a<=0||bok_b<=0||bok_c<=0||bok_d<=0){
      document.write( bok_a + bok_b + bok_c + bok_d + "muszą być dodatnie");
    }  else{
       var obwod=bok_a+bok_b+bok_c+bok_d;
        document.write("Obwód trapezu o bokach " + bok_a + ", "+bok_b + ", "+bok_c + " i "+bok_d + " wynosi "+obwod);
    }
}


function pole_trapezu (bok_a, bok_b, wysokosc) {
    if(bok_a<=0||bok_b<=0||wysokosc<=0){
      document.write(bok_a + bok_b + wsokosc + "muszą być dodatnie");
    }  else{
      var pole=1/2*(bok_a+bok_b)*wysokosc;
        document.write("Pole trapezu o bokach "+bok_a + " i "+ bok_b + " oraz wysokości "+ wysokosc +" wynosi "+pole);
    }
}