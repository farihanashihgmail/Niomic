function deretAngka(n) {
    // tulis code jawabanmu di sini
    let angka = "";
    for (let i = 1; i <= n; i++) {
        if (i%15 === 0) {
            angka += "NIOMIC ";
        } else if (i%3 === 0) {
            angka += "NIO ";
        } else if (i%5 === 0) {
            angka += "MIC ";
        } else {
            angka += i + " ";
        }
    }
    return angka;
   }
   
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))