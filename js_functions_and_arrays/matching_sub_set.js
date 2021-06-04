function matchingSet(arrA, arrB) {
    let arrayAll = arrA.concat(arrB);
    let arrReturn = [];
    for (let i = 0; i < arrayAll.length; i++) {
        for (let j = i + 1; j < arrayAll.length; j++) {
            if (arrayAll[i] === arrayAll[j] && (!arrReturn.includes(arrayAll[j]))) {
                arrReturn.push(arrayAll[j]);
            }
        }
    }
    return arrReturn;
    /* 
    const obj = {};
    const matchArr = [];
    for (let val of arrA) {
        obj[val] = true;
    }
    for (let val of arrB) {
        if (obj[val]) matchArr.push(val);
    }
    return matchArr;
    */
}