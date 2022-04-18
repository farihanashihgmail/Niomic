const tinggiSiswaA = 60;
const tinggiSiswaB = 70;
const tinggiSiswaC = 65;

if (tinggiSiswaA > tinggiSiswaB) {
    {
        if (tinggiSiswaA > tinggiSiswaC) {
            console.log("tinggi badan siswa A adalah yang tertinggi");
        }
        else {
            console.log("tinggi badan siswa A adalah yang kedua");
        }
    }
} else if (tinggiSiswaB > tinggiSiswaA) {
    if (tinggiSiswaB > tinggiSiswaC) {
        console.log("tinggi badan siswa B adalah yang tertinggi");
    } else {
        console.log("tinggi badan siswa B adalah yang kedua");
    }
} else {
    console.log("tinggi badan siswa C adalah yang tertinggi");
}
