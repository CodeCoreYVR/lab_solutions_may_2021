function reverse(str) {
    let word = '';
    for (let i = 1; i <= str.length; i++) {
        word += str[str.length - i];
    }
    return word;
}


function reverse(string) {
    return string.split('').reverse().join('');
}