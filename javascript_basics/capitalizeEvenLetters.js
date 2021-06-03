const letters = process.argv[2];

letters.toLowerCase();

let result = '';

// 'fish'

for (let i = 0; i < letters.length; i++) {
    //Upper case every even letter and lower case every odd letter of the word then log it.
    if (i % 2 === 0) {
        result = result + letters[i];
        //letters[0] = f => result = 'f';
        //letters[2] = s => result = 'fIs';
    } else {
        result = result + letters[i].toLocaleUpperCase();
        // letters[1] = i => I => fI;
        // letters[3] = h => H => fIsH;
    }
}

console.log(result);