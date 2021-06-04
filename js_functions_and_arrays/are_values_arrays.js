function areValuesArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {

        } else {
            return false;
        }
        // if (!Array.isArray(element)) {
        //     return false;
        // }
    }
    return true;
}

console.log(areValuesArrays([[1], 3, 3, [2], [3]]));