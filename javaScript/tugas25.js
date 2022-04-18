const fungsi = () => {
    const angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
    console.log(`Sebelumnya: ${angka}`);
    console.log(`Ascending: ${angka.sort()}`);
    console.log(`Descending: ${angka.reverse()}`);
    const angka22 = angka.filter(angka2 => {
        return angka2 > 10; 
    })
    console.log(`Filter > 10: ${angka22}`);
}
fungsi();