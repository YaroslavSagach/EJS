function concatArrays(arrays) {
    return arrays.reduce(function (item, acc) {
        return item.concat(acc);
    }, [])
}

var testArray = [[1, 2, 3], [4, 5], [6]];
console.log(concatArrays(testArray));