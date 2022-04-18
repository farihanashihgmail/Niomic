function balikKata(kata) {
    let kata2 = kata;
    let penampung = "";

    for (let i = kata.length - 1; i >= 0; i--) {
        penampung = penampung + kata2[i];
    }
    return penampung;
    // tulis jawabanmu di sini
   }
   
   // testCase
   console.log(balikKata("Niomic!"))    
   console.log(balikKata("JavaScript"))  
   console.log(balikKata("alohahola"))  
   console.log(balikKata("Jawa_Barat"))  