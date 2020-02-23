function obwod_kwadratu(bok) {
    if(bok <= 0) {
      document.write(bok + " musi być dodatni");
    } else { 
      var obwod = 4 * bok;
      document.write("Obwód kwadratu o boku " + bok + " wynosi " + obwod);
    }
}

var a=10;
if(a<=0) {
  document.write("a musi by� dodatnie");
}
else {
  var pole=a*a;
  document.write("Pole kwadratu o boku "+a+" wynosi "+pole);
}