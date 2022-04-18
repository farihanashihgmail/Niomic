const regex = function(value) {
    const kalimat = value.match(/[es]/g);
    console.log(kalimat);
}

regex(
    "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
   );