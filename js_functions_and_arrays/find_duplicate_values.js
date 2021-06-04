function findDuplicates(arr) {
    let arrReturn = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && (!arrReturn.includes(arr[j]))) {
                arrReturn.push(arr[j]);
            }
        }
    }
    return arrReturn;
}