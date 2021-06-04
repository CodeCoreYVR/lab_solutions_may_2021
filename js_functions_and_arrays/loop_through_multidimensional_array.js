const myArray = [[2, 3, 4], ["Hello CodeCore", 1, true]];

function printMulti(array) {
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     // console.log(element);
    //     if (Array.isArray(element)) {
    //         for (let j = 0; j < element.length; j++) {
    //             console.log(element[j])
    //         }
    //     }
    // }
    for (let element of array) {
        if (Array.isArray(element)) {
            for (let item of element) {
                console.log(item);
            }
        }
    }

}

printMulti(myArray);

