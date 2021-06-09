function pow(baseNum, time) {
    if (time === 0) {
        return 1;
    } else {
        return baseNum * pow(baseNum, time - 1)
    }
}