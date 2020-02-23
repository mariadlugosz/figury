function obwod_prostokata (bok_a, bok_b){
    var wartosc_boku_a = parseFloat(bok_a);
    var wartosc_boku_b = parseFloat(bok_b);
    if (isNaN(wartosc_boku_a || wartosc_boku_b)) {
        document.write(bok_a + bok_b + " nie są liczbami.");
    } else if(wartosc_boku_a<=0 || wartosc_boku_b<=0){
       document.write(wartosc_boku_a+ wartosc_boku_b + "muszą być dodatnie");
    } else{
        var obwod=2*wartosc_boku_a+2*wartosc_boku_b;
         document.write("Obwód prostokąta o bokach "+wartosc_boku_a+" i "+wartosc_boku_b+" wynosi "+obwod);
    }
}

function pole_prostokata (bok_a, bok_b) {
    var wartosc_boku_a = parseFloat(bok_a);
    var wartosc_boku_b = parseFloat(bok_b);
    if (isNaN(wartosc_boku_a || wartosc_boku_b)) {
        document.write(bok_a + bok_b + " nie są liczbami.");
    } else if(wartosc_boku_a<=0||wartosc_boku_b<=0){
        document.write(wartosc_boku_a + wartosc_boku_b + "muszą być dodatnie");
    }  else{
        var pole=wartosc_boku_a*wartosc_boku_b;
        document.write("Pole prostokąta o bokach "+wartosc_boku_a + " i "+wartosc_boku_b + " wynosi "+pole);
    }
}