const isapalah = function() {
    const x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    for (i = 0; i < x.length; i++) {
        console.log(`Angka ${x[i]} NOT Infinity.`);
        console.log(isFinite(x[i]));
    }
}

isapalah();