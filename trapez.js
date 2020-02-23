function obwod_trapezu (bok_a, bok_b, bok_c, bok_d){
    var wartosc_boku_a = parseFloat(bok_a);
    var wartosc_boku_b = parseFloat(bok_b); 
    var wartosc_boku_c = parseFloat(bok_c);
    var wartosc_boku_d = parseFloat(bok_d);
    if (isNaN(wartosc_boku_a) || isNaN(wartosc_boku_b) || isNaN(wartosc_boku_c) || isNaN(wartosc_boku_d)) {
        document.write( "Jeden z boków" + bok_a + bok_b + bok_c + bok_d + " nie jest liczbą.");
    } else if(wartosc_boku_a<=0||wartosc_boku_b<=0||wartosc_boku_c<=0||wartosc_boku_d<=0){
      document.write( wartosc_boku_a + ", " + wartosc_boku_b + wartosc_boku_c + wartosc_boku_d + "muszą być dodatnie");
    }  else{
       var obwod=wartosc_boku_a+wartosc_boku_b+wartosc_boku_c+wartosc_boku_d;
        document.write("Obwód trapezu o bokach " + wartosc_boku_a + ", "+ wartosc_boku_b+ ", "+wartosc_boku_c + " i "+ wartosc_boku_d + " wynosi "+obwod);
    }
}


function pole_trapezu (bok_a, bok_b, wysokosc) {
    var wartosc_boku_a = parseFloat(bok_a);
    var wartosc_boku_b = parseFloat(bok_b);
    var wartosc_wysokosci = parseFloat(wysokosc);
    if (isNaN(wartosc_boku_a) || isNaN(wartosc_boku_b) || isNaN(wartosc_wysokosci)) {
        document.write( "Jeden z boków" + bok_a + bok_b + " lub wysokość " + wysokosc + " nie jest liczbą.");
    } else if(wartosc_boku_a<=0||wartosc_boku_b<=0||wartosc_wysokosci<=0){
      document.write(wartosc_boku_a + wartosc_boku_b + wartosc_wysokosci + "muszą być dodatnie");
    }  else{
      var pole=1/2*(wartosc_boku_a+wartosc_boku_b)*wartosc_wysokosci;
        document.write("Pole trapezu o bokach "+ wartosc_boku_a + " i "+ wartosc_boku_b + " oraz wysokości "+ wartosc_wysokosci +" wynosi "+pole);
    }
}