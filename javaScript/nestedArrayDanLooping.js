function panggilNestedArray(value){
    // tulis jawabanmu disini
    for (let i = 0; i < 4; i++) {
       let arr = [];
       arr.push(value[0][i], value[1][i], value[2][i]);
       console.log(arr);
    }
}

   
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple']
   ]
   
panggilNestedArray(nestedArray)