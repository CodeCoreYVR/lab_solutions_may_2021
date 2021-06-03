// A	86%–100%
// B	73%–85%
// C+	67%-72%
// C	60%–66%
// C-	50%–59%
// F (fail)	0%–49%

const arg = process.argv[2];

const grade = parseInt(arg);

if (grade >= 0 && grade <= 100) {
    if (grade >= 86 && grade <= 100) {
        console.log('A');
    } else if (grade >= 73 && grade <= 85) {
        console.log('B');
    } else if (grade >= 67 && grade <= 72) {
        console.log('C+');
    } else if (grade >= 60 && grade <= 66) {
        console.log('C');
    } else if (grade >= 50 && grade <= 59) {
        console.log('C-');
    } else {
        console.log('F');
    }
} else {
    console.log('Invalid grade');
}