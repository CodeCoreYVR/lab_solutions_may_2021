const args = process.argv;
const fizz = args[2];
const buzz = args[3];

for (let i = 1; i <= 100; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizz === 0) {
        console.log('FIZZ');
    } else if (i % buzz === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}