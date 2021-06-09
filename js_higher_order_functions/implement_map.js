function map(arr, fn) {
    let result = [];
    arr.forEach(element => {
        result.push(fn(element));
    });
    return result;
}