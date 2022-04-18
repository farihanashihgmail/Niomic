const gudangGaram = function() {
    const angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    const angka2 = angka.filter(angk => {
        return angk > 15;
    })
    console.log(angka2);
}
gudangGaram();