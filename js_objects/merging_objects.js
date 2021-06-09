function merge(objA, objB) {
    let result = {};
    // 1. loop objA => put key values into the result
    for (let key in objA) {
        // get the key name, use the key name to get the value
        result[key] = objA[key];
    }
    // 2. loop objB => put key values into the result
    for (let key in objB) {
        result[key] = objB[key];
    }
    // 3. return
    return result;
}
console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));;//{a: 1, b: 2,c: 3, d: 4}
console.log(merge(

    { firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard' },

    { firstName: 'Harry', lastName: 'Potter' }

));
//{firstName: 'Harry',lastName: 'Potter',occupation: 'Wizard'}