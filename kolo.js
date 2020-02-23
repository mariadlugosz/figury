function obwod_kola(promien) {
    var wartosc_promienia = parseFloat(promien);
    if (isNaN(wartosc_promienia)) {
        document.write(promien + " nie jest liczbą.");
    } else if(wartosc_promienia<=0){
        document.write(wartosc_promienia+ "musi być dodatni");
    }
    else {
        var obwod=3.14*2*wartosc_promienia;
        document.write("Obwód koła o promieniu " + wartosc_promienia + " wynosi " + obwod);
    }
}

function pole_kola(promien) {
    var wartosc_promienia = parseFloat(promien);
    if (isNaN(wartosc_promienia)) {
        document.write(promien + " nie jest liczbą.");
    } else if(wartosc_promienia<=0){
        document.write(wartosc_promienia + "musi być dodatni");
    }
    else {
        var pole=3.14*wartosc_promienia*wartosc_promienia;
        document.write("Pole koła o promieniu " + wartosc_promienia + " wynosi " + pole);
    }
}