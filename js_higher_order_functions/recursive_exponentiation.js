function pow(baseNum, time) {
    // how to break this loop 
    // while loop =>  time => ? => break 
    if (time === 1) {
        // return the result 
        // when time becomes to 1 => return it
        return baseNum;
    } else {
        // do something here
        // baseNum * ?
        // time -1 
        // pow()
        // baseNum * baseNum 
        // time--;
        // baseNum * the result from the argument
        // 10 * 10 => 100    1
        // time - 1 => 2     1
        // 10 * 100 => 1000  2
        // time -1 =>  1     2
        // ----------
        // baseNum * the return of the last loop
        // 10 * (10) =>      1
        // time -1 => 2      1
        // 10 * (10 * 10) => 2
        // time -1 => 1      1
        return baseNum * pow(baseNum, time - 1);
        // 1 => 10 * (pow(10, 2)) => pow(10, 2) => baseNum * pow(10,1)
        // 10 * (10 * pow(10,1)) => pow(10,1) => 10
        //=> 10 * (10 * 10 )
    }
}
pow(10, 3) // 1000 => 10 * 10 * 10 => 0 ? 1 break this loop
pow(2, 4) // 16 => 2 * 2 * 2 * 2
pow(0, 100) // 0
pow(1, 1000) // 1