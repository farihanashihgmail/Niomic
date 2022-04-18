const perulangan = function() {
    const kata = ["Saya", "ingin", "belajar", "bersama"];
    kata.forEach(function(item, index, array) {
        console.log(`Item: ${item} index ke ${index}`);
    });
}
perulangan();