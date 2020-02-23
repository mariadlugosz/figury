function obwod_kwadratu(bok) {
    if(bok <= 0) {
      document.write(bok + " musi być dodatni");
    } else { 
      var obwod = 4 * bok;
      document.write("Obwód kwadratu o boku " + bok + " wynosi " + obwod);
    }
}

function pole_kwadratu(bok) {
    if(bok <= 0) {
        document.write(bok + " musi być dodatni");
    } else {
        var pole = bok * bok;
        document.write("Pole kwadratu o boku " + bok + " wynosi " + pole);
    }
}