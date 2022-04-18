const object = function() {
    const motor = {
        tipe: "Matic",
        merk: "Honda Beat",
        tahun: 2017,
        warna: ["hitam", "putih", "merah"]
    }
    console.log(motor);
    motor.harga = 11000000;
    motor.tahun = 2022;
    console.log(motor);
}

object();