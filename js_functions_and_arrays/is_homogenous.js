function isHomogenous(arr) {
    const type = typeof arr[0];
    for (const element of arr) {
        if (typeof element !== type) {
            return false;
        }
    }
    return true;
}