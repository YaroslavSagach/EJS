function every(array, check) {
    return array.filter(check).length == array.length;
}

function some(array, check) {
    return array.find(check) != undefined;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// // → false