function mergeSet(array1, array2) {
    arrayReturn = array1.concat(array2);
    for (let i = 0; i < arrayReturn.length; i++) {
        for (let j = i + 1; j < arrayReturn.length; j++) {
            if (arrayReturn[i] === arrayReturn[j]) {
                arrayReturn.splice(j, 1);
            }
        }
    }
    return arrayReturn;
}