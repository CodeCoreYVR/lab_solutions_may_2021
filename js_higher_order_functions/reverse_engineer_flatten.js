// [Lab] Reverse Engineer Flatten
// Implement a function called flatten using recursion.

// It should take a multi-depth array meaning that any of its values
// can be arrays which can also contain arrays and so on. It should return an array
// where all values of all nested arrays are laid out flat.

// flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10]); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
function flatten(arr, result) {
    // loop each element 
    // 1. check if the type of this element is array or not
    // 2. if it is not an array, => push this element to the result
    // 3. if it is an array
    // loop this element => repeat steps 1,2,3
    arr.forEach(element => {
        if (Array.isArray(element)) {// [a,s]
            flatten(element, result);
        } else {
            result.push(element);
        }
    });
    return result;
}

console.log(flatten([[2, 3], [8, [5, 9], [4, 5]], 10], []));