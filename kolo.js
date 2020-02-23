function obwod_kola(promien) {
    if(promien<=0){
        document.write(promien+ "musi być dodatni");
    }
    else {
        var obwod=3.14*2*promien;
        document.write("Obwód koła o promieniu " + promien + " wynosi " + obwod);
    }
}

function pole_kola(promien) {
    if(promien<=0){
        document.write(promien + "musi być dodatni");
    }
    else {
        var pole=3.14*promien*promien;
        document.write("Pole koła o promieniu " + promien + " wynosi " + pole);
    }
}