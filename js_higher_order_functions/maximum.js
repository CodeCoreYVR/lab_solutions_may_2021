// [Lab] Maximum
// Write a method that returns the maximum number in an array in two ways
// without using Math.max or Array#sort:

// Using iteration.
// Using recursion.
// Benchmark your two solutions with console.time and
// console.timeEnd. Make sure to benchmark with really large arrays.

// maximum([ 213, 12, 66, 999 ]); # should return 999
// maximum([ 1, 2, 3, 11, 3, 6, 5 ]); # should return 11

function maximumIteration(arr) {
    // loop this arr, find out the maximum element of the arr
    // return this element 
    let result = 0;
    arr.forEach(element => {
        // compare the element with the last element
        // for the first element ? is the last element
        if (element > result) {
            result = element;
        }
    });
    return result;
}
// [1,2,3,4]
function maximumRecursion(arr, result) {
    // end of the loop for while
    // loop this arr 
    // => last element of this arr 
    // => arr => get rid of the element => arr[0] => [1,2,3,4] => [2,3,4] => [3,4]=>...=>  []
    if (arr.length === 0) {
        // break
        return result;
    } else {
        // call maximumRecursion(arr, result)
        // get the element, compare it with result
        // if element > result => assign the value to result
        // get rid of this element from the arr
        // arr[0] => arr[1] => arr[0]
        if (arr[0] > result) {
            result = arr[0]
        }

        arr = arr.slice(1); // [1,2,3,4] => [2,3,4] => arr
        return maximumRecursion(arr, result);
    }
}



console.log(maximumRecursion([213, 12, 66, 999], 0));
console.log(maximumRecursion([1, 2, 3, 11, 3, 6, 5], 0));