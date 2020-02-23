function obwod_rombu (bok){
    if(bok<=0){
      document.write(bok+ "musi być dodatni");
    } else{
      var obwod=4*bok;
        document.write("Obwód rombu o boku " + bok + " wynosi " + obwod);
    }
}


function pole_rombu (przekatna_e, przekatna_f) {
     if(przekatna_e<=0||przekatna_f<=0){
      document.write(przekatna_e + przekatna_f + "muszą byc dodatnie");
    } else{
       var pole=1/2*przekatna_e*przekatna_f;
       document.write("Pole rombu o przekątnych "+przekatna_e+" i "+przekatna_f+" wynosi " + pole);
    }
}