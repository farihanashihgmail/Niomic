const array = function() {
    const tinggiBadan = [170, 200, 160, 150, 165, 175, 190, 185, 155, 195];
    for (var i = 0; i < tinggiBadan.length; i++) {
        console.log(i);
    }
    for (let x of tinggiBadan) {
        console.log(x);
    }
}

array();

