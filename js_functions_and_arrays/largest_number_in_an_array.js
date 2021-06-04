function largestNumber(array) {
    let largest = array[0];
    for (let number of array) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}

