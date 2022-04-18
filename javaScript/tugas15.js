const phytagoras = function() {
    const AB = 8;
    const BC = 6;
    console.log(`Nilai AB: ${AB}`);
    console.log(`Nilai BC: ${BC}`);
    const AC = Math.sqrt(Math.pow(AB, 2) + Math.pow(BC, 2));
    return console.log(`Panjang sisi AC pada segitiga siku-siku tersebut adalah: ${AC}cm`); 
}

phytagoras();