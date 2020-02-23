function obwod_rombu (bok){
    var wartosc_boku = parseFloat(bok);
    if (isNaN(wartosc_boku)) {
        document.write(bok + " nie jest liczbą.");
    } else if( wartosc_boku<=0){
      document.write(wartosc_boku+ "musi być dodatni");
    } else{
      var obwod=4*wartosc_boku;
        document.write("Obwód rombu o boku " + wartosc_boku + " wynosi " + obwod);
    }
}


function pole_rombu (przekatna_e, przekatna_f) {
    var wartosc_boku = parseFloat(przekatna_e, przekatna_f);
    if (isNaN(wartosc_przekatnej_e || wartosc_przekatnej_f)) {
        document.write(przekatna_e + przekatna_f + " nie są liczbami.");
    } else if(wartosc_przekatnej_e<=0||wartosc_przekatnej_f<=0){
      document.write(wartosc_przekatnej_e + wartosc_przekatnej_f + "muszą byc dodatnie");
    } else{
       var pole=1/2*wartosc_przekatnej_e*wartosc_przekatnej_f;
       document.write("Pole rombu o przekątnych "+wartosc_przekatnej_e + " i "+wartosc_przekatnej_f + " wynosi " + pole);
    }
}