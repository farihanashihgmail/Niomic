const object = function() {
    const pengangguran = {
        nama : "Farih Anashih",
        Umur : 26,
        status : "single",
        pekerjaan : "pickup barang",
        lama : { 
            tahun : "1 tahun 2017",
            lagi : "1 tahun 2021"
        }
    }

    for (const x in pengangguran) {
        console.log(pengangguran[x]);
    }
}

object();