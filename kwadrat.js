function obwod_kwadratu(bok) {
    var wartosc_boku = parseFloat(bok);
    if (isNaN(wartosc_boku)) {
        document.write(bok + " nie jest liczbą.");
    } else if(wartosc_boku <= 0) {
      document.write(wartosc_boku + " musi być dodatni");
    } else { 
      var obwod = 4 * wartosc_boku;
      document.write("Obwód kwadratu o boku " + wartosc_boku + " wynosi " + obwod);
    }
}

function pole_kwadratu(bok) {
    var wartosc_boku = parseFloat(bok);
    if (isNaN(wartosc_boku)) {
        document.write(bok + " nie jest liczbą.");
    } else if(wartosc_boku <= 0) {
        document.write(wartosc_boku + " musi być dodatni");
    } else {
        var pole = wartosc_boku* wartosc_boku;
        document.write("Pole kwadratu o boku " + wartosc_boku + " wynosi " + pole);
    }
}