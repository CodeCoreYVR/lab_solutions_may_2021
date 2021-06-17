function add(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('All the arguments should be numbers');
            }
            resolve(a + b);
        })
    })
}
function mult(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('All the arguments should be numbers');
            }
            resolve(a * b);
        })
    })
}
function div(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('All the arguments should be numbers');
            }
            resolve(a / b);
        })
    })
}
function sub(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('All the arguments should be numbers');
            }
            resolve(a - b);
        })
    })
}
function pow(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b)) {
                reject('All the arguments should be numbers');
            }
            resolve(Math.pow(a, b));
        })
    })
}