const args = process.argv;
const a = parseFloat(args[2]);
const b = parseFloat(args[3]);
const c = parseFloat(args[4]);

let largest = a;

if (b > largest) {
    largest = b;
}

if (c > largest) {
    largest = c;
}

console.log(`The largest number is ${largest}`);

/*

let biggestNumber;
let i = 2;
while (i <= process.argv.length - 2) {
    if (parseFloat(process.argv[i]) > parseFloat(process.argv[i + 1])) {
        biggestNumber = process.argv[i]
    } else {
        biggestNumber = process.argv[i + 1]
    }
    i++;
}
console.log(biggestNumber);

*/
